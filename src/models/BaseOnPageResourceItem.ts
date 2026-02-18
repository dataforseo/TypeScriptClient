import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";
import { CacheControl, ICacheControl } from "./CacheControl";
import { LastModified, ILastModified } from "./LastModified";
import { PageMetaInfo, IPageMetaInfo } from "./PageMetaInfo";
import { PageTiming, IPageTiming } from "./PageTiming";
import { FetchTiming, IFetchTiming } from "./FetchTiming";
import { ResourceMetaInfo, IResourceMetaInfo } from "./ResourceMetaInfo";


export interface IBaseOnPageResourceItem   {
        
        /** type of the returned resource = ‘html’ */
        resource_type?: string | undefined
        
        /** status code of the page */
        status_code?: number | undefined
        
        /** location header
indicates the URL to redirect a page to */
        location?: string | undefined
        
        /** page URL */
        url?: string | undefined
        
        /** resource errors and warnings */
        resource_errors?: OnPageResourceIssueInfo | undefined
        
        /** resource size
indicates the size of a given page measured in bytes */
        size?: number | undefined
        
        /** page size after encoding
indicates the size of the encoded page measured in bytes */
        encoded_size?: number | undefined
        
        /** compressed page size
indicates the compressed size of a given page */
        total_transfer_size?: number | undefined
        
        /** date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        fetch_time?: string | undefined
        
        /** instructions for caching */
        cache_control?: CacheControl | undefined
        
        /** website checks
on-page check-ups related to the page */
        checks?: { [key: string]: boolean; } | undefined
        
        /** type of encoding */
        content_encoding?: string | undefined
        
        /** types of media used to display a page */
        media_type?: string | undefined
        
        /** server version */
        server?: string | undefined
        
        /** contains data on changes related to the resource
if there is no data, the value will be null */
        last_modified?: LastModified | undefined

    [key: string]: any;

    }

export class BaseOnPageResourceItem  implements IBaseOnPageResourceItem {
    
    /** type of the returned resource = ‘html’ */

    resource_type?: string | undefined;
    
    /** status code of the page */

    status_code?: number | undefined;
    
    /** location header
indicates the URL to redirect a page to */

    location?: string | undefined;
    
    /** page URL */

    url?: string | undefined;
    
    /** resource errors and warnings */

    resource_errors?: OnPageResourceIssueInfo | undefined;
    
    /** resource size
indicates the size of a given page measured in bytes */

    size?: number | undefined;
    
    /** page size after encoding
indicates the size of the encoded page measured in bytes */

    encoded_size?: number | undefined;
    
    /** compressed page size
indicates the compressed size of a given page */

    total_transfer_size?: number | undefined;
    
    /** date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    fetch_time?: string | undefined;
    
    /** instructions for caching */

    cache_control?: CacheControl | undefined;
    
    /** website checks
on-page check-ups related to the page */

    checks?: { [key: string]: boolean; } | undefined;
    
    /** type of encoding */

    content_encoding?: string | undefined;
    
    /** types of media used to display a page */

    media_type?: string | undefined;
    
    /** server version */

    server?: string | undefined;
    
    /** contains data on changes related to the resource
if there is no data, the value will be null */

