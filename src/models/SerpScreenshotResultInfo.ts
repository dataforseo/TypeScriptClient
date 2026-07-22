import { ScreenshotItem, IScreenshotItem } from "./ScreenshotItem";


export interface ISerpScreenshotResultInfo   {
        
        /** number of items in the results array */
        items_count?: number | undefined
        
        /** items array */
        items?: ScreenshotItem[] | undefined

    [key: string]: any;

    }

export class SerpScreenshotResultInfo  implements ISerpScreenshotResultInfo {

    
    /** number of items in the results array */

    items_count?: number | undefined;

    
    /** items array */

    items?: ScreenshotItem[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpScreenshotResultInfo) {

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
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ScreenshotItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpScreenshotResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpScreenshotResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["items_count"] = this.items_count;
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