import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";


export interface IDataforseoLabsGoogleCategoriesForDomainLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** product and service categories
you can download the full list of possible categories */
        categories?: number[] | undefined
        
        /** ranking data relevant to the specified domain or subdomain */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleCategoriesForDomainLiveItem  implements IDataforseoLabsGoogleCategoriesForDomainLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** product and service categories
you can download the full list of possible categories */

    categories?: number[] | undefined;

    
    /** ranking data relevant to the specified domain or subdomain */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCategoriesForDomainLiveItem) {

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
            this.categories = data["categories"];
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCategoriesForDomainLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCategoriesForDomainLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["categories"] = this.categories;
        data["metrics"] = this.metrics;
        return data;
    }
}