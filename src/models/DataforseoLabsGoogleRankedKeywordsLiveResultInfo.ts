import { DataforseoLabsGoogleRankedKeywordsLiveItem, IDataforseoLabsGoogleRankedKeywordsLiveItem } from "./DataforseoLabsGoogleRankedKeywordsLiveItem";
import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";


export interface IDataforseoLabsGoogleRankedKeywordsLiveResultInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** target domain or webpage in a POST array */
        target?: string | undefined
        
        /** location code in a POST array if there is no data, then the value is null */
        location_code?: number | undefined
        
        /** language code in a POST array if there is no data, then the value is null */
        language_code?: string | undefined
        
        /** total number of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** ranking data relevant to the specified domain or webpage  ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined
        
        /** ranking data relevant to the specified domain or webpage ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements */
        metrics_absolute?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined
        
        /** contains ranked keywords and related data */
        items?: DataforseoLabsGoogleRankedKeywordsLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleRankedKeywordsLiveResultInfo  implements IDataforseoLabsGoogleRankedKeywordsLiveResultInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** target domain or webpage in a POST array */

    target?: string | undefined;

    
    /** location code in a POST array if there is no data, then the value is null */

    location_code?: number | undefined;

    
    /** language code in a POST array if there is no data, then the value is null */

    language_code?: string | undefined;

    
    /** total number of results in our database relevant to your request */

    total_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** ranking data relevant to the specified domain or webpage  ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    
    /** ranking data relevant to the specified domain or webpage ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements */

    metrics_absolute?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    
    /** contains ranked keywords and related data */

    items?: DataforseoLabsGoogleRankedKeywordsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleRankedKeywordsLiveResultInfo) {

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
            this.target = data["target"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            this.metrics = data["metrics"];
            this.metrics_absolute = data["metrics_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleRankedKeywordsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleRankedKeywordsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleRankedKeywordsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["target"] = this.target;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["metrics"] = this.metrics;
        data["metrics_absolute"] = this.metrics_absolute;
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