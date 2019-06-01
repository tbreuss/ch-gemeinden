# Swiss Municipality Index

Simple demo app using Yii2 as backend and Mithril.js as frontend.

Demo: <https://ch-gemeinden.tebe.ch>


## To be done:

**Work in progress**

- [x] show number of search results
- [x] add sort for each column
- [x] use [html boilerplate](https://github.com/tbreuss/html-boilerplate)
- [x] dockerize app
- [ ] add pagination
- [ ] add sort icons


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
docker run -it --rm -v $(pwd):/app -w /app node npm install
~~~ 


## Run

Start project:

~~~bash
docker-compose up
~~~ 

Open <http://localhost:8881> in your favorite browser.
