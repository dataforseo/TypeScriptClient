import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";


export interface IDataforseoLabsGoogleCompetitorsDomainLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *domain name* */
        domain?: string | undefined
        
        /** *average position of the domain in SERP* **Note:** average position is calculated for intersected keywords only; the value for a given domain may differ when combined with different target websites */
        avg_position?: number | undefined
        
        /** *sum of all domain positions in SERP* **Note:** average position is calculated for intersected keywords only; the value for a given domain may differ when combined with different target websites */
        sum_position?: number | undefined
        
        /** *number of intersecting keywords* */
        intersections?: number | undefined
        
        /** *metrics for all keywords of the domain* full overview of ranking and traffic data relevant to all keywords that the provided `domain` is ranking for */
        full_domain_metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined
        
        /** *metrics for intersecting keywords* ranking and traffic data relevant to the keywords that the provided `domain` shares with the `target` domain **note:** in this array ranking and traffic data is provided for the `target` considering the keywords `target` shares in search with the competitor's `domain` */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined
        
        /** *metrics for intersecting keywords* ranking and traffic data relevant to the keywords that the provided `domain` shares with the `target` domain **note:** in this array ranking and traffic data is provided for the returned competitor's `domain` */
        competitor_metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleCompetitorsDomainLiveItem  implements IDataforseoLabsGoogleCompetitorsDomainLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *domain name* */

    domain?: string | undefined;

    
    /** *average position of the domain in SERP* **Note:** average position is calculated for intersected keywords only; the value for a given domain may differ when combined with different target websites */

    avg_position?: number | undefined;

    
    /** *sum of all domain positions in SERP* **Note:** average position is calculated for intersected keywords only; the value for a given domain may differ when combined with different target websites */

    sum_position?: number | undefined;

    
    /** *number of intersecting keywords* */

    intersections?: number | undefined;

    
    /** *metrics for all keywords of the domain* full overview of ranking and traffic data relevant to all keywords that the provided `domain` is ranking for */

    full_domain_metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    
    /** *metrics for intersecting keywords* ranking and traffic data relevant to the keywords that the provided `domain` shares with the `target` domain **note:** in this array ranking and traffic data is provided for the `target` considering the keywords `target` shares in search with the competitor's `domain` */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    
    /** *metrics for intersecting keywords* ranking and traffic data relevant to the keywords that the provided `domain` shares with the `target` domain **note:** in this array ranking and traffic data is provided for the returned competitor's `domain` */

    competitor_metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCompetitorsDomainLiveItem) {

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
            this.domain = data["domain"];
            this.avg_position = data["avg_position"];
            this.sum_position = data["sum_position"];
            this.intersections = data["intersections"];
            this.full_domain_metrics = data["full_domain_metrics"];
            this.metrics = data["metrics"];
            this.competitor_metrics = data["competitor_metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCompetitorsDomainLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCompetitorsDomainLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["domain"] = this.domain;
        data["avg_position"] = this.avg_position;
        data["sum_position"] = this.sum_position;
        data["intersections"] = this.intersections;
        data["full_domain_metrics"] = this.full_domain_metrics;
        data["metrics"] = this.metrics;
        data["competitor_metrics"] = this.competitor_metrics;
        return data;
    }
}