import { AmazonMetricsBundleInfo, IAmazonMetricsBundleInfo } from "./AmazonMetricsBundleInfo";


export interface IDataforseoLabsAmazonProductRankOverviewLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** ASIN of the product unique product identifier on Amazon; for more information, refer to this help center guide */
        asin?: string | undefined
        
        /** average keyword position of the product */
        metrics?: AmazonMetricsBundleInfo | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonProductRankOverviewLiveItem  implements IDataforseoLabsAmazonProductRankOverviewLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** ASIN of the product unique product identifier on Amazon; for more information, refer to this help center guide */

    asin?: string | undefined;

    
    /** average keyword position of the product */

    metrics?: AmazonMetricsBundleInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonProductRankOverviewLiveItem) {

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
            this.asin = data["asin"];
            this.metrics = data["metrics"] ? AmazonMetricsBundleInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonProductRankOverviewLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonProductRankOverviewLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["asin"] = this.asin;
        data["metrics"] = this.metrics ? AmazonMetricsBundleInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}