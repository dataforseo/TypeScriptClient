export interface IOnPageRawHtmlRequestInfo   {
        
        /** *ID of the task* **required field** you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint example: '07131248-1535-0216-1000-17384017ad04' */
        id?: string | undefined
        
        /** *page url* **required field** the absolute URL of a page to request HTML **Note:** this field is optional if the task was set using the [Instant Pages endpoint](/v3/on_page/instant_pages/) */
        url?: string | undefined

    [key: string]: any;

    }

export class OnPageRawHtmlRequestInfo  implements IOnPageRawHtmlRequestInfo {

    
    /** *ID of the task* **required field** you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint example: '07131248-1535-0216-1000-17384017ad04' */

    id?: string | undefined;

    
    /** *page url* **required field** the absolute URL of a page to request HTML **Note:** this field is optional if the task was set using the [Instant Pages endpoint](/v3/on_page/instant_pages/) */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRawHtmlRequestInfo) {

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
            this.id = data["id"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): OnPageRawHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRawHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["url"] = this.url;
        return data;
    }
}