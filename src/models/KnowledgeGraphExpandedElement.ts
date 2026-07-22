import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { Table, ITable } from "./Table";


export interface IKnowledgeGraphExpandedElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given element */
        featured_title?: string | undefined
        
        /** relevant URL */
        url?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** images of the element
if there are none, equals null */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** table present in the element
the header and content of the table present in the element */
        table?: Table | undefined

    [key: string]: any;

    }

export class KnowledgeGraphExpandedElement  implements IKnowledgeGraphExpandedElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of a given element */

    featured_title?: string | undefined;

    
    /** relevant URL */

    url?: string | undefined;

    
    /** domain where a link points */

    domain?: string | undefined;

    
    /** title of the result in SERP */

    title?: string | undefined;

    
    /** text alongside the link title */

    snippet?: string | undefined;

    
    /** images of the element
if there are none, equals null */

    images?: AiModeImagesElementInfo[] | undefined;

    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    
    /** table present in the element
the header and content of the table present in the element */

    table?: Table | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphExpandedElement) {

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
            this.featured_title = data["featured_title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.snippet = data["snippet"];
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

    static fromJS(data: any): KnowledgeGraphExpandedElement {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphExpandedElement();
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
        data["snippet"] = this.snippet;
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