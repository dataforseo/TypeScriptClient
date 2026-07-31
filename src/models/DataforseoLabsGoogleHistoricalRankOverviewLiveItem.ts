import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";


export interface IDataforseoLabsGoogleHistoricalRankOverviewLiveItem   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *year for which the data is provided* */
        year?: number | undefined
        
        /** *month for which the data is provided* */
        month?: number | undefined
        
        /** *ranking data relevant to the specified domain* */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalRankOverviewLiveItem  implements IDataforseoLabsGoogleHistoricalRankOverviewLiveItem {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *year for which the data is provided* */

    year?: number | undefined;

    
    /** *month for which the data is provided* */

    month?: number | undefined;

    
    /** *ranking data relevant to the specified domain* */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalRankOverviewLiveItem) {

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
            this.year = data["year"];
            this.month = data["month"];
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalRankOverviewLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalRankOverviewLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["year"] = this.year;
        data["month"] = this.month;
        data["metrics"] = this.metrics;
        return data;
    }
}