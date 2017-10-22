FROM resin/raspberry-pi-node:8.0.0
ENV INITSYSTEM on

RUN mkdir -p webinterface
COPY . /webinterface
WORKDIR webinterface
RUN npm install

EXPOSE 3000

CMD ./entrypoint.sh
