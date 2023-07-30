exports.PopupPage = class PopupPage {

    constructor (page){
            this.page = page;

            this.closeMemberForm  = page.locator('button.klaviyo-close-form');
            this.flyOutEmail_Input = page.locator('//div[@data-testid="FLYOUT"]//input[@name="email"]');
            this.submitButton = page.locator("//div[@data-testid='FLYOUT']//button[text()='SUBMIT']");
            this.helpButton = page.locator('//button[@aria-label="Help"]');
            this.email_input_alertMessage = page.locator('//div[@data-testid="FLYOUT"]//span[@role="alert"]');
            this.headerCurrencySelect = page.locator('div.header-currency-select');
            this.flyout_header = page.locator('(//div[@data-testid="FLYOUT"]//p)[1]');
            this.flyout_description = page.locator('(//div[@data-testid="FLYOUT"]//p)[2]');         
            this.cookie_message = page.locator('//div[contains(@class, "wpcc-float")][1]//span');
            this.cookie_learnMore = page.locator('//div[contains(@class, "wpcc-float")][1]//span[@class ="wpcc-message"]/a');      
            this.cookie_accept_close = page.locator('//div[contains(@class, "wpcc-float")][1]//div[@class ="wpcc-compliance"]/a');      
            }  
         }