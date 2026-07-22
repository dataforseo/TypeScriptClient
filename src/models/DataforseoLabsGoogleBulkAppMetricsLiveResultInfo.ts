import { DataforseoLabsleBulkAppMetricsLiveItem, IDataforseoLabsleBulkAppMetricsLiveItem } from "./DataforseoLabsleBulkAppMetricsLiveItem";


export interface IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** total amount of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains data related to the ranking app metrics of the specified application */
        items?: DataforseoLabsleBulkAppMetricsLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleBulkAppMetricsLiveResultInfo  implements IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** total amount of results in our database relevant to your request */

    total_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains data related to the ranking app metrics of the specified application */

    items?: DataforseoLabsleBulkAppMetricsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsleBulkAppMetricsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleBulkAppMetricsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleBulkAppMetricsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
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