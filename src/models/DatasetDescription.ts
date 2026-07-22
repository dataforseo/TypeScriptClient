import { LinkElement, ILinkElement } from "./LinkElement";


export interface IDatasetDescription   {
        
        /** text of the description */
        text?: string | undefined
        
        /** links featured in the ‘dataset_description’ */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class DatasetDescription  implements IDatasetDescription {

    
    /** text of the description */

    text?: string | undefined;

    
    /** links featured in the ‘dataset_description’ */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDatasetDescription) {

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
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DatasetDescription {
        data = typeof data === 'object' ? data : {};


        let result = new DatasetDescription();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
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