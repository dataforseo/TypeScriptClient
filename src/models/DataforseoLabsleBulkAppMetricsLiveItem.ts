import { AppMetricsInfo, IAppMetricsInfo } from "./AppMetricsInfo";


export interface IDataforseoLabsleBulkAppMetricsLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *id of the app in a POST array* */
        app_id?: string | undefined
        
        /** *metrics for the ranking keywords of the app* ranking data relevant to the keywords that the provided application ranks for on Google Play */
        metrics?: { [key: string]: AppMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsleBulkAppMetricsLiveItem  implements IDataforseoLabsleBulkAppMetricsLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *id of the app in a POST array* */

    app_id?: string | undefined;

    
    /** *metrics for the ranking keywords of the app* ranking data relevant to the keywords that the provided application ranks for on Google Play */

    metrics?: { [key: string]: AppMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsleBulkAppMetricsLiveItem) {

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
            this.app_id = data["app_id"];
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsleBulkAppMetricsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsleBulkAppMetricsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["app_id"] = this.app_id;
        data["metrics"] = this.metrics;
        return data;
    }
}