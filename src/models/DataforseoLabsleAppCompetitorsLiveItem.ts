import { AppMetricsInfo, IAppMetricsInfo } from "./AppMetricsInfo";


export interface IDataforseoLabsleAppCompetitorsLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** id of the app in a POST array */
        app_id?: string | undefined
        
        /** average position of the app in Google Play SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications */
        avg_position?: number | undefined
        
        /** sum of all app positions in Google Play SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications */
        sum_position?: number | undefined
        
        /** number of intersecting keywords */
        intersections?: number | undefined
        
        /** metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id */
        competitor_metrics?: { [key: string]: AppMetricsInfo; } | undefined
        
        /** metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for */
        full_metrics?: { [key: string]: AppMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsleAppCompetitorsLiveItem  implements IDataforseoLabsleAppCompetitorsLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** id of the app in a POST array */

    app_id?: string | undefined;

    
    /** average position of the app in Google Play SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications */

    avg_position?: number | undefined;

    
    /** sum of all app positions in Google Play SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications */

    sum_position?: number | undefined;

    
    /** number of intersecting keywords */

    intersections?: number | undefined;

    
    /** metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id */

    competitor_metrics?: { [key: string]: AppMetricsInfo; } | undefined;

    
    /** metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for */

    full_metrics?: { [key: string]: AppMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsleAppCompetitorsLiveItem) {

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
            this.avg_position = data["avg_position"];
            this.sum_position = data["sum_position"];
            this.intersections = data["intersections"];
            this.competitor_metrics = data["competitor_metrics"];
            this.full_metrics = data["full_metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsleAppCompetitorsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsleAppCompetitorsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["app_id"] = this.app_id;
        data["avg_position"] = this.avg_position;
        data["sum_position"] = this.sum_position;
        data["intersections"] = this.intersections;
        data["competitor_metrics"] = this.competitor_metrics;
        data["full_metrics"] = this.full_metrics;
        return data;
    }
}