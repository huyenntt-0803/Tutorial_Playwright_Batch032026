//Create class LoginPage
export class LoginPage{
    async gotoLoginPage():Promise<void>{
        console.log("Open login screen");
    };
    
    async login(username: string, password: string): Promise<void>{
        console.log(`Login with acc: ${username} `);
    }


}