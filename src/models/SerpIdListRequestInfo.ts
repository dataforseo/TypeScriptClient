export interface ISerpIdListRequestInfo   {
        
        /** *start time for filtering results* **required field** if `include_metadata` is set to `true`, minimum start value: a month from current datetime; if `include_metadata` is set to `false`, minimum start value: six months from current datetime; maximum start value: current `datetime`; must be specified in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'; example: `2023-01-15 12:57:46 +00:00` */
        datetime_from?: string | undefined
        
        /** *finish time for filtering results* **required field** if `include_metadata` is set to `true`, minimum finish value: a month from current datetime; if `include_metadata` is set to `false`, minimum finish value: six months from current datetime; maximum finish value: current `datetime`; **Note:** `datetime_to` must be greater than `datetime_from`; must be specified in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'; example: `2023-01-31 13:57:46 +00:00` */
        datetime_to?: string | undefined
        
        /** *the maximum number of returned task IDs* optional field default value: `1000` maximum value: `1000` minimum value: `1` */
        limit?: number | undefined
        
        /** *offset in the results array of returned task IDs* optional field if you specify the `10` value, the first ten tasks in the results array will be omitted; minimum and default value: `0`; maximum value: `100M` (100 million) */
        offset?: number | undefined
        
        /** *sorting by task execution time* optional field possible values: `'asc'`, `'desc'` default value: `'asc'` */
        sort?: string | undefined
        
        /** *include task metadata in the response* optional field if set to `true`, the `metadata` object containing parameters specified in the POST request will be provided in the response; default value: `false` */
        include_metadata?: boolean | undefined

    [key: string]: any;

    }

export class SerpIdListRequestInfo  implements ISerpIdListRequestInfo {

    
    /** *start time for filtering results* **required field** if `include_metadata` is set to `true`, minimum start value: a month from current datetime; if `include_metadata` is set to `false`, minimum start value: six months from current datetime; maximum start value: current `datetime`; must be specified in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'; example: `2023-01-15 12:57:46 +00:00` */

    datetime_from?: string | undefined;

    
    /** *finish time for filtering results* **required field** if `include_metadata` is set to `true`, minimum finish value: a month from current datetime; if `include_metadata` is set to `false`, minimum finish value: six months from current datetime; maximum finish value: current `datetime`; **Note:** `datetime_to` must be greater than `datetime_from`; must be specified in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'; example: `2023-01-31 13:57:46 +00:00` */

    datetime_to?: string | undefined;

    
    /** *the maximum number of returned task IDs* optional field default value: `1000` maximum value: `1000` minimum value: `1` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned task IDs* optional field if you specify the `10` value, the first ten tasks in the results array will be omitted; minimum and default value: `0`; maximum value: `100M` (100 million) */

    offset?: number | undefined;

    
    /** *sorting by task execution time* optional field possible values: `'asc'`, `'desc'` default value: `'asc'` */

    sort?: string | undefined;

    
    /** *include task metadata in the response* optional field if set to `true`, the `metadata` object containing parameters specified in the POST request will be provided in the response; default value: `false` */

    include_metadata?: boolean | undefined;

    [key: string]: any;


    constructor(data?: ISerpIdListRequestInfo) {

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

    static fromJS(data: any): SerpIdListRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpIdListRequestInfo();
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