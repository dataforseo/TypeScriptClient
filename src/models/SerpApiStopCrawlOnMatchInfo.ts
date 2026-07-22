export interface ISerpApiStopCrawlOnMatchInfo   {
        
        /** arget domain or wildcard value
required field if stop_crawl_on_match is specified;
specify a target domain or wildcard value;
Note: domain name must be specified without a request protocol;
example: dataforseo.com */
        match_value?: string | undefined
        
        /** target match type
required field if stop_crawl_on_match is specified;
type of match for the match_value
possible values: domain, with_subdomains, wildcard */
        match_type?: string | undefined

    [key: string]: any;

    }

export class SerpApiStopCrawlOnMatchInfo  implements ISerpApiStopCrawlOnMatchInfo {

    
    /** arget domain or wildcard value
required field if stop_crawl_on_match is specified;
specify a target domain or wildcard value;
Note: domain name must be specified without a request protocol;
example: dataforseo.com */

    match_value?: string | undefined;

    
    /** target match type
required field if stop_crawl_on_match is specified;
type of match for the match_value
possible values: domain, with_subdomains, wildcard */

    match_type?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiStopCrawlOnMatchInfo) {

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
            this.match_value = data["match_value"];
            this.match_type = data["match_type"];
        }
    }

    static fromJS(data: any): SerpApiStopCrawlOnMatchInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiStopCrawlOnMatchInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["match_value"] = this.match_value;
        data["match_type"] = this.match_type;
        return data;
    }
}