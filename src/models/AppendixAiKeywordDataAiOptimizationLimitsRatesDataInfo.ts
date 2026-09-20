import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo   {
        
        locations_and_languages?: number | undefined
        
        keywords_search_volume?: AppendixInfo | undefined
        
        available_filters?: number | undefined

    [key: string]: any;

    }

export class AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo  implements IAppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo {

    locations_and_languages?: number | undefined;

    keywords_search_volume?: AppendixInfo | undefined;

    available_filters?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo) {

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
            this.locations_and_languages = data["locations_and_languages"];
            this.keywords_search_volume = data["keywords_search_volume"] ? AppendixInfo.fromJS(data["keywords_search_volume"]) : <any>undefined;
            this.available_filters = data["available_filters"];
        }
    }

    static fromJS(data: any): AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["locations_and_languages"] = this.locations_and_languages;
        data["keywords_search_volume"] = this.keywords_search_volume ? AppendixInfo.fromJS(this.keywords_search_volume)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters;
        return data;
    }
}