# Swiss Municipality Index

Simple demo app using Yii2 as backend, Mithril.js as frontend, and SQLite as database engine.

Demo: <https://ch-gemeinden.tebe.ch>


## Install

Clone repo:

~~~bash
git clone https://github.com/tbreuss/ch-gemeinden.git
~~~

Install PHP dependencies:

~~~bash
docker run -it --rm -v `pwd`:/app composer install --ignore-platform-reqs
~~~

Install Node dependencies:

~~~bash
docker run -it --rm -v $(pwd):/app -w /app node:alpine npm install
~~~ 


## Run

Start project in production mode:

~~~bash
docker-compose up
~~~ 

Open <http://localhost:8881> in your browser.


## Dev

Start project in development mode:

~~~bash
docker-compose -f development.yml up
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
