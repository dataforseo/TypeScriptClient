export interface ISearchVolumeTrend   {
        
        /** *search volume change in percent compared to the previous month* */
        monthly?: number | undefined
        
        /** *search volume change in percent compared to the previous quarter* */
        quarterly?: number | undefined
        
        /** *search volume change in percent compared to the previous year* */
        yearly?: number | undefined

    [key: string]: any;

    }

export class SearchVolumeTrend  implements ISearchVolumeTrend {

    
    /** *search volume change in percent compared to the previous month* */

    monthly?: number | undefined;

    
    /** *search volume change in percent compared to the previous quarter* */

    quarterly?: number | undefined;

    
    /** *search volume change in percent compared to the previous year* */

    yearly?: number | undefined;

    [key: string]: any;


    constructor(data?: ISearchVolumeTrend) {

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
            this.monthly = data["monthly"];
            this.quarterly = data["quarterly"];
            this.yearly = data["yearly"];
        }
    }

    static fromJS(data: any): SearchVolumeTrend {
        data = typeof data === 'object' ? data : {};


        let result = new SearchVolumeTrend();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["monthly"] = this.monthly;
        data["quarterly"] = this.quarterly;
        data["yearly"] = this.yearly;
        return data;
    }
}