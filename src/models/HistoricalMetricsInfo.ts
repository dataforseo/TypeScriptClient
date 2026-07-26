export interface IHistoricalMetricsInfo   {
        
        /** year for which the data is provided */
        year?: number | undefined
        
        /** month for which the data is provided */
        month?: number | undefined
        
        /** estimated traffic volume estimated organic monthly traffic to the domain calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** total count of organic SERPs that contain the domain */
        count?: number | undefined

    [key: string]: any;

    }

export class HistoricalMetricsInfo  implements IHistoricalMetricsInfo {

    
    /** year for which the data is provided */

    year?: number | undefined;

    
    /** month for which the data is provided */

    month?: number | undefined;

    
    /** estimated traffic volume estimated organic monthly traffic to the domain calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;

    
    /** total count of organic SERPs that contain the domain */

    count?: number | undefined;

    [key: string]: any;


    constructor(data?: IHistoricalMetricsInfo) {

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
            this.year = data["year"];
            this.month = data["month"];
            this.etv = data["etv"];
            this.count = data["count"];
        }
    }

    static fromJS(data: any): HistoricalMetricsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HistoricalMetricsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["year"] = this.year;
        data["month"] = this.month;
        data["etv"] = this.etv;
        data["count"] = this.count;
        return data;
    }
}