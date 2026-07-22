import { KeywordsDataClickstreamDataSearchVolumeLiveItem, IKeywordsDataClickstreamDataSearchVolumeLiveItem } from "./KeywordsDataClickstreamDataSearchVolumeLiveItem";


export interface IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo   {
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains keywords and related data */
        items?: KeywordsDataClickstreamDataSearchVolumeLiveItem[] | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo  implements IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo {

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains keywords and related data */

    items?: KeywordsDataClickstreamDataSearchVolumeLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo) {

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
            this.location_code = data["location_code"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KeywordsDataClickstreamDataSearchVolumeLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
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