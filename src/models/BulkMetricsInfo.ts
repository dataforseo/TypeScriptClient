export interface IBulkMetricsInfo   {
        
        /** *estimated traffic volume* estimated organic monthly traffic to the domain calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) */
        etv?: number | undefined
        
        /** *total count of organic SERPs that contain the domain* */
        count?: number | undefined

    [key: string]: any;

    }

export class BulkMetricsInfo  implements IBulkMetricsInfo {

    
    /** *estimated traffic volume* estimated organic monthly traffic to the domain calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) */

    etv?: number | undefined;

    
    /** *total count of organic SERPs that contain the domain* */

    count?: number | undefined;

    [key: string]: any;


    constructor(data?: IBulkMetricsInfo) {

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
            this.etv = data["etv"];
            this.count = data["count"];
        }
    }

    static fromJS(data: any): BulkMetricsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BulkMetricsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["etv"] = this.etv;
        data["count"] = this.count;
        return data;
    }
}