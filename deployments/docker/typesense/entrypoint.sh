#! /bin/sh

envsubst < "/srv/local/deployments/docker/typesense/config.json.template" > /srv/config.json

caddy file-server