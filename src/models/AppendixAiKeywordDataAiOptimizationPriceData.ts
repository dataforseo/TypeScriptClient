import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";


export interface IAppendixAiKeywordDataAiOptimizationPriceData   {
        
        available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        keywords_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAiKeywordDataAiOptimizationPriceData  implements IAppendixAiKeywordDataAiOptimizationPriceData {

    available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    keywords_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAiKeywordDataAiOptimizationPriceData) {

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
            this.keywords_search_volume = data["keywords_search_volume"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keywords_search_volume"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations_and_languages"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAiKeywordDataAiOptimizationPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAiKeywordDataAiOptimizationPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["available_filters"] = this.available_filters ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.available_filters)?.toJSON() : <any>undefined;
        data["keywords_search_volume"] = this.keywords_search_volume ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keywords_search_volume)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations_and_languages)?.toJSON() : <any>undefined;
        return data;
    }
}