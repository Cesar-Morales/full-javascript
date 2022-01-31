const {Router} = require('express') //Solo requiro routers porque no quiero levantar otro sv
const router = Router();    

router.get('/', (req, res) => {
    res.json({text :'Hello World'});
});

module.exports = router;