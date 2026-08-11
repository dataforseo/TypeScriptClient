import { KeywordsDataClickstreamDataSearchVolumeLiveItem, IKeywordsDataClickstreamDataSearchVolumeLiveItem } from "./KeywordsDataClickstreamDataSearchVolumeLiveItem";


export interface IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo   {
        
        /** *location code in a POST array* if there is no data, then the value is `null` */
        location_code?: number | undefined
        
        /** *language code in a POST array* **Note:**if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword; we use the functionality of Google Ads API to check and validate the spelling of keywords, [learn more by this link](https://support.google.com/google-ads/answer/7476658) */
        language_code?: string | undefined
        
        /** *indicates if the `use_clickstream` parameter is active* possible values: `true`, `false` */
        use_clickstream?: boolean | undefined
        
        /** *ithe number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *array of keywords* contains keywords and their search volume rates */
        items?: KeywordsDataClickstreamDataSearchVolumeLiveItem[] | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo  implements IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo {

    
    /** *location code in a POST array* if there is no data, then the value is `null` */

    location_code?: number | undefined;

    
    /** *language code in a POST array* **Note:**if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword; we use the functionality of Google Ads API to check and validate the spelling of keywords, [learn more by this link](https://support.google.com/google-ads/answer/7476658) */

    language_code?: string | undefined;

    
    /** *indicates if the `use_clickstream` parameter is active* possible values: `true`, `false` */

    use_clickstream?: boolean | undefined;

    
    /** *ithe number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *array of keywords* contains keywords and their search volume rates */

    items?: KeywordsDataClickstreamDataSearchVolumeLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo) {

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
            this.language_code = data["language_code"];
            this.use_clickstream = data["use_clickstream"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KeywordsDataClickstreamDataSearchVolumeLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["use_clickstream"] = this.use_clickstream;
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