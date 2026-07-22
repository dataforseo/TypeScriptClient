export interface IAppDataIdListRequestInfo   {
        
        /** start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00 */
        datetime_from?: string | undefined
        
        /** finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00 */
        datetime_to?: string | undefined
        
        /** the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted */
        offset?: number | undefined
        
        /** sorting by task execution time
optional field
possible values: 'asc', 'desc'
default value: 'asc' */
        sort?: string | undefined
        
        /** include task metadata in the respond
optional field
default value: false */
        include_metadata?: boolean | undefined

    [key: string]: any;

    }

export class AppDataIdListRequestInfo  implements IAppDataIdListRequestInfo {

    
    /** start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00 */

    datetime_from?: string | undefined;

    
    /** finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00 */

    datetime_to?: string | undefined;

    
    /** the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted */

    offset?: number | undefined;

    
    /** sorting by task execution time
optional field
possible values: 'asc', 'desc'
default value: 'asc' */

    sort?: string | undefined;

    
    /** include task metadata in the respond
optional field
default value: false */

    include_metadata?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IAppDataIdListRequestInfo) {

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
            this.datetime_from = data["datetime_from"];
            this.datetime_to = data["datetime_to"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.sort = data["sort"];
            this.include_metadata = data["include_metadata"];
        }
    }

    static fromJS(data: any): AppDataIdListRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataIdListRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["datetime_from"] = this.datetime_from;
        data["datetime_to"] = this.datetime_to;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["sort"] = this.sort;
        data["include_metadata"] = this.include_metadata;
        return data;
    }
}