export interface IBacklinksInfo   {
        
        /** average number of referring domains */
        referring_domains?: number | undefined
        
        /** average number of referring main domains */
        referring_main_domains?: number | undefined
        
        /** average number of referring pages */
        referring_pages?: number | undefined
        
        /** average number of dofollow links */
        dofollow?: number | undefined
        
        /** average number of backlinks */
        backlinks?: number | undefined
        
        /** date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        time_update?: string | undefined

    [key: string]: any;

    }

export class BacklinksInfo  implements IBacklinksInfo {

    
    /** average number of referring domains */

    referring_domains?: number | undefined;

    
    /** average number of referring main domains */

    referring_main_domains?: number | undefined;

    
    /** average number of referring pages */

    referring_pages?: number | undefined;

    
    /** average number of dofollow links */

    dofollow?: number | undefined;

    
    /** average number of backlinks */

    backlinks?: number | undefined;

    
    /** date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    time_update?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksInfo) {

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
            this.referring_domains = data["referring_domains"];
            this.referring_main_domains = data["referring_main_domains"];
            this.referring_pages = data["referring_pages"];
            this.dofollow = data["dofollow"];
            this.backlinks = data["backlinks"];
            this.time_update = data["time_update"];
        }
    }

    static fromJS(data: any): BacklinksInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["referring_domains"] = this.referring_domains;
        data["referring_main_domains"] = this.referring_main_domains;
        data["referring_pages"] = this.referring_pages;
        data["dofollow"] = this.dofollow;
        data["backlinks"] = this.backlinks;
        data["time_update"] = this.time_update;
        return data;
    }
}