import { AppMetricsInfo, IAppMetricsInfo } from "./AppMetricsInfo";


export interface IAmazonMetricsBundleInfo   {
        
        /** ranking data from Amazon organic SERP */
        amazon_serp?: AppMetricsInfo | undefined
        
        /** ranking data from Amazon paid SERP */
        amazon_paid?: AppMetricsInfo | undefined

    [key: string]: any;

    }

export class AmazonMetricsBundleInfo  implements IAmazonMetricsBundleInfo {

    
    /** ranking data from Amazon organic SERP */

    amazon_serp?: AppMetricsInfo | undefined;

    
    /** ranking data from Amazon paid SERP */

    amazon_paid?: AppMetricsInfo | undefined;

    [key: string]: any;


    constructor(data?: IAmazonMetricsBundleInfo) {

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
            this.amazon_serp = data["amazon_serp"] ? AppMetricsInfo.fromJS(data["amazon_serp"]) : <any>undefined;
            this.amazon_paid = data["amazon_paid"] ? AppMetricsInfo.fromJS(data["amazon_paid"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AmazonMetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonMetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["amazon_serp"] = this.amazon_serp ? AppMetricsInfo.fromJS(this.amazon_serp)?.toJSON() : <any>undefined;
        data["amazon_paid"] = this.amazon_paid ? AppMetricsInfo.fromJS(this.amazon_paid)?.toJSON() : <any>undefined;
        return data;
    }
}