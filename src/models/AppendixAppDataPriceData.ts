import { AppendixProductGoogleMerchantPriceDataInfo, IAppendixProductGoogleMerchantPriceDataInfo } from "./AppendixProductGoogleMerchantPriceDataInfo";
import { AppendixLlmMentionsAiOptimizationPriceData, IAppendixLlmMentionsAiOptimizationPriceData } from "./AppendixLlmMentionsAiOptimizationPriceData";
import { AppendixPriceDataInfo, IAppendixPriceDataInfo } from "./AppendixPriceDataInfo";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixAppDataPriceData   {
        
        app_info?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        app_listings?: AppendixLlmMentionsAiOptimizationPriceData | undefined
        
        app_list?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        app_reviews?: AppendixPriceDataInfo | undefined
        
        app_searches?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        pp_listings?: AppendixLlmMentionsAiOptimizationPriceData | undefined
        
        categories?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAppDataPriceData  implements IAppendixAppDataPriceData {

    app_info?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    app_listings?: AppendixLlmMentionsAiOptimizationPriceData | undefined;

    app_list?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    app_reviews?: AppendixPriceDataInfo | undefined;

    app_searches?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    pp_listings?: AppendixLlmMentionsAiOptimizationPriceData | undefined;

    categories?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAppDataPriceData) {

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
            this.app_info = data["app_info"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["app_info"]) : <any>undefined;
            this.app_listings = data["app_listings"] ? AppendixLlmMentionsAiOptimizationPriceData.fromJS(data["app_listings"]) : <any>undefined;
            this.app_list = data["app_list"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["app_list"]) : <any>undefined;
            this.app_reviews = data["app_reviews"] ? AppendixPriceDataInfo.fromJS(data["app_reviews"]) : <any>undefined;
            this.app_searches = data["app_searches"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["app_searches"]) : <any>undefined;
            this.pp_listings = data["pp_listings"] ? AppendixLlmMentionsAiOptimizationPriceData.fromJS(data["pp_listings"]) : <any>undefined;
            this.categories = data["categories"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["categories"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAppDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAppDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_info"] = this.app_info ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.app_info)?.toJSON() : <any>undefined;
        data["app_listings"] = this.app_listings ? AppendixLlmMentionsAiOptimizationPriceData.fromJS(this.app_listings)?.toJSON() : <any>undefined;
        data["app_list"] = this.app_list ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.app_list)?.toJSON() : <any>undefined;
        data["app_reviews"] = this.app_reviews ? AppendixPriceDataInfo.fromJS(this.app_reviews)?.toJSON() : <any>undefined;
        data["app_searches"] = this.app_searches ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.app_searches)?.toJSON() : <any>undefined;
        data["pp_listings"] = this.pp_listings ? AppendixLlmMentionsAiOptimizationPriceData.fromJS(this.pp_listings)?.toJSON() : <any>undefined;
        data["categories"] = this.categories ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.categories)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}