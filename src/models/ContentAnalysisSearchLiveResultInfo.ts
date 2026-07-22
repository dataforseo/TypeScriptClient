import { ContentAnalysisSearchLiveItem, IContentAnalysisSearchLiveItem } from "./ContentAnalysisSearchLiveItem";


export interface IContentAnalysisSearchLiveResultInfo   {
        
        /** offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task */
        offset_token?: string | undefined
        
        /** total amount of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains citations and related data */
        items?: ContentAnalysisSearchLiveItem[] | undefined

    [key: string]: any;

    }

export class ContentAnalysisSearchLiveResultInfo  implements IContentAnalysisSearchLiveResultInfo {

    
    /** offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task */

    offset_token?: string | undefined;

    
    /** total amount of results in our database relevant to your request */

    total_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains citations and related data */

    items?: ContentAnalysisSearchLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisSearchLiveResultInfo) {

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
            this.offset_token = data["offset_token"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ContentAnalysisSearchLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisSearchLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSearchLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["offset_token"] = this.offset_token;
        data["total_count"] = this.total_count;
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