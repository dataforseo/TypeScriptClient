export interface IBaseOnPageLinkItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *referring domain* the link was found on this domain */
        domain_from?: string | undefined
        
        /** *referenced domain* the link is pointing to this domain */
        domain_to?: string | undefined
        
        /** *referring page* relative URL of the page on which the link was found */
        page_from?: string | undefined
        
        /** *referenced page* relative URL of the page to which the link is pointing */
        page_to?: string | undefined
        
        /** *referring page* absolute URL of the page on which the link was found */
        link_from?: string | undefined
        
        /** *referenced page* absolute URL of the page to which the link is pointing */
        link_to?: string | undefined
        
        /** *indicates whether the link is dofollow* if the value is `true`, the link doesn't have a `rel='nofollow'` attribute */
        dofollow?: boolean | undefined
        
        /** *[url scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes) of the referring page* */
        page_from_scheme?: string | undefined
        
        /** *[url scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes) of the referenced page* */
        page_to_scheme?: string | undefined
        
        /** *direction of the link* possible values: `internal`, `external` */
        direction?: string | undefined
        
        /** *link is broken* indicates whether a link is directing to a broken page or resource */
        is_broken?: boolean | undefined
        
        /** *indicates that the link may have a conflict with another link* if `true`, at least one link pointing to `link_to` has a `rel='nofollow'` attribute **and** at least one is dofollow */
        is_link_relation_conflict?: boolean | undefined
        
        /** *status code of the referenced page* status code of the page to which the link is pointing */
        page_to_status_code?: number | undefined

    [key: string]: any;

    }

export class BaseOnPageLinkItem  implements IBaseOnPageLinkItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *referring domain* the link was found on this domain */

    domain_from?: string | undefined;

    
    /** *referenced domain* the link is pointing to this domain */

    domain_to?: string | undefined;

    
    /** *referring page* relative URL of the page on which the link was found */

    page_from?: string | undefined;

    
    /** *referenced page* relative URL of the page to which the link is pointing */

    page_to?: string | undefined;

    
    /** *referring page* absolute URL of the page on which the link was found */

    link_from?: string | undefined;

    
    /** *referenced page* absolute URL of the page to which the link is pointing */

    link_to?: string | undefined;

    
    /** *indicates whether the link is dofollow* if the value is `true`, the link doesn't have a `rel='nofollow'` attribute */

    dofollow?: boolean | undefined;

    
    /** *[url scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes) of the referring page* */

    page_from_scheme?: string | undefined;

    
    /** *[url scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes) of the referenced page* */

    page_to_scheme?: string | undefined;

    
    /** *direction of the link* possible values: `internal`, `external` */

    direction?: string | undefined;

    
    /** *link is broken* indicates whether a link is directing to a broken page or resource */

    is_broken?: boolean | undefined;

    
    /** *indicates that the link may have a conflict with another link* if `true`, at least one link pointing to `link_to` has a `rel='nofollow'` attribute **and** at least one is dofollow */

    is_link_relation_conflict?: boolean | undefined;

    
    /** *status code of the referenced page* status code of the page to which the link is pointing */

    page_to_status_code?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseOnPageLinkItem) {

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
            this.type = data["type"];
            this.domain_from = data["domain_from"];
            this.domain_to = data["domain_to"];
            this.page_from = data["page_from"];
            this.page_to = data["page_to"];
            this.link_from = data["link_from"];
            this.link_to = data["link_to"];
            this.dofollow = data["dofollow"];
            this.page_from_scheme = data["page_from_scheme"];
            this.page_to_scheme = data["page_to_scheme"];
            this.direction = data["direction"];
            this.is_broken = data["is_broken"];
            this.is_link_relation_conflict = data["is_link_relation_conflict"];
            this.page_to_status_code = data["page_to_status_code"];
        }
    }

    static fromJS(data: any): BaseOnPageLinkItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "anchor") {

            let result = new OnPageAnchorLinkItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "image") {

            let result = new OnPageImageLinkItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "canonical") {

            let result = new OnPageCanonicalLinkItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "alternate") {

            let result = new OnPageAlternateLinkItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "link") {

            let result = new OnPageLinkLinkItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "redirect") {

            let result = new OnPageRedirectLinkItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "meta") {

            let result = new OnPageMetaLinkItem();
            result.init(data);
            return result;
        }

        let result = new BaseOnPageLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["domain_from"] = this.domain_from;
        data["domain_to"] = this.domain_to;
        data["page_from"] = this.page_from;
        data["page_to"] = this.page_to;
        data["link_from"] = this.link_from;
        data["link_to"] = this.link_to;
        data["dofollow"] = this.dofollow;
        data["page_from_scheme"] = this.page_from_scheme;
        data["page_to_scheme"] = this.page_to_scheme;
        data["direction"] = this.direction;
        data["is_broken"] = this.is_broken;
        data["is_link_relation_conflict"] = this.is_link_relation_conflict;
        data["page_to_status_code"] = this.page_to_status_code;
        return data;
    }
}

 
export interface IOnPageAnchorLinkItem  extends IBaseOnPageLinkItem    {
        
