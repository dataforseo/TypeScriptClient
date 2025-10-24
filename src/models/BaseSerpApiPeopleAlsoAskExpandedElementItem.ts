import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { Table, ITable } from "./Table";
import { BaseSerpApiAiOverviewElementItem, IBaseSerpApiAiOverviewElementItem } from "./BaseSerpApiAiOverviewElementItem";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";


export interface IBaseSerpApiPeopleAlsoAskExpandedElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiPeopleAlsoAskExpandedElementItem  implements IBaseSerpApiPeopleAlsoAskExpandedElementItem {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiPeopleAlsoAskExpandedElementItem) {

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

    static fromJS(data: any): BaseSerpApiPeopleAlsoAskExpandedElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "people_also_ask_expanded_element") {

            let result = new SerpApiPeopleAlsoAskExpandedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask_ai_overview_expanded_element") {

            let result = new SerpApiPeopleAlsoAskAiOverviewExpandedElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiPeopleAlsoAskExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}

 
export interface ISerpApiPeopleAlsoAskExpandedElementItem  extends IBaseSerpApiPeopleAlsoAskExpandedElementItem    {
        
        /** the title of the featured snippets source page */
        featured_title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** source domain */
        domain?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined

    [key: string]: any;

    }

export class SerpApiPeopleAlsoAskExpandedElementItem  extends BaseSerpApiPeopleAlsoAskExpandedElementItem   implements ISerpApiPeopleAlsoAskExpandedElementItem {
    
    /** the title of the featured snippets source page */

    featured_title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** source domain */

    domain?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiPeopleAlsoAskExpandedElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.featured_title = data["featured_title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            this.timestamp = data["timestamp"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiPeopleAlsoAskExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiPeopleAlsoAskExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["featured_title"] = this.featured_title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["timestamp"] = this.timestamp;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiPeopleAlsoAskAiOverviewExpandedElementItem  extends IBaseSerpApiPeopleAlsoAskExpandedElementItem    {
        
        /** contains arrays of elements available in the list */
        items?: BaseSerpApiAiOverviewElementItem[] | undefined
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiPeopleAlsoAskAiOverviewExpandedElementItem  extends BaseSerpApiPeopleAlsoAskExpandedElementItem   implements ISerpApiPeopleAlsoAskAiOverviewExpandedElementItem {
    
    /** contains arrays of elements available in the list */

    items?: BaseSerpApiAiOverviewElementItem[] | undefined;
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiPeopleAlsoAskAiOverviewExpandedElementItem) {
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
                    this.items.push(BaseSerpApiAiOverviewElementItem.fromJS(item));
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

    static fromJS(data: any): SerpApiPeopleAlsoAskAiOverviewExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiPeopleAlsoAskAiOverviewExpandedElementItem();
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