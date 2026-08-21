import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";
import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { FaqBox, IFaqBox } from "./FaqBox";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { RelatedResult, IRelatedResult } from "./RelatedResult";
import { RelatedImageSearchesElement, IRelatedImageSearchesElement } from "./RelatedImageSearchesElement";


export interface IBaseSerpApiGoogleSearchByImagesElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *group rank in SERP*             position within a group of elements with identical `type` values             positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank in SERP*             absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        page?: number | undefined
        
        /** *the alignment of the element in SERP*             can take the following values:             `left`, `right` */
        position?: string | undefined
        
        /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */
        xpath?: string | undefined
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *search URL with refinement parameters* */
        url?: string | undefined
        
        /** *rectangle parameters*             contains cartesian coordinates and pixel dimensions of the result's snippet in SERP             equals `null` if `calculate_rectangles` in the POST request is not set to `true` */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class BaseSerpApiGoogleSearchByImagesElementItem  implements IBaseSerpApiGoogleSearchByImagesElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *group rank in SERP*             position within a group of elements with identical `type` values             positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank in SERP*             absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    page?: number | undefined;

    
    /** *the alignment of the element in SERP*             can take the following values:             `left`, `right` */

    position?: string | undefined;

    
    /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */

    xpath?: string | undefined;

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *search URL with refinement parameters* */

    url?: string | undefined;

    
    /** *rectangle parameters*             contains cartesian coordinates and pixel dimensions of the result's snippet in SERP             equals `null` if `calculate_rectangles` in the POST request is not set to `true` */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiGoogleSearchByImagesElementItem) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.page = data["page"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.title = data["title"];
            this.url = data["url"];
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseSerpApiGoogleSearchByImagesElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "organic") {

            let result = new SerpApiGoogleSearchByImagesOrganicElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images") {

            let result = new SerpApiGoogleSearchByImagesImagesElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiGoogleSearchByImagesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["page"] = this.page;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["title"] = this.title;
        data["url"] = this.url;
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface ISerpApiGoogleSearchByImagesOrganicElementItem  extends IBaseSerpApiGoogleSearchByImagesElementItem    {
        
        /** *domain in SERP* */
        domain?: string | undefined
        
        /** *cached version of the page* */
        cache_url?: string | undefined
        
        /** *URL to a similar search*             URL to a new search for the same keyword(s) [on related sites](https://support.google.com/websearch/answer/2466433?hl=en#:~:text=Search%20for%20related%20sites) */
        related_search_url?: string | undefined
        
        /** *breadcrumb in SERP* */
        breadcrumb?: string | undefined
        
        /** *name of the website in SERP* */
        website_name?: string | undefined
        
        /** *indicates whether the element contains an `image`* */
        is_image?: boolean | undefined
        
        /** *indicates whether the element contains a `video`* */
        is_video?: boolean | undefined
        
        /** *indicates whether the element is a `featured_snippet`* */
        is_featured_snippet?: boolean | undefined
        
        /** *indicates whether the element is marked as malicious* */
        is_malicious?: boolean | undefined
        
        /** *indicates whether the element is marked as Google web story* */
        is_web_story?: boolean | undefined
        
        checks?: string[] | undefined
        
        /** *description of the results element in SERP* */
        description?: string | undefined
        
        /** *includes additional information appended before the result description in SERP* */
        pre_snippet?: string | undefined
        
        /** *includes additional information appended after the result description in SERP* */
        extended_snippet?: string | undefined
        
        /** *images of the element* */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** *Accelerated Mobile Pages*             indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** *the item's rating*             the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** *pricing details*             contains the pricing details of the product or service featured in the result */
        price?: PriceInfo | undefined
        
        /** *words highlighted in bold within the results `description`* */
        highlighted?: string[] | undefined
        
        /** *sitelinks*             the links shown below some of Google's search results             if there are none, equals `null` */
        links?: LinkElement[] | undefined
        
        /** @deprecated *frequently asked questions*             questions and answers extension shown below some of Google's search results             if there are none, equals `null` */
        faq?: FaqBox | undefined
        
        /** *extension of the organic element*             extension of the organic result containing related search queries             **Note:** extension appears in SERP upon clicking on the result and then bouncing back to search results */
        extended_people_also_search?: string[] | undefined
        
        /** @deprecated *contains information from the 'About this result' panel*             ['About this result' panel](https://blog.google/products/search/learn-more-and-get-more-from-search/) provides additional context about why Google returned this result for the given query;             this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined
        
        /** *related result from the same domain*             related result from the same domain appears as a part of the main result snippet;             you can derive the `related_result` snippets as `'type': 'organic'` results by setting the `group_organic_results` parameter to `false` in the POST request */
        related_result?: RelatedResult[] | undefined
        
        /** *date and time when the result was published*             in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'             example:             `2019-11-15 12:57:46 +00:00` */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class SerpApiGoogleSearchByImagesOrganicElementItem  extends BaseSerpApiGoogleSearchByImagesElementItem   implements ISerpApiGoogleSearchByImagesOrganicElementItem {

    
    /** *domain in SERP* */

    domain?: string | undefined;

    
    /** *cached version of the page* */

    cache_url?: string | undefined;

    
    /** *URL to a similar search*             URL to a new search for the same keyword(s) [on related sites](https://support.google.com/websearch/answer/2466433?hl=en#:~:text=Search%20for%20related%20sites) */

    related_search_url?: string | undefined;

    
    /** *breadcrumb in SERP* */

    breadcrumb?: string | undefined;

    
    /** *name of the website in SERP* */

    website_name?: string | undefined;

    
    /** *indicates whether the element contains an `image`* */

    is_image?: boolean | undefined;

    
    /** *indicates whether the element contains a `video`* */

    is_video?: boolean | undefined;

    
    /** *indicates whether the element is a `featured_snippet`* */

    is_featured_snippet?: boolean | undefined;

    
    /** *indicates whether the element is marked as malicious* */

    is_malicious?: boolean | undefined;

    
    /** *indicates whether the element is marked as Google web story* */

    is_web_story?: boolean | undefined;

    checks?: string[] | undefined;

    
    /** *description of the results element in SERP* */

    description?: string | undefined;

    
    /** *includes additional information appended before the result description in SERP* */

    pre_snippet?: string | undefined;

    
    /** *includes additional information appended after the result description in SERP* */

    extended_snippet?: string | undefined;

    
    /** *images of the element* */

    images?: AiModeImagesElementInfo[] | undefined;

    
    /** *Accelerated Mobile Pages*             indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;

    
    /** *the item's rating*             the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** *pricing details*             contains the pricing details of the product or service featured in the result */

    price?: PriceInfo | undefined;

    
    /** *words highlighted in bold within the results `description`* */

    highlighted?: string[] | undefined;

    
    /** *sitelinks*             the links shown below some of Google's search results             if there are none, equals `null` */

    links?: LinkElement[] | undefined;
    
    /** @deprecated *frequently asked questions*             questions and answers extension shown below some of Google's search results             if there are none, equals `null` */

    faq?: FaqBox | undefined;

    
    /** *extension of the organic element*             extension of the organic result containing related search queries             **Note:** extension appears in SERP upon clicking on the result and then bouncing back to search results */

    extended_people_also_search?: string[] | undefined;
    
    /** @deprecated *contains information from the 'About this result' panel*             ['About this result' panel](https://blog.google/products/search/learn-more-and-get-more-from-search/) provides additional context about why Google returned this result for the given query;             this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;

    
    /** *related result from the same domain*             related result from the same domain appears as a part of the main result snippet;             you can derive the `related_result` snippets as `'type': 'organic'` results by setting the `group_organic_results` parameter to `false` in the POST request */

    related_result?: RelatedResult[] | undefined;

    
    /** *date and time when the result was published*             in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'             example:             `2019-11-15 12:57:46 +00:00` */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleSearchByImagesOrganicElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
            this.cache_url = data["cache_url"];
            this.related_search_url = data["related_search_url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.is_featured_snippet = data["is_featured_snippet"];
            this.is_malicious = data["is_malicious"];
            this.is_web_story = data["is_web_story"];
            this.checks = data["checks"];
            this.description = data["description"];
            this.pre_snippet = data["pre_snippet"];
            this.extended_snippet = data["extended_snippet"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            this.amp_version = data["amp_version"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.highlighted = data["highlighted"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.faq = data["faq"] ? FaqBox.fromJS(data["faq"]) : <any>undefined;
            this.extended_people_also_search = data["extended_people_also_search"];
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
            if (Array.isArray(data["related_result"])) {
                this.related_result = [];
                for (let item of data["related_result"]) {
                    this.related_result.push(RelatedResult.fromJS(item));
                }
            }
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): SerpApiGoogleSearchByImagesOrganicElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleSearchByImagesOrganicElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["cache_url"] = this.cache_url;
        data["related_search_url"] = this.related_search_url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["is_featured_snippet"] = this.is_featured_snippet;
        data["is_malicious"] = this.is_malicious;
        data["is_web_story"] = this.is_web_story;
        data["checks"] = this.checks;
        data["description"] = this.description;
        data["pre_snippet"] = this.pre_snippet;
        data["extended_snippet"] = this.extended_snippet;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["amp_version"] = this.amp_version;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["highlighted"] = this.highlighted;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["faq"] = this.faq ? FaqBox.fromJS(this.faq)?.toJSON() : <any>undefined;
        data["extended_people_also_search"] = this.extended_people_also_search;
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        data["related_result"] = null;
        if (Array.isArray(this.related_result)) {
            data["related_result"] = [];
            for (let item of this.related_result) {
                if (item && typeof item.toJSON === "function") {
                    data["related_result"].push(item?.toJSON());
                }
            }
        }
        data["timestamp"] = this.timestamp;
        return data;
    }
}

 
export interface ISerpApiGoogleSearchByImagesImagesElementItem  extends IBaseSerpApiGoogleSearchByImagesElementItem    {
        
        /** *elements of search results found in SERP* */
        items?: AiModeImagesElementInfo[] | undefined
        
        /** @deprecated *contains keywords and images related to the specified search term*             if there are none, equals `null` */
        related_image_searches?: RelatedImageSearchesElement[] | undefined

    [key: string]: any;

    }

export class SerpApiGoogleSearchByImagesImagesElementItem  extends BaseSerpApiGoogleSearchByImagesElementItem   implements ISerpApiGoogleSearchByImagesImagesElementItem {

    
    /** *elements of search results found in SERP* */

    items?: AiModeImagesElementInfo[] | undefined;
    
    /** @deprecated *contains keywords and images related to the specified search term*             if there are none, equals `null` */

    related_image_searches?: RelatedImageSearchesElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiGoogleSearchByImagesImagesElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["related_image_searches"])) {
                this.related_image_searches = [];
                for (let item of data["related_image_searches"]) {
                    this.related_image_searches.push(RelatedImageSearchesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiGoogleSearchByImagesImagesElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiGoogleSearchByImagesImagesElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["related_image_searches"] = null;
        if (Array.isArray(this.related_image_searches)) {
            data["related_image_searches"] = [];
            for (let item of this.related_image_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["related_image_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}