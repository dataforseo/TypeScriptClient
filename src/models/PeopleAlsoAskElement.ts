import { BaseSerpApiPeopleAlsoAskExpandedElementItem, IBaseSerpApiPeopleAlsoAskExpandedElementItem } from "./BaseSerpApiPeopleAlsoAskExpandedElementItem";


export interface IPeopleAlsoAskElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** question that triggered additional expanded elements */
        seed_question?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** expanded element */
        expanded_element?: BaseSerpApiPeopleAlsoAskExpandedElementItem[] | undefined

    [key: string]: any;

    }

export class PeopleAlsoAskElement  implements IPeopleAlsoAskElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** question that triggered additional expanded elements */

    seed_question?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;
    
    /** expanded element */

    expanded_element?: BaseSerpApiPeopleAlsoAskExpandedElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IPeopleAlsoAskElement) {

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
            this.seed_question = data["seed_question"];
            this.xpath = data["xpath"];
            if (Array.isArray(data["expanded_element"])) {
                this.expanded_element = [];
                for (let item of data["expanded_element"]) {
                    this.expanded_element.push(BaseSerpApiPeopleAlsoAskExpandedElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): PeopleAlsoAskElement {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoAskElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["seed_question"] = this.seed_question;
        data["xpath"] = this.xpath;
        data["expanded_element"] = null;
        if (Array.isArray(this.expanded_element)) {
            data["expanded_element"] = [];
            for (let item of this.expanded_element) {
                if (item && typeof item.toJSON === "function") {
                    data["expanded_element"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}