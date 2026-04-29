import { MathSolverExpandedElement, IMathSolverExpandedElement } from "./MathSolverExpandedElement";


export interface IMathSolverElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** expanded element */
        expanded_element?: MathSolverExpandedElement[] | undefined

    [key: string]: any;

    }

export class MathSolverElement  implements IMathSolverElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** expanded element */

    expanded_element?: MathSolverExpandedElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMathSolverElement) {

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
            if (Array.isArray(data["expanded_element"])) {
                this.expanded_element = [];
                for (let item of data["expanded_element"]) {
                    this.expanded_element.push(MathSolverExpandedElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MathSolverElement {
        data = typeof data === 'object' ? data : {};


        let result = new MathSolverElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
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