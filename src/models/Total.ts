import { GroupElement, IGroupElement } from "./GroupElement";


export interface ITotal   {
        
        /** location-based grouping
array of objects containing mention metrics segmented by geographical location */
        location?: GroupElement[] | undefined
        
        /** language-based grouping
array of objects containing mention metrics segmented by content language */
        language?: GroupElement[] | undefined
        
        /** platform-based grouping
array of group elements containing mention metrics segmented by AI platform */
        platform?: GroupElement[] | undefined
        
        /** found source domains relevant to the target
array of objects containing data on top domains that are cited as sources in LLM responses */
        sources_domain?: GroupElement[] | undefined
        
        /** found search results domains relevant to the target
array of objects containing data on top domains that appear in search results related to LLM queries */
        search_results_domain?: GroupElement[] | undefined

    [key: string]: any;

    }

export class Total  implements ITotal {
    
    /** location-based grouping
array of objects containing mention metrics segmented by geographical location */

    location?: GroupElement[] | undefined;
    
    /** language-based grouping
array of objects containing mention metrics segmented by content language */

    language?: GroupElement[] | undefined;
    
    /** platform-based grouping
array of group elements containing mention metrics segmented by AI platform */

    platform?: GroupElement[] | undefined;
    
    /** found source domains relevant to the target
array of objects containing data on top domains that are cited as sources in LLM responses */

    sources_domain?: GroupElement[] | undefined;
    
    /** found search results domains relevant to the target
array of objects containing data on top domains that appear in search results related to LLM queries */

    search_results_domain?: GroupElement[] | undefined;

    [key: string]: any;


    constructor(data?: ITotal) {

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

    static fromJS(data: any): Total {
        data = typeof data === 'object' ? data : {};


        let result = new Total();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
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