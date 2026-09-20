import { AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo, IAppendixLlmResponsesAiOptimizationLimitsRatesDataInfo } from "./AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo";
import { AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo, IAppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo } from "./AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo";
import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo, IAppendixLlmMentionsAiOptimizationLimitsRatesDataInfo } from "./AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo";


export interface IAppendixAiOptimizationLimitsRatesDataInfo   {
        
        llm_responses?: AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo | undefined
        
        ai_keyword_data?: AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo | undefined
        
        errors?: number | undefined
        
        llm_scraper?: AppendixSerpDaysRatesDataInfo | undefined
        
        llm_mentions?: AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo | undefined
        
        id_list?: number | undefined

    [key: string]: any;

    }

export class AppendixAiOptimizationLimitsRatesDataInfo  implements IAppendixAiOptimizationLimitsRatesDataInfo {

    llm_responses?: AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo | undefined;

    ai_keyword_data?: AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo | undefined;

    errors?: number | undefined;

    llm_scraper?: AppendixSerpDaysRatesDataInfo | undefined;

    llm_mentions?: AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo | undefined;

    id_list?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAiOptimizationLimitsRatesDataInfo) {

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
            this.llm_responses = data["llm_responses"] ? AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo.fromJS(data["llm_responses"]) : <any>undefined;
            this.ai_keyword_data = data["ai_keyword_data"] ? AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo.fromJS(data["ai_keyword_data"]) : <any>undefined;
            this.errors = data["errors"];
            this.llm_scraper = data["llm_scraper"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["llm_scraper"]) : <any>undefined;
            this.llm_mentions = data["llm_mentions"] ? AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo.fromJS(data["llm_mentions"]) : <any>undefined;
            this.id_list = data["id_list"];
        }
    }

    static fromJS(data: any): AppendixAiOptimizationLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAiOptimizationLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["llm_responses"] = this.llm_responses ? AppendixLlmResponsesAiOptimizationLimitsRatesDataInfo.fromJS(this.llm_responses)?.toJSON() : <any>undefined;
        data["ai_keyword_data"] = this.ai_keyword_data ? AppendixAiKeywordDataAiOptimizationLimitsRatesDataInfo.fromJS(this.ai_keyword_data)?.toJSON() : <any>undefined;
        data["errors"] = this.errors;
        data["llm_scraper"] = this.llm_scraper ? AppendixSerpDaysRatesDataInfo.fromJS(this.llm_scraper)?.toJSON() : <any>undefined;
        data["llm_mentions"] = this.llm_mentions ? AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo.fromJS(this.llm_mentions)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list;
        return data;
    }
}