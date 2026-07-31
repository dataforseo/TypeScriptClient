export interface IProductVariation   {
        
        /** type of element */
        type?: string | undefined
        
        /** *product ID in a POST array* learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */
        product_id?: string | undefined
        
        /** *GID ID in a POST array* learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) */
        gid?: string | undefined
        
        /** *unique identifier of the SERP data element in the POST array* */
        data_docid?: string | undefined
        
        /** *product variation filter* used in the product variation URL as the identifier of the specific product variation */
        pvf?: string | undefined
        
        /** *name of the product seller* */
        title?: string | undefined
        
        /** *product variation URL on Google Shopping* */
        url?: string | undefined
        
        /** *category of the product variation* example: `'Storage Capacity'` */
        variation_category?: string | undefined

    [key: string]: any;

    }

export class ProductVariation  implements IProductVariation {

    
    /** type of element */

    type?: string | undefined;

    
    /** *product ID in a POST array* learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */

    product_id?: string | undefined;

    
    /** *GID ID in a POST array* learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) */

    gid?: string | undefined;

    
    /** *unique identifier of the SERP data element in the POST array* */

    data_docid?: string | undefined;

    
    /** *product variation filter* used in the product variation URL as the identifier of the specific product variation */

    pvf?: string | undefined;

    
    /** *name of the product seller* */

    title?: string | undefined;

    
    /** *product variation URL on Google Shopping* */

    url?: string | undefined;

    
    /** *category of the product variation* example: `'Storage Capacity'` */

    variation_category?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductVariation) {

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
            this.gid = data["gid"];
            this.data_docid = data["data_docid"];
            this.pvf = data["pvf"];
            this.title = data["title"];
            this.url = data["url"];
            this.variation_category = data["variation_category"];
        }
    }

    static fromJS(data: any): ProductVariation {
        data = typeof data === 'object' ? data : {};


        let result = new ProductVariation();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["product_id"] = this.product_id;
        data["gid"] = this.gid;
        data["data_docid"] = this.data_docid;
        data["pvf"] = this.pvf;
        data["title"] = this.title;
        data["url"] = this.url;
        data["variation_category"] = this.variation_category;
        return data;
    }
}