export interface IAiModePriceInfo   {
        
        /** *current price* indicates the current price of the shopping element */
        current?: number | undefined
        
        /** *regular price* indicates the regular price of the shopping element */
        regular?: number | undefined
        
        /** *the maximum price* indicates the maximum price of the shopping element */
        max_value?: number | undefined
        
        /** *currency of the listed price* ISO code of the currency applied to the price */
        currency?: string | undefined
        
        /** *price is provided as a range* indicates whether a price is provided in a range */
        is_price_range?: boolean | undefined
        
        /** *price string in the result* raw price string as provided in the result */
        displayed_price?: string | undefined

    [key: string]: any;

    }

export class AiModePriceInfo  implements IAiModePriceInfo {

    
    /** *current price* indicates the current price of the shopping element */

    current?: number | undefined;

    
    /** *regular price* indicates the regular price of the shopping element */

    regular?: number | undefined;

    
    /** *the maximum price* indicates the maximum price of the shopping element */

    max_value?: number | undefined;

    
    /** *currency of the listed price* ISO code of the currency applied to the price */

    currency?: string | undefined;

    
    /** *price is provided as a range* indicates whether a price is provided in a range */

    is_price_range?: boolean | undefined;

    
    /** *price string in the result* raw price string as provided in the result */

    displayed_price?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiModePriceInfo) {

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
            this.current = data["current"];
            this.regular = data["regular"];
            this.max_value = data["max_value"];
            this.currency = data["currency"];
            this.is_price_range = data["is_price_range"];
            this.displayed_price = data["displayed_price"];
        }
    }

    static fromJS(data: any): AiModePriceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModePriceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["current"] = this.current;
        data["regular"] = this.regular;
        data["max_value"] = this.max_value;
        data["currency"] = this.currency;
        data["is_price_range"] = this.is_price_range;
        data["displayed_price"] = this.displayed_price;
        return data;
    }
}