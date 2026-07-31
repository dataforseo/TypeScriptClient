import { HistoricalMetricsBundleInfo, IHistoricalMetricsBundleInfo } from "./HistoricalMetricsBundleInfo";


export interface IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *target domain in a POST array* */
        target?: string | undefined
        
        /** *traffic data relevant to the specified domain* */
        metrics?: HistoricalMetricsBundleInfo | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem  implements IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *target domain in a POST array* */

    target?: string | undefined;

    
    /** *traffic data relevant to the specified domain* */

    metrics?: HistoricalMetricsBundleInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem) {

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
            this.metrics = data["metrics"] ? HistoricalMetricsBundleInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["target"] = this.target;
        data["metrics"] = this.metrics ? HistoricalMetricsBundleInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}