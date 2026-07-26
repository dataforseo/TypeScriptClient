export interface IBacklinksHistoryLiveRequestInfo   {
        
        /** *domain* **required field** a domain should be specified without `https://` and `www.` */
        target?: string | undefined
        
        /** *starting date of the time range* optional field minimum value `2019-01-01` if you don't specify this field, the minimum value will be used by default date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */
        date_from?: string | undefined
        
        /** *ending date of the time range* optional field if you don't specify this field, the today's date will be used by default date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */
        date_to?: string | undefined
        
        /** *defines the scale used for calculating and displaying the `rank`, `domain_from_rank`, and `page_from_rank` values* optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: `one_hundred` — rank values are displayed on a 0–100 scale `one_thousand` — rank values are displayed on a 0–1000 scale default value: `one_thousand` learn more about how this parameter works and how ranking metrics are calculated in [this Help Center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api#rank_scale) */
        rank_scale?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksHistoryLiveRequestInfo  implements IBacklinksHistoryLiveRequestInfo {

    
    /** *domain* **required field** a domain should be specified without `https://` and `www.` */

    target?: string | undefined;

    
    /** *starting date of the time range* optional field minimum value `2019-01-01` if you don't specify this field, the minimum value will be used by default date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */

    date_from?: string | undefined;

    
    /** *ending date of the time range* optional field if you don't specify this field, the today's date will be used by default date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */

    date_to?: string | undefined;

    
    /** *defines the scale used for calculating and displaying the `rank`, `domain_from_rank`, and `page_from_rank` values* optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: `one_hundred` — rank values are displayed on a 0–100 scale `one_thousand` — rank values are displayed on a 0–1000 scale default value: `one_thousand` learn more about how this parameter works and how ranking metrics are calculated in [this Help Center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api#rank_scale) */

    rank_scale?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksHistoryLiveRequestInfo) {

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
            this.target = data["target"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksHistoryLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksHistoryLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}