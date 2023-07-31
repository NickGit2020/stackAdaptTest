exports.ProductDetailPage = class ProductDetailPage {

    constructor (page){
            this.page = page;

            this.addToCartButton  = page.locator('button.btn-add-to-cart');
            this.productDetailPrice = page.locator('span.product-detail-price span.money');
            this.productSizeAndFit = page.locator("//h3[text() = 'Size & Fit']/ancestor::div[contains(@class, 'accordion-item')]");
            this.productDetails = page.locator("//h3[text() = 'Details']/ancestor::div[contains(@class, 'accordion-item')]");
            this.productDescription = page.locator("//h3[text() = 'Description']/ancestor::div[contains(@class, 'accordion-item')]");
            this.addToWishList = page.locator("//div[contains(@class, 'tooltipster-base')]");
            this.addToWishListButton = page.locator("//div[@class='product-wishlist']//div[@role='button']");
            this.productTitle = page.locator('//h1[@class="product-title"]');         
            this.productShortDescription = page.locator('//span[@class="product-short-description"]//p');          
    } 
}

