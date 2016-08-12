'use strict';

let router = require('koa-router')();

router.get('/', function* () {
    yield this.render('root');
});

router.get('/about', function* () {
    yield this.render('about');
});

module.exports = router;