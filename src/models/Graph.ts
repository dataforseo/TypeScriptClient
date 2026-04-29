import { GraphElement, IGraphElement } from "./GraphElement";


export interface IGraph   {
        
        /** items present in the element */
        items?: GraphElement[] | undefined
        
        /** previous close data
contains stock price data based on the preceding time period */
        previous_items?: GraphElement[] | undefined

    [key: string]: any;

    }

export class Graph  implements IGraph {
    
    /** items present in the element */

    items?: GraphElement[] | undefined;
    
    /** previous close data
contains stock price data based on the preceding time period */

    previous_items?: GraphElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGraph) {

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
                    this.items.push(GraphElement.fromJS(item));
                }
            }
            if (Array.isArray(data["previous_items"])) {
                this.previous_items = [];
                for (let item of data["previous_items"]) {
                    this.previous_items.push(GraphElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): Graph {
        data = typeof data === 'object' ? data : {};


        let result = new Graph();
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
        data["previous_items"] = null;
        if (Array.isArray(this.previous_items)) {
            data["previous_items"] = [];
            for (let item of this.previous_items) {
                if (item && typeof item.toJSON === "function") {
                    data["previous_items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}