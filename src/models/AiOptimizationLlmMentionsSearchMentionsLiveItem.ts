import { Sources, ISources } from "./Sources";
import { SearchResults, ISearchResults } from "./SearchResults";
import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";
import { BrandEntities, IBrandEntities } from "./BrandEntities";


export interface IAiOptimizationLlmMentionsSearchMentionsLiveItem   {
        
        /** platform received in a POST array */
        platform?: string | undefined
        
        /** name of the AI model from which the data was retrieved
Note: for the google platform type, the value is always google_ai_overview */
        model_name?: string | undefined
        
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
the sources the model cited or relied on in its final answer
learn more about the sources and how to retrieve LLM citation data at our Help Center */
        sources?: Sources[] | undefined
        
        /** array of search results
all web search outputs the model retrieved when looking up information, including duplicates and unused entries */
        search_results?: SearchResults[] | undefined
        
        /** current AI search volume rate of a keyword
learn more about this metric here */
        ai_search_volume?: number | undefined
        
        /** monthly AI search volume rates
array of objects with AI search volume rates in a certain month of a year */
        monthly_searches?: MonthlySearchesInfo[] | undefined
        
        /** date and time when the response data was first recorded
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-10-21 06:25:30 +00:00 */
        first_response_at?: string | undefined
        
        /** date and time when the response data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-10-21 06:25:30 +00:00 */
        last_response_at?: string | undefined
        
        /** array of brand entities
contains information on brands mentioned in the response */
        brand_entities?: BrandEntities[] | undefined
        
        /** array of fan-out queries
contains related search queries derived from the main query to provide a more comprehensive response */
        fan_out_queries?: string[] | undefined
        
        /** indicates whether the response was generated using web search results
if true, the model retrieved live web search results to produce the response
if false, the response was generated from the model's internal knowledge */
        is_web_search_based?: boolean | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsSearchMentionsLiveItem  implements IAiOptimizationLlmMentionsSearchMentionsLiveItem {

    
    /** platform received in a POST array */

    platform?: string | undefined;

    
    /** name of the AI model from which the data was retrieved
Note: for the google platform type, the value is always google_ai_overview */

    model_name?: string | undefined;

    
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
the sources the model cited or relied on in its final answer
learn more about the sources and how to retrieve LLM citation data at our Help Center */

    sources?: Sources[] | undefined;

    
    /** array of search results
all web search outputs the model retrieved when looking up information, including duplicates and unused entries */

    search_results?: SearchResults[] | undefined;

    
    /** current AI search volume rate of a keyword
learn more about this metric here */

    ai_search_volume?: number | undefined;

    
    /** monthly AI search volume rates
array of objects with AI search volume rates in a certain month of a year */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    
    /** date and time when the response data was first recorded
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-10-21 06:25:30 +00:00 */

    first_response_at?: string | undefined;

    
    /** date and time when the response data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-10-21 06:25:30 +00:00 */

    last_response_at?: string | undefined;

    
    /** array of brand entities
contains information on brands mentioned in the response */

    brand_entities?: BrandEntities[] | undefined;

    
    /** array of fan-out queries
contains related search queries derived from the main query to provide a more comprehensive response */

    fan_out_queries?: string[] | undefined;

    
    /** indicates whether the response was generated using web search results
if true, the model retrieved live web search results to produce the response
if false, the response was generated from the model's internal knowledge */

    is_web_search_based?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsSearchMentionsLiveItem) {

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
            this.model_name = data["model_name"];
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
            this.is_web_search_based = data["is_web_search_based"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsSearchMentionsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsSearchMentionsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["platform"] = this.platform;
        data["model_name"] = this.model_name;
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
        data["is_web_search_based"] = this.is_web_search_based;
        return data;
    }
}