    last_modified?: LastModified | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseOnPageResourceItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.resource_type = data["resource_type"];
            this.status_code = data["status_code"];
            this.location = data["location"];
            this.url = data["url"];
            this.resource_errors = data["resource_errors"] ? OnPageResourceIssueInfo.fromJS(data["resource_errors"]) : <any>undefined;
            this.size = data["size"];
            this.encoded_size = data["encoded_size"];
            this.total_transfer_size = data["total_transfer_size"];
            this.fetch_time = data["fetch_time"];
            this.cache_control = data["cache_control"] ? CacheControl.fromJS(data["cache_control"]) : <any>undefined;
            this.checks = data["checks"];
            this.content_encoding = data["content_encoding"];
            this.media_type = data["media_type"];
            this.server = data["server"];
            this.last_modified = data["last_modified"] ? LastModified.fromJS(data["last_modified"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseOnPageResourceItem {
        data = typeof data === 'object' ? data : {};

        if (data["resource_type"] === "html") {

            let result = new OnPageHtmlResourceItem();
            result.init(data);
            return result;
        }
        if (data["resource_type"] === "broken") {

            let result = new OnPageBrokenResourceItem();
            result.init(data);
            return result;
        }
        if (data["resource_type"] === "redirect") {

            let result = new OnPageRedirectResourceItem();
            result.init(data);
            return result;
        }
        if (data["resource_type"] === "script") {

            let result = new OnPageScriptResourceItem();
            result.init(data);
            return result;
        }
        if (data["resource_type"] === "image") {

            let result = new OnPageImageResourceItem();
            result.init(data);
            return result;
        }
        if (data["resource_type"] === "stylesheet") {

            let result = new OnPageStylesheetResourceItem();
            result.init(data);
            return result;
        }

        let result = new BaseOnPageResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["resource_type"] = this.resource_type;
        data["status_code"] = this.status_code;
        data["location"] = this.location;
        data["url"] = this.url;
        data["resource_errors"] = this.resource_errors ? OnPageResourceIssueInfo.fromJS(this.resource_errors)?.toJSON() : <any>undefined;
        data["size"] = this.size;
        data["encoded_size"] = this.encoded_size;
        data["total_transfer_size"] = this.total_transfer_size;
        data["fetch_time"] = this.fetch_time;
        data["cache_control"] = this.cache_control ? CacheControl.fromJS(this.cache_control)?.toJSON() : <any>undefined;
        data["checks"] = this.checks;
        data["content_encoding"] = this.content_encoding;
        data["media_type"] = this.media_type;
        data["server"] = this.server;
        data["last_modified"] = this.last_modified ? LastModified.fromJS(this.last_modified)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IOnPageHtmlResourceItem  extends IBaseOnPageResourceItem    {
        
        /** page properties
the value depends on the resource_type */
        meta?: PageMetaInfo | undefined
        
        /** object of page load metrics */
        page_timing?: PageTiming | undefined
        
        /** shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article */
        onpage_score?: number | undefined
        
        /** total DOM size of a page */
        total_dom_size?: number | undefined
        
        /** the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;
you can also filter the results by this value specifying filters in the following way:
['custom_js_response.url', 'like', 'pixel'] */
        custom_js_response?: any | undefined
        
        /** error when executing a custom js
if the error occurred when executing the script you specified in the custom_js field, the error message would be displayed here */
        custom_js_client_exception?: string | undefined
        
        /** indicates whether a page contains broken resources */
        broken_resources?: boolean | undefined
        
        /** indicates whether a page contains broken links */
        broken_links?: boolean | undefined
        
        /** indicates whether a page has duplicate title tags */
        duplicate_title?: boolean | undefined
        
        /** indicates whether a page has a duplicate description */
        duplicate_description?: boolean | undefined
        
        /** indicates whether a page has duplicate content */
        duplicate_content?: boolean | undefined
        
        /** number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page */
        click_depth?: number | undefined
        
        /** indicates whether a page is a single resource */
        is_resource?: boolean | undefined
        
        /** page URL length in characters */
        url_length?: number | undefined
        
        /** relative URL length in characters */
        relative_url_length?: number | undefined

    [key: string]: any;

    }

export class OnPageHtmlResourceItem  extends BaseOnPageResourceItem   implements IOnPageHtmlResourceItem {
    
    /** page properties
the value depends on the resource_type */

    meta?: PageMetaInfo | undefined;
    
    /** object of page load metrics */

    page_timing?: PageTiming | undefined;
    
    /** shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article */

    onpage_score?: number | undefined;
    
    /** total DOM size of a page */

    total_dom_size?: number | undefined;
    
    /** the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;
you can also filter the results by this value specifying filters in the following way:
['custom_js_response.url', 'like', 'pixel'] */

    custom_js_response?: any | undefined;
    
    /** error when executing a custom js
if the error occurred when executing the script you specified in the custom_js field, the error message would be displayed here */

    custom_js_client_exception?: string | undefined;
    
    /** indicates whether a page contains broken resources */

    broken_resources?: boolean | undefined;
    
    /** indicates whether a page contains broken links */

    broken_links?: boolean | undefined;
    
    /** indicates whether a page has duplicate title tags */

    duplicate_title?: boolean | undefined;
    
    /** indicates whether a page has a duplicate description */

    duplicate_description?: boolean | undefined;
    
    /** indicates whether a page has duplicate content */

    duplicate_content?: boolean | undefined;
    
    /** number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page */

    click_depth?: number | undefined;
    
    /** indicates whether a page is a single resource */

    is_resource?: boolean | undefined;
    
    /** page URL length in characters */

    url_length?: number | undefined;
    
    /** relative URL length in characters */

    relative_url_length?: number | undefined;

    [key: string]: any;


    constructor(data?: IOnPageHtmlResourceItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.meta = data["meta"] ? PageMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.page_timing = data["page_timing"] ? PageTiming.fromJS(data["page_timing"]) : <any>undefined;
            this.onpage_score = data["onpage_score"];
            this.total_dom_size = data["total_dom_size"];
            this.custom_js_response = data["custom_js_response"];
            this.custom_js_client_exception = data["custom_js_client_exception"];
            this.broken_resources = data["broken_resources"];
            this.broken_links = data["broken_links"];
            this.duplicate_title = data["duplicate_title"];
            this.duplicate_description = data["duplicate_description"];
            this.duplicate_content = data["duplicate_content"];
            this.click_depth = data["click_depth"];
            this.is_resource = data["is_resource"];
            this.url_length = data["url_length"];
            this.relative_url_length = data["relative_url_length"];
        }
    }

    static fromJS(data: any): OnPageHtmlResourceItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageHtmlResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["meta"] = this.meta ? PageMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["page_timing"] = this.page_timing ? PageTiming.fromJS(this.page_timing)?.toJSON() : <any>undefined;
        data["onpage_score"] = this.onpage_score;
        data["total_dom_size"] = this.total_dom_size;
        data["custom_js_response"] = this.custom_js_response;
        data["custom_js_client_exception"] = this.custom_js_client_exception;
        data["broken_resources"] = this.broken_resources;
        data["broken_links"] = this.broken_links;
        data["duplicate_title"] = this.duplicate_title;
        data["duplicate_description"] = this.duplicate_description;
        data["duplicate_content"] = this.duplicate_content;
        data["click_depth"] = this.click_depth;
        data["is_resource"] = this.is_resource;
        data["url_length"] = this.url_length;
        data["relative_url_length"] = this.relative_url_length;
        return data;
    }
}

 
export interface IOnPageBrokenResourceItem  extends IBaseOnPageResourceItem    {
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates whether a page is a single resource */
        is_resource?: boolean | undefined
        
        /** resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task */
        meta?: PageMetaInfo | undefined
        
        /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */
        accept_type?: string | undefined

    [key: string]: any;

    }

export class OnPageBrokenResourceItem  extends BaseOnPageResourceItem   implements IOnPageBrokenResourceItem {
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates whether a page is a single resource */

    is_resource?: boolean | undefined;
    
    /** resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task */

    meta?: PageMetaInfo | undefined;
    
    /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */

    accept_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageBrokenResourceItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.is_resource = data["is_resource"];
            this.meta = data["meta"] ? PageMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.accept_type = data["accept_type"];
        }
    }

    static fromJS(data: any): OnPageBrokenResourceItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageBrokenResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["is_resource"] = this.is_resource;
        data["meta"] = this.meta ? PageMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["accept_type"] = this.accept_type;
        return data;
    }
}

 
export interface IOnPageRedirectResourceItem  extends IBaseOnPageResourceItem    {
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates whether a page is a single resource */
        is_resource?: boolean | undefined

    [key: string]: any;

    }

export class OnPageRedirectResourceItem  extends BaseOnPageResourceItem   implements IOnPageRedirectResourceItem {
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates whether a page is a single resource */

    is_resource?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRedirectResourceItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.is_resource = data["is_resource"];
        }
    }

    static fromJS(data: any): OnPageRedirectResourceItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRedirectResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["is_resource"] = this.is_resource;
        return data;
    }
}

 
export interface IOnPageScriptResourceItem  extends IBaseOnPageResourceItem    {
        
        meta?: ResourceMetaInfo | undefined
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */
        accept_type?: string | undefined

    [key: string]: any;

    }

export class OnPageScriptResourceItem  extends BaseOnPageResourceItem   implements IOnPageScriptResourceItem {

    meta?: ResourceMetaInfo | undefined;
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */

    accept_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageScriptResourceItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.meta = data["meta"] ? ResourceMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.accept_type = data["accept_type"];
        }
    }

    static fromJS(data: any): OnPageScriptResourceItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageScriptResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["meta"] = this.meta ? ResourceMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["accept_type"] = this.accept_type;
        return data;
    }
}

 
export interface IOnPageImageResourceItem  extends IBaseOnPageResourceItem    {
        
        /** page properties
the value depends on the resource_type */
        meta?: ResourceMetaInfo | undefined
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */
        accept_type?: string | undefined

    [key: string]: any;

    }

export class OnPageImageResourceItem  extends BaseOnPageResourceItem   implements IOnPageImageResourceItem {
    
    /** page properties
the value depends on the resource_type */

    meta?: ResourceMetaInfo | undefined;
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */

    accept_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageImageResourceItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.meta = data["meta"] ? ResourceMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.accept_type = data["accept_type"];
        }
    }

    static fromJS(data: any): OnPageImageResourceItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageImageResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["meta"] = this.meta ? ResourceMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["accept_type"] = this.accept_type;
        return data;
    }
}

 
export interface IOnPageStylesheetResourceItem  extends IBaseOnPageResourceItem    {
        
        /** page properties
the value depends on the resource_type */
        meta?: ResourceMetaInfo | undefined
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */
        accept_type?: string | undefined

    [key: string]: any;

    }

export class OnPageStylesheetResourceItem  extends BaseOnPageResourceItem   implements IOnPageStylesheetResourceItem {
    
    /** page properties
the value depends on the resource_type */

    meta?: ResourceMetaInfo | undefined;
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */

    accept_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageStylesheetResourceItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.meta = data["meta"] ? ResourceMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.accept_type = data["accept_type"];
        }
    }

    static fromJS(data: any): OnPageStylesheetResourceItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageStylesheetResourceItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["meta"] = this.meta ? ResourceMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["accept_type"] = this.accept_type;
        return data;
    }
}