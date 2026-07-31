import { BulkMetricsBundleInfo, IBulkMetricsBundleInfo } from "./BulkMetricsBundleInfo";


export interface IDataforseoLabsGoogleBulkTrafficEstimationLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *target domain in a POST array* */
        target?: string | undefined
        
        /** *traffic data relevant to the specified domain* */
        metrics?: BulkMetricsBundleInfo | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleBulkTrafficEstimationLiveItem  implements IDataforseoLabsGoogleBulkTrafficEstimationLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *target domain in a POST array* */

    target?: string | undefined;

    
    /** *traffic data relevant to the specified domain* */

    metrics?: BulkMetricsBundleInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleBulkTrafficEstimationLiveItem) {

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
            this.metrics = data["metrics"] ? BulkMetricsBundleInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleBulkTrafficEstimationLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleBulkTrafficEstimationLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["target"] = this.target;
        data["metrics"] = this.metrics ? BulkMetricsBundleInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}