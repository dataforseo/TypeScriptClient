import { AppendixRatesData, IAppendixRatesData } from "./AppendixRatesData";
import { AppendixMoneyData, IAppendixMoneyData } from "./AppendixMoneyData";
import { AppendixPriceData, IAppendixPriceData } from "./AppendixPriceData";


export interface IAppendixUserDataResultInfo   {
        
        /** your login */
        login?: string | undefined
        
        /** your time zone
can be set in your profile settings */
        timezone?: string | undefined
        
        /** your API rates */
        rates?: AppendixRatesData | undefined
        
        /** section of your spending, USD */
        money?: AppendixMoneyData | undefined
        
        /** pricing */
        price?: AppendixPriceData | undefined
        
        /** expiry date of the backlinks api subscription
date and time when the current subscription to Backlinks API expires;
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-06-15 12:57:46 +00:00
Note: if there is no active subscription to Backlinks API, the value equals null */
        backlinks_subscription_expiry_date?: string | undefined
        
        /** expiry date of the llm mentions api subscription
date and time when the current subscription to LLM Mentions API expires;
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2026-02-28 14:01:38 +00:00
Note: if there is no active subscription to LLM Mentions API, the value equals null */
        llm_mentions_subscription_expiry_date?: string | undefined

    [key: string]: any;

    }

export class AppendixUserDataResultInfo  implements IAppendixUserDataResultInfo {
    
    /** your login */

    login?: string | undefined;
    
    /** your time zone
can be set in your profile settings */

    timezone?: string | undefined;
    
    /** your API rates */

    rates?: AppendixRatesData | undefined;
    
    /** section of your spending, USD */

    money?: AppendixMoneyData | undefined;
    
    /** pricing */

    price?: AppendixPriceData | undefined;
    
    /** expiry date of the backlinks api subscription
date and time when the current subscription to Backlinks API expires;
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-06-15 12:57:46 +00:00
Note: if there is no active subscription to Backlinks API, the value equals null */

    backlinks_subscription_expiry_date?: string | undefined;
    
    /** expiry date of the llm mentions api subscription
date and time when the current subscription to LLM Mentions API expires;
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2026-02-28 14:01:38 +00:00
Note: if there is no active subscription to LLM Mentions API, the value equals null */

    llm_mentions_subscription_expiry_date?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppendixUserDataResultInfo) {

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
            this.login = data["login"];
            this.timezone = data["timezone"];
            this.rates = data["rates"] ? AppendixRatesData.fromJS(data["rates"]) : <any>undefined;
            this.money = data["money"] ? AppendixMoneyData.fromJS(data["money"]) : <any>undefined;
            this.price = data["price"] ? AppendixPriceData.fromJS(data["price"]) : <any>undefined;
            this.backlinks_subscription_expiry_date = data["backlinks_subscription_expiry_date"];
            this.llm_mentions_subscription_expiry_date = data["llm_mentions_subscription_expiry_date"];
        }
    }

    static fromJS(data: any): AppendixUserDataResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixUserDataResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["login"] = this.login;
        data["timezone"] = this.timezone;
        data["rates"] = this.rates ? AppendixRatesData.fromJS(this.rates)?.toJSON() : <any>undefined;
        data["money"] = this.money ? AppendixMoneyData.fromJS(this.money)?.toJSON() : <any>undefined;
        data["price"] = this.price ? AppendixPriceData.fromJS(this.price)?.toJSON() : <any>undefined;
        data["backlinks_subscription_expiry_date"] = this.backlinks_subscription_expiry_date;
        data["llm_mentions_subscription_expiry_date"] = this.llm_mentions_subscription_expiry_date;
        return data;
    }
}