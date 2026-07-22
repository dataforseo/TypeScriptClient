import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";


export interface IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** categories for which domains are collected */
        top_categories?: number[] | undefined
        
        /** current organic ETV of the domain */
        organic_etv?: number | undefined
        
        /** current total count of organic SERPs that contain the domain */
        organic_count?: number | undefined
        
        /** current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check */
        organic_is_lost?: number | undefined
        
        /** current number of new ranked elements
indicates how many new ranked elements were found for the domain */
        organic_is_new?: number | undefined
        
        /** domain found for the specified category */
        domain?: string | undefined
        
        /** primary domain */
        main_domain?: string | undefined
        
        /** historical ranking and traffic data of the domain */
        metrics_history?: { [key: string]: { [key: string]: DataforseoLabsMetricsInfo; }; } | undefined
        
        /** metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date */
        metrics_difference?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem  implements IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** categories for which domains are collected */

    top_categories?: number[] | undefined;

    
    /** current organic ETV of the domain */

    organic_etv?: number | undefined;

    
    /** current total count of organic SERPs that contain the domain */

    organic_count?: number | undefined;

    
    /** current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check */

    organic_is_lost?: number | undefined;

    
    /** current number of new ranked elements
indicates how many new ranked elements were found for the domain */

    organic_is_new?: number | undefined;

    
    /** domain found for the specified category */

    domain?: string | undefined;

    
    /** primary domain */

    main_domain?: string | undefined;

    
    /** historical ranking and traffic data of the domain */

    metrics_history?: { [key: string]: { [key: string]: DataforseoLabsMetricsInfo; }; } | undefined;

    
    /** metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date */

    metrics_difference?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem) {

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
            this.top_categories = data["top_categories"];
            this.organic_etv = data["organic_etv"];
            this.organic_count = data["organic_count"];
            this.organic_is_lost = data["organic_is_lost"];
            this.organic_is_new = data["organic_is_new"];
            this.domain = data["domain"];
            this.main_domain = data["main_domain"];
            this.metrics_history = data["metrics_history"];
            this.metrics_difference = data["metrics_difference"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["top_categories"] = this.top_categories;
        data["organic_etv"] = this.organic_etv;
        data["organic_count"] = this.organic_count;
        data["organic_is_lost"] = this.organic_is_lost;
        data["organic_is_new"] = this.organic_is_new;
        data["domain"] = this.domain;
        data["main_domain"] = this.main_domain;
        data["metrics_history"] = this.metrics_history;
        data["metrics_difference"] = this.metrics_difference;
        return data;
    }
}