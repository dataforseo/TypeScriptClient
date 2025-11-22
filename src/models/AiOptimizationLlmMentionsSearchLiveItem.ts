import { Sources, ISources } from "./Sources";
import { SearchResults, ISearchResults } from "./SearchResults";
import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";


export interface IAiOptimizationLlmMentionsSearchLiveItem   {
        
        /** platform received in a POST array */
        platform?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** relevant question */
        question?: string | undefined
        
        /** relevant answer in markdown format
content of the result formatted in the markdown markup language */
        answer?: string | undefined
        
        /** array of sources
the sources the model cited or relied on in its final answer */
        sources?: Sources[] | undefined
        
        /** array of search results
all web search outputs the model retrieved when looking up information, including duplicates and unused entries */
        search_results?: SearchResults[] | undefined
        
        /** current AI search volume rate of a keyword
learn more about this metric here */
        ai_search_volume?: number | undefined
        
        monthly_searches?: MonthlySearchesInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsSearchLiveItem  implements IAiOptimizationLlmMentionsSearchLiveItem {
    
    /** platform received in a POST array */

    platform?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** relevant question */

    question?: string | undefined;
    
    /** relevant answer in markdown format
content of the result formatted in the markdown markup language */

    answer?: string | undefined;
    
    /** array of sources
the sources the model cited or relied on in its final answer */

    sources?: Sources[] | undefined;
    
    /** array of search results
all web search outputs the model retrieved when looking up information, including duplicates and unused entries */

    search_results?: SearchResults[] | undefined;
    
    /** current AI search volume rate of a keyword
learn more about this metric here */

    ai_search_volume?: number | undefined;

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsSearchLiveItem) {

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
            this.platform = data["platform"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.question = data["question"];
            this.answer = data["answer"];
            if (Array.isArray(data["sources"])) {
                this.sources = [];
                for (let item of data["sources"]) {
                    this.sources.push(Sources.fromJS(item));
                }
            }
            if (Array.isArray(data["search_results"])) {
                this.search_results = [];
                for (let item of data["search_results"]) {
                    this.search_results.push(SearchResults.fromJS(item));
                }
            }
            this.ai_search_volume = data["ai_search_volume"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsSearchLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsSearchLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["platform"] = this.platform;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["question"] = this.question;
        data["answer"] = this.answer;
        data["sources"] = null;
        if (Array.isArray(this.sources)) {
            data["sources"] = [];
            for (let item of this.sources) {
                if (item && typeof item.toJSON === "function") {
                    data["sources"].push(item?.toJSON());
                }
            }
        }
        data["search_results"] = null;
        if (Array.isArray(this.search_results)) {
            data["search_results"] = [];
            for (let item of this.search_results) {
                if (item && typeof item.toJSON === "function") {
                    data["search_results"].push(item?.toJSON());
                }
            }
        }
        data["ai_search_volume"] = this.ai_search_volume;
        data["monthly_searches"] = null;
        if (Array.isArray(this.monthly_searches)) {
            data["monthly_searches"] = [];
            for (let item of this.monthly_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["monthly_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}