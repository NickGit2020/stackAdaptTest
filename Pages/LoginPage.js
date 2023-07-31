
exports.LoginPage = class LoginPage {

constructor(page){
    this.page = page;
    }

    async login(username, password){
        await this.page.goto('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/login');
        await this.page.getByLabel('Email').fill(`${username}@gmail.com`);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByLabel('Remember me').check();
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }
} 

