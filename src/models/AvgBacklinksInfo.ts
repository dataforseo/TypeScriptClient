export interface IAvgBacklinksInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** average number of backlinks */
        backlinks?: number | undefined
        
        /** average number of dofollow links */
        dofollow?: number | undefined
        
        /** average number of referring pages */
        referring_pages?: number | undefined
        
        /** average number of referring domains */
        referring_domains?: number | undefined
        
        /** average number of referring main domains */
        referring_main_domains?: number | undefined
        
        /** average rank
learn more about the metric and its calculation formula in this help center article */
        rank?: number | undefined
        
        /** average main domain rank
learn more about the metric and its calculation formula in this help center article */
        main_domain_rank?: number | undefined
        
        /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined

    [key: string]: any;

    }

export class AvgBacklinksInfo  implements IAvgBacklinksInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** average number of backlinks */

    backlinks?: number | undefined;

    
    /** average number of dofollow links */

    dofollow?: number | undefined;

    
    /** average number of referring pages */

    referring_pages?: number | undefined;

    
    /** average number of referring domains */

    referring_domains?: number | undefined;

    
    /** average number of referring main domains */

    referring_main_domains?: number | undefined;

    
    /** average rank
learn more about the metric and its calculation formula in this help center article */

    rank?: number | undefined;

    
    /** average main domain rank
learn more about the metric and its calculation formula in this help center article */

    main_domain_rank?: number | undefined;

    
    /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: IAvgBacklinksInfo) {

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
            this.se_type = data["se_type"];
            this.backlinks = data["backlinks"];
            this.dofollow = data["dofollow"];
            this.referring_pages = data["referring_pages"];
            this.referring_domains = data["referring_domains"];
            this.referring_main_domains = data["referring_main_domains"];
            this.rank = data["rank"];
            this.main_domain_rank = data["main_domain_rank"];
            this.last_updated_time = data["last_updated_time"];
        }
    }

    static fromJS(data: any): AvgBacklinksInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AvgBacklinksInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["backlinks"] = this.backlinks;
        data["dofollow"] = this.dofollow;
        data["referring_pages"] = this.referring_pages;
        data["referring_domains"] = this.referring_domains;
        data["referring_main_domains"] = this.referring_main_domains;
        data["rank"] = this.rank;
        data["main_domain_rank"] = this.main_domain_rank;
        data["last_updated_time"] = this.last_updated_time;
        return data;
    }
}