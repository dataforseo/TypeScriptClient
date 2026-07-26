import { TechnologiesInfo, ITechnologiesInfo } from "./TechnologiesInfo";


export interface IDomainAnalyticsTechnologiesDomainsByLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** specified domain name */
        domain?: string | undefined
        
        /** domain meta title */
        title?: string | undefined
        
        /** domain meta description */
        description?: string | undefined
        
        /** domain meta keywords */
        meta_keywords?: string[] | undefined
        
        /** backlink rank of the target domain learn more about the metric and how it is calculated in this help center article */
        domain_rank?: number | undefined
        
        /** most recent date when our crawler visited the domain in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2022-10-10 12:57:46 +00:00 */
        last_visited?: string | undefined
        
        /** domain ISO code ISO code of the country that target domain is determined to belong to */
        country_iso_code?: string | undefined
        
        /** domain language code of the language that target domain is determined to be associated with */
        language_code?: string | undefined
        
        /** content language code of the language that content on the target domain is written with */
        content_language_code?: string | undefined
        
        /** phone numbers of the target contact phone numbers indicated on the target website */
        phone_numbers?: string[] | undefined
        
        /** emails of the target emails indicated on the target website */
        emails?: string[] | undefined
        
        /** social media links and handles social media URLs detected in the social graphs of the target website */
        social_graph_urls?: string[] | undefined
        
        /** technologies used by target domain contains objects with the names of technologies used on the website; to get a full list of technologies and their structure, refer to the technologies endpoint */
        technologies?: TechnologiesInfo | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesDomainsByLiveItem  implements IDomainAnalyticsTechnologiesDomainsByLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** specified domain name */

    domain?: string | undefined;

    
    /** domain meta title */

    title?: string | undefined;

    
    /** domain meta description */

    description?: string | undefined;

    
    /** domain meta keywords */

    meta_keywords?: string[] | undefined;

    
    /** backlink rank of the target domain learn more about the metric and how it is calculated in this help center article */

    domain_rank?: number | undefined;

    
    /** most recent date when our crawler visited the domain in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2022-10-10 12:57:46 +00:00 */

    last_visited?: string | undefined;

    
    /** domain ISO code ISO code of the country that target domain is determined to belong to */

    country_iso_code?: string | undefined;

    
    /** domain language code of the language that target domain is determined to be associated with */

    language_code?: string | undefined;

    
    /** content language code of the language that content on the target domain is written with */

    content_language_code?: string | undefined;

    
    /** phone numbers of the target contact phone numbers indicated on the target website */

    phone_numbers?: string[] | undefined;

    
    /** emails of the target emails indicated on the target website */

    emails?: string[] | undefined;

    
    /** social media links and handles social media URLs detected in the social graphs of the target website */

    social_graph_urls?: string[] | undefined;

    
    /** technologies used by target domain contains objects with the names of technologies used on the website; to get a full list of technologies and their structure, refer to the technologies endpoint */

    technologies?: TechnologiesInfo | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesDomainsByLiveItem) {

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
            this.type = data["type"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.meta_keywords = data["meta_keywords"];
            this.domain_rank = data["domain_rank"];
            this.last_visited = data["last_visited"];
            this.country_iso_code = data["country_iso_code"];
            this.language_code = data["language_code"];
            this.content_language_code = data["content_language_code"];
            this.phone_numbers = data["phone_numbers"];
            this.emails = data["emails"];
            this.social_graph_urls = data["social_graph_urls"];
            this.technologies = data["technologies"] ? TechnologiesInfo.fromJS(data["technologies"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesDomainsByLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesDomainsByLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["meta_keywords"] = this.meta_keywords;
        data["domain_rank"] = this.domain_rank;
        data["last_visited"] = this.last_visited;
        data["country_iso_code"] = this.country_iso_code;
        data["language_code"] = this.language_code;
        data["content_language_code"] = this.content_language_code;
        data["phone_numbers"] = this.phone_numbers;
        data["emails"] = this.emails;
        data["social_graph_urls"] = this.social_graph_urls;
        data["technologies"] = this.technologies ? TechnologiesInfo.fromJS(this.technologies)?.toJSON() : <any>undefined;
        return data;
    }
}