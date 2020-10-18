
import json
import re

ENVSTR = 'postman.setEnvironmentVariable'


def filter(string: list, substring: list) -> list:
    return [s for s in string if any(sub in s for sub in substring)]


def remove(string: list, substring: list) -> list:
    temp = string
    for sb in substring:
        temp = [s.replace(sb, '') for s in temp]
    return temp


class Context():
    def __init__(self):
        self.load_credentials()
        self.load_params()
        self.load_headers()

    def load_credentials(self):
        path = 'settings/credentials.json'
        with open(path, 'r') as f:
            data = json.loads(f.read())
        self.user = data['user']
        self.password = data['pass']
        self.auth = (self.user, self.password)

    def load_params(self):
        path = 'settings/sandbox-collection.postman_collection.json'
        with open(path, 'r') as f:
            data = json.loads(f.read())
            data = data['event'][0]['script']['exec']

        # load postman environment variables
        env = data[:16]
        env = filter(env, [ENVSTR])
        env = remove(env, [ENVSTR, ";"])

        for v in env:
            temp = eval(v)
            key = temp[0].replace('-', '_')
            val = temp[1]

            # set environment variables as class attributes
            self.__dict__[key] = val

    def load_headers(self):
        self.headers = {
            'Content-Type': 'application/json',
            'nep-organization': f'{self.bsp_organization}',
            'nep-enterprise-unit': f'{self.bsp_site_id}',
        }
