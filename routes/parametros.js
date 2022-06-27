const { Router } = require('express');
const { listarRoles } = require('../controllers/parametros');

const router = Router();

router.get('/roles', listarRoles);

module.exports = router;