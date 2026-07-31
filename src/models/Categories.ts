export interface ICategories   {
        
        /** *product category name* */
        category?: string | undefined
        
        /** *product category URL* indicates the [browse path on Amazon](https://sellercentral.amazon.com/gp/help/external/G1661?language=en_US) with the unique browse node ID (product category ID on Amazon) */
        url?: string | undefined

    [key: string]: any;

    }

export class Categories  implements ICategories {

    
    /** *product category name* */

    category?: string | undefined;

    
    /** *product category URL* indicates the [browse path on Amazon](https://sellercentral.amazon.com/gp/help/external/G1661?language=en_US) with the unique browse node ID (product category ID on Amazon) */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ICategories) {

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
            this.category = data["category"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): Categories {
        data = typeof data === 'object' ? data : {};


        let result = new Categories();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["url"] = this.url;
        return data;
    }
}