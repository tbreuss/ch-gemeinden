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
https://github.com/tbreuss/ch-gemeinden.git
~~~

Create config file `config/db.php` and add settings:

~~~php
<?php
return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=DB_HOST;dbname=DB_NAME',
    'username' => 'DB_USERNAME',
    'password' => 'DB_PASSWORD',
    'charset' => 'utf8'
];
~~~

Install PHP dependecies:

~~~bash
docker run -it --rm -v `pwd`:/app composer install --ignore-platform-reqs
~~~


## Run

Start project:

~~~bash
docker-compose up
~~~ 

Open <http://localhost:8881> in your favorite browser.
