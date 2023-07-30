exports.SiteHeaderPage = class SiteHeaderPage {

    constructor (page){
            this.page = page;
            this.headerTextFeatures  = page.locator('h4.text-feature-heading a');
            this.header_Search = page.locator('div.header-search-icon a');
            this.Account = page.locator('div.header-account a');
            this.wishList = page.locator('div.header-wishlist a');
            this.basket = page.locator('div.header-basket a');
            this.headerCurrencySelect = page.locator('div.header-currency-select');
            this.headerCurrencySelect = page.locator('//div[@class="site-logo"]//a');            
    }

    async getHeaderMenu(headerMenu){
       return await this.page.locator(`//nav[contains(@class,  'just-top-level')]//li[@data-menu='${headerMenu}']/a`);
    }

    async getSubMenuLink(menuHeaderName, linkName){
             return this.page.locator(`//li[@data-menu='${menuHeaderName}']//div[@class='sub-menu']//a[text() ="${linkName}"]`);
     }
}

exports.HeaderMenus = class HeaderMenus{
    static SUNGLASSES     = "sunglasses";
    static OPTICALS       = "opticals";
    static COLLABORATIONS = "collaborations";
    static ACCESSORIES    = "accessories";
    static VIRTUAL_TRY_ON = "virtual-try-on";
}

exports.HeaderSubMenus = class HeaderMenus{
    static WOMENS = "Women's";
    static MENS  = "Men's";
    static NEW_SEASON_ARRIVAL = "New Season Arrivals ";
    static NEW_AUTUMN_COLLECTION    = "NEW: LINDA FARROW Autumn/Winter '23 Collection";
    static NEW_THE_ATICO = "NEW : x The Attico";
    static NEW_ROWEN_ROSE = "NEW: x Rowen Rose";
    static NEW_MAGDA_BUTRYM       = "NEW: x Magda Butrym";
    static LINDA_FARROW_SPRING_COLLECTION = "LINDA FARROW Spring '23 Collection ";
    static NEW_AUTUMN_COLLECTION    = "NEW: LINDA FARROW Autumn/Winter '23 Collection";
    static THE_ICONIC_COLLECTION = "The Iconic Collection";    
    static PREVIOUS_COLLECTIONS = "Previous Collections";
    static COLLABORATIONS       = "Collaborations";
    static THE_ATICO = "The Attico ";
    static LINEAR_COLLECTION    = "LINEAR Collection";
    static THE_SUSTAINABLE_SERIES = "The Sustainable Series";
    static ANGULAR = "Angular";
    static AVIATOR = "Aviator";
    static CAT_EYE = "Cat Eye";
    static D_FRAME = "D-Frame";
    static HEXAGONAL = "Hexagonal";
    static OVAL = "Oval";
    static OVERSIZED = "Oversized";
    static RECTANGULAR = "Rectangular";
    static ROUND    = "Round";
    static SKINNY = "Skinny";
    static SQUARE = "Square";
    static CHAINS = "Chains";
    static POUCHES = "Pouches";
    static SCARVES = "Scarves";        
}