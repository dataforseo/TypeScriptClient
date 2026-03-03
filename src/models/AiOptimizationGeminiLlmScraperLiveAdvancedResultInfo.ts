import { SourceInfo, ISourceInfo } from "./SourceInfo";
import { BaseGeminiLlmScraperElementItem, IBaseGeminiLlmScraperElementItem } from "./BaseGeminiLlmScraperElementItem";


export interface IAiOptimizationGeminiLlmScraperLiveAdvancedResultInfo   {
        
        /** keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** indicates the model version */
        model?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** content of the element in markdown format
content of the result formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** array of sources
the sources the model actually cited or relied on in its final answer */
        sources?: SourceInfo[] | undefined
        
        /** total number of results */
        se_results_count?: number | undefined
        
        /** types of search results
contains types of search results (items) found in SERP.
possible item types:
gemini_text, gemini_table, gemini_images */
        item_types?: string[] | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** items present in the element */
        items?: BaseGeminiLlmScraperElementItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationGeminiLlmScraperLiveAdvancedResultInfo  implements IAiOptimizationGeminiLlmScraperLiveAdvancedResultInfo {
    
    /** keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** indicates the model version */

    model?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** content of the element in markdown format
content of the result formatted in the markdown markup language */

    markdown?: string | undefined;
    
    /** array of sources
the sources the model actually cited or relied on in its final answer */

    sources?: SourceInfo[] | undefined;
    
    /** total number of results */

    se_results_count?: number | undefined;
    
    /** types of search results
contains types of search results (items) found in SERP.
possible item types:
gemini_text, gemini_table, gemini_images */

    item_types?: string[] | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** items present in the element */

    items?: BaseGeminiLlmScraperElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationGeminiLlmScraperLiveAdvancedResultInfo) {

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
            this.datetime = data["datetime"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["sources"])) {
                this.sources = [];
                for (let item of data["sources"]) {
                    this.sources.push(SourceInfo.fromJS(item));
                }
            }
            this.se_results_count = data["se_results_count"];
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseGeminiLlmScraperElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationGeminiLlmScraperLiveAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationGeminiLlmScraperLiveAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["model"] = this.model;
        data["datetime"] = this.datetime;
        data["markdown"] = this.markdown;
        data["sources"] = null;
        if (Array.isArray(this.sources)) {
            data["sources"] = [];
            for (let item of this.sources) {
                if (item && typeof item.toJSON === "function") {
                    data["sources"].push(item?.toJSON());
                }
            }
        }
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