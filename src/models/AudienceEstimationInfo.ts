export interface IAudienceEstimationInfo   {
        
        /** indicates the upper bound of the range result */
        high?: number | undefined
        
        /** indicates the lower bound of the range result */
        low?: number | undefined

    [key: string]: any;

    }

export class AudienceEstimationInfo  implements IAudienceEstimationInfo {

    
    /** indicates the upper bound of the range result */

    high?: number | undefined;

    
    /** indicates the lower bound of the range result */

    low?: number | undefined;

    [key: string]: any;


    constructor(data?: IAudienceEstimationInfo) {

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
            this.high = data["high"];
            this.low = data["low"];
        }
    }

    static fromJS(data: any): AudienceEstimationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AudienceEstimationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["high"] = this.high;
        data["low"] = this.low;
        return data;
    }
}