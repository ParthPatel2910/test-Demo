// function printLengthOfText(text) {
//     console.log(text.length);
//     }

// printLengthOfText("chaitra");
// function printLengthOfText(text) {
//     if (typeof text !== 'string') {
//         throw new Error('Argument is not a string!');
//     }

//     console.log(text.length);
//     }

//     printLengthOfText("chaitraBendre");
class Employee { 
    empName:string; 
    empId:Number;
    constructor(empName, empId) { 
        this.empName = empName;
        this.empId = empId;    
    }

} 
var display = function(obj: {empName:string, empId:Number}) { 
    console.log("Employee Name: "+obj.empName);
    console.log("Employee EmpId: "+obj.empId);
} 
var obj:Employee = {empName:"Jai", empId:21};

//access the function
display(obj);

// var obj = new Employee("chai",21);
// console.log("Employee Name: "+obj.empName);  

// obj.display();