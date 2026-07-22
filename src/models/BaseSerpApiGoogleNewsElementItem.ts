import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";
import { TopStoriesElement, ITopStoriesElement } from "./TopStoriesElement";


export interface IBaseSerpApiGoogleNewsElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class BaseSerpApiGoogleNewsElementItem  implements IBaseSerpApiGoogleNewsElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    
    /** title of the element */

    title?: string | undefined;

    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiGoogleNewsElementItem) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.xpath = data["xpath"];
            this.title = data["title"];
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseSerpApiGoogleNewsElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "news_search") {

            let result = new SerpApiGoogleNewsNewsSearchElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            let result = new SerpApiGoogleNewsTopStoriesElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiGoogleNewsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["xpath"] = this.xpath;
        data["title"] = this.title;
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiGoogleNewsNewsSearchElementItem  extends IBaseSerpApiGoogleNewsElementItem    {
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** snippet of the result in SERP */
        snippet?: string | undefined
        
        /** indicates the time the result was published */
        time_published?: string | undefined
        
        /** date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class SerpApiGoogleNewsNewsSearchElementItem  extends BaseSerpApiGoogleNewsElementItem   implements ISerpApiGoogleNewsNewsSearchElementItem {

    
    /** domain in SERP */

    domain?: string | undefined;

    
    /** search URL with refinement parameters */

    url?: string | undefined;

    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    
    /** snippet of the result in SERP */

    snippet?: string | undefined;

    
    /** indicates the time the result was published */

    time_published?: string | undefined;

    
    /** date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleNewsNewsSearchElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.snippet = data["snippet"];
            this.time_published = data["time_published"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): SerpApiGoogleNewsNewsSearchElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleNewsNewsSearchElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["snippet"] = this.snippet;
        data["time_published"] = this.time_published;
        data["timestamp"] = this.timestamp;
        return data;
    }
}

 
export interface ISerpApiGoogleNewsTopStoriesElementItem  extends IBaseSerpApiGoogleNewsElementItem    {
        
        page?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left */
        position?: string | undefined
        
        /** items of the element */
        items?: TopStoriesElement[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleNewsTopStoriesElementItem  extends BaseSerpApiGoogleNewsElementItem   implements ISerpApiGoogleNewsTopStoriesElementItem {

    page?: number | undefined;

    
    /** the alignment of the element in SERP
can take the following values:
left */

    position?: string | undefined;

    
    /** items of the element */

    items?: TopStoriesElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleNewsTopStoriesElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.page = data["page"];
            this.position = data["position"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TopStoriesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleNewsTopStoriesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleNewsTopStoriesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["page"] = this.page;
        data["position"] = this.position;
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