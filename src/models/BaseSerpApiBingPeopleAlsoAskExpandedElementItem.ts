import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { Table, ITable } from "./Table";


export interface IBaseSerpApiBingPeopleAlsoAskExpandedElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** title */
        featured_title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** domain name of the reference */
        domain?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** date and time when the video was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example: 2009-01-01 00:00:00 +00:00 */
        timestamp?: string | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined

    [key: string]: any;

    }

export class BaseSerpApiBingPeopleAlsoAskExpandedElementItem  implements IBaseSerpApiBingPeopleAlsoAskExpandedElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** title */

    featured_title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** domain name of the reference */

    domain?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;
    
    /** date and time when the video was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example: 2009-01-01 00:00:00 +00:00 */

    timestamp?: string | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiBingPeopleAlsoAskExpandedElementItem) {

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

    static fromJS(data: any): BaseSerpApiBingPeopleAlsoAskExpandedElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "people_also_ask_expanded_element") {

            let result = new SerpApiBingPeopleAlsoAskExpandedElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiBingPeopleAlsoAskExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
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

 
export interface ISerpApiBingPeopleAlsoAskExpandedElementItem  extends IBaseSerpApiBingPeopleAlsoAskExpandedElementItem    {

    [key: string]: any;

    }

export class SerpApiBingPeopleAlsoAskExpandedElementItem  extends BaseSerpApiBingPeopleAlsoAskExpandedElementItem   implements ISerpApiBingPeopleAlsoAskExpandedElementItem {

    [key: string]: any;


    constructor(data?: ISerpApiBingPeopleAlsoAskExpandedElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): SerpApiBingPeopleAlsoAskExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiBingPeopleAlsoAskExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}