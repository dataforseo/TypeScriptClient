import { FaqBoxElement, IFaqBoxElement } from "./FaqBoxElement";


export interface IFaqBox   {
        
        /** type of element */
        type?: string | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: FaqBoxElement[] | undefined

    [key: string]: any;

    }

export class FaqBox  implements IFaqBox {
    
    /** type of element */

    type?: string | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: FaqBoxElement[] | undefined;

    [key: string]: any;


    constructor(data?: IFaqBox) {

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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(FaqBoxElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): FaqBox {
        data = typeof data === 'object' ? data : {};


        let result = new FaqBox();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
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