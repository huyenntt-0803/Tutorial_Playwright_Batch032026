import { LoginPage } from "./pages/loginPage";
import { DashboardPage } from "./pages/dashboardPage";

async function testLogin() {
    console.log("Start Login");
    const loginPage = new LoginPage();
    const dashboardPage= new DashboardPage();

    await loginPage.gotoLoginPage();
    await loginPage.login("admin","123456");
    await dashboardPage.verifyLoginSuccess();
 
}

testLogin();
