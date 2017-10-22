FROM resin/raspberry-pi-alpine-node
ENV INITSYSTEM on

RUN mkdir -p webinterface
COPY . /webinterface
WORKDIR webinterface
RUN npm install

EXPOSE 3000

CMD ./entrypoint.sh
