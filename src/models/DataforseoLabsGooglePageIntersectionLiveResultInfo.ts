import { DataforseoLabsGooglePageIntersectionLiveItem, IDataforseoLabsGooglePageIntersectionLiveItem } from "./DataforseoLabsGooglePageIntersectionLiveItem";


export interface IDataforseoLabsGooglePageIntersectionLiveResultInfo   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *URLs you specified a POST array* */
        pages?: { [key: string]: string; } | undefined
        
        /** *URLs you specified in a POST array that will be excluded from the results* */
        exclude_pages?: string[] | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *total amount of results in our database relevant to your request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *contains keywords, relevant SERP elements and related data* */
        items?: DataforseoLabsGooglePageIntersectionLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGooglePageIntersectionLiveResultInfo  implements IDataforseoLabsGooglePageIntersectionLiveResultInfo {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *URLs you specified a POST array* */

    pages?: { [key: string]: string; } | undefined;

    
    /** *URLs you specified in a POST array that will be excluded from the results* */

    exclude_pages?: string[] | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *total amount of results in our database relevant to your request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *contains keywords, relevant SERP elements and related data* */

    items?: DataforseoLabsGooglePageIntersectionLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGooglePageIntersectionLiveResultInfo) {

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
            this.se_type = data["se_type"];
            this.pages = data["pages"];
            this.exclude_pages = data["exclude_pages"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGooglePageIntersectionLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGooglePageIntersectionLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGooglePageIntersectionLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["pages"] = this.pages;
        data["exclude_pages"] = this.exclude_pages;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
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