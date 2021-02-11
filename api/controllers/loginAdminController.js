module.exports = {
    get: (req, res) => {
        res.render('loginAdmin', {
            layout: 'adminLayout'
        })
    }
}