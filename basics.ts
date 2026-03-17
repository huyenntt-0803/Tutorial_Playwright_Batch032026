//Variable declaration
const username: string= "Nguyen Thi Thanh Huyen";
const age: number=32;
const isActive: boolean=true;
const roles: string[]=["Admin", "Editor"];

//Object user 
let user = {
  name: "Thanh Huyen",
  email:"nguyen.thi.thanh.huyen@sun-asterisk.com",
  isAdmin: true
};

// Print information
console.log(`User: ${user.name}(email: ${user.email}), Role: ${roles}, Active: ${isActive}`);

//Check age 
function checkAge(ageCheck: number){
    if (ageCheck>=18){
        console.log("Adult");
    } else {
        console.log("Under 18");
    }

}
   checkAge(90);


