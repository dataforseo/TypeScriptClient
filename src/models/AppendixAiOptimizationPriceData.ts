import { AppendixLlmScraperAiOptimizationPriceData, IAppendixLlmScraperAiOptimizationPriceData } from "./AppendixLlmScraperAiOptimizationPriceData";
import { AppendixLlmMentionsAiOptimizationPriceData, IAppendixLlmMentionsAiOptimizationPriceData } from "./AppendixLlmMentionsAiOptimizationPriceData";
import { AppendixAiKeywordDataAiOptimizationPriceData, IAppendixAiKeywordDataAiOptimizationPriceData } from "./AppendixAiKeywordDataAiOptimizationPriceData";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixLlmResponsesAiOptimizationPriceData, IAppendixLlmResponsesAiOptimizationPriceData } from "./AppendixLlmResponsesAiOptimizationPriceData";


export interface IAppendixAiOptimizationPriceData   {
        
        llm_scraper?: AppendixLlmScraperAiOptimizationPriceData | undefined
        
        llm_mentions?: AppendixLlmMentionsAiOptimizationPriceData | undefined
        
        ai_keyword_data?: AppendixAiKeywordDataAiOptimizationPriceData | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        llm_responses?: AppendixLlmResponsesAiOptimizationPriceData | undefined

    [key: string]: any;

    }

export class AppendixAiOptimizationPriceData  implements IAppendixAiOptimizationPriceData {

    llm_scraper?: AppendixLlmScraperAiOptimizationPriceData | undefined;

    llm_mentions?: AppendixLlmMentionsAiOptimizationPriceData | undefined;

    ai_keyword_data?: AppendixAiKeywordDataAiOptimizationPriceData | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    llm_responses?: AppendixLlmResponsesAiOptimizationPriceData | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAiOptimizationPriceData) {

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
            this.llm_scraper = data["llm_scraper"] ? AppendixLlmScraperAiOptimizationPriceData.fromJS(data["llm_scraper"]) : <any>undefined;
            this.llm_mentions = data["llm_mentions"] ? AppendixLlmMentionsAiOptimizationPriceData.fromJS(data["llm_mentions"]) : <any>undefined;
            this.ai_keyword_data = data["ai_keyword_data"] ? AppendixAiKeywordDataAiOptimizationPriceData.fromJS(data["ai_keyword_data"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.llm_responses = data["llm_responses"] ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(data["llm_responses"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAiOptimizationPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAiOptimizationPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["llm_scraper"] = this.llm_scraper ? AppendixLlmScraperAiOptimizationPriceData.fromJS(this.llm_scraper)?.toJSON() : <any>undefined;
        data["llm_mentions"] = this.llm_mentions ? AppendixLlmMentionsAiOptimizationPriceData.fromJS(this.llm_mentions)?.toJSON() : <any>undefined;
        data["ai_keyword_data"] = this.ai_keyword_data ? AppendixAiKeywordDataAiOptimizationPriceData.fromJS(this.ai_keyword_data)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["llm_responses"] = this.llm_responses ? AppendixLlmResponsesAiOptimizationPriceData.fromJS(this.llm_responses)?.toJSON() : <any>undefined;
        return data;
    }
}