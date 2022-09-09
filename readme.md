<h1 align="center">Simple POC with Node.js (v18.9.0) and Redis (v4.3.1)</h1>

## used libs

-  [dotenv](https://www.npmjs.com/package/dotenv)
-  [express](https://www.npmjs.com/package/express)
-  [redis](https://www.npmjs.com/package/redis)


## how use

```bash
# clone repository
$ git clone https://github.com/MatheusINFO/poc-redis.git

# go to cloned folder
$ cd poc-redis

# install redis with docker
$ docker run -d -p 6379:6379 -i -t redis:3.2.5-alpine

# install dependencies
$ npm i

# run app with experimental fetch to make a request
$ node src/server.js --experimental-fetch
```

## results

- Request without redis (452ms)

<img src="https://user-images.githubusercontent.com/48860569/189397079-381c374f-c5ed-4e51-a0d0-d4ace44f9a86.png"/>

&nbsp;

- Request with redis (6.56ms)

<img src="https://user-images.githubusercontent.com/48860569/189397082-5da7f614-d2bb-411a-81f3-e0be15408cdf.png"/>

&nbsp;

## references 

- https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis
- https://hub.docker.com/_/redis