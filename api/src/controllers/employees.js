const employeeCtrl = {}

const Employee = require('../models/Employee');

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res) => {
    const { body } = req;
    const newEmployee = new Employee(body);
    await newEmployee.save();
    res.send({message: 'employee was created successfully'});
};

employeeCtrl.getEmployee = async (req, res) => {
    const { employeeId } = req.params;
    const employee = await Employee.findById(employeeId);
    res.send(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
    const { employeeId } = req.params;
    const { body } = req;
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, body);
    res.json({status: `Employee ${body.name} updated successfully`})
};

employeeCtrl.deleteEmployee = async (req, res) => {
    const { employeeId } = req.params;
    await Employee.findByIdAndDelete(employeeId)
    res.json({status: 'Employee deleted successfully'})
};

module.exports = employeeCtrl;