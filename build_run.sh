#!/bin/bash

set -e

echo "--- building docker image... ---"
sudo docker build --tag nilsg/webinterface .

echo "--- running docker container... ---"
sudo docker run -it --rm -p 80:3000 nilsg/webinterface ./entrypoint.sh
