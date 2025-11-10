export interface IProductVariation   {
        
        /** type of element */
        type?: string | undefined
        
        /** product ID in a POST array
learn more about the parameter in this help center guide */
        product_id?: string | undefined
        
        /** name of the product seller */
        title?: string | undefined
        
        /** product url on google shopping */
        url?: string | undefined

    [key: string]: any;

    }

export class ProductVariation  implements IProductVariation {
    
    /** type of element */

    type?: string | undefined;
    
    /** product ID in a POST array
learn more about the parameter in this help center guide */

    product_id?: string | undefined;
    
    /** name of the product seller */

    title?: string | undefined;
    
    /** product url on google shopping */

    url?: string | undefined;

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
            this.title = data["title"];
            this.url = data["url"];
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
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}