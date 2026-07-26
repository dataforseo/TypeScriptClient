export interface IOnPageErrorsRequestInfo   {
        
        /** the maximum number of returned tasks that responded with an error optional field default value: 1000 maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned tasks optional field default value: 0 if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks */
        offset?: number | undefined
        
        /** return tasks with a certain function use this field to obtain a list of tasks that returned an error filtered by a certain function you can filter the results by the values you receive in the function fields of the API response i.e., once you receive unfiltered results, you can call this API again to filter them by function example: on_page/task_post, postback_url, pingback_url */
        filtered_function?: string | undefined
        
        /** start time for filtering results optional field allows filtering results by the datetime parameter within the range of the last 7 days; must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2021-11-15 12:57:46 +00:00 */
        datetime_from?: string | undefined
        
        /** finish time for filtering results optional field allows filtering results by the datetime parameter within the range of the last 7 days; must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2021-11-15 13:57:46 +00:00 */
        datetime_to?: string | undefined

    [key: string]: any;

    }

export class OnPageErrorsRequestInfo  implements IOnPageErrorsRequestInfo {

    
    /** the maximum number of returned tasks that responded with an error optional field default value: 1000 maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned tasks optional field default value: 0 if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks */

    offset?: number | undefined;

    
    /** return tasks with a certain function use this field to obtain a list of tasks that returned an error filtered by a certain function you can filter the results by the values you receive in the function fields of the API response i.e., once you receive unfiltered results, you can call this API again to filter them by function example: on_page/task_post, postback_url, pingback_url */

    filtered_function?: string | undefined;

    
    /** start time for filtering results optional field allows filtering results by the datetime parameter within the range of the last 7 days; must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2021-11-15 12:57:46 +00:00 */

    datetime_from?: string | undefined;

    
    /** finish time for filtering results optional field allows filtering results by the datetime parameter within the range of the last 7 days; must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2021-11-15 13:57:46 +00:00 */

    datetime_to?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageErrorsRequestInfo) {

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
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.filtered_function = data["filtered_function"];
            this.datetime_from = data["datetime_from"];
            this.datetime_to = data["datetime_to"];
        }
    }

    static fromJS(data: any): OnPageErrorsRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageErrorsRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filtered_function"] = this.filtered_function;
        data["datetime_from"] = this.datetime_from;
        data["datetime_to"] = this.datetime_to;
        return data;
    }
}