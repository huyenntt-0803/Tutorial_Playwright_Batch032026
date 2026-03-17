// Create interface
interface IUser{
    name: string;
    email: string; 
    isAdmin: boolean;
}
// Implement interface 
class User implements IUser{
    constructor(public name:string, public email: string, public isAdmin:boolean){ }

    getInfo():string{
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
    }
}
 //Create  instance 
const user1 = new User("Thanh Huyen", "nguyen.thi.thanh.huyen@sun-asterisk.com", true);
const user2 = new User("Nguyen Van A", "nguyen.thi.thanh.huyen@sun-asterisk.com", false);

// Advance
class AdminUser extends User{
    constructor(name:string, email: string){
        super(name, email,true)
    }
// Add method deleteUser
    deleteUser(targetUser: User):void {
        console.log(` Admin dang xoa user '${targetUser.name }'...`);
        users =users.filter((user)=> user!==targetUser);
    }
}
const admin  = new AdminUser("Thanh A", "h1@gmail.com");
const user3= new User("Thanh B", "h2@gmail.com", false);
const user4= new User("Thanh C", "h3@gmail.com", false);

let users: User[]=[admin, user3, user4];
console.log("List User:")
users.forEach((user) => {
  console.log(user.getInfo());
});


admin.deleteUser(user3);
console.log("List User after deleted:")
users.forEach((user) => {
  console.log(user.getInfo());
});