import { AiMonthlySearches, IAiMonthlySearches } from "./AiMonthlySearches";


export interface IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem   {
        
        /** specified keyword */
        keyword?: string | undefined
        
        /** current AI search volume rate of a keywordlearn more about this metric here */
        ai_search_volume?: number | undefined
        
        /** monthly AI search volume ratesarray of objects with AI search volume rates in a certain month of a year */
        ai_monthly_searches?: AiMonthlySearches[] | undefined

    [key: string]: any;

    }

export class AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem  implements IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem {
    
    /** specified keyword */

    keyword?: string | undefined;
    
    /** current AI search volume rate of a keywordlearn more about this metric here */

    ai_search_volume?: number | undefined;
    
    /** monthly AI search volume ratesarray of objects with AI search volume rates in a certain month of a year */

    ai_monthly_searches?: AiMonthlySearches[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem) {

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
            this.keyword = data["keyword"];
            this.ai_search_volume = data["ai_search_volume"];
            if (Array.isArray(data["ai_monthly_searches"])) {
                this.ai_monthly_searches = [];
                for (let item of data["ai_monthly_searches"]) {
                    this.ai_monthly_searches.push(AiMonthlySearches.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["ai_search_volume"] = this.ai_search_volume;
        data["ai_monthly_searches"] = null;
        if (Array.isArray(this.ai_monthly_searches)) {
            data["ai_monthly_searches"] = [];
            for (let item of this.ai_monthly_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["ai_monthly_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}