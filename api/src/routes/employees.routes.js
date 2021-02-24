const { Router } = require('express');
const employeeCtrl = require('../controllers/employees.js');
const router = Router();
const employeesCtrl = require('../controllers/employees.js');

const {getEmployees, createEmployee, getEmployee, editEmployee, deleteEmployee} = employeeCtrl

router.get('/', getEmployees);
router.post('/', createEmployee);
router.get('/:employeeId', getEmployee);
router.put('/:employeeId', editEmployee);
router.delete('/:employeeId', deleteEmployee);

module.exports = router;