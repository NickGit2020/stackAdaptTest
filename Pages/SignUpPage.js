
exports.SignUpPage = class SignUpPage {

constructor(page){
    this.page = page;
    }

    async signUp(userName){
        
        await this.page.goto('http://stackadapt-interview.us-east-1.elasticbeanstalk.com/');
        await this.page.getByRole('link', { name: 'Sign Up' }).click();
        await this.page.getByLabel('Name').fill(userName);
        await this.page.getByLabel('Email').fill(`${userName}@gmail.com`);
        await this.page.getByLabel('Password').fill('123456');
        await this.page.getByLabel('Agree to the Terms of Service').check();
        await this.page.getByRole('button', { name: 'Sign up' }).click();
    }
} 

