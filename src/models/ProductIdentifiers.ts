export interface IProductIdentifiers   {
        
        /** *unique product identifier on Google Shopping* example: `4485466949985702538` learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */
        product_id?: string | undefined
        
        /** *unique identifier of the SERP data element* example: `17363035694596624076` */
        data_docid?: string | undefined
        
        /** *global product identifier on Google Shopping* example: 4702526954592161872 learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) */
        gid?: string | undefined

    [key: string]: any;

    }

export class ProductIdentifiers  implements IProductIdentifiers {

    
    /** *unique product identifier on Google Shopping* example: `4485466949985702538` learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */

    product_id?: string | undefined;

    
    /** *unique identifier of the SERP data element* example: `17363035694596624076` */

    data_docid?: string | undefined;

    
    /** *global product identifier on Google Shopping* example: 4702526954592161872 learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) */

    gid?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductIdentifiers) {

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
            this.product_id = data["product_id"];
            this.data_docid = data["data_docid"];
            this.gid = data["gid"];
        }
    }

    static fromJS(data: any): ProductIdentifiers {
        data = typeof data === 'object' ? data : {};


        let result = new ProductIdentifiers();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["product_id"] = this.product_id;
        data["data_docid"] = this.data_docid;
        data["gid"] = this.gid;
        return data;
    }
}