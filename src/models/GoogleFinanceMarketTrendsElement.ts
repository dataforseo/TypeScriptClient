import { BaseSerpApiGoogleFinanceElementItem, IBaseSerpApiGoogleFinanceElementItem } from "./BaseSerpApiGoogleFinanceElementItem";
import { GoogleFinanceNewsElement, IGoogleFinanceNewsElement } from "./GoogleFinanceNewsElement";


export interface IGoogleFinanceMarketTrendsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** object of items
array contains the following type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        quote?: BaseSerpApiGoogleFinanceElementItem | undefined
        
        /** array of items
array contains the following type of items: google_finance_news_element */
        news?: GoogleFinanceNewsElement[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceMarketTrendsElement  implements IGoogleFinanceMarketTrendsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** object of items
array contains the following type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    quote?: BaseSerpApiGoogleFinanceElementItem | undefined;

    
    /** array of items
array contains the following type of items: google_finance_news_element */

    news?: GoogleFinanceNewsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceMarketTrendsElement) {

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
            this.quote = data["quote"] ? BaseSerpApiGoogleFinanceElementItem.fromJS(data["quote"]) : <any>undefined;
            if (Array.isArray(data["news"])) {
                this.news = [];
                for (let item of data["news"]) {
                    this.news.push(GoogleFinanceNewsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceMarketTrendsElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMarketTrendsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["quote"] = this.quote ? BaseSerpApiGoogleFinanceElementItem.fromJS(this.quote)?.toJSON() : <any>undefined;
        data["news"] = null;
        if (Array.isArray(this.news)) {
            data["news"] = [];
            for (let item of this.news) {
                if (item && typeof item.toJSON === "function") {
                    data["news"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}