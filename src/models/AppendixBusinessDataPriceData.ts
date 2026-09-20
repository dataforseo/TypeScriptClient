import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixBusinessListingsBusinessDataPriceData, IAppendixBusinessListingsBusinessDataPriceData } from "./AppendixBusinessListingsBusinessDataPriceData";
import { AppendixGoogleBusinessDataPriceData, IAppendixGoogleBusinessDataPriceData } from "./AppendixGoogleBusinessDataPriceData";
import { AppendixTrBusinessDataPriceDataInfo, IAppendixTrBusinessDataPriceDataInfo } from "./AppendixTrBusinessDataPriceDataInfo";


export interface IAppendixBusinessDataPriceData   {
        
        available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        business_listings?: AppendixBusinessListingsBusinessDataPriceData | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        google?: AppendixGoogleBusinessDataPriceData | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        tripadvisor?: AppendixTrBusinessDataPriceDataInfo | undefined
        
        trustpilot?: AppendixTrBusinessDataPriceDataInfo | undefined
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixBusinessDataPriceData  implements IAppendixBusinessDataPriceData {

    available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    business_listings?: AppendixBusinessListingsBusinessDataPriceData | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    google?: AppendixGoogleBusinessDataPriceData | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    tripadvisor?: AppendixTrBusinessDataPriceDataInfo | undefined;

    trustpilot?: AppendixTrBusinessDataPriceDataInfo | undefined;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBusinessDataPriceData) {

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
            this.available_filters = data["available_filters"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["available_filters"]) : <any>undefined;
            this.business_listings = data["business_listings"] ? AppendixBusinessListingsBusinessDataPriceData.fromJS(data["business_listings"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.google = data["google"] ? AppendixGoogleBusinessDataPriceData.fromJS(data["google"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.tripadvisor = data["tripadvisor"] ? AppendixTrBusinessDataPriceDataInfo.fromJS(data["tripadvisor"]) : <any>undefined;
            this.trustpilot = data["trustpilot"] ? AppendixTrBusinessDataPriceDataInfo.fromJS(data["trustpilot"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBusinessDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["available_filters"] = this.available_filters ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.available_filters)?.toJSON() : <any>undefined;
        data["business_listings"] = this.business_listings ? AppendixBusinessListingsBusinessDataPriceData.fromJS(this.business_listings)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["google"] = this.google ? AppendixGoogleBusinessDataPriceData.fromJS(this.google)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["tripadvisor"] = this.tripadvisor ? AppendixTrBusinessDataPriceDataInfo.fromJS(this.tripadvisor)?.toJSON() : <any>undefined;
        data["trustpilot"] = this.trustpilot ? AppendixTrBusinessDataPriceDataInfo.fromJS(this.trustpilot)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}