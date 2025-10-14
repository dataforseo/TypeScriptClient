import { BaseSerpApiAiModeAiOverviewElementItem, IBaseSerpApiAiModeAiOverviewElementItem } from "./BaseSerpApiAiModeAiOverviewElementItem";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";
import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";


export interface IAiModeAiOverviewInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        page?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** content of the element in markdown format
the text of the ai_overview formatted in the markdown markup language */
        markdown?: string | undefined
        
        /** items of the element */
        items?: BaseSerpApiAiModeAiOverviewElementItem[] | undefined
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */
        references?: AiModeAiOverviewReferenceInfo[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class AiModeAiOverviewInfo  implements IAiModeAiOverviewInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    page?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;
    
    /** content of the element in markdown format
the text of the ai_overview formatted in the markdown markup language */

    markdown?: string | undefined;
    
    /** items of the element */

    items?: BaseSerpApiAiModeAiOverviewElementItem[] | undefined;
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    constructor(data?: IAiModeAiOverviewInfo) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.page = data["page"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiAiModeAiOverviewElementItem.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiModeAiOverviewReferenceInfo.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiModeAiOverviewInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeAiOverviewInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["page"] = this.page;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["markdown"] = this.markdown;
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
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}