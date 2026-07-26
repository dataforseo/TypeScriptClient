export interface IDataforseoTrendsGraphDataTrendsGraphDataInfo   {
        
        /** start date of the corresponding time range in the UTC format: “yyyy-mm-dd” */
        date_from?: string | undefined
        
        /** end date of the corresponding time range in the UTC format: “yyyy-mm-dd” */
        date_to?: string | undefined
        
        /** a point in time in the Unix time format */
        timestamp?: number | undefined
        
        /** relative keyword popularity rate at a specific timestamp represents the keyword popularity rate over the given time range if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term */
        values?: number[] | undefined

    [key: string]: any;

    }

export class DataforseoTrendsGraphDataTrendsGraphDataInfo  implements IDataforseoTrendsGraphDataTrendsGraphDataInfo {

    
    /** start date of the corresponding time range in the UTC format: “yyyy-mm-dd” */

    date_from?: string | undefined;

    
    /** end date of the corresponding time range in the UTC format: “yyyy-mm-dd” */

    date_to?: string | undefined;

    
    /** a point in time in the Unix time format */

    timestamp?: number | undefined;

    
    /** relative keyword popularity rate at a specific timestamp represents the keyword popularity rate over the given time range if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term */

    values?: number[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsGraphDataTrendsGraphDataInfo) {

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
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.timestamp = data["timestamp"];
            this.values = data["values"];
        }
    }

    static fromJS(data: any): DataforseoTrendsGraphDataTrendsGraphDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsGraphDataTrendsGraphDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["timestamp"] = this.timestamp;
        data["values"] = this.values;
        return data;
    }
}