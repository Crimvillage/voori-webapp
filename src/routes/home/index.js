var express = require('express');
var router = express.Router();

var ctrls = require('../../controllers').home


router.get('/', ctrls.home)
router.get('/about', ctrls.about)
router.get('/domain', ctrls.domain)
router.get('/features', ctrls.features)
router.get('/hosting', ctrls.hosting)
router.get('/pricing', ctrls.pricing)
router.get('/contact', ctrls.contact)
router.get('/clientportal', ctrls.clientportal)

module.exports = router;