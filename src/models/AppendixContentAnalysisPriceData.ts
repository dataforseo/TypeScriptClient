import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";


export interface IAppendixContentAnalysisPriceData   {
        
        categories?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        category_trends?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        phrase_trends?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        rating_distribution?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        search?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        sentiment_analysis?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        summary?: AppendixBingKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixContentAnalysisPriceData  implements IAppendixContentAnalysisPriceData {

    categories?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    category_trends?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    phrase_trends?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    rating_distribution?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    search?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    sentiment_analysis?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixContentAnalysisPriceData) {

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
            this.categories = data["categories"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["categories"]) : <any>undefined;
            this.category_trends = data["category_trends"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["category_trends"]) : <any>undefined;
            this.available_filters = data["available_filters"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["available_filters"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.phrase_trends = data["phrase_trends"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["phrase_trends"]) : <any>undefined;
            this.rating_distribution = data["rating_distribution"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["rating_distribution"]) : <any>undefined;
            this.search = data["search"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search"]) : <any>undefined;
            this.sentiment_analysis = data["sentiment_analysis"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["sentiment_analysis"]) : <any>undefined;
            this.summary = data["summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixContentAnalysisPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixContentAnalysisPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["categories"] = this.categories ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.categories)?.toJSON() : <any>undefined;
        data["category_trends"] = this.category_trends ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.category_trends)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.available_filters)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["phrase_trends"] = this.phrase_trends ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.phrase_trends)?.toJSON() : <any>undefined;
        data["rating_distribution"] = this.rating_distribution ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.rating_distribution)?.toJSON() : <any>undefined;
        data["search"] = this.search ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        data["sentiment_analysis"] = this.sentiment_analysis ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.sentiment_analysis)?.toJSON() : <any>undefined;
        data["summary"] = this.summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        return data;
    }
}