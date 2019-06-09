# Swiss Municipality Index

Simple demo app using Yii2 as backend, Mithril.js as frontend, and SQLite as database engine.

Online demo: [https://ch-gemeinden.tebe.ch](https://ch-gemeinden.tebe.ch)


## Prerequisites

- Docker & Docker Compose


## Production

~~~bash
docker run --rm -p 80:80 tbreuss/ch-gemeinden
~~~

Open [http://localhost:8881](http://localhost:8881) in your browser.


## Development

Clone repo from GitHub:

~~~bash
git clone https://github.com/tbreuss/ch-gemeinden.git
~~~ 

Start project in development mode:

~~~bash
cd ch-gemeinden
docker-compose up -d
~~~ 

Open <http://localhost:8881> in your browser.

Build app.js for production:

~~~bash
docker run -it --rm -v $(pwd):/app -w /app node:alpine npm run build
~~~ 


## To be done:

**Work in progress**

- [x] show number of search results
- [x] add sort for each column
- [x] use [html boilerplate](https://github.com/tbreuss/html-boilerplate)
- [x] dockerize app
- [x] use sqlite
- [ ] add pagination
- [ ] add sort icons
- [ ] enable x-debug in development
