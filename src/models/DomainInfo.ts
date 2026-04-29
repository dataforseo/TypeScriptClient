import { SslInfo, ISslInfo } from "./SslInfo";


export interface IDomainInfo   {
        
        /** domain name */
        name?: string | undefined
        
        /** content management system
content management system identified on a website
the content of the generator meta tag
the data is taken from the first random page that returns the 200 response code
if our crawler was unable to identify the cms, the value would be null */
        cms?: string | undefined
        
        /** domain ip address */
        ip?: string | undefined
        
        /** website server
the version of the server detected on a website
the content of the server header
the information is taken from the first page which response code is 200 */
        server?: string | undefined
        
        /** time when the crawling start
date and time when the website was sent for crawling
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        crawl_start?: string | undefined
        
        /** time when the crawling ended
date and time when the crawling was finished
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
Note: informative only if 'crawl_progress' is 'finished'
if 'crawl_progress' is in_progress, the value will be null */
        crawl_end?: string | undefined
        
        /** crawl status and errors
indicates the reason why a website was not crawled;
can take the following values:
no_errors – no crawling errors were detected;
site_unreachable – our crawler could not reach a website and thus was not able to obtain a status code;
invalid_page_status_code – status code of the first crawled page >= 400;
forbidden_meta_tag – the first crawled page contains the <meta robots=”noindex”> tag;
forbidden_robots – robots.txt forbids crawling the page;
forbidden_http_header – HTTP header of the page contains “X-Robots-Tag: noindex” ;
too_many_redirects – the first crawled page has more than 10 redirects;
unknown – the reason is unknown */
        extended_crawl_status?: string | undefined
        
        /** ssl certificate info
information about the Secure Sockets Layer protocol detected on a website */
        ssl_info?: SslInfo | undefined
        
        /** website checks
other on-page check-ups related to the website */
        checks?: { [key: string]: boolean; } | undefined
        
        /** total crawled pages
the total number of crawled pages */
        total_pages?: number | undefined
        
        /** total uncrawlable resources
the total number of resources that could not be crawled;
the resource is considered uncrawlable when the actual content type of the resource doesn’t match the content type expected by the crawler */
        total_uncrawlable_resources?: number | undefined
        
        /** status code returned by a non-existent page
in most cases, it is recommended a server returns a 404 response code */
        page_not_found_status_code?: number | undefined
        
        /** status code returned by a canonicalized page
the checkup of the server behavior when our crawler tries to access the website via IP;
in most cases, it is recommended that canonicalized pages respond with a 301 or 302 status code */
        canonicalization_status_code?: number | undefined
        
        /** status code returned by a directory
the status code returned by a directory page on a target website
in most cases, it is recommended that directories respond with a 403 or 401 status code */
        directory_browsing_status_code?: number | undefined
        
        /** redirect status code
the status code of the www to non-www redirect
in most cases, it is recommended that redirect returns a 301 status code */
        www_redirect_status_code?: number | undefined
        
        /** root domain name */
        main_domain?: string | undefined

    [key: string]: any;

    }

export class DomainInfo  implements IDomainInfo {
    
    /** domain name */

    name?: string | undefined;
    
    /** content management system
content management system identified on a website
the content of the generator meta tag
the data is taken from the first random page that returns the 200 response code
if our crawler was unable to identify the cms, the value would be null */

    cms?: string | undefined;
    
    /** domain ip address */

    ip?: string | undefined;
    
    /** website server
the version of the server detected on a website
the content of the server header
the information is taken from the first page which response code is 200 */

    server?: string | undefined;
    
    /** time when the crawling start
date and time when the website was sent for crawling
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    crawl_start?: string | undefined;
    
    /** time when the crawling ended
date and time when the crawling was finished
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
Note: informative only if 'crawl_progress' is 'finished'
if 'crawl_progress' is in_progress, the value will be null */

    crawl_end?: string | undefined;
    
    /** crawl status and errors
indicates the reason why a website was not crawled;
can take the following values:
no_errors – no crawling errors were detected;
site_unreachable – our crawler could not reach a website and thus was not able to obtain a status code;
invalid_page_status_code – status code of the first crawled page >= 400;
forbidden_meta_tag – the first crawled page contains the <meta robots=”noindex”> tag;
forbidden_robots – robots.txt forbids crawling the page;
forbidden_http_header – HTTP header of the page contains “X-Robots-Tag: noindex” ;
too_many_redirects – the first crawled page has more than 10 redirects;
unknown – the reason is unknown */

    extended_crawl_status?: string | undefined;
    
    /** ssl certificate info
information about the Secure Sockets Layer protocol detected on a website */

    ssl_info?: SslInfo | undefined;
    
    /** website checks
other on-page check-ups related to the website */

    checks?: { [key: string]: boolean; } | undefined;
    
    /** total crawled pages
the total number of crawled pages */

    total_pages?: number | undefined;
    
    /** total uncrawlable resources
the total number of resources that could not be crawled;
the resource is considered uncrawlable when the actual content type of the resource doesn’t match the content type expected by the crawler */

    total_uncrawlable_resources?: number | undefined;
    
    /** status code returned by a non-existent page
in most cases, it is recommended a server returns a 404 response code */

    page_not_found_status_code?: number | undefined;
    
    /** status code returned by a canonicalized page
the checkup of the server behavior when our crawler tries to access the website via IP;
in most cases, it is recommended that canonicalized pages respond with a 301 or 302 status code */

    canonicalization_status_code?: number | undefined;
    
    /** status code returned by a directory
the status code returned by a directory page on a target website
in most cases, it is recommended that directories respond with a 403 or 401 status code */

    directory_browsing_status_code?: number | undefined;
    
    /** redirect status code
the status code of the www to non-www redirect
in most cases, it is recommended that redirect returns a 301 status code */

    www_redirect_status_code?: number | undefined;
    
    /** root domain name */

    main_domain?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainInfo) {

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
            this.name = data["name"];
            this.cms = data["cms"];
            this.ip = data["ip"];
            this.server = data["server"];
            this.crawl_start = data["crawl_start"];
            this.crawl_end = data["crawl_end"];
            this.extended_crawl_status = data["extended_crawl_status"];
            this.ssl_info = data["ssl_info"] ? SslInfo.fromJS(data["ssl_info"]) : <any>undefined;
            this.checks = data["checks"];
            this.total_pages = data["total_pages"];
            this.total_uncrawlable_resources = data["total_uncrawlable_resources"];
            this.page_not_found_status_code = data["page_not_found_status_code"];
            this.canonicalization_status_code = data["canonicalization_status_code"];
            this.directory_browsing_status_code = data["directory_browsing_status_code"];
            this.www_redirect_status_code = data["www_redirect_status_code"];
            this.main_domain = data["main_domain"];
        }
    }

    static fromJS(data: any): DomainInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["cms"] = this.cms;
        data["ip"] = this.ip;
        data["server"] = this.server;
        data["crawl_start"] = this.crawl_start;
        data["crawl_end"] = this.crawl_end;
        data["extended_crawl_status"] = this.extended_crawl_status;
        data["ssl_info"] = this.ssl_info ? SslInfo.fromJS(this.ssl_info)?.toJSON() : <any>undefined;
        data["checks"] = this.checks;
        data["total_pages"] = this.total_pages;
        data["total_uncrawlable_resources"] = this.total_uncrawlable_resources;
        data["page_not_found_status_code"] = this.page_not_found_status_code;
        data["canonicalization_status_code"] = this.canonicalization_status_code;
        data["directory_browsing_status_code"] = this.directory_browsing_status_code;
        data["www_redirect_status_code"] = this.www_redirect_status_code;
        data["main_domain"] = this.main_domain;
        return data;
    }
}