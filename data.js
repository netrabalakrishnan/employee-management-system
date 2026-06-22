if(!localStorage.getItem("employees")){

const defaultEmployees = [

{
id:"EMP001",
name:"John Smith",
department:"HR",
email:"john@gmail.com",
status:"Active"
},

{
id:"EMP002",
name:"Sarah Lee",
department:"IT",
email:"sarah@gmail.com",
status:"Inactive"
}

];

localStorage.setItem(
"employees",
JSON.stringify(defaultEmployees)
);

}

let employees =
JSON.parse(
localStorage.getItem("employees")
);

let departments = [

{
id:"D001",
name:"HR"
},

{
id:"D002",
name:"IT"
},

{
id:"D003",
name:"Finance"
},

{
id:"D004",
name:"Marketing"
}

];