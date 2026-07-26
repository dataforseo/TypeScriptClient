import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { ChatGptGoogleShoppingProduct, IChatGptGoogleShoppingProduct } from "./ChatGptGoogleShoppingProduct";


export interface IChatGptProductsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *product id* */
        product_id?: string | undefined
        
        /** *merchant(s) offering the product* */
        merchants?: string | undefined
        
        /** *product identifier token* Base64-encoded token containing Google Shopping product IDs associated with the product */
        id_to_token_map?: string | undefined
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *rating of the corresponding local business* popularity rate based on reviews as displayed in the results */
        rating?: RatingInfo | undefined
        
        /** *product price* */
        price?: number | undefined
        
        /** *currency of the listed price* ISO code of the currency applied to the price */
        currency?: string | undefined
        
        /** *tag text* */
        tag?: string | undefined
        
        /** *URL* */
        url?: string | undefined
        
        /** *domain* */
        domain?: string | undefined
        
        /** *image URLs of the element* contains URLs leading to the images on the original resource or DataForSEO storage (in case the original source is not available) */
        images?: string[] | undefined
        
        /** *Google Shopping product identifiers* array of Google Shopping product IDs associated with the product */
        product_ids?: ChatGptGoogleShoppingProduct[] | undefined

    [key: string]: any;

    }

export class ChatGptProductsElement  implements IChatGptProductsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *product id* */

    product_id?: string | undefined;

    
    /** *merchant(s) offering the product* */

    merchants?: string | undefined;

    
    /** *product identifier token* Base64-encoded token containing Google Shopping product IDs associated with the product */

    id_to_token_map?: string | undefined;

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *rating of the corresponding local business* popularity rate based on reviews as displayed in the results */

    rating?: RatingInfo | undefined;

    
    /** *product price* */

    price?: number | undefined;

    
    /** *currency of the listed price* ISO code of the currency applied to the price */

    currency?: string | undefined;

    
    /** *tag text* */

    tag?: string | undefined;

    
    /** *URL* */

    url?: string | undefined;

    
    /** *domain* */

    domain?: string | undefined;

    
    /** *image URLs of the element* contains URLs leading to the images on the original resource or DataForSEO storage (in case the original source is not available) */

    images?: string[] | undefined;

    
    /** *Google Shopping product identifiers* array of Google Shopping product IDs associated with the product */

    product_ids?: ChatGptGoogleShoppingProduct[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptProductsElement) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.product_id = data["product_id"];
            this.merchants = data["merchants"];
            this.id_to_token_map = data["id_to_token_map"];
            this.title = data["title"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"];
            this.currency = data["currency"];
            this.tag = data["tag"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.images = data["images"];
            if (Array.isArray(data["product_ids"])) {
                this.product_ids = [];
                for (let item of data["product_ids"]) {
                    this.product_ids.push(ChatGptGoogleShoppingProduct.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ChatGptProductsElement {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptProductsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["product_id"] = this.product_id;
        data["merchants"] = this.merchants;
        data["id_to_token_map"] = this.id_to_token_map;
        data["title"] = this.title;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price;
        data["currency"] = this.currency;
        data["tag"] = this.tag;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["images"] = this.images;
        data["product_ids"] = null;
        if (Array.isArray(this.product_ids)) {
            data["product_ids"] = [];
            for (let item of this.product_ids) {
                if (item && typeof item.toJSON === "function") {
                    data["product_ids"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}