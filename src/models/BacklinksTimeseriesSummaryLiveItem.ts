export interface IBacklinksTimeseriesSummaryLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** date and time when the data for the target was stored in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        date?: string | undefined
        
        /** target rank for the given date learn more about the metric and how it is calculated in this help center article */
        rank?: number | undefined
        
        /** number of backlinks for the given date */
        backlinks?: number | undefined
        
        /** number of nofollow backlinks for the given date */
        backlinks_nofollow?: number | undefined
        
        /** number of pages pointing to target for the given date */
        referring_pages?: number | undefined
        
        /** number of referring pages pointing at least one nofollow link to the target for the given date */
        referring_pages_nofollow?: number | undefined
        
        /** number of referring domains for the given date referring domains include subdomains that are counted as separate domains for this metric */
        referring_domains?: number | undefined
        
        /** number of domains pointing at least one nofollow link to the target for the given date */
        referring_domains_nofollow?: number | undefined
        
        /** number of referring main domains for the given date */
        referring_main_domains?: number | undefined
        
        /** number of main domains pointing at least one nofollow link to the target for the given date */
        referring_main_domains_nofollow?: number | undefined
        
        /** number of referring IP addresses for the given date number of IP addresses pointing to this page */
        referring_ips?: number | undefined
        
        /** number of referring subnetworks for the given date */
        referring_subnets?: number | undefined

    [key: string]: any;

    }

export class BacklinksTimeseriesSummaryLiveItem  implements IBacklinksTimeseriesSummaryLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** date and time when the data for the target was stored in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    date?: string | undefined;

    
    /** target rank for the given date learn more about the metric and how it is calculated in this help center article */

    rank?: number | undefined;

    
    /** number of backlinks for the given date */

    backlinks?: number | undefined;

    
    /** number of nofollow backlinks for the given date */

    backlinks_nofollow?: number | undefined;

    
    /** number of pages pointing to target for the given date */

    referring_pages?: number | undefined;

    
    /** number of referring pages pointing at least one nofollow link to the target for the given date */

    referring_pages_nofollow?: number | undefined;

    
    /** number of referring domains for the given date referring domains include subdomains that are counted as separate domains for this metric */

    referring_domains?: number | undefined;

    
    /** number of domains pointing at least one nofollow link to the target for the given date */

    referring_domains_nofollow?: number | undefined;

    
    /** number of referring main domains for the given date */

    referring_main_domains?: number | undefined;

    
    /** number of main domains pointing at least one nofollow link to the target for the given date */

    referring_main_domains_nofollow?: number | undefined;

    
    /** number of referring IP addresses for the given date number of IP addresses pointing to this page */

    referring_ips?: number | undefined;

    
    /** number of referring subnetworks for the given date */

    referring_subnets?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksTimeseriesSummaryLiveItem) {

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
            this.type = data["type"];
            this.date = data["date"];
            this.rank = data["rank"];
            this.backlinks = data["backlinks"];
            this.backlinks_nofollow = data["backlinks_nofollow"];
            this.referring_pages = data["referring_pages"];
            this.referring_pages_nofollow = data["referring_pages_nofollow"];
            this.referring_domains = data["referring_domains"];
            this.referring_domains_nofollow = data["referring_domains_nofollow"];
            this.referring_main_domains = data["referring_main_domains"];
            this.referring_main_domains_nofollow = data["referring_main_domains_nofollow"];
            this.referring_ips = data["referring_ips"];
            this.referring_subnets = data["referring_subnets"];
        }
    }

    static fromJS(data: any): BacklinksTimeseriesSummaryLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksTimeseriesSummaryLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["date"] = this.date;
        data["rank"] = this.rank;
        data["backlinks"] = this.backlinks;
        data["backlinks_nofollow"] = this.backlinks_nofollow;
        data["referring_pages"] = this.referring_pages;
        data["referring_pages_nofollow"] = this.referring_pages_nofollow;
        data["referring_domains"] = this.referring_domains;
        data["referring_domains_nofollow"] = this.referring_domains_nofollow;
        data["referring_main_domains"] = this.referring_main_domains;
        data["referring_main_domains_nofollow"] = this.referring_main_domains_nofollow;
        data["referring_ips"] = this.referring_ips;
        data["referring_subnets"] = this.referring_subnets;
        return data;
    }
}