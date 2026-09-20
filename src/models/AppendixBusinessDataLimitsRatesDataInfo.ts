import { AppendixBusinessDataGoogleInfo, IAppendixBusinessDataGoogleInfo } from "./AppendixBusinessDataGoogleInfo";
import { AppendixTrBusinessDataDayLimitsRatesDataInfo, IAppendixTrBusinessDataDayLimitsRatesDataInfo } from "./AppendixTrBusinessDataDayLimitsRatesDataInfo";
import { AppendixBusinessListingsBusinessDataLimitsRatesDataInfo, IAppendixBusinessListingsBusinessDataLimitsRatesDataInfo } from "./AppendixBusinessListingsBusinessDataLimitsRatesDataInfo";


export interface IAppendixBusinessDataLimitsRatesDataInfo   {
        
        google?: AppendixBusinessDataGoogleInfo | undefined
        
        locations?: number | undefined
        
        languages?: number | undefined
        
        errors?: number | undefined
        
        tripadvisor?: AppendixTrBusinessDataDayLimitsRatesDataInfo | undefined
        
        trustpilot?: AppendixTrBusinessDataDayLimitsRatesDataInfo | undefined
        
        id_list?: number | undefined
        
        business_listings?: AppendixBusinessListingsBusinessDataLimitsRatesDataInfo | undefined
        
        available_filters?: number | undefined
        
        tasks_ready?: number | undefined

    [key: string]: any;

    }

export class AppendixBusinessDataLimitsRatesDataInfo  implements IAppendixBusinessDataLimitsRatesDataInfo {

    google?: AppendixBusinessDataGoogleInfo | undefined;

    locations?: number | undefined;

    languages?: number | undefined;

    errors?: number | undefined;

    tripadvisor?: AppendixTrBusinessDataDayLimitsRatesDataInfo | undefined;

    trustpilot?: AppendixTrBusinessDataDayLimitsRatesDataInfo | undefined;

    id_list?: number | undefined;

    business_listings?: AppendixBusinessListingsBusinessDataLimitsRatesDataInfo | undefined;

    available_filters?: number | undefined;

    tasks_ready?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBusinessDataLimitsRatesDataInfo) {

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
            this.google = data["google"] ? AppendixBusinessDataGoogleInfo.fromJS(data["google"]) : <any>undefined;
            this.locations = data["locations"];
            this.languages = data["languages"];
            this.errors = data["errors"];
            this.tripadvisor = data["tripadvisor"] ? AppendixTrBusinessDataDayLimitsRatesDataInfo.fromJS(data["tripadvisor"]) : <any>undefined;
            this.trustpilot = data["trustpilot"] ? AppendixTrBusinessDataDayLimitsRatesDataInfo.fromJS(data["trustpilot"]) : <any>undefined;
            this.id_list = data["id_list"];
            this.business_listings = data["business_listings"] ? AppendixBusinessListingsBusinessDataLimitsRatesDataInfo.fromJS(data["business_listings"]) : <any>undefined;
            this.available_filters = data["available_filters"];
            this.tasks_ready = data["tasks_ready"];
        }
    }

    static fromJS(data: any): AppendixBusinessDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google"] = this.google ? AppendixBusinessDataGoogleInfo.fromJS(this.google)?.toJSON() : <any>undefined;
        data["locations"] = this.locations;
        data["languages"] = this.languages;
        data["errors"] = this.errors;
        data["tripadvisor"] = this.tripadvisor ? AppendixTrBusinessDataDayLimitsRatesDataInfo.fromJS(this.tripadvisor)?.toJSON() : <any>undefined;
        data["trustpilot"] = this.trustpilot ? AppendixTrBusinessDataDayLimitsRatesDataInfo.fromJS(this.trustpilot)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list;
        data["business_listings"] = this.business_listings ? AppendixBusinessListingsBusinessDataLimitsRatesDataInfo.fromJS(this.business_listings)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters;
        data["tasks_ready"] = this.tasks_ready;
        return data;
    }
}