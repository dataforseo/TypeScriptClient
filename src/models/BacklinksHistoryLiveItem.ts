import { TargetInfo, ITargetInfo } from "./TargetInfo";


export interface IBacklinksHistoryLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *date and time when the data for the target was stored* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */
        date?: string | undefined
        
        /** *domain rank on the given `date`* learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) */
        rank?: number | undefined
        
        /** *number of backlinks* */
        backlinks?: number | undefined
        
        /** *number of new backlinks for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */
        new_backlinks?: number | undefined
        
        /** *number of lost backlinks for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */
        lost_backlinks?: number | undefined
        
        /** *number of new referring domains for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */
        new_referring_domains?: number | undefined
        
        /** *number of lost referring domains for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */
        lost_referring_domains?: number | undefined
        
        /** *number of crawled pages for the `target`* */
        crawled_pages?: number | undefined
        
        /** *information about the `target`* */
        info?: TargetInfo | undefined
        
        /** *number of internal links* calculated as the sum of internal links on the pages of the specified `target` */
        internal_links_count?: number | undefined
        
        /** *number of external links on the page* calculated as the sum of external links on the pages of the specified `target` */
        external_links_count?: number | undefined
        
        /** *number of broken backlinks* number of broken backlinks pointing to the `target` */
        broken_backlinks?: number | undefined
        
        /** *number of broken pages* number of pages that receive backlinks but respond with 4xx or 5xx status codes */
        broken_pages?: number | undefined
        
        /** *number of referring domains* referring domains include subdomains that are counted as separate domains for this metric */
        referring_domains?: number | undefined
        
        /** *number of domains pointing at least one nofollow link to the `target`* */
        referring_domains_nofollow?: number | undefined
        
        /** *number of referring main domains* */
        referring_main_domains?: number | undefined
        
        /** *number of main domains pointing at least one nofollow link to the `target`* */
        referring_main_domains_nofollow?: number | undefined
        
        /** *number of referring IP addresses* number of IP addresses pointing to this page */
        referring_ips?: number | undefined
        
        /** *number of referring subnetworks* */
        referring_subnets?: number | undefined
        
        /** *number of pages pointing to the `target`* */
        referring_pages?: number | undefined
        
        /** *number of referring pages pointing at least one nofollow link to the `target`* */
        referring_pages_nofollow?: number | undefined
        
        /** *top-level domains of the referring links* contains top-level domains and referring link count per each */
        referring_links_tld?: { [key: string]: number; } | undefined
        
        /** *types of referring links* indicates the types of the referring links and link count per each type possible values: `anchor`, `image`, `link`, `meta`, `canonical`, `alternate`, `redirect` */
        referring_links_types?: { [key: string]: number; } | undefined
        
        /** *link attributes of the referring links* indicates link attributes of the referring links and link count per each attribute */
        referring_links_attributes?: { [key: string]: number; } | undefined
        
        /** *types of referring platforms* indicates referring platform types and and link count per each platform possible values: `cms`, `blogs`, `ecommerce`, `message-boards`, `wikis`, `news`, `organization` */
        referring_links_platform_types?: { [key: string]: number; } | undefined
        
        /** *semantic locations of the referring links* indicates semantic elements in HTML where the referring links are located and link count per each semantic location you can get the full list of semantic elements [here](https://www.w3schools.com/html/html5_semantic_elements.asp) examples: `article`, `section`, `summary` */
        referring_links_semantic_locations?: { [key: string]: number; } | undefined
        
        /** *ISO country codes of the referring links* indicates ISO country codes of the domains where the referring links are located and the link count per each country */
        referring_links_countries?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class BacklinksHistoryLiveItem  implements IBacklinksHistoryLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *date and time when the data for the target was stored* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */

    date?: string | undefined;

    
    /** *domain rank on the given `date`* learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) */

    rank?: number | undefined;

    
    /** *number of backlinks* */

    backlinks?: number | undefined;

    
    /** *number of new backlinks for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */

    new_backlinks?: number | undefined;

    
    /** *number of lost backlinks for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */

    lost_backlinks?: number | undefined;

    
    /** *number of new referring domains for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */

    new_referring_domains?: number | undefined;

    
    /** *number of lost referring domains for the `target`* data is provided based in a comparison with the previous period **Note:** this data is available from May 2021; if the date range specified in the POST request precedes May 2021, the field will equal `0` */

    lost_referring_domains?: number | undefined;

    
    /** *number of crawled pages for the `target`* */

    crawled_pages?: number | undefined;

    
    /** *information about the `target`* */

    info?: TargetInfo | undefined;

    
    /** *number of internal links* calculated as the sum of internal links on the pages of the specified `target` */

    internal_links_count?: number | undefined;

    
    /** *number of external links on the page* calculated as the sum of external links on the pages of the specified `target` */

    external_links_count?: number | undefined;

    
    /** *number of broken backlinks* number of broken backlinks pointing to the `target` */

    broken_backlinks?: number | undefined;

    
    /** *number of broken pages* number of pages that receive backlinks but respond with 4xx or 5xx status codes */

    broken_pages?: number | undefined;

    
    /** *number of referring domains* referring domains include subdomains that are counted as separate domains for this metric */

    referring_domains?: number | undefined;

    
    /** *number of domains pointing at least one nofollow link to the `target`* */

    referring_domains_nofollow?: number | undefined;

    
    /** *number of referring main domains* */

    referring_main_domains?: number | undefined;

    
    /** *number of main domains pointing at least one nofollow link to the `target`* */

    referring_main_domains_nofollow?: number | undefined;

    
    /** *number of referring IP addresses* number of IP addresses pointing to this page */

    referring_ips?: number | undefined;

    
    /** *number of referring subnetworks* */

    referring_subnets?: number | undefined;

    
    /** *number of pages pointing to the `target`* */

    referring_pages?: number | undefined;

    
    /** *number of referring pages pointing at least one nofollow link to the `target`* */

    referring_pages_nofollow?: number | undefined;

    
    /** *top-level domains of the referring links* contains top-level domains and referring link count per each */

    referring_links_tld?: { [key: string]: number; } | undefined;

    
    /** *types of referring links* indicates the types of the referring links and link count per each type possible values: `anchor`, `image`, `link`, `meta`, `canonical`, `alternate`, `redirect` */

    referring_links_types?: { [key: string]: number; } | undefined;

    
    /** *link attributes of the referring links* indicates link attributes of the referring links and link count per each attribute */

    referring_links_attributes?: { [key: string]: number; } | undefined;

    
    /** *types of referring platforms* indicates referring platform types and and link count per each platform possible values: `cms`, `blogs`, `ecommerce`, `message-boards`, `wikis`, `news`, `organization` */

    referring_links_platform_types?: { [key: string]: number; } | undefined;

    
    /** *semantic locations of the referring links* indicates semantic elements in HTML where the referring links are located and link count per each semantic location you can get the full list of semantic elements [here](https://www.w3schools.com/html/html5_semantic_elements.asp) examples: `article`, `section`, `summary` */

    referring_links_semantic_locations?: { [key: string]: number; } | undefined;

    
    /** *ISO country codes of the referring links* indicates ISO country codes of the domains where the referring links are located and the link count per each country */

    referring_links_countries?: { [key: string]: number; } | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksHistoryLiveItem) {

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
            this.new_backlinks = data["new_backlinks"];
            this.lost_backlinks = data["lost_backlinks"];
            this.new_referring_domains = data["new_referring_domains"];
            this.lost_referring_domains = data["lost_referring_domains"];
            this.crawled_pages = data["crawled_pages"];
            this.info = data["info"] ? TargetInfo.fromJS(data["info"]) : <any>undefined;
            this.internal_links_count = data["internal_links_count"];
            this.external_links_count = data["external_links_count"];
            this.broken_backlinks = data["broken_backlinks"];
            this.broken_pages = data["broken_pages"];
            this.referring_domains = data["referring_domains"];
            this.referring_domains_nofollow = data["referring_domains_nofollow"];
            this.referring_main_domains = data["referring_main_domains"];
            this.referring_main_domains_nofollow = data["referring_main_domains_nofollow"];
            this.referring_ips = data["referring_ips"];
            this.referring_subnets = data["referring_subnets"];
            this.referring_pages = data["referring_pages"];
            this.referring_pages_nofollow = data["referring_pages_nofollow"];
            this.referring_links_tld = data["referring_links_tld"];
            this.referring_links_types = data["referring_links_types"];
            this.referring_links_attributes = data["referring_links_attributes"];
            this.referring_links_platform_types = data["referring_links_platform_types"];
            this.referring_links_semantic_locations = data["referring_links_semantic_locations"];
            this.referring_links_countries = data["referring_links_countries"];
        }
    }

    static fromJS(data: any): BacklinksHistoryLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksHistoryLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["date"] = this.date;
        data["rank"] = this.rank;
        data["backlinks"] = this.backlinks;
        data["new_backlinks"] = this.new_backlinks;
        data["lost_backlinks"] = this.lost_backlinks;
        data["new_referring_domains"] = this.new_referring_domains;
        data["lost_referring_domains"] = this.lost_referring_domains;
        data["crawled_pages"] = this.crawled_pages;
        data["info"] = this.info ? TargetInfo.fromJS(this.info)?.toJSON() : <any>undefined;
        data["internal_links_count"] = this.internal_links_count;
        data["external_links_count"] = this.external_links_count;
        data["broken_backlinks"] = this.broken_backlinks;
        data["broken_pages"] = this.broken_pages;
        data["referring_domains"] = this.referring_domains;
        data["referring_domains_nofollow"] = this.referring_domains_nofollow;
        data["referring_main_domains"] = this.referring_main_domains;
        data["referring_main_domains_nofollow"] = this.referring_main_domains_nofollow;
        data["referring_ips"] = this.referring_ips;
        data["referring_subnets"] = this.referring_subnets;
        data["referring_pages"] = this.referring_pages;
        data["referring_pages_nofollow"] = this.referring_pages_nofollow;
        data["referring_links_tld"] = this.referring_links_tld;
        data["referring_links_types"] = this.referring_links_types;
        data["referring_links_attributes"] = this.referring_links_attributes;
        data["referring_links_platform_types"] = this.referring_links_platform_types;
        data["referring_links_semantic_locations"] = this.referring_links_semantic_locations;
        data["referring_links_countries"] = this.referring_links_countries;
        return data;
    }
}