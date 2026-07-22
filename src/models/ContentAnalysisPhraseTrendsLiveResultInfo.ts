import { TopDomainInfo, ITopDomainInfo } from "./TopDomainInfo";
import { ContentAnalysisCategoriesInfo, IContentAnalysisCategoriesInfo } from "./ContentAnalysisCategoriesInfo";


export interface IContentAnalysisPhraseTrendsLiveResultInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** date for which the data is provided */
        date?: string | undefined
        
        /** total number of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date */
        rank?: number | undefined
        
        /** top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain */
        top_domains?: TopDomainInfo[] | undefined
        
        /** sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: 'anger', 'happiness', 'love', 'sadness', 'share', 'fun' */
        sentiment_connotations?: { [key: string]: number; } | undefined
        
        /** connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: 'positive', 'negative', 'neutral' */
        connotation_types?: { [key: string]: number; } | undefined
        
        /** text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint */
        text_categories?: ContentAnalysisCategoriesInfo[] | undefined
        
        /** page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint */
        page_categories?: ContentAnalysisCategoriesInfo[] | undefined
        
        /** page types
contains page types and citation count per each page type */
        page_types?: { [key: string]: number; } | undefined
        
        /** countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint */
        countries?: { [key: string]: number; } | undefined
        
        /** languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint */
        languages?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class ContentAnalysisPhraseTrendsLiveResultInfo  implements IContentAnalysisPhraseTrendsLiveResultInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** date for which the data is provided */

    date?: string | undefined;

    
    /** total number of results in our database relevant to your request */

    total_count?: number | undefined;

    
    /** rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date */

    rank?: number | undefined;

    
    /** top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain */

    top_domains?: TopDomainInfo[] | undefined;

    
    /** sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: 'anger', 'happiness', 'love', 'sadness', 'share', 'fun' */

    sentiment_connotations?: { [key: string]: number; } | undefined;

    
    /** connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: 'positive', 'negative', 'neutral' */

    connotation_types?: { [key: string]: number; } | undefined;

    
    /** text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint */

    text_categories?: ContentAnalysisCategoriesInfo[] | undefined;

    
    /** page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint */

    page_categories?: ContentAnalysisCategoriesInfo[] | undefined;

    
    /** page types
contains page types and citation count per each page type */

    page_types?: { [key: string]: number; } | undefined;

    
    /** countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint */

    countries?: { [key: string]: number; } | undefined;

    
    /** languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint */

    languages?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisPhraseTrendsLiveResultInfo) {

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
            this.date = data["date"];
            this.total_count = data["total_count"];
            this.rank = data["rank"];
            if (Array.isArray(data["top_domains"])) {
                this.top_domains = [];
                for (let item of data["top_domains"]) {
                    this.top_domains.push(TopDomainInfo.fromJS(item));
                }
            }
            this.sentiment_connotations = data["sentiment_connotations"];
            this.connotation_types = data["connotation_types"];
            if (Array.isArray(data["text_categories"])) {
                this.text_categories = [];
                for (let item of data["text_categories"]) {
                    this.text_categories.push(ContentAnalysisCategoriesInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["page_categories"])) {
                this.page_categories = [];
                for (let item of data["page_categories"]) {
                    this.page_categories.push(ContentAnalysisCategoriesInfo.fromJS(item));
                }
            }
            this.page_types = data["page_types"];
            this.countries = data["countries"];
            this.languages = data["languages"];
        }
    }

    static fromJS(data: any): ContentAnalysisPhraseTrendsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisPhraseTrendsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["date"] = this.date;
        data["total_count"] = this.total_count;
        data["rank"] = this.rank;
        data["top_domains"] = null;
        if (Array.isArray(this.top_domains)) {
            data["top_domains"] = [];
            for (let item of this.top_domains) {
                if (item && typeof item.toJSON === "function") {
                    data["top_domains"].push(item?.toJSON());
                }
            }
        }
        data["sentiment_connotations"] = this.sentiment_connotations;
        data["connotation_types"] = this.connotation_types;
        data["text_categories"] = null;
        if (Array.isArray(this.text_categories)) {
            data["text_categories"] = [];
            for (let item of this.text_categories) {
                if (item && typeof item.toJSON === "function") {
                    data["text_categories"].push(item?.toJSON());
                }
            }
        }
        data["page_categories"] = null;
        if (Array.isArray(this.page_categories)) {
            data["page_categories"] = [];
            for (let item of this.page_categories) {
                if (item && typeof item.toJSON === "function") {
                    data["page_categories"].push(item?.toJSON());
                }
            }
        }
        data["page_types"] = this.page_types;
        data["countries"] = this.countries;
        data["languages"] = this.languages;
        return data;
    }
}