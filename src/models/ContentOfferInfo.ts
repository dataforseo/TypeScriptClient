export interface IContentOfferInfo   {
        
        /** name of the product */
        name?: string | undefined
        
        /** price of the product */
        price?: number | undefined
        
        /** price currency */
        price_currency?: string | undefined
        
        /** displays the date and time until which the price is valid in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: '2022-11-01 10:02:52 +00:00' */
        price_valid_until?: string | undefined

    [key: string]: any;

    }

export class ContentOfferInfo  implements IContentOfferInfo {

    
    /** name of the product */

    name?: string | undefined;

    
    /** price of the product */

    price?: number | undefined;

    
    /** price currency */

    price_currency?: string | undefined;

    
    /** displays the date and time until which the price is valid in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: '2022-11-01 10:02:52 +00:00' */

    price_valid_until?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentOfferInfo) {

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
            this.name = data["name"];
            this.price = data["price"];
            this.price_currency = data["price_currency"];
            this.price_valid_until = data["price_valid_until"];
        }
    }

    static fromJS(data: any): ContentOfferInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentOfferInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["price"] = this.price;
        data["price_currency"] = this.price_currency;
        data["price_valid_until"] = this.price_valid_until;
        return data;
    }
}