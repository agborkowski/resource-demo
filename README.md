$resource DEMO
=========================

AngularJS $resource usage demo for presentation at ngPoznan #10

***

Requirements:
-------------

To run build and serve tasks you need to have
installed `node`, `npm` and `gulp` npm module.

To set up project run from `src/` directory :
 - `npm install`
 - `gulp bower`

***

SETTING UP
----------

From project's root directory:
 - run `gulp dev` to build app and serve it with live reload
 - run `gulp build` to build it without serving

***

API
---

To proceed with demo, you need working API (best on localhost:1337) with *Invitation* endpoint CRUD:

```
GET     /invitation
GET     /invitation/:id
POST    /invitation
PUT     /invitation/:id
DELETE  /invitation:/id
```

Invitation entity is:

```
{

    invitee: {
        firstName: string;
        lastName: string;
        email: string;
    };

    status: {
        name: string;
    };

}
```
