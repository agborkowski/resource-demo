$resource DEMO
=========================

AngularJS $resource usage demofor presentation at ngPoznan #10

***

Requirements:
-------------

To run build and serve tasks you need to have
installed `node`, `npm` and `gulp` npm module.

To set up project run from `src/` directory :
 - `npm install`
 - `gulp prepare`

***

SASS AND JS HINT
----------------

From `src/` directory in project:
 - run `gulp check` for CI *tslint* and *karma* unit tests
 - run `gulp karma-tdd` to run *karma* unit tests with watch
 - run `gulp sass` to build CSS files

***

SERVER
------

From `src/` directory in project

- run `gulp` to serve, watch sass files for changes and live-reload on changes
- run `gulp webserver` to serve and live-reload
- run `gulp dev` (same as `gulp`, but also runs single test initially)
