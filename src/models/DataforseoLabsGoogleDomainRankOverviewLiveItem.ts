import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";


export interface IDataforseoLabsGoogleDomainRankOverviewLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *ranking data relevant to the specified domain* */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainRankOverviewLiveItem  implements IDataforseoLabsGoogleDomainRankOverviewLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *ranking data relevant to the specified domain* */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainRankOverviewLiveItem) {

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
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainRankOverviewLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainRankOverviewLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["metrics"] = this.metrics;
        return data;
    }
}