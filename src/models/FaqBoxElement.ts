import { LinkElement, ILinkElement } from "./LinkElement";

/** @deprecated */

export interface IFaqBoxElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title of the link* */
        title?: string | undefined
        
        /** *description of the hotel booking element* */
        description?: string | undefined
        
        /** *link of the element* */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

/** @deprecated */
export class FaqBoxElement  implements IFaqBoxElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title of the link* */

    title?: string | undefined;

    
    /** *description of the hotel booking element* */

    description?: string | undefined;

    
    /** *link of the element* */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IFaqBoxElement) {

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
            this.title = data["title"];
            this.description = data["description"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): FaqBoxElement {
        data = typeof data === 'object' ? data : {};


        let result = new FaqBoxElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}