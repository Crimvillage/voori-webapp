var home = {}

home.home = function (req, res) {
    res.render('home/home')
}

home.about = function (req, res) {
    res.render('home/about')
}

home.domain = function (req, res) {
    res.render('home/domain')
}

home.hosting = function (req, res) {
    res.render('home/hosting')
}

home.features = function (req, res) {
    res.render('home/features')
}

home.contact = function (req, res) {
    res.render('home/contact')
}

home.pricing = function (req, res) {
    res.render('home/pricing')
}

home.clientportal = function (req, res) {
    res.render('home/cportal')
}

module.exports = home;