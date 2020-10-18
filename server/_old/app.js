
const http = require('http');
//Services for products should be added here
postman.setEnvironmentVariable("site-service", "https://gateway-staging.ncrcloud.com/site");
postman.setEnvironmentVariable("security-service", "https://gateway-staging.ncrcloud.com/security");
postman.setEnvironmentVariable("order-service", "https://gateway-staging.ncrcloud.com/order/3/orders/1");
postman.setEnvironmentVariable("tdm-service", "https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents");
postman.setEnvironmentVariable("cdm-service", "https://gateway-staging.ncrcloud.com/cdm");
postman.setEnvironmentVariable("catalog-items-service", "https://gateway-staging.ncrcloud.com/catalog/items");
postman.setEnvironmentVariable("selling-service","https://gateway-staging.ncrcloud.com/emerald/selling-service/v1/carts");
postman.setEnvironmentVariable("selling-configuration-service","https://gateway-staging.ncrcloud.com/emerald/selling-service/c1");
postman.setEnvironmentVariable("catalog-service","https://gateway-staging.ncrcloud.com/catalog/2");

// Any required fields for a call should be added here
postman.setEnvironmentVariable("bsp-organization", "a02117db69444dd58998f31246c4486c");
postman.setEnvironmentVariable("bsp-site-id", "b6651a7e518f4afaa945b304bb7c2749");
postman.setEnvironmentVariable("bsp-shared-key", "17f9e7600e974bb2827b86ac9d61285d");
postman.setEnvironmentVariable("bsp-secret-key", "133f46eec37041f5984baa482e8c7f4d");

// Ensures any content has variables substituted; supports recursive
// resolution (environment variable that references environment/global variables)
const convertVariables = function(templateContent) {
    const regexPattern = /({{(.*?)}})/g;
    let convertedContent = templateContent;
    let matchedVar = new RegExp(regexPattern).exec(convertedContent);
    while (matchedVar !== null) {
        const variableReplacement = matchedVar[1];
        const variableName = matchedVar[2];
        const variableValue = postman.getEnvironmentVariable(variableName) || postman.getGlobalVariable(variableName);
        convertedContent = convertedContent.replace(variableReplacement, variableValue);
        matchedVar = new RegExp(regexPattern).exec(convertedContent);
    }
    return convertedContent;
}
// Extracts the signable content from the request
const signableContent = function() {
    const requestPath = convertVariables(request.url.trim()).replace(/^https?:\/\/[^\/]+\//, '/');
    const params = [
        request.method,
        requestPath,
        request.headers['content-type'],
        request.headers['content-md5'],
        convertVariables(request.headers['nep-organization'])
    ];
    return params.filter(p => p && p.length > 0).join('\n');
}
// Generates a unique date-based signing key
const uniqueKey = function(date) {
    const nonce = date.toISOString().slice(0, 19) + '.000Z';
    return postman.getEnvironmentVariable('bsp-secret-key') + nonce;
}
// Calculates the HMAC signature
const calculateSignature = function() {
    const date = new Date();
    postman.setEnvironmentVariable('date', date.toGMTString());
    const key = uniqueKey(date);
    const sc = signableContent();
    const hmac = CryptoJS.HmacSHA512(sc, key);
    return CryptoJS.enc.Base64.stringify(hmac);
}
// Stores the generated HMAC signature under the access key
const signature = calculateSignature();
const sharedKey = postman.getEnvironmentVariable('bsp-shared-key');
postman.setEnvironmentVariable('bsp-access-key', `AccessKey ${sharedKey}:${signature}`);
