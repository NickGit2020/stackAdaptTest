exports.FooterPage = class FooterPage {

    constructor (page){
            this.page = page;
            this.footerSignUpMessage = page.locator(`//div[@class='newsletter-signup']//h4`);
            this.footerSignUpPolicyMessage = page.locator(`//div[@class='newsletter-signup']//p`);
            this.policyLink =page.locator(`//div[@class='newsletter-signup']//p/a`);
            this.subscribeEmailInput = page.locator(`//div[@class='newsletter-signup']//input[@name = 'email']`);
            this.subscribeButton =page.locator(`//div[@class='newsletter-signup']//button`);
    }

    async getSocialmediaLink(socialMedia){
        await this.page.locator(`//*[contains(@class, 'icon-${socialMedia}')]/parent::a`);
    }

    async getFooterLink(footerLink){
        await this.page.locator(`//ul[@class='footer-links']//li/a[text()='${footerLink}']`);
    }
}

exports.SocialMedias = class SocialMedias{
    static TWITER = "twitter";
    static FACEBOOK = "facebook";
    static PINTEREST = "pinterest";
    static INSTAGRAM = "instagram";
    static YOUTUBE = "youTube";
}

exports.FooterLinks = class FooterLinks{
    static ABOUT_US = "About Us";
    static FACE_SHAPE_GUIDE = "Face Shape Guide";
    static CURRENT_OFFERS = "Current Offers";
    static FAQ = "FAQ";
    static PRIVACY_POLICY = "Privacy Policy";
    static CAREERS = "Careers";
    static TERMS = "Terms";
    static DELIVERY = "Delivery";
    static OUR_STORES = "Our Stores";
    static CONTACT_US = "Contact Us";
    static RETURNS = "Returns";
    static WARRANTY_REGISTRATION = "Warranty Registration";
    static ONLINE_REPAIR_FORM = "Online Repair Form";
    static LENS_REPLACEMENT = "Lens Replacement";
}