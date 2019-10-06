#!/bin/bash

set -e

echo "--- building docker image... ---"
sudo docker build --tag nilsg/webinterface .

echo "--- running docker container... ---"
sudo docker run --privileged=true -p 80:3000 nilsg/webinterface ./entrypoint.sh
