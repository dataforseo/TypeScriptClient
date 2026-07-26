export interface ITrendsGraphDataInfo   {
        
        /** start date of the corresponding time range in the UTC format: “yyyy-mm-dd” */
        date_from?: string | undefined
        
        /** end date of the corresponding time range in the UTC format: “yyyy-mm-dd” */
        date_to?: string | undefined
        
        /** a point in time in the Unix time format */
        timestamp?: number | undefined
        
        /** indicates whether the data is unavailable if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line */
        missing_data?: boolean | undefined
        
        /** relative keyword popularity rate at a specific timestamp represents the keyword popularity rate over the given time range if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term */
        values?: number[] | undefined

    [key: string]: any;

    }

export class TrendsGraphDataInfo  implements ITrendsGraphDataInfo {

    
    /** start date of the corresponding time range in the UTC format: “yyyy-mm-dd” */

    date_from?: string | undefined;

    
    /** end date of the corresponding time range in the UTC format: “yyyy-mm-dd” */

    date_to?: string | undefined;

    
    /** a point in time in the Unix time format */

    timestamp?: number | undefined;

    
    /** indicates whether the data is unavailable if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line */

    missing_data?: boolean | undefined;

    
    /** relative keyword popularity rate at a specific timestamp represents the keyword popularity rate over the given time range if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term */

    values?: number[] | undefined;

    [key: string]: any;


    constructor(data?: ITrendsGraphDataInfo) {

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
            this.missing_data = data["missing_data"];
            this.values = data["values"];
        }
    }

    static fromJS(data: any): TrendsGraphDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TrendsGraphDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["timestamp"] = this.timestamp;
        data["missing_data"] = this.missing_data;
        data["values"] = this.values;
        return data;
    }
}