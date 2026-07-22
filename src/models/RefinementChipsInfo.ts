import { RefinementChipsElement, IRefinementChipsElement } from "./RefinementChipsElement";


export interface IRefinementChipsInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** items of the element */
        items?: RefinementChipsElement[] | undefined

    [key: string]: any;

    }

export class RefinementChipsInfo  implements IRefinementChipsInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    
    /** items of the element */

    items?: RefinementChipsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IRefinementChipsInfo) {

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
            this.xpath = data["xpath"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(RefinementChipsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): RefinementChipsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new RefinementChipsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["xpath"] = this.xpath;
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