        /** *link attribute added to external link* indicates link attributes added to the `link_to` on the `page_from` example: `['ugc','noopener']` */
        link_attribute?: string[] | undefined
        
        /** *anchor text* */
        text?: string | undefined

    [key: string]: any;

    }

export class OnPageAnchorLinkItem  extends BaseOnPageLinkItem   implements IOnPageAnchorLinkItem {

    
    /** *link attribute added to external link* indicates link attributes added to the `link_to` on the `page_from` example: `['ugc','noopener']` */

    link_attribute?: string[] | undefined;

    
    /** *anchor text* */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageAnchorLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.link_attribute = data["link_attribute"];
            this.text = data["text"];
        }
    }

    static fromJS(data: any): OnPageAnchorLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageAnchorLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["link_attribute"] = this.link_attribute;
        data["text"] = this.text;
        return data;
    }
}

 
export interface IOnPageImageLinkItem  extends IBaseOnPageLinkItem    {
        
        /** *link attribute added to external link* indicates link attributes added to the `link_to` on the `page_from` example: `['ugc','noopener']` */
        link_attribute?: string[] | undefined
        
        /** *anchor text* */
        text?: string | undefined
        
        /** *alternative text for the image* */
        image_alt?: string | undefined
        
        /** *url of the image* */
        image_src?: string | undefined

    [key: string]: any;

    }

export class OnPageImageLinkItem  extends BaseOnPageLinkItem   implements IOnPageImageLinkItem {

    
    /** *link attribute added to external link* indicates link attributes added to the `link_to` on the `page_from` example: `['ugc','noopener']` */

    link_attribute?: string[] | undefined;

    
    /** *anchor text* */

    text?: string | undefined;

    
    /** *alternative text for the image* */

    image_alt?: string | undefined;

    
    /** *url of the image* */

    image_src?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageImageLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.link_attribute = data["link_attribute"];
            this.text = data["text"];
            this.image_alt = data["image_alt"];
            this.image_src = data["image_src"];
        }
    }

    static fromJS(data: any): OnPageImageLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageImageLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["link_attribute"] = this.link_attribute;
        data["text"] = this.text;
        data["image_alt"] = this.image_alt;
        data["image_src"] = this.image_src;
        return data;
    }
}

 
export interface IOnPageCanonicalLinkItem  extends IBaseOnPageLinkItem    {

    [key: string]: any;

    }

export class OnPageCanonicalLinkItem  extends BaseOnPageLinkItem   implements IOnPageCanonicalLinkItem {

    [key: string]: any;


    constructor(data?: IOnPageCanonicalLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): OnPageCanonicalLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageCanonicalLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}

 
export interface IOnPageAlternateLinkItem  extends IBaseOnPageLinkItem    {
        
        /** *hreflang validity status* indicates whether the hreflang attribute is correctly implemented */
        is_valid_hreflang?: boolean | undefined
        
        /** *hreflang attribute value* language and optional country code specified in the hreflang attribute example: `'en-US'`, `'fr'` */
        hreflang?: string | undefined

    [key: string]: any;

    }

export class OnPageAlternateLinkItem  extends BaseOnPageLinkItem   implements IOnPageAlternateLinkItem {

    
    /** *hreflang validity status* indicates whether the hreflang attribute is correctly implemented */

    is_valid_hreflang?: boolean | undefined;

    
    /** *hreflang attribute value* language and optional country code specified in the hreflang attribute example: `'en-US'`, `'fr'` */

    hreflang?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageAlternateLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.is_valid_hreflang = data["is_valid_hreflang"];
            this.hreflang = data["hreflang"];
        }
    }

    static fromJS(data: any): OnPageAlternateLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageAlternateLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["is_valid_hreflang"] = this.is_valid_hreflang;
        data["hreflang"] = this.hreflang;
        return data;
    }
}

 
export interface IOnPageLinkLinkItem  extends IBaseOnPageLinkItem    {

    [key: string]: any;

    }

export class OnPageLinkLinkItem  extends BaseOnPageLinkItem   implements IOnPageLinkLinkItem {

    [key: string]: any;


    constructor(data?: IOnPageLinkLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): OnPageLinkLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLinkLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}

 
export interface IOnPageRedirectLinkItem  extends IBaseOnPageLinkItem    {

    [key: string]: any;

    }

export class OnPageRedirectLinkItem  extends BaseOnPageLinkItem   implements IOnPageRedirectLinkItem {

    [key: string]: any;


    constructor(data?: IOnPageRedirectLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): OnPageRedirectLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRedirectLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}

 
export interface IOnPageMetaLinkItem  extends IBaseOnPageLinkItem    {

    [key: string]: any;

    }

export class OnPageMetaLinkItem  extends BaseOnPageLinkItem   implements IOnPageMetaLinkItem {

    [key: string]: any;


    constructor(data?: IOnPageMetaLinkItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): OnPageMetaLinkItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageMetaLinkItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}