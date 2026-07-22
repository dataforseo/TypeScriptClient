export interface IBaseSerpApiGoogleFinanceTickerSearchElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB */
        identifier?: string | undefined
        
        /** name of the market index as displayed on Google Finance
example: CAC 40 */
        displayed_name?: string | undefined
        
        /** URL to the page of the market index on Google Finance */
        url?: string | undefined
        
        /** location of the market index
example: Europe/Paris */
        location?: string | undefined
        
        /** growth trend of the market index
possible values: up, down, stable */
        trend?: string | undefined
        
        /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** percentage of change in value of the market index */
        percentage_delta?: number | undefined

    [key: string]: any;

    }

export class BaseSerpApiGoogleFinanceTickerSearchElementItem  implements IBaseSerpApiGoogleFinanceTickerSearchElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB */

    identifier?: string | undefined;

    
    /** name of the market index as displayed on Google Finance
example: CAC 40 */

    displayed_name?: string | undefined;

    
    /** URL to the page of the market index on Google Finance */

    url?: string | undefined;

    
    /** location of the market index
example: Europe/Paris */

    location?: string | undefined;

    
    /** growth trend of the market index
possible values: up, down, stable */

    trend?: string | undefined;

    
    /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;

    
    /** percentage of change in value of the market index */

    percentage_delta?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiGoogleFinanceTickerSearchElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): BaseSerpApiGoogleFinanceTickerSearchElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_finance_asset_pair") {

            let result = new SerpApiGoogleFinanceAssetPairElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_instrument") {

            let result = new SerpApiGoogleFinanceMarketInstrumentElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_index") {

            let result = new SerpApiGoogleFinanceMarketIndexElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiGoogleFinanceTickerSearchElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["identifier"] = this.identifier;
        data["displayed_name"] = this.displayed_name;
        data["url"] = this.url;
        data["location"] = this.location;
        data["trend"] = this.trend;
        data["timestamp"] = this.timestamp;
        data["percentage_delta"] = this.percentage_delta;
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceAssetPairElementItem  extends IBaseSerpApiGoogleFinanceTickerSearchElementItem    {
        
        /** identifier of the base asset in a pair
example: EUR */
        base_symbol?: string | undefined
        
        /** identifier of the quote asset in a pair
example: USD */
        quote_symbol?: string | undefined
        
        /** full name of the base asset in a pair
example: Euro */
        base_display_name?: string | undefined
        
        /** full name of the base asset in a pair
example: Euro */
        quote_display_name?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price
change in price at a given timestamp */
        price_delta?: number | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceAssetPairElementItem  extends BaseSerpApiGoogleFinanceTickerSearchElementItem   implements ISerpApiGoogleFinanceAssetPairElementItem {

    
    /** identifier of the base asset in a pair
example: EUR */

    base_symbol?: string | undefined;

    
    /** identifier of the quote asset in a pair
example: USD */

    quote_symbol?: string | undefined;

    
    /** full name of the base asset in a pair
example: Euro */

    base_display_name?: string | undefined;

    
    /** full name of the base asset in a pair
example: Euro */

    quote_display_name?: string | undefined;

    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;

    
    /** change in price
change in price at a given timestamp */

    price_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceAssetPairElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.base_symbol = data["base_symbol"];
            this.quote_symbol = data["quote_symbol"];
            this.base_display_name = data["base_display_name"];
            this.quote_display_name = data["quote_display_name"];
            this.price = data["price"];
            this.price_delta = data["price_delta"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceAssetPairElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceAssetPairElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["base_symbol"] = this.base_symbol;
        data["quote_symbol"] = this.quote_symbol;
        data["base_display_name"] = this.base_display_name;
        data["quote_display_name"] = this.quote_display_name;
        data["price"] = this.price;
        data["price_delta"] = this.price_delta;
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceMarketInstrumentElementItem  extends IBaseSerpApiGoogleFinanceTickerSearchElementItem    {
        
        /** ticker of the market index
example: DAX */
        ticker?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price
change in price at a given timestamp */
        price_delta?: number | undefined
        
        /** price currency
example: USD */
        price_currency?: string | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceMarketInstrumentElementItem  extends BaseSerpApiGoogleFinanceTickerSearchElementItem   implements ISerpApiGoogleFinanceMarketInstrumentElementItem {

    
    /** ticker of the market index
example: DAX */

    ticker?: string | undefined;

    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;

    
    /** change in price
change in price at a given timestamp */

    price_delta?: number | undefined;

    
    /** price currency
example: USD */

    price_currency?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceMarketInstrumentElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.ticker = data["ticker"];
            this.price = data["price"];
            this.price_delta = data["price_delta"];
            this.price_currency = data["price_currency"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceMarketInstrumentElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceMarketInstrumentElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["ticker"] = this.ticker;
        data["price"] = this.price;
        data["price_delta"] = this.price_delta;
        data["price_currency"] = this.price_currency;
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceMarketIndexElementItem  extends IBaseSerpApiGoogleFinanceTickerSearchElementItem    {
        
        /** ticker of the market index
example: DAX */
        ticker?: string | undefined
        
        /** market identifier
example: INDEXDB */
        market_identifier?: string | undefined
        
        /** value of the market index
numerical value of the index at a given timestamp */
        index_value?: number | undefined
        
        /** change in value of the market index
change in the index_value at a given timestamp */
        index_value_delta?: number | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceMarketIndexElementItem  extends BaseSerpApiGoogleFinanceTickerSearchElementItem   implements ISerpApiGoogleFinanceMarketIndexElementItem {

    
    /** ticker of the market index
example: DAX */

    ticker?: string | undefined;

    
    /** market identifier
example: INDEXDB */

    market_identifier?: string | undefined;

    
    /** value of the market index
numerical value of the index at a given timestamp */

    index_value?: number | undefined;

    
    /** change in value of the market index
change in the index_value at a given timestamp */

    index_value_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceMarketIndexElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.ticker = data["ticker"];
            this.market_identifier = data["market_identifier"];
            this.index_value = data["index_value"];
            this.index_value_delta = data["index_value_delta"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceMarketIndexElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceMarketIndexElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["ticker"] = this.ticker;
        data["market_identifier"] = this.market_identifier;
        data["index_value"] = this.index_value;
        data["index_value_delta"] = this.index_value_delta;
        return data;
    }
}