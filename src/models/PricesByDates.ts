export interface IPricesByDates   {
        
        /** price per night */
        price?: number | undefined
        
        /** price currency USD is applied by default, unless specified in the POST array */
        currency?: string | undefined
        
        check_in_date?: string | undefined
        
        check_out_date?: string | undefined

    [key: string]: any;

    }

export class PricesByDates  implements IPricesByDates {

    
    /** price per night */

    price?: number | undefined;

    
    /** price currency USD is applied by default, unless specified in the POST array */

    currency?: string | undefined;

    check_in_date?: string | undefined;

    check_out_date?: string | undefined;

    [key: string]: any;


    constructor(data?: IPricesByDates) {

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
            this.price = data["price"];
            this.currency = data["currency"];
            this.check_in_date = data["check_in_date"];
            this.check_out_date = data["check_out_date"];
        }
    }

    static fromJS(data: any): PricesByDates {
        data = typeof data === 'object' ? data : {};


        let result = new PricesByDates();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["price"] = this.price;
        data["currency"] = this.currency;
        data["check_in_date"] = this.check_in_date;
        data["check_out_date"] = this.check_out_date;
        return data;
    }
}