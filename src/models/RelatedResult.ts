import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";


export interface IRelatedResult   {
        
        /** type of element */
        type?: string | undefined
        
        /** search results page number indicates the number of the SERP page on which the element is located */
        page?: number | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** cached version of the page */
        cache_url?: string | undefined
        
        /** URL to a similar search URL to a new search for the same keyword(s) on related sites */
        related_search_url?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** name of the website in the ad element */
        website_name?: string | undefined
        
        /** indicates whether the element contains an image Note: this check no longer appears in SERP */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video Note: this check no longer appears in SERP */
        is_video?: boolean | undefined
        
        /** array of properties detected for the SERP element lists the properties that are true for this element each value in the array represents a detected property example: if is_image is present in the array, the element contains an image possible values in the array: is_image, is_video, is_featured_snippet, amp_version, is_malicious, is_web_story, is_highly_cited equals null if none of the properties are detected for the element learn more about the checks array in this Help Center article */
        checks?: string[] | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string | undefined
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string | undefined
        
        /** images of the component if there are none, equals null */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** Accelerated Mobile Pages indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** the item’s rating  the popularity rate based on reviews and displayed in SERP; if there is none, equals null */
        rating?: RatingInfo | undefined
        
        /** price of booking a place for the specified dates of stay */
        price?: PriceInfo | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** @deprecated contains information from the ‘About this result’ panel Note: this object is deprecated and always returns null */
        about_this_result?: AboutThisResultElement | undefined
        
        /** date and time when the result was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class RelatedResult  implements IRelatedResult {

    
    /** type of element */

    type?: string | undefined;

    
    /** search results page number indicates the number of the SERP page on which the element is located */

    page?: number | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    
    /** website domain */

    domain?: string | undefined;

    
    /** title of a given link element */

    title?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** cached version of the page */

    cache_url?: string | undefined;

    
    /** URL to a similar search URL to a new search for the same keyword(s) on related sites */

    related_search_url?: string | undefined;

    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;

    
    /** name of the website in the ad element */

    website_name?: string | undefined;

    
    /** indicates whether the element contains an image Note: this check no longer appears in SERP */

    is_image?: boolean | undefined;

    
    /** indicates whether the element contains a video Note: this check no longer appears in SERP */

    is_video?: boolean | undefined;

    
    /** array of properties detected for the SERP element lists the properties that are true for this element each value in the array represents a detected property example: if is_image is present in the array, the element contains an image possible values in the array: is_image, is_video, is_featured_snippet, amp_version, is_malicious, is_web_story, is_highly_cited equals null if none of the properties are detected for the element learn more about the checks array in this Help Center article */

    checks?: string[] | undefined;

    
    /** description of the results element in SERP */

    description?: string | undefined;

    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string | undefined;

    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string | undefined;

    
    /** images of the component if there are none, equals null */

    images?: AiModeImagesElementInfo[] | undefined;

    
    /** Accelerated Mobile Pages indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;

    
    /** the item’s rating  the popularity rate based on reviews and displayed in SERP; if there is none, equals null */

    rating?: RatingInfo | undefined;

    
    /** price of booking a place for the specified dates of stay */

    price?: PriceInfo | undefined;

    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** @deprecated contains information from the ‘About this result’ panel Note: this object is deprecated and always returns null */

    about_this_result?: AboutThisResultElement | undefined;

    
    /** date and time when the result was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IRelatedResult) {

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
            this.page = data["page"];
            this.xpath = data["xpath"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.cache_url = data["cache_url"];
            this.related_search_url = data["related_search_url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
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
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): RelatedResult {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["page"] = this.page;
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["cache_url"] = this.cache_url;
        data["related_search_url"] = this.related_search_url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
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
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        data["timestamp"] = this.timestamp;
        return data;
    }
}