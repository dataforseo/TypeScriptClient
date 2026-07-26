export interface IBacklinksBulkRanksLiveRequestInfo   {
        
        /** *domains, subdomains or webpages to get `rank` for* **required field** you can set up to 1000 domains, subdomains or webpages the domain or subdomain should be specified without `https://` and `www.` the page should be specified with absolute URL (including `http://` or `https://`) example: `'targets': [   'forbes.com',   'cnn.com',   'bbc.com',   'yelp.com',   'https://www.apple.com/iphone/',   'https://ahrefs.com/blog/',   'ibm.com',   'https://variety.com/',   'https://stackoverflow.com/',   'www.trustpilot.com' ]` */
        targets?: string[] | undefined
        
        /** *defines the scale used for calculating and displaying the `rank`, `domain_from_rank`, and `page_from_rank` values* optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: `one_hundred` — rank values are displayed on a 0–100 scale `one_thousand` — rank values are displayed on a 0–1000 scale default value: `one_thousand` learn more about how this parameter works and how ranking metrics are calculated in [this Help Center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api#rank_scale) */
        rank_scale?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksBulkRanksLiveRequestInfo  implements IBacklinksBulkRanksLiveRequestInfo {

    
    /** *domains, subdomains or webpages to get `rank` for* **required field** you can set up to 1000 domains, subdomains or webpages the domain or subdomain should be specified without `https://` and `www.` the page should be specified with absolute URL (including `http://` or `https://`) example: `'targets': [   'forbes.com',   'cnn.com',   'bbc.com',   'yelp.com',   'https://www.apple.com/iphone/',   'https://ahrefs.com/blog/',   'ibm.com',   'https://variety.com/',   'https://stackoverflow.com/',   'www.trustpilot.com' ]` */

    targets?: string[] | undefined;

    
    /** *defines the scale used for calculating and displaying the `rank`, `domain_from_rank`, and `page_from_rank` values* optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: `one_hundred` — rank values are displayed on a 0–100 scale `one_thousand` — rank values are displayed on a 0–1000 scale default value: `one_thousand` learn more about how this parameter works and how ranking metrics are calculated in [this Help Center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api#rank_scale) */

    rank_scale?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkRanksLiveRequestInfo) {

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
            this.targets = data["targets"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksBulkRanksLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkRanksLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = this.targets;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}