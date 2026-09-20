import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { AppendixTrBusinessDataDayLimitsRatesDataInfo, IAppendixTrBusinessDataDayLimitsRatesDataInfo } from "./AppendixTrBusinessDataDayLimitsRatesDataInfo";
import { AppendixDataforseoLabsLimitsRatesDataInfo, IAppendixDataforseoLabsLimitsRatesDataInfo } from "./AppendixDataforseoLabsLimitsRatesDataInfo";


export interface IAppendixAppDataLimitsRatesDataInfo   {
        
        app_info?: AppendixSerpDaysRatesDataInfo | undefined
        
        app_list?: AppendixSerpDaysRatesDataInfo | undefined
        
        app_reviews?: AppendixSerpDaysRatesDataInfo | undefined
        
        app_searches?: AppendixSerpDaysRatesDataInfo | undefined
        
        errors?: number | undefined
        
        languages?: number | undefined
        
        locations?: number | undefined
        
        categories?: number | undefined
        
        id_list?: number | undefined
        
        app_listings?: AppendixTrBusinessDataDayLimitsRatesDataInfo | undefined
        
        pp_listings?: AppendixDataforseoLabsLimitsRatesDataInfo | undefined
        
        tasks_ready?: number | undefined

    [key: string]: any;

    }

export class AppendixAppDataLimitsRatesDataInfo  implements IAppendixAppDataLimitsRatesDataInfo {

    app_info?: AppendixSerpDaysRatesDataInfo | undefined;

    app_list?: AppendixSerpDaysRatesDataInfo | undefined;

    app_reviews?: AppendixSerpDaysRatesDataInfo | undefined;

    app_searches?: AppendixSerpDaysRatesDataInfo | undefined;

    errors?: number | undefined;

    languages?: number | undefined;

    locations?: number | undefined;

    categories?: number | undefined;

    id_list?: number | undefined;

    app_listings?: AppendixTrBusinessDataDayLimitsRatesDataInfo | undefined;

    pp_listings?: AppendixDataforseoLabsLimitsRatesDataInfo | undefined;

    tasks_ready?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAppDataLimitsRatesDataInfo) {

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
            this.app_info = data["app_info"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["app_info"]) : <any>undefined;
            this.app_list = data["app_list"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["app_list"]) : <any>undefined;
            this.app_reviews = data["app_reviews"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["app_reviews"]) : <any>undefined;
            this.app_searches = data["app_searches"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["app_searches"]) : <any>undefined;
            this.errors = data["errors"];
            this.languages = data["languages"];
            this.locations = data["locations"];
            this.categories = data["categories"];
            this.id_list = data["id_list"];
            this.app_listings = data["app_listings"] ? AppendixTrBusinessDataDayLimitsRatesDataInfo.fromJS(data["app_listings"]) : <any>undefined;
            this.pp_listings = data["pp_listings"] ? AppendixDataforseoLabsLimitsRatesDataInfo.fromJS(data["pp_listings"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"];
        }
    }

    static fromJS(data: any): AppendixAppDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAppDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_info"] = this.app_info ? AppendixSerpDaysRatesDataInfo.fromJS(this.app_info)?.toJSON() : <any>undefined;
        data["app_list"] = this.app_list ? AppendixSerpDaysRatesDataInfo.fromJS(this.app_list)?.toJSON() : <any>undefined;
        data["app_reviews"] = this.app_reviews ? AppendixSerpDaysRatesDataInfo.fromJS(this.app_reviews)?.toJSON() : <any>undefined;
        data["app_searches"] = this.app_searches ? AppendixSerpDaysRatesDataInfo.fromJS(this.app_searches)?.toJSON() : <any>undefined;
        data["errors"] = this.errors;
        data["languages"] = this.languages;
        data["locations"] = this.locations;
        data["categories"] = this.categories;
        data["id_list"] = this.id_list;
        data["app_listings"] = this.app_listings ? AppendixTrBusinessDataDayLimitsRatesDataInfo.fromJS(this.app_listings)?.toJSON() : <any>undefined;
        data["pp_listings"] = this.pp_listings ? AppendixDataforseoLabsLimitsRatesDataInfo.fromJS(this.pp_listings)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready;
        return data;
    }
}