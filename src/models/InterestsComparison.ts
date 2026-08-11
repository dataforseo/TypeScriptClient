import { AbsoluteItems, IAbsoluteItems } from "./AbsoluteItems";


export interface IInterestsComparison   {
        
        /** *contains keyword popularity and related data* */
        items?: AbsoluteItems[] | undefined
        
        /** *keyword popularity rates across all locations* values in this array represent percentages relative to the maximum value across all locations */
        absolute_items?: AbsoluteItems[] | undefined

    [key: string]: any;

    }

export class InterestsComparison  implements IInterestsComparison {

    
    /** *contains keyword popularity and related data* */

    items?: AbsoluteItems[] | undefined;

    
    /** *keyword popularity rates across all locations* values in this array represent percentages relative to the maximum value across all locations */

    absolute_items?: AbsoluteItems[] | undefined;

    [key: string]: any;


    constructor(data?: IInterestsComparison) {

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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AbsoluteItems.fromJS(item));
                }
            }
            if (Array.isArray(data["absolute_items"])) {
                this.absolute_items = [];
                for (let item of data["absolute_items"]) {
                    this.absolute_items.push(AbsoluteItems.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): InterestsComparison {
        data = typeof data === 'object' ? data : {};


        let result = new InterestsComparison();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["absolute_items"] = null;
        if (Array.isArray(this.absolute_items)) {
            data["absolute_items"] = [];
            for (let item of this.absolute_items) {
                if (item && typeof item.toJSON === "function") {
                    data["absolute_items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}