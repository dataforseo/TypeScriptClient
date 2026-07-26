import { BacklinksPageMeta, IBacklinksPageMeta } from "./BacklinksPageMeta";
import { PageSummary, IPageSummary } from "./PageSummary";


export interface IBacklinksDomainPagesLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** main website domain main website domain does not include subdomains */
        main_domain?: string | undefined
        
        /** domain domain where the page was found */
        domain?: string | undefined
        
        /** top-level domain top-level domain in the DNS root zone */
        tld?: string | undefined
        
        /** page URL relevant page URL */
        page?: string | undefined
        
        /** Internet Protocol address */
        ip?: string | undefined
        
        /** date and time of the first page visit date and time when our crawler visited this page for the first time in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */
        first_visited?: string | undefined
        
        /** previous to the most recent date when our crawler visited the page in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */
        prev_visited?: string | undefined
        
        /** most recent date and time when our crawler visited the page in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */
        fetch_time?: string | undefined
        
        /** general status code you can find the full list of the response codes here Note: we strongly recommend designing a necessary system for handling related exceptional or error conditions */
        status_code?: number | undefined
        
        /** location header indicates the URL to redirect a page to if exists */
        location?: string | undefined
        
        /** indicates the page size, in bytes */
        size?: number | undefined
        
        /** page size after encoding indicates the size of the encoded page, in bytes */
        encoded_size?: number | undefined
        
        /** type of encoding */
        content_encoding?: string | undefined
        
        /** types of media used to display a page */
        media_type?: string | undefined
        
        /** server version */
        server?: string | undefined
        
        /** page meta data */
        meta?: BacklinksPageMeta | undefined
        
        /** contains backlink data for this page */
        page_summary?: PageSummary | undefined

    [key: string]: any;

    }

export class BacklinksDomainPagesLiveItem  implements IBacklinksDomainPagesLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** main website domain main website domain does not include subdomains */

    main_domain?: string | undefined;

    
    /** domain domain where the page was found */

    domain?: string | undefined;

    
    /** top-level domain top-level domain in the DNS root zone */

    tld?: string | undefined;

    
    /** page URL relevant page URL */

    page?: string | undefined;

    
    /** Internet Protocol address */

    ip?: string | undefined;

    
    /** date and time of the first page visit date and time when our crawler visited this page for the first time in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */

    first_visited?: string | undefined;

    
    /** previous to the most recent date when our crawler visited the page in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */

    prev_visited?: string | undefined;

    
    /** most recent date and time when our crawler visited the page in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2017-01-24 13:20:59 +00:00 */

    fetch_time?: string | undefined;

    
    /** general status code you can find the full list of the response codes here Note: we strongly recommend designing a necessary system for handling related exceptional or error conditions */

    status_code?: number | undefined;

    
    /** location header indicates the URL to redirect a page to if exists */

    location?: string | undefined;

    
    /** indicates the page size, in bytes */

    size?: number | undefined;

    
    /** page size after encoding indicates the size of the encoded page, in bytes */

    encoded_size?: number | undefined;

    
    /** type of encoding */

    content_encoding?: string | undefined;

    
    /** types of media used to display a page */

    media_type?: string | undefined;

    
    /** server version */

    server?: string | undefined;

    
    /** page meta data */

    meta?: BacklinksPageMeta | undefined;

    
    /** contains backlink data for this page */

    page_summary?: PageSummary | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainPagesLiveItem) {

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
            this.main_domain = data["main_domain"];
            this.domain = data["domain"];
            this.tld = data["tld"];
            this.page = data["page"];
            this.ip = data["ip"];
            this.first_visited = data["first_visited"];
            this.prev_visited = data["prev_visited"];
            this.fetch_time = data["fetch_time"];
            this.status_code = data["status_code"];
            this.location = data["location"];
            this.size = data["size"];
            this.encoded_size = data["encoded_size"];
            this.content_encoding = data["content_encoding"];
            this.media_type = data["media_type"];
            this.server = data["server"];
            this.meta = data["meta"] ? BacklinksPageMeta.fromJS(data["meta"]) : <any>undefined;
            this.page_summary = data["page_summary"] ? PageSummary.fromJS(data["page_summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BacklinksDomainPagesLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainPagesLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["main_domain"] = this.main_domain;
        data["domain"] = this.domain;
        data["tld"] = this.tld;
        data["page"] = this.page;
        data["ip"] = this.ip;
        data["first_visited"] = this.first_visited;
        data["prev_visited"] = this.prev_visited;
        data["fetch_time"] = this.fetch_time;
        data["status_code"] = this.status_code;
        data["location"] = this.location;
        data["size"] = this.size;
        data["encoded_size"] = this.encoded_size;
        data["content_encoding"] = this.content_encoding;
        data["media_type"] = this.media_type;
        data["server"] = this.server;
        data["meta"] = this.meta ? BacklinksPageMeta.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["page_summary"] = this.page_summary ? PageSummary.fromJS(this.page_summary)?.toJSON() : <any>undefined;
        return data;
    }
}