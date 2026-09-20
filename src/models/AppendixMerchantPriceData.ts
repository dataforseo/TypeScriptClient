import { AppendixGoogleMerchantPriceData, IAppendixGoogleMerchantPriceData } from "./AppendixGoogleMerchantPriceData";
import { AppendixAmazonMerchantPriceData, IAppendixAmazonMerchantPriceData } from "./AppendixAmazonMerchantPriceData";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixProductGoogleMerchantPriceDataInfo, IAppendixProductGoogleMerchantPriceDataInfo } from "./AppendixProductGoogleMerchantPriceDataInfo";


export interface IAppendixMerchantPriceData   {
        
        google?: AppendixGoogleMerchantPriceData | undefined
        
        amazon?: AppendixAmazonMerchantPriceData | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        reviews?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixMerchantPriceData  implements IAppendixMerchantPriceData {

    google?: AppendixGoogleMerchantPriceData | undefined;

    amazon?: AppendixAmazonMerchantPriceData | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    reviews?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixMerchantPriceData) {

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
            this.google = data["google"] ? AppendixGoogleMerchantPriceData.fromJS(data["google"]) : <any>undefined;
            this.amazon = data["amazon"] ? AppendixAmazonMerchantPriceData.fromJS(data["amazon"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.reviews = data["reviews"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["reviews"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixMerchantPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixMerchantPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google"] = this.google ? AppendixGoogleMerchantPriceData.fromJS(this.google)?.toJSON() : <any>undefined;
        data["amazon"] = this.amazon ? AppendixAmazonMerchantPriceData.fromJS(this.amazon)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["reviews"] = this.reviews ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}