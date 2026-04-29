import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { AiOverviewElement, IAiOverviewElement } from "./AiOverviewElement";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";


export interface IBaseSerpApiProductConsiderationExpandedElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiProductConsiderationExpandedElementItem  implements IBaseSerpApiProductConsiderationExpandedElementItem {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiProductConsiderationExpandedElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
        }
    }

    static fromJS(data: any): BaseSerpApiProductConsiderationExpandedElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "product_considerations_expanded_element") {

            let result = new SerpApiProductConsiderationsExpandedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_considerations_ai_overview_expanded_element") {

            let result = new SerpApiProductConsiderationsAiOverviewExpandedElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiProductConsiderationExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}

 
export interface ISerpApiProductConsiderationsExpandedElementItem  extends IBaseSerpApiProductConsiderationExpandedElementItem    {
        
        /** title of the row */
        title?: string | undefined
        
        /** the title of the featured snippets source page */
        featured_title?: string | undefined
        
        /** breadcrumb of the Ad element in SERP */
        breadcrumb?: string | undefined
        
        /** text alongside the title */
        snippet?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** URL of element */
        url?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** search queries related to the elment */
        related_searches?: string[] | undefined
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined

    [key: string]: any;

    }

export class SerpApiProductConsiderationsExpandedElementItem  extends BaseSerpApiProductConsiderationExpandedElementItem   implements ISerpApiProductConsiderationsExpandedElementItem {
    
    /** title of the row */

    title?: string | undefined;
    
    /** the title of the featured snippets source page */

    featured_title?: string | undefined;
    
    /** breadcrumb of the Ad element in SERP */

    breadcrumb?: string | undefined;
    
    /** text alongside the title */

    snippet?: string | undefined;
    
    /** domain where a link points */

    domain?: string | undefined;
    
    /** URL of element */

    url?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** search queries related to the elment */

    related_searches?: string[] | undefined;
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiProductConsiderationsExpandedElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.featured_title = data["featured_title"];
            this.breadcrumb = data["breadcrumb"];
            this.snippet = data["snippet"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.timestamp = data["timestamp"];
            this.related_searches = data["related_searches"];
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiProductConsiderationsExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiProductConsiderationsExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["featured_title"] = this.featured_title;
        data["breadcrumb"] = this.breadcrumb;
        data["snippet"] = this.snippet;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["timestamp"] = this.timestamp;
        data["related_searches"] = this.related_searches;
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiProductConsiderationsAiOverviewExpandedElementItem  extends IBaseSerpApiProductConsiderationExpandedElementItem    {
        
        /** contains arrays of elements available in the list */
        items?: AiOverviewElement[] | undefined
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiProductConsiderationsAiOverviewExpandedElementItem  extends BaseSerpApiProductConsiderationExpandedElementItem   implements ISerpApiProductConsiderationsAiOverviewExpandedElementItem {
    
    /** contains arrays of elements available in the list */

    items?: AiOverviewElement[] | undefined;
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiProductConsiderationsAiOverviewExpandedElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOverviewElement.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiModeAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiProductConsiderationsAiOverviewExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiProductConsiderationsAiOverviewExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}