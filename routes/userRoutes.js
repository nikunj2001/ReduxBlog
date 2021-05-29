const app = require('express')
const router = app.Router();
const {register} =require('../controllers/userControllers')
const {registerValiations} =require('../controllers/userControllers')
router.post('/register',registerValiations,register);
module.exports = router;