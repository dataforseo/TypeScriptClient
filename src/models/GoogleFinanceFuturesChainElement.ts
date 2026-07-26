export interface IGoogleFinanceFuturesChainElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** futures’ date and time of expiration in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */
        expiration_timestamp?: string | undefined
        
        /** futures’ symbol */
        symbol?: string | undefined
        
        /** price of the market instrument price of the market instrument at a given timestamp */
        price?: number | undefined
        
        /** currency of the price value */
        price_currency?: string | undefined
        
        /** change in price of the market instrument change in price at a given timestamp */
        price_delta?: number | undefined
        
        /** percentage of change in value of the market index */
        percentage_delta?: number | undefined
        
        /** growth trend of the market index possible values: up, down, stable */
        trend?: string | undefined

    [key: string]: any;

    }

export class GoogleFinanceFuturesChainElement  implements IGoogleFinanceFuturesChainElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** futures’ date and time of expiration in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */

    expiration_timestamp?: string | undefined;

    
    /** futures’ symbol */

    symbol?: string | undefined;

    
    /** price of the market instrument price of the market instrument at a given timestamp */

    price?: number | undefined;

    
    /** currency of the price value */

    price_currency?: string | undefined;

    
    /** change in price of the market instrument change in price at a given timestamp */

    price_delta?: number | undefined;

    
    /** percentage of change in value of the market index */

    percentage_delta?: number | undefined;

    
    /** growth trend of the market index possible values: up, down, stable */

    trend?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceFuturesChainElement) {

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
            this.expiration_timestamp = data["expiration_timestamp"];
            this.symbol = data["symbol"];
            this.price = data["price"];
            this.price_currency = data["price_currency"];
            this.price_delta = data["price_delta"];
            this.percentage_delta = data["percentage_delta"];
            this.trend = data["trend"];
        }
    }

    static fromJS(data: any): GoogleFinanceFuturesChainElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceFuturesChainElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["expiration_timestamp"] = this.expiration_timestamp;
        data["symbol"] = this.symbol;
        data["price"] = this.price;
        data["price_currency"] = this.price_currency;
        data["price_delta"] = this.price_delta;
        data["percentage_delta"] = this.percentage_delta;
        data["trend"] = this.trend;
        return data;
    }
}