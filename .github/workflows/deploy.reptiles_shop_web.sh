#!/bin/bash

# prune docker
docker stop $(docker ps --filter status=running --filter name=reptile_shop_front_web -q)
docker rm -f $(docker ps --filter status=exited -q)
docker rmi -f $(docker images reptile_shop_front_web* -q)
docker image prune -f

# fix for "Permission denied" error
sudo chmod -R 777 reptile_shop_front_web/

# prepare new deployment folder
mv reptile_shop_front_web/ old_reptile_shop_front_web/
git clone git@github.com:Reenauud/reptile_shop_front_web.git
cd reptile_shop_front_web/
git pull -f --rebase origin main

# récupérer les .env uploadés précédemment avec scp et les déplacer ici

mv ../dotenv/reptile_shop_front_web/.env.frontend .env

# build docker images
docker compose -f docker-compose.yml build --no-cache

# start containers
docker compose -f docker-compose.yml up >~/logs/reptile_shop_front/log.compose.$(date +"%s") 2>&1 &
disown

# delete old folder
sudo rm -Rf ~/old_reptile_shop_front_web/