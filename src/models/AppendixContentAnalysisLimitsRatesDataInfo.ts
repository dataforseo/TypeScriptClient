import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixContentAnalysisLimitsRatesDataInfo   {
        
        search?: AppendixInfo | undefined
        
        summary?: AppendixInfo | undefined
        
        sentiment_analysis?: AppendixInfo | undefined
        
        rating_distribution?: AppendixInfo | undefined
        
        phrase_trends?: AppendixInfo | undefined
        
        category_trends?: AppendixInfo | undefined
        
        locations?: number | undefined
        
        languages?: number | undefined
        
        categories?: number | undefined
        
        errors?: number | undefined
        
        available_filters?: number | undefined
        
        id_list?: number | undefined

    [key: string]: any;

    }

export class AppendixContentAnalysisLimitsRatesDataInfo  implements IAppendixContentAnalysisLimitsRatesDataInfo {

    search?: AppendixInfo | undefined;

    summary?: AppendixInfo | undefined;

    sentiment_analysis?: AppendixInfo | undefined;

    rating_distribution?: AppendixInfo | undefined;

    phrase_trends?: AppendixInfo | undefined;

    category_trends?: AppendixInfo | undefined;

    locations?: number | undefined;

    languages?: number | undefined;

    categories?: number | undefined;

    errors?: number | undefined;

    available_filters?: number | undefined;

    id_list?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixContentAnalysisLimitsRatesDataInfo) {

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
            this.search = data["search"] ? AppendixInfo.fromJS(data["search"]) : <any>undefined;
            this.summary = data["summary"] ? AppendixInfo.fromJS(data["summary"]) : <any>undefined;
            this.sentiment_analysis = data["sentiment_analysis"] ? AppendixInfo.fromJS(data["sentiment_analysis"]) : <any>undefined;
            this.rating_distribution = data["rating_distribution"] ? AppendixInfo.fromJS(data["rating_distribution"]) : <any>undefined;
            this.phrase_trends = data["phrase_trends"] ? AppendixInfo.fromJS(data["phrase_trends"]) : <any>undefined;
            this.category_trends = data["category_trends"] ? AppendixInfo.fromJS(data["category_trends"]) : <any>undefined;
            this.locations = data["locations"];
            this.languages = data["languages"];
            this.categories = data["categories"];
            this.errors = data["errors"];
            this.available_filters = data["available_filters"];
            this.id_list = data["id_list"];
        }
    }

    static fromJS(data: any): AppendixContentAnalysisLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixContentAnalysisLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search ? AppendixInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        data["summary"] = this.summary ? AppendixInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        data["sentiment_analysis"] = this.sentiment_analysis ? AppendixInfo.fromJS(this.sentiment_analysis)?.toJSON() : <any>undefined;
        data["rating_distribution"] = this.rating_distribution ? AppendixInfo.fromJS(this.rating_distribution)?.toJSON() : <any>undefined;
        data["phrase_trends"] = this.phrase_trends ? AppendixInfo.fromJS(this.phrase_trends)?.toJSON() : <any>undefined;
        data["category_trends"] = this.category_trends ? AppendixInfo.fromJS(this.category_trends)?.toJSON() : <any>undefined;
        data["locations"] = this.locations;
        data["languages"] = this.languages;
        data["categories"] = this.categories;
        data["errors"] = this.errors;
        data["available_filters"] = this.available_filters;
        data["id_list"] = this.id_list;
        return data;
    }
}