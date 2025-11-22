import { GroupElement, IGroupElement } from "./GroupElement";


export interface IAiOptimizationLlmMentionssLiveItem   {
        
        /** URL of a found page
the URL of a page found in LLM mentions for the specified target */
        key?: string | undefined
        
        /** location-based grouping
array of objects containing page mention metrics segmented by geographical location */
        location?: GroupElement[] | undefined
        
        /** language-based grouping
array of objects containing page mention metrics segmented by content language */
        language?: GroupElement[] | undefined
        
        /** platform-based grouping
array of group elements containing page mention metrics segmented by AI platform */
        platform?: GroupElement[] | undefined
        
        /** source domains relevant to the specific page
array of objects containing data on domains that are cited as sources in LLM responses */
        sources_domain?: GroupElement[] | undefined
        
        /** search results domains relevant to the specific page
array of objects containing data on domains that appear in search results related to LLM queries */
        search_results_domain?: GroupElement[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionssLiveItem  implements IAiOptimizationLlmMentionssLiveItem {
    
    /** URL of a found page
the URL of a page found in LLM mentions for the specified target */

    key?: string | undefined;
    
    /** location-based grouping
array of objects containing page mention metrics segmented by geographical location */

    location?: GroupElement[] | undefined;
    
    /** language-based grouping
array of objects containing page mention metrics segmented by content language */

    language?: GroupElement[] | undefined;
    
    /** platform-based grouping
array of group elements containing page mention metrics segmented by AI platform */

    platform?: GroupElement[] | undefined;
    
    /** source domains relevant to the specific page
array of objects containing data on domains that are cited as sources in LLM responses */

    sources_domain?: GroupElement[] | undefined;
    
    /** search results domains relevant to the specific page
array of objects containing data on domains that appear in search results related to LLM queries */

    search_results_domain?: GroupElement[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionssLiveItem) {

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
            this.key = data["key"];
            if (Array.isArray(data["location"])) {
                this.location = [];
                for (let item of data["location"]) {
                    this.location.push(GroupElement.fromJS(item));
                }
            }
            if (Array.isArray(data["language"])) {
                this.language = [];
                for (let item of data["language"]) {
                    this.language.push(GroupElement.fromJS(item));
                }
            }
            if (Array.isArray(data["platform"])) {
                this.platform = [];
                for (let item of data["platform"]) {
                    this.platform.push(GroupElement.fromJS(item));
                }
            }
            if (Array.isArray(data["sources_domain"])) {
                this.sources_domain = [];
                for (let item of data["sources_domain"]) {
                    this.sources_domain.push(GroupElement.fromJS(item));
                }
            }
            if (Array.isArray(data["search_results_domain"])) {
                this.search_results_domain = [];
                for (let item of data["search_results_domain"]) {
                    this.search_results_domain.push(GroupElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionssLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionssLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["key"] = this.key;
        data["location"] = null;
        if (Array.isArray(this.location)) {
            data["location"] = [];
            for (let item of this.location) {
                if (item && typeof item.toJSON === "function") {
                    data["location"].push(item?.toJSON());
                }
            }
        }
        data["language"] = null;
        if (Array.isArray(this.language)) {
            data["language"] = [];
            for (let item of this.language) {
                if (item && typeof item.toJSON === "function") {
                    data["language"].push(item?.toJSON());
                }
            }
        }
        data["platform"] = null;
        if (Array.isArray(this.platform)) {
            data["platform"] = [];
            for (let item of this.platform) {
                if (item && typeof item.toJSON === "function") {
                    data["platform"].push(item?.toJSON());
                }
            }
        }
        data["sources_domain"] = null;
        if (Array.isArray(this.sources_domain)) {
            data["sources_domain"] = [];
            for (let item of this.sources_domain) {
                if (item && typeof item.toJSON === "function") {
                    data["sources_domain"].push(item?.toJSON());
                }
            }
        }
        data["search_results_domain"] = null;
        if (Array.isArray(this.search_results_domain)) {
            data["search_results_domain"] = [];
            for (let item of this.search_results_domain) {
                if (item && typeof item.toJSON === "function") {
                    data["search_results_domain"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}