import { Sources, ISources } from "./Sources";
import { SearchResults, ISearchResults } from "./SearchResults";
import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";
import { BrandEntities, IBrandEntities } from "./BrandEntities";


export interface IAiOptimizationLlmMentionsSearchLiveItem   {
        
        /** platform received in a POST array */
        platform?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** relevant question */
        question?: string | undefined
        
        /** relevant answer in markdown formatcontent of the result formatted in the markdown markup language */
        answer?: string | undefined
        
        /** array of sourcesthe sources the model cited or relied on in its final answer */
        sources?: Sources[] | undefined
        
        /** array of search resultsall web search outputs the model retrieved when looking up information, including duplicates and unused entries */
        search_results?: SearchResults[] | undefined
        
        /** current AI search volume rate of a keywordlearn more about this metric here */
        ai_search_volume?: number | undefined
        
        /** monthly AI search volume ratesarray of objects with AI search volume rates in a certain month of a year */
        monthly_searches?: MonthlySearchesInfo[] | undefined
        
        /** date and time when the response data was first recordedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2025-10-21 06:25:30 +00:00 */
        first_response_at?: string | undefined
        
        /** date and time when the response data was last updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2025-10-21 06:25:30 +00:00 */
        last_response_at?: string | undefined
        
        /** array of brand entitiescontains information on brands mentioned in the response */
        brand_entities?: BrandEntities[] | undefined
        
        /** array of fan-out queriescontains related search queries derived from the main query to provide a more comprehensive response */
        fan_out_queries?: string[] | undefined

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
    
    /** relevant answer in markdown formatcontent of the result formatted in the markdown markup language */

    answer?: string | undefined;
    
    /** array of sourcesthe sources the model cited or relied on in its final answer */

    sources?: Sources[] | undefined;
    
    /** array of search resultsall web search outputs the model retrieved when looking up information, including duplicates and unused entries */

    search_results?: SearchResults[] | undefined;
    
    /** current AI search volume rate of a keywordlearn more about this metric here */

    ai_search_volume?: number | undefined;
    
    /** monthly AI search volume ratesarray of objects with AI search volume rates in a certain month of a year */

    monthly_searches?: MonthlySearchesInfo[] | undefined;
    
    /** date and time when the response data was first recordedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2025-10-21 06:25:30 +00:00 */

    first_response_at?: string | undefined;
    
    /** date and time when the response data was last updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2025-10-21 06:25:30 +00:00 */

    last_response_at?: string | undefined;
    
    /** array of brand entitiescontains information on brands mentioned in the response */

    brand_entities?: BrandEntities[] | undefined;
    
    /** array of fan-out queriescontains related search queries derived from the main query to provide a more comprehensive response */

    fan_out_queries?: string[] | undefined;

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
            this.first_response_at = data["first_response_at"];
            this.last_response_at = data["last_response_at"];
            if (Array.isArray(data["brand_entities"])) {
                this.brand_entities = [];
                for (let item of data["brand_entities"]) {
                    this.brand_entities.push(BrandEntities.fromJS(item));
                }
            }
            this.fan_out_queries = data["fan_out_queries"];
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
        data["first_response_at"] = this.first_response_at;
        data["last_response_at"] = this.last_response_at;
        data["brand_entities"] = null;
        if (Array.isArray(this.brand_entities)) {
            data["brand_entities"] = [];
            for (let item of this.brand_entities) {
                if (item && typeof item.toJSON === "function") {
                    data["brand_entities"].push(item?.toJSON());
                }
            }
        }
        data["fan_out_queries"] = this.fan_out_queries;
        return data;
    }
}