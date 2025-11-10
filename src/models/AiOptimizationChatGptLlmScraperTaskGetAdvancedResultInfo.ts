import { ChatgptSearchResult, IChatgptSearchResult } from "./ChatgptSearchResult";
import { ChatGptSource, IChatGptSource } from "./ChatGptSource";
import { BaseChatGptLlmScraperElementItem, IBaseChatGptLlmScraperElementItem } from "./BaseChatGptLlmScraperElementItem";


export interface IAiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo   {
        
        /** keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** indicates the model version */
        model?: string | undefined
        
        /** direct URL to search engine results
you can use it to make sure that we provided exact results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** content of the element in markdown format
content of the result formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** array of search results
all web search outputs the model retrieved when looking up information, including duplicates and unused entries */
        search_results?: ChatgptSearchResult[] | undefined
        
        /** array of sources
the sources the model actually cited or relied on in its final answer */
        sources?: ChatGptSource[] | undefined
        
        /** array of fan-out queries
contains related search queries derived from the main query to provide a more comprehensive response */
        fan_out_queries?: string[] | undefined
        
        /** total number of results */
        se_results_count?: number | undefined
        
        /** types of search results
contains types of search results (items) found.
possible item types:
chat_gpt_text, chat_gpt_table, chat_gpt_navigation_list, chat_gpt_images, chat_gpt_local_businesses, chat_gpt_products */
        item_types?: string[] | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** items present in the element */
        items?: BaseChatGptLlmScraperElementItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo  implements IAiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo {
    
    /** keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** indicates the model version */

    model?: string | undefined;
    
    /** direct URL to search engine results
you can use it to make sure that we provided exact results */

    check_url?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** content of the element in markdown format
content of the result formatted in the markdown markup language */

    markdown?: string | undefined;
    
    /** array of search results
all web search outputs the model retrieved when looking up information, including duplicates and unused entries */

    search_results?: ChatgptSearchResult[] | undefined;
    
    /** array of sources
the sources the model actually cited or relied on in its final answer */

    sources?: ChatGptSource[] | undefined;
    
    /** array of fan-out queries
contains related search queries derived from the main query to provide a more comprehensive response */

    fan_out_queries?: string[] | undefined;
    
    /** total number of results */

    se_results_count?: number | undefined;
    
    /** types of search results
contains types of search results (items) found.
possible item types:
chat_gpt_text, chat_gpt_table, chat_gpt_navigation_list, chat_gpt_images, chat_gpt_local_businesses, chat_gpt_products */

    item_types?: string[] | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** items present in the element */

    items?: BaseChatGptLlmScraperElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.model = data["model"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["search_results"])) {
                this.search_results = [];
                for (let item of data["search_results"]) {
                    this.search_results.push(ChatgptSearchResult.fromJS(item));
                }
            }
            if (Array.isArray(data["sources"])) {
                this.sources = [];
                for (let item of data["sources"]) {
                    this.sources.push(ChatGptSource.fromJS(item));
                }
            }
            this.fan_out_queries = data["fan_out_queries"];
            this.se_results_count = data["se_results_count"];
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseChatGptLlmScraperElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["model"] = this.model;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["markdown"] = this.markdown;
        data["search_results"] = null;
        if (Array.isArray(this.search_results)) {
            data["search_results"] = [];
            for (let item of this.search_results) {
                if (item && typeof item.toJSON === "function") {
                    data["search_results"].push(item?.toJSON());
                }
            }
        }
        data["sources"] = null;
        if (Array.isArray(this.sources)) {
            data["sources"] = [];
            for (let item of this.sources) {
                if (item && typeof item.toJSON === "function") {
                    data["sources"].push(item?.toJSON());
                }
            }
        }
        data["fan_out_queries"] = this.fan_out_queries;
        data["se_results_count"] = this.se_results_count;
        data["item_types"] = this.item_types;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}