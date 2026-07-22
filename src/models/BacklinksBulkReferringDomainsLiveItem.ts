export interface IBacklinksBulkReferringDomainsLiveItem   {
        
        /** domain, subdomain or webpage from a POST array */
        target?: string | undefined
        
        /** number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric */
        referring_domains?: number | undefined
        
        /** number of domains pointing at least one nofollow link to the target */
        referring_domains_nofollow?: number | undefined
        
        /** number of referring main domains pointing to the target
the number of primary (root) domains referring to your target */
        referring_main_domains?: number | undefined
        
        /** number of main domains pointing at least one nofollow link to the target */
        referring_main_domains_nofollow?: number | undefined

    [key: string]: any;

    }

export class BacklinksBulkReferringDomainsLiveItem  implements IBacklinksBulkReferringDomainsLiveItem {

    
    /** domain, subdomain or webpage from a POST array */

    target?: string | undefined;

    
    /** number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric */

    referring_domains?: number | undefined;

    
    /** number of domains pointing at least one nofollow link to the target */

    referring_domains_nofollow?: number | undefined;

    
    /** number of referring main domains pointing to the target
the number of primary (root) domains referring to your target */

    referring_main_domains?: number | undefined;

    
    /** number of main domains pointing at least one nofollow link to the target */

    referring_main_domains_nofollow?: number | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkReferringDomainsLiveItem) {

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
            this.referring_domains = data["referring_domains"];
            this.referring_domains_nofollow = data["referring_domains_nofollow"];
            this.referring_main_domains = data["referring_main_domains"];
            this.referring_main_domains_nofollow = data["referring_main_domains_nofollow"];
        }
    }

    static fromJS(data: any): BacklinksBulkReferringDomainsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkReferringDomainsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["referring_domains"] = this.referring_domains;
        data["referring_domains_nofollow"] = this.referring_domains_nofollow;
        data["referring_main_domains"] = this.referring_main_domains;
        data["referring_main_domains_nofollow"] = this.referring_main_domains_nofollow;
        return data;
    }
}