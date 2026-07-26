import { ScreenshotItem, IScreenshotItem } from "./ScreenshotItem";


export interface IOnPagePageScreenshotResultInfo   {
        
        /** status of the crawling session possible values: in_progress, finished */
        crawl_progress?: string | undefined
        
        /** error message if the url you indicated returns a 404 status code or is not a valid URL, you will obtain 'error_message':'Screenshot is empty' if no error is encountered, the value will be null */
        error_message?: string | undefined
        
        /** number of items in the results array */
        items_count?: number | undefined
        
        /** items array */
        items?: ScreenshotItem[] | undefined

    [key: string]: any;

    }

export class OnPagePageScreenshotResultInfo  implements IOnPagePageScreenshotResultInfo {

    
    /** status of the crawling session possible values: in_progress, finished */

    crawl_progress?: string | undefined;

    
    /** error message if the url you indicated returns a 404 status code or is not a valid URL, you will obtain 'error_message':'Screenshot is empty' if no error is encountered, the value will be null */

    error_message?: string | undefined;

    
    /** number of items in the results array */

    items_count?: number | undefined;

    
    /** items array */

    items?: ScreenshotItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPagePageScreenshotResultInfo) {

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
            this.crawl_progress = data["crawl_progress"];
            this.error_message = data["error_message"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ScreenshotItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPagePageScreenshotResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPagePageScreenshotResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["error_message"] = this.error_message;
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