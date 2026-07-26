import { Markets, IMarkets } from "./Markets";
import { GoogleFinanceNewsElement, IGoogleFinanceNewsElement } from "./GoogleFinanceNewsElement";
import { GoogleFinanceEarningsCalendarElement, IGoogleFinanceEarningsCalendarElement } from "./GoogleFinanceEarningsCalendarElement";
import { SerpGoogleFinanceExploreAdvancedItem, ISerpGoogleFinanceExploreAdvancedItem } from "./SerpGoogleFinanceExploreAdvancedItem";
import { GraphItems, IGraphItems } from "./GraphItems";
import { GoogleFinanceMetricsBundleInfo, IGoogleFinanceMetricsBundleInfo } from "./GoogleFinanceMetricsBundleInfo";
import { GoogleFinanceFuturesChainElement, IGoogleFinanceFuturesChainElement } from "./GoogleFinanceFuturesChainElement";


export interface IBaseSerpApiGoogleFinanceElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiGoogleFinanceElementItem  implements IBaseSerpApiGoogleFinanceElementItem {

    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiGoogleFinanceElementItem) {

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
        }
    }

    static fromJS(data: any): BaseSerpApiGoogleFinanceElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_finance_asset_pair_element") {

            let result = new SerpApiGoogleFinanceAssetPairElementElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_index_element") {

            let result = new SerpApiGoogleFinanceMarketIndexElementElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_instrument_element") {

            let result = new SerpApiGoogleFinanceMarketInstrumentElementElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_hero_groups") {

            let result = new SerpApiGoogleFinanceHeroGroupsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_interested") {

            let result = new SerpApiGoogleFinanceInterestedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_news") {

            let result = new SerpApiGoogleFinanceNewsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_earnings_calendar") {

            let result = new SerpApiGoogleFinanceEarningsCalendarElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_most_followed") {

            let result = new SerpApiGoogleFinanceMostFollowedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_trends") {

            let result = new SerpApiGoogleFinanceMarketTrendsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_people_also_search") {

            let result = new SerpApiGoogleFinancePeopleAlsoSearchElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_explore_market_trends") {

            let result = new SerpApiGoogleFinanceExploreMarketTrendsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_quote") {

            let result = new SerpApiGoogleFinanceQuoteElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_compare_to") {

            let result = new SerpApiGoogleFinanceCompareToElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_financial") {

            let result = new SerpApiGoogleFinanceFinancialElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_futures_chain") {

            let result = new SerpApiGoogleFinanceFuturesChainElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_details") {

            let result = new SerpApiGoogleFinanceDetailsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_about") {

            let result = new SerpApiGoogleFinanceAboutElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiGoogleFinanceElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceAssetPairElementElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** identifier of the base asset in a pair example: EUR */
        base_symbol?: string | undefined
        
        /** identifier of the quote asset in a pair example: USD */
        quote_symbol?: string | undefined
        
        /** full name of the base asset in a pair example: Euro */
        base_display_name?: string | undefined
        
        /** full name of the base asset in a pair example: Euro */
        quote_display_name?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price change in price at a given timestamp */
        price_delta?: number | undefined
        
        /** identifier of the element full identifier of the element that consists from ticker and market_identifier example: PX1:INDEXDB */
        identifier?: string | undefined
        
        /** name of the market index as displayed on Google Finance example: CAC 40 */
        displayed_name?: string | undefined
        
        /** URL to the page of the market index on Google Finance */
        url?: string | undefined
        
        /** location of the market index example: Europe/Paris */
        location?: string | undefined
        
        /** growth trend of the market index possible values: up, down, stable */
        trend?: string | undefined
        
        /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** percentage of change in value of the market index */
        percentage_delta?: number | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceAssetPairElementElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceAssetPairElementElementItem {

    
    /** identifier of the base asset in a pair example: EUR */

    base_symbol?: string | undefined;

    
    /** identifier of the quote asset in a pair example: USD */

    quote_symbol?: string | undefined;

    
    /** full name of the base asset in a pair example: Euro */

    base_display_name?: string | undefined;

    
    /** full name of the base asset in a pair example: Euro */

    quote_display_name?: string | undefined;

    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;

    
    /** change in price change in price at a given timestamp */

    price_delta?: number | undefined;

    
    /** identifier of the element full identifier of the element that consists from ticker and market_identifier example: PX1:INDEXDB */

    identifier?: string | undefined;

    
    /** name of the market index as displayed on Google Finance example: CAC 40 */

    displayed_name?: string | undefined;

    
    /** URL to the page of the market index on Google Finance */

    url?: string | undefined;

    
    /** location of the market index example: Europe/Paris */

    location?: string | undefined;

    
    /** growth trend of the market index possible values: up, down, stable */

    trend?: string | undefined;

    
    /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;

    
    /** percentage of change in value of the market index */

    percentage_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceAssetPairElementElementItem) {
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
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceAssetPairElementElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceAssetPairElementElementItem();
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

 
export interface ISerpApiGoogleFinanceMarketIndexElementElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** ticker of the market index example: DAX */
        ticker?: string | undefined
        
        /** market identifier example: INDEXDB */
        market_identifier?: string | undefined
        
        /** value of the market index numerical value of the index at a given timestamp */
        index_value?: number | undefined
        
        /** change in value of the market index change in the index_value at a given timestamp */
        index_value_delta?: number | undefined
        
        /** identifier of the element full identifier of the element that consists from ticker and market_identifier example: PX1:INDEXDB */
        identifier?: string | undefined
        
        /** name of the market index as displayed on Google Finance example: CAC 40 */
        displayed_name?: string | undefined
        
        /** URL to the page of the market index on Google Finance */
        url?: string | undefined
        
        /** location of the market index example: Europe/Paris */
        location?: string | undefined
        
        /** growth trend of the market index possible values: up, down, stable */
        trend?: string | undefined
        
        /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** percentage of change in value of the market index */
        percentage_delta?: number | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceMarketIndexElementElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceMarketIndexElementElementItem {

    
    /** ticker of the market index example: DAX */

    ticker?: string | undefined;

    
    /** market identifier example: INDEXDB */

    market_identifier?: string | undefined;

    
    /** value of the market index numerical value of the index at a given timestamp */

    index_value?: number | undefined;

    
    /** change in value of the market index change in the index_value at a given timestamp */

    index_value_delta?: number | undefined;

    
    /** identifier of the element full identifier of the element that consists from ticker and market_identifier example: PX1:INDEXDB */

    identifier?: string | undefined;

    
    /** name of the market index as displayed on Google Finance example: CAC 40 */

    displayed_name?: string | undefined;

    
    /** URL to the page of the market index on Google Finance */

    url?: string | undefined;

    
    /** location of the market index example: Europe/Paris */

    location?: string | undefined;

    
    /** growth trend of the market index possible values: up, down, stable */

    trend?: string | undefined;

    
    /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;

    
    /** percentage of change in value of the market index */

    percentage_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceMarketIndexElementElementItem) {
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
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceMarketIndexElementElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceMarketIndexElementElementItem();
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

 
export interface ISerpApiGoogleFinanceMarketInstrumentElementElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** ticker of the market index example: DAX */
        ticker?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price change in price at a given timestamp */
        price_delta?: number | undefined
        
        /** price currency example: USD */
        price_currency?: string | undefined
        
        /** identifier of the element full identifier of the element that consists from ticker and market_identifier example: PX1:INDEXDB */
        identifier?: string | undefined
        
        /** name of the market index as displayed on Google Finance example: CAC 40 */
        displayed_name?: string | undefined
        
        /** URL to the page of the market index on Google Finance */
        url?: string | undefined
        
        /** location of the market index example: Europe/Paris */
        location?: string | undefined
        
        /** growth trend of the market index possible values: up, down, stable */
        trend?: string | undefined
        
        /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** percentage of change in value of the market index */
        percentage_delta?: number | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceMarketInstrumentElementElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceMarketInstrumentElementElementItem {

    
    /** ticker of the market index example: DAX */

    ticker?: string | undefined;

    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;

    
    /** change in price change in price at a given timestamp */

    price_delta?: number | undefined;

    
    /** price currency example: USD */

    price_currency?: string | undefined;

    
    /** identifier of the element full identifier of the element that consists from ticker and market_identifier example: PX1:INDEXDB */

    identifier?: string | undefined;

    
    /** name of the market index as displayed on Google Finance example: CAC 40 */

    displayed_name?: string | undefined;

    
    /** URL to the page of the market index on Google Finance */

    url?: string | undefined;

    
    /** location of the market index example: Europe/Paris */

    location?: string | undefined;

    
    /** growth trend of the market index possible values: up, down, stable */

    trend?: string | undefined;

    
    /** date and time of the value readout in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;

    
    /** percentage of change in value of the market index */

    percentage_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceMarketInstrumentElementElementItem) {
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
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceMarketInstrumentElementElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceMarketInstrumentElementElementItem();
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

 
export interface ISerpApiGoogleFinanceHeroGroupsElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** financial markets data array of items containing market indexes and other financial information related to these indexes */
        markets?: Markets[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceHeroGroupsElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceHeroGroupsElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** financial markets data array of items containing market indexes and other financial information related to these indexes */

    markets?: Markets[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceHeroGroupsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["markets"])) {
                this.markets = [];
                for (let item of data["markets"]) {
                    this.markets.push(Markets.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceHeroGroupsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceHeroGroupsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["markets"] = null;
        if (Array.isArray(this.markets)) {
            data["markets"] = [];
            for (let item of this.markets) {
                if (item && typeof item.toJSON === "function") {
                    data["markets"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceInterestedElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceInterestedElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceInterestedElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceInterestedElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceInterestedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceInterestedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceNewsElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the news element example: In the news */
        title?: string | undefined
        
        /** sub-title of the news element example: Based on Europe, Middle East, and Africa */
        sub_title?: string | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: GoogleFinanceNewsElement[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceNewsElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceNewsElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the news element example: In the news */

    title?: string | undefined;

    
    /** sub-title of the news element example: Based on Europe, Middle East, and Africa */

    sub_title?: string | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: GoogleFinanceNewsElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceNewsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.sub_title = data["sub_title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleFinanceNewsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceNewsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceNewsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceEarningsCalendarElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: GoogleFinanceEarningsCalendarElement[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceEarningsCalendarElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceEarningsCalendarElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: GoogleFinanceEarningsCalendarElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceEarningsCalendarElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleFinanceEarningsCalendarElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceEarningsCalendarElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceEarningsCalendarElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceMostFollowedElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceMostFollowedElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceMostFollowedElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceMostFollowedElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceMostFollowedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceMostFollowedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceMarketTrendsElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: SerpGoogleFinanceExploreAdvancedItem | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceMarketTrendsElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceMarketTrendsElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: SerpGoogleFinanceExploreAdvancedItem | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceMarketTrendsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.items = data["items"] ? SerpGoogleFinanceExploreAdvancedItem.fromJS(data["items"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceMarketTrendsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceMarketTrendsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = this.items ? SerpGoogleFinanceExploreAdvancedItem.fromJS(this.items)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiGoogleFinancePeopleAlsoSearchElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinancePeopleAlsoSearchElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinancePeopleAlsoSearchElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinancePeopleAlsoSearchElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinancePeopleAlsoSearchElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinancePeopleAlsoSearchElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceExploreMarketTrendsElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the market trends element example: Europe, Middle East, and Africa */
        title?: string | undefined
        
        /** sub-title of the market trends element */
        sub_title?: string | undefined
        
        /** URL to finance pair on Google Finance */
        url?: string | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceExploreMarketTrendsElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceExploreMarketTrendsElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** title of the market trends element example: Europe, Middle East, and Africa */

    title?: string | undefined;

    
    /** sub-title of the market trends element */

    sub_title?: string | undefined;

    
    /** URL to finance pair on Google Finance */

    url?: string | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceExploreMarketTrendsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.sub_title = data["sub_title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceExploreMarketTrendsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceExploreMarketTrendsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceQuoteElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** quoted market indexes */
        quote?: BaseSerpApiGoogleFinanceElementItem | undefined
        
        /** values on graph */
        graph_items?: GraphItems[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceQuoteElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceQuoteElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** quoted market indexes */

    quote?: BaseSerpApiGoogleFinanceElementItem | undefined;

    
    /** values on graph */

    graph_items?: GraphItems[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceQuoteElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.quote = data["quote"] ? BaseSerpApiGoogleFinanceElementItem.fromJS(data["quote"]) : <any>undefined;
            if (Array.isArray(data["graph_items"])) {
                this.graph_items = [];
                for (let item of data["graph_items"]) {
                    this.graph_items.push(GraphItems.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceQuoteElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceQuoteElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["quote"] = this.quote ? BaseSerpApiGoogleFinanceElementItem.fromJS(this.quote)?.toJSON() : <any>undefined;
        data["graph_items"] = null;
        if (Array.isArray(this.graph_items)) {
            data["graph_items"] = [];
            for (let item of this.graph_items) {
                if (item && typeof item.toJSON === "function") {
                    data["graph_items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceCompareToElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceCompareToElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceCompareToElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** market indexes data array of items containing market indexes data; possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceCompareToElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceCompareToElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceCompareToElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceFinancialElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** quarterly google finance metrics */
        quarterly_metrics?: GoogleFinanceMetricsBundleInfo[] | undefined
        
        /** annual google finance metrics */
        annual_metrics?: GoogleFinanceMetricsBundleInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceFinancialElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceFinancialElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** quarterly google finance metrics */

    quarterly_metrics?: GoogleFinanceMetricsBundleInfo[] | undefined;

    
    /** annual google finance metrics */

    annual_metrics?: GoogleFinanceMetricsBundleInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceFinancialElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["quarterly_metrics"])) {
                this.quarterly_metrics = [];
                for (let item of data["quarterly_metrics"]) {
                    this.quarterly_metrics.push(GoogleFinanceMetricsBundleInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["annual_metrics"])) {
                this.annual_metrics = [];
                for (let item of data["annual_metrics"]) {
                    this.annual_metrics.push(GoogleFinanceMetricsBundleInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceFinancialElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceFinancialElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["quarterly_metrics"] = null;
        if (Array.isArray(this.quarterly_metrics)) {
            data["quarterly_metrics"] = [];
            for (let item of this.quarterly_metrics) {
                if (item && typeof item.toJSON === "function") {
                    data["quarterly_metrics"].push(item?.toJSON());
                }
            }
        }
        data["annual_metrics"] = null;
        if (Array.isArray(this.annual_metrics)) {
            data["annual_metrics"] = [];
            for (let item of this.annual_metrics) {
                if (item && typeof item.toJSON === "function") {
                    data["annual_metrics"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceFuturesChainElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** financial markets data array of items containing market indexes and other financial information related to these indexes */
        markets?: GoogleFinanceFuturesChainElement[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceFuturesChainElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceFuturesChainElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** financial markets data array of items containing market indexes and other financial information related to these indexes */

    markets?: GoogleFinanceFuturesChainElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceFuturesChainElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["markets"])) {
                this.markets = [];
                for (let item of data["markets"]) {
                    this.markets.push(GoogleFinanceFuturesChainElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceFuturesChainElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceFuturesChainElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["markets"] = null;
        if (Array.isArray(this.markets)) {
            data["markets"] = [];
            for (let item of this.markets) {
                if (item && typeof item.toJSON === "function") {
                    data["markets"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceDetailsElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** google finance badges relevant to the element example: Futures Contract */
        badges?: string[] | undefined
        
        /** value of the previous close */
        previous_close?: number | undefined
        
        /** value of the start day range */
        start_day_range?: number | undefined
        
        /** value of the end day range */
        end_day_range?: number | undefined
        
        /** value of the start year range */
        start_year_range?: number | undefined
        
        /** value of the end year range */
        end_year_range?: number | undefined
        
        /** market cap value */
        market_cap?: number | undefined
        
        /** total volume value */
        volume?: number | undefined
        
        /** average volume value */
        avg_volume?: number | undefined
        
        /** price-earnings ratio */
        pe_ratio?: number | undefined
        
        /** dividend yield value */
        dividend_yield?: number | undefined
        
        /** primary exchange value */
        primary_exchange?: string | undefined
        
        /** year-to-date return value */
        ytd_return?: number | undefined
        
        /** expense ratio value */
        expense_ratio?: number | undefined
        
        /** category name */
        category?: string | undefined
        
        net_assets?: number | undefined
        
        /** yield value */
        yield?: number | undefined
        
        /** front load value */
        front_load?: number | undefined
        
        /** name of the relevant market segment */
        market_segment?: string | undefined
        
        /** open interest value */
        open_interest?: number | undefined
        
        /** settlement price value */
        settlement_price?: number | undefined
        
        /** climate change score by carbon disclosure project methodology */
        cdp_climate_change_score?: string | undefined
        
        /** currency of the metrics */
        metrics_currency?: string | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceDetailsElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceDetailsElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** google finance badges relevant to the element example: Futures Contract */

    badges?: string[] | undefined;

    
    /** value of the previous close */

    previous_close?: number | undefined;

    
    /** value of the start day range */

    start_day_range?: number | undefined;

    
    /** value of the end day range */

    end_day_range?: number | undefined;

    
    /** value of the start year range */

    start_year_range?: number | undefined;

    
    /** value of the end year range */

    end_year_range?: number | undefined;

    
    /** market cap value */

    market_cap?: number | undefined;

    
    /** total volume value */

    volume?: number | undefined;

    
    /** average volume value */

    avg_volume?: number | undefined;

    
    /** price-earnings ratio */

    pe_ratio?: number | undefined;

    
    /** dividend yield value */

    dividend_yield?: number | undefined;

    
    /** primary exchange value */

    primary_exchange?: string | undefined;

    
    /** year-to-date return value */

    ytd_return?: number | undefined;

    
    /** expense ratio value */

    expense_ratio?: number | undefined;

    
    /** category name */

    category?: string | undefined;

    net_assets?: number | undefined;

    
    /** yield value */

    yield?: number | undefined;

    
    /** front load value */

    front_load?: number | undefined;

    
    /** name of the relevant market segment */

    market_segment?: string | undefined;

    
    /** open interest value */

    open_interest?: number | undefined;

    
    /** settlement price value */

    settlement_price?: number | undefined;

    
    /** climate change score by carbon disclosure project methodology */

    cdp_climate_change_score?: string | undefined;

    
    /** currency of the metrics */

    metrics_currency?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceDetailsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.badges = data["badges"];
            this.previous_close = data["previous_close"];
            this.start_day_range = data["start_day_range"];
            this.end_day_range = data["end_day_range"];
            this.start_year_range = data["start_year_range"];
            this.end_year_range = data["end_year_range"];
            this.market_cap = data["market_cap"];
            this.volume = data["volume"];
            this.avg_volume = data["avg_volume"];
            this.pe_ratio = data["pe_ratio"];
            this.dividend_yield = data["dividend_yield"];
            this.primary_exchange = data["primary_exchange"];
            this.ytd_return = data["ytd_return"];
            this.expense_ratio = data["expense_ratio"];
            this.category = data["category"];
            this.net_assets = data["net_assets"];
            this.yield = data["yield"];
            this.front_load = data["front_load"];
            this.market_segment = data["market_segment"];
            this.open_interest = data["open_interest"];
            this.settlement_price = data["settlement_price"];
            this.cdp_climate_change_score = data["cdp_climate_change_score"];
            this.metrics_currency = data["metrics_currency"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceDetailsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceDetailsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["badges"] = this.badges;
        data["previous_close"] = this.previous_close;
        data["start_day_range"] = this.start_day_range;
        data["end_day_range"] = this.end_day_range;
        data["start_year_range"] = this.start_year_range;
        data["end_year_range"] = this.end_year_range;
        data["market_cap"] = this.market_cap;
        data["volume"] = this.volume;
        data["avg_volume"] = this.avg_volume;
        data["pe_ratio"] = this.pe_ratio;
        data["dividend_yield"] = this.dividend_yield;
        data["primary_exchange"] = this.primary_exchange;
        data["ytd_return"] = this.ytd_return;
        data["expense_ratio"] = this.expense_ratio;
        data["category"] = this.category;
        data["net_assets"] = this.net_assets;
        data["yield"] = this.yield;
        data["front_load"] = this.front_load;
        data["market_segment"] = this.market_segment;
        data["open_interest"] = this.open_interest;
        data["settlement_price"] = this.settlement_price;
        data["cdp_climate_change_score"] = this.cdp_climate_change_score;
        data["metrics_currency"] = this.metrics_currency;
        return data;
    }
}

 
export interface ISerpApiGoogleFinanceAboutElementItem  extends IBaseSerpApiGoogleFinanceElementItem    {
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** displayed name of the market index example: E-mini Dow ($5) */
        displayed_name?: string | undefined
        
        /** company description */
        description?: string | undefined
        
        /** source of information provided in description */
        description_source_url?: string | undefined
        
        /** Chief Executive Officer of the company */
        ceo?: string | undefined
        
        /** date when the company was founded in the format: “yyyy-mm-ddThh-mm-ssZ” example: 1993-04-05T00:00:00Z */
        founded?: string | undefined
        
        /** company headquarters */
        headquarters?: string | undefined
        
        /** company website */
        website?: string | undefined
        
        /** number of company employees */
        employees?: number | undefined

    [key: string]: any;

    }

export class SerpApiGoogleFinanceAboutElementItem  extends BaseSerpApiGoogleFinanceElementItem   implements ISerpApiGoogleFinanceAboutElementItem {

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** displayed name of the market index example: E-mini Dow ($5) */

    displayed_name?: string | undefined;

    
    /** company description */

    description?: string | undefined;

    
    /** source of information provided in description */

    description_source_url?: string | undefined;

    
    /** Chief Executive Officer of the company */

    ceo?: string | undefined;

    
    /** date when the company was founded in the format: “yyyy-mm-ddThh-mm-ssZ” example: 1993-04-05T00:00:00Z */

    founded?: string | undefined;

    
    /** company headquarters */

    headquarters?: string | undefined;

    
    /** company website */

    website?: string | undefined;

    
    /** number of company employees */

    employees?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleFinanceAboutElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.displayed_name = data["displayed_name"];
            this.description = data["description"];
            this.description_source_url = data["description_source_url"];
            this.ceo = data["ceo"];
            this.founded = data["founded"];
            this.headquarters = data["headquarters"];
            this.website = data["website"];
            this.employees = data["employees"];
        }
    }

    static fromJS(data: any): SerpApiGoogleFinanceAboutElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleFinanceAboutElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["displayed_name"] = this.displayed_name;
        data["description"] = this.description;
        data["description_source_url"] = this.description_source_url;
        data["ceo"] = this.ceo;
        data["founded"] = this.founded;
        data["headquarters"] = this.headquarters;
        data["website"] = this.website;
        data["employees"] = this.employees;
        return data;
    }
}