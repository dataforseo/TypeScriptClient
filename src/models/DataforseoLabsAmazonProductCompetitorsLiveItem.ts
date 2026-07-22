import { AmazonMetricsBundleInfo, IAmazonMetricsBundleInfo } from "./AmazonMetricsBundleInfo";


export interface IDataforseoLabsAmazonProductCompetitorsLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** ASIN in a POST array */
        asin?: string | undefined
        
        /** average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products */
        avg_position?: number | undefined
        
        /** sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products */
        sum_position?: number | undefined
        
        /** number of intersecting keywords */
        intersections?: number | undefined
        
        /** metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin */
        competitor_metrics?: AmazonMetricsBundleInfo | undefined
        
        /** metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for */
        full_metrics?: AmazonMetricsBundleInfo | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonProductCompetitorsLiveItem  implements IDataforseoLabsAmazonProductCompetitorsLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** ASIN in a POST array */

    asin?: string | undefined;

    
    /** average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products */

    avg_position?: number | undefined;

    
    /** sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products */

    sum_position?: number | undefined;

    
    /** number of intersecting keywords */

    intersections?: number | undefined;

    
    /** metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin */

    competitor_metrics?: AmazonMetricsBundleInfo | undefined;

    
    /** metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for */

    full_metrics?: AmazonMetricsBundleInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonProductCompetitorsLiveItem) {

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
            this.avg_position = data["avg_position"];
            this.sum_position = data["sum_position"];
            this.intersections = data["intersections"];
            this.competitor_metrics = data["competitor_metrics"] ? AmazonMetricsBundleInfo.fromJS(data["competitor_metrics"]) : <any>undefined;
            this.full_metrics = data["full_metrics"] ? AmazonMetricsBundleInfo.fromJS(data["full_metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonProductCompetitorsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonProductCompetitorsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["asin"] = this.asin;
        data["avg_position"] = this.avg_position;
        data["sum_position"] = this.sum_position;
        data["intersections"] = this.intersections;
        data["competitor_metrics"] = this.competitor_metrics ? AmazonMetricsBundleInfo.fromJS(this.competitor_metrics)?.toJSON() : <any>undefined;
        data["full_metrics"] = this.full_metrics ? AmazonMetricsBundleInfo.fromJS(this.full_metrics)?.toJSON() : <any>undefined;
        return data;
    }
}