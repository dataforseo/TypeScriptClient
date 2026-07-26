import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";
import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { FaqBox, IFaqBox } from "./FaqBox";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { RelatedResult, IRelatedResult } from "./RelatedResult";
import { AdLinkElement, IAdLinkElement } from "./AdLinkElement";
import { Table, ITable } from "./Table";
import { BaseSerpApiBingAiOverviewElementItem, IBaseSerpApiBingAiOverviewElementItem } from "./BaseSerpApiBingAiOverviewElementItem";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";
import { RelatedImageSearchesElement, IRelatedImageSearchesElement } from "./RelatedImageSearchesElement";
import { VideoElement, IVideoElement } from "./VideoElement";
import { ShoppingElement, IShoppingElement } from "./ShoppingElement";
import { QuestionsAndAnswersElement, IQuestionsAndAnswersElement } from "./QuestionsAndAnswersElement";
import { HotelsPackElement, IHotelsPackElement } from "./HotelsPackElement";
import { JobsElement, IJobsElement } from "./JobsElement";
import { TopStoriesElement, ITopStoriesElement } from "./TopStoriesElement";
import { SerpApiCarouselElement, ISerpApiCarouselElement } from "./SerpApiCarouselElement";
import { EventsElement, IEventsElement } from "./EventsElement";
import { RecipesElement, IRecipesElement } from "./RecipesElement";
import { PeopleAlsoAskElement, IPeopleAlsoAskElement } from "./PeopleAlsoAskElement";


export interface IBaseBingSerpApiElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** search results page number indicates the number of the SERP page on which the element is located */
        page?: number | undefined
        
        /** the alignment of the element in SERP can take the following values: left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class BaseBingSerpApiElementItem  implements IBaseBingSerpApiElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** search results page number indicates the number of the SERP page on which the element is located */

    page?: number | undefined;

    
    /** the alignment of the element in SERP can take the following values: left, right */

    position?: string | undefined;

    
    /** the XPath of the element */

    xpath?: string | undefined;

    
    /** rectangle parameters contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseBingSerpApiElementItem) {

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
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseBingSerpApiElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "organic") {

            let result = new BingOrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "paid") {

            let result = new BingPaidSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "featured_snippet") {

            let result = new BingFeaturedSnippetSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            let result = new BingRelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview") {

            let result = new BingAiOverviewSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images") {

            let result = new BingImagesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "video") {

            let result = new BingVideoSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shopping") {

            let result = new BingShoppingSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "answer_box") {

            let result = new BingAnswerBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_pack") {

            let result = new BingLocalPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "questions_and_answers") {

            let result = new BingQuestionsAndAnswersSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "hotels_pack") {

            let result = new BingHotelsPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "jobs") {

            let result = new BingJobsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            let result = new BingTopStoriesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "carousel") {

            let result = new BingCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "map") {

            let result = new BingMapSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "events") {

            let result = new BingEventsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "recipes") {

            let result = new BingRecipesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask") {

            let result = new BingPeopleAlsoAskSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_search") {

            let result = new BingPeopleAlsoSearchSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseBingSerpApiElementItem();
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
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IBingOrganicSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** title of the results element in SERP */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** cached version of the page */
        cache_url?: string | undefined
        
        /** URL to a similar search URL to a new search for the same keyword(s) on related sites */
        related_search_url?: string | undefined
        
        /** name of the source website */
        website_name?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** indicates whether the element is a featured_snippet */
        is_featured_snippet?: boolean | undefined
        
        /** indicates whether the element is marked as malicious */
        is_malicious?: boolean | undefined
        
        /** indicates whether the element is marked as a web story */
        is_web_story?: boolean | undefined
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string | undefined
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** Accelerated Mobile Pages indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** the item’s rating  the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** pricing details contains the pricing details of the product or service featured in the result */
        price?: PriceInfo | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** sitelinks the links shown below some search results if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** @deprecated frequently asked questions questions and answers extension shown below some search results if there are none, equals null */
        faq?: FaqBox | undefined
        
        /** extension of the organic element extension of the organic result containing related search queries Note: extension appears in SERP upon clicking on the result and then bouncing back to search results */
        extended_people_also_search?: string[] | undefined
        
        /** @deprecated contains information from the ‘About this result’ panel note: about_this_result feature is not available in Bing search engine, that’s why it always equals null */
        about_this_result?: AboutThisResultElement | undefined
        
        /** related result from the same domain related result from the same domain appears as a part of the main result snippet; note: related_result feature is not available in Bing search engine, that’s why it always equals null */
        related_result?: RelatedResult[] | undefined
        
        /** date and time when the result was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class BingOrganicSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingOrganicSerpElementItem {

    
    /** domain in SERP */

    domain?: string | undefined;

    
    /** title of the results element in SERP */

    title?: string | undefined;

    
    /** description of the results element in SERP */

    description?: string | undefined;

    
    /** relevant URL in SERP */

    url?: string | undefined;

    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;

    
    /** cached version of the page */

    cache_url?: string | undefined;

    
    /** URL to a similar search URL to a new search for the same keyword(s) on related sites */

    related_search_url?: string | undefined;

    
    /** name of the source website */

    website_name?: string | undefined;

    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;

    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;

    
    /** indicates whether the element is a featured_snippet */

    is_featured_snippet?: boolean | undefined;

    
    /** indicates whether the element is marked as malicious */

    is_malicious?: boolean | undefined;

    
    /** indicates whether the element is marked as a web story */

    is_web_story?: boolean | undefined;

    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string | undefined;

    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string | undefined;

    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;

    
    /** Accelerated Mobile Pages indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;

    
    /** the item’s rating  the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** pricing details contains the pricing details of the product or service featured in the result */

    price?: PriceInfo | undefined;

    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;

    
    /** sitelinks the links shown below some search results if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** @deprecated frequently asked questions questions and answers extension shown below some search results if there are none, equals null */

    faq?: FaqBox | undefined;

    
    /** extension of the organic element extension of the organic result containing related search queries Note: extension appears in SERP upon clicking on the result and then bouncing back to search results */

    extended_people_also_search?: string[] | undefined;
    
    /** @deprecated contains information from the ‘About this result’ panel note: about_this_result feature is not available in Bing search engine, that’s why it always equals null */

    about_this_result?: AboutThisResultElement | undefined;

    
    /** related result from the same domain related result from the same domain appears as a part of the main result snippet; note: related_result feature is not available in Bing search engine, that’s why it always equals null */

    related_result?: RelatedResult[] | undefined;

    
    /** date and time when the result was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IBingOrganicSerpElementItem) {
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
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.cache_url = data["cache_url"];
            this.related_search_url = data["related_search_url"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.is_featured_snippet = data["is_featured_snippet"];
            this.is_malicious = data["is_malicious"];
            this.is_web_story = data["is_web_story"];
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

    static fromJS(data: any): BingOrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingOrganicSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["cache_url"] = this.cache_url;
        data["related_search_url"] = this.related_search_url;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["is_featured_snippet"] = this.is_featured_snippet;
        data["is_malicious"] = this.is_malicious;
        data["is_web_story"] = this.is_web_story;
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

 
export interface IBingPaidSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** domain of the ad element in SERP */
        domain?: string | undefined
        
        /** title of the ad element in SERP */
        title?: string | undefined
        
        /** description of the ad element in SERP */
        description?: string | undefined
        
        /** relevant URL of the ad element in SERP */
        url?: string | undefined
        
        /** breadcrumb of the ad element in SERP */
        breadcrumb?: string | undefined
        
        /** website name in SERP */
        website_name?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** additional information about the result */
        extra?: { [key: string]: string; } | undefined
        
        /** extended description if there is none, equals null */
        description_rows?: string[] | undefined
        
        /** links featured in the organic result */
        links?: AdLinkElement[] | undefined
        
        /** price of booking a place for the specified dates of stay */
        price?: PriceInfo | undefined
        
        /** the item’s rating  the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class BingPaidSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingPaidSerpElementItem {

    
    /** domain of the ad element in SERP */

    domain?: string | undefined;

    
    /** title of the ad element in SERP */

    title?: string | undefined;

    
    /** description of the ad element in SERP */

    description?: string | undefined;

    
    /** relevant URL of the ad element in SERP */

    url?: string | undefined;

    
    /** breadcrumb of the ad element in SERP */

    breadcrumb?: string | undefined;

    
    /** website name in SERP */

    website_name?: string | undefined;

    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;

    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;

    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;

    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;

    
    /** additional information about the result */

    extra?: { [key: string]: string; } | undefined;

    
    /** extended description if there is none, equals null */

    description_rows?: string[] | undefined;

    
    /** links featured in the organic result */

    links?: AdLinkElement[] | undefined;

    
    /** price of booking a place for the specified dates of stay */

    price?: PriceInfo | undefined;

    
    /** the item’s rating  the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IBingPaidSerpElementItem) {
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
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            this.highlighted = data["highlighted"];
            this.extra = data["extra"];
            this.description_rows = data["description_rows"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(AdLinkElement.fromJS(item));
                }
            }
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BingPaidSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingPaidSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["highlighted"] = this.highlighted;
        data["extra"] = this.extra;
        data["description_rows"] = this.description_rows;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IBingFeaturedSnippetSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** domain of the ad element in SERP */
        domain?: string | undefined
        
        /** title of the ad element in SERP */
        title?: string | undefined
        
        /** description of the ad element in SERP */
        description?: string | undefined
        
        /** relevant URL of the ad element in SERP */
        url?: string | undefined
        
        /** breadcrumb of the ad element in SERP */
        breadcrumb?: string | undefined
        
        /** the title of the featured snippets source page */
        featured_title?: string | undefined
        
        /** date and time when the result was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** results table if there are none, equals null */
        table?: Table | undefined

    [key: string]: any;

    }

export class BingFeaturedSnippetSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingFeaturedSnippetSerpElementItem {

    
    /** domain of the ad element in SERP */

    domain?: string | undefined;

    
    /** title of the ad element in SERP */

    title?: string | undefined;

    
    /** description of the ad element in SERP */

    description?: string | undefined;

    
    /** relevant URL of the ad element in SERP */

    url?: string | undefined;

    
    /** breadcrumb of the ad element in SERP */

    breadcrumb?: string | undefined;

    
    /** the title of the featured snippets source page */

    featured_title?: string | undefined;

    
    /** date and time when the result was published in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;

    
    /** results table if there are none, equals null */

    table?: Table | undefined;

    [key: string]: any;


    constructor(data?: IBingFeaturedSnippetSerpElementItem) {
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
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.featured_title = data["featured_title"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BingFeaturedSnippetSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingFeaturedSnippetSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["featured_title"] = this.featured_title;
        data["timestamp"] = this.timestamp;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IBingRelatedSearchesSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** items in SERP */
        items?: string[] | undefined

    [key: string]: any;

    }

export class BingRelatedSearchesSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingRelatedSearchesSerpElementItem {

    
    /** items in SERP */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IBingRelatedSearchesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.items = data["items"];
        }
    }

    static fromJS(data: any): BingRelatedSearchesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingRelatedSearchesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["items"] = this.items;
        return data;
    }
}

 
export interface IBingAiOverviewSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** additional items present in the element if there are none, equals null */
        items?: BaseSerpApiBingAiOverviewElementItem[] | undefined
        
        /** additional references relevant to the item includes references to webpages that may have been used to generate the ai_overview */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class BingAiOverviewSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingAiOverviewSerpElementItem {

    
    /** content of the element in markdown format */

    markdown?: string | undefined;

    
    /** additional items present in the element if there are none, equals null */

    items?: BaseSerpApiBingAiOverviewElementItem[] | undefined;

    
    /** additional references relevant to the item includes references to webpages that may have been used to generate the ai_overview */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBingAiOverviewSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.markdown = data["markdown"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiBingAiOverviewElementItem.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiModeAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingAiOverviewSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingAiOverviewSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["markdown"] = this.markdown;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingImagesSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: AiModeImagesElementInfo[] | undefined
        
        /** @deprecated contains keywords and images related to the specified search term if there are none, equals null */
        related_image_searches?: RelatedImageSearchesElement[] | undefined

    [key: string]: any;

    }

export class BingImagesSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingImagesSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: AiModeImagesElementInfo[] | undefined;
    
    /** @deprecated contains keywords and images related to the specified search term if there are none, equals null */

    related_image_searches?: RelatedImageSearchesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingImagesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
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

    static fromJS(data: any): BingImagesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingImagesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
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

 
export interface IBingVideoSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: VideoElement[] | undefined

    [key: string]: any;

    }

export class BingVideoSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingVideoSerpElementItem {

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: VideoElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingVideoSerpElementItem) {
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
                    this.items.push(VideoElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingVideoSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingVideoSerpElementItem();
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
        return data;
    }
}

 
export interface IBingShoppingSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: ShoppingElement[] | undefined

    [key: string]: any;

    }

export class BingShoppingSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingShoppingSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: ShoppingElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingShoppingSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ShoppingElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingShoppingSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingShoppingSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingAnswerBoxSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** text if there is none, equals null */
        text?: string[] | undefined
        
        /** links featured in the organic result */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class BingAnswerBoxSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingAnswerBoxSerpElementItem {

    
    /** text if there is none, equals null */

    text?: string[] | undefined;

    
    /** links featured in the organic result */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingAnswerBoxSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingAnswerBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingAnswerBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingLocalPackSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** domain where the video is hosted */
        domain?: string | undefined
        
        /** phone number */
        phone?: string | undefined
        
        booking_url?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** indicates whether the element is an ad */
        is_paid?: boolean | undefined
        
        /** the item’s rating  the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** bing-defined client id unique id of a local establishment */
        cid?: string | undefined
        
        /** business listing is claimed if true, the business listing is claimed by the owner or representative */
        is_claimed?: boolean | undefined

    [key: string]: any;

    }

export class BingLocalPackSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingLocalPackSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** description of the results element in SERP */

    description?: string | undefined;

    
    /** domain where the video is hosted */

    domain?: string | undefined;

    
    /** phone number */

    phone?: string | undefined;

    booking_url?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** indicates whether the element is an ad */

    is_paid?: boolean | undefined;

    
    /** the item’s rating  the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** bing-defined client id unique id of a local establishment */

    cid?: string | undefined;

    
    /** business listing is claimed if true, the business listing is claimed by the owner or representative */

    is_claimed?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IBingLocalPackSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.description = data["description"];
            this.domain = data["domain"];
            this.phone = data["phone"];
            this.booking_url = data["booking_url"];
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.cid = data["cid"];
            this.is_claimed = data["is_claimed"];
        }
    }

    static fromJS(data: any): BingLocalPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingLocalPackSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["description"] = this.description;
        data["domain"] = this.domain;
        data["phone"] = this.phone;
        data["booking_url"] = this.booking_url;
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["cid"] = this.cid;
        data["is_claimed"] = this.is_claimed;
        return data;
    }
}

 
export interface IBingQuestionsAndAnswersSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: QuestionsAndAnswersElement[] | undefined

    [key: string]: any;

    }

export class BingQuestionsAndAnswersSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingQuestionsAndAnswersSerpElementItem {

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: QuestionsAndAnswersElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingQuestionsAndAnswersSerpElementItem) {
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
                    this.items.push(QuestionsAndAnswersElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingQuestionsAndAnswersSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingQuestionsAndAnswersSerpElementItem();
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
        return data;
    }
}

 
export interface IBingHotelsPackSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** starting date of stay in the format “year-month-date” example: 2019-11-15 */
        date_from?: string | undefined
        
        /** ending date of stay in the format “year-month-date” example: 2019-11-17 */
        date_to?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: HotelsPackElement[] | undefined

    [key: string]: any;

    }

export class BingHotelsPackSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingHotelsPackSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** starting date of stay in the format “year-month-date” example: 2019-11-15 */

    date_from?: string | undefined;

    
    /** ending date of stay in the format “year-month-date” example: 2019-11-17 */

    date_to?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: HotelsPackElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingHotelsPackSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HotelsPackElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingHotelsPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingHotelsPackSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingJobsSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: JobsElement[] | undefined

    [key: string]: any;

    }

export class BingJobsSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingJobsSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: JobsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingJobsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(JobsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingJobsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingJobsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingTopStoriesSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: TopStoriesElement[] | undefined

    [key: string]: any;

    }

export class BingTopStoriesSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingTopStoriesSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: TopStoriesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingTopStoriesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TopStoriesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingTopStoriesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingTopStoriesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingCarouselSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: SerpApiCarouselElement[] | undefined

    [key: string]: any;

    }

export class BingCarouselSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingCarouselSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: SerpApiCarouselElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingCarouselSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(SerpApiCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingCarouselSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingMapSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined

    [key: string]: any;

    }

export class BingMapSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingMapSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IBingMapSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): BingMapSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingMapSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}

 
export interface IBingEventsSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: EventsElement[] | undefined

    [key: string]: any;

    }

export class BingEventsSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingEventsSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** URL */

    url?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: EventsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingEventsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(EventsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingEventsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingEventsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IBingRecipesSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: RecipesElement[] | undefined

    [key: string]: any;

    }

export class BingRecipesSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingRecipesSerpElementItem {

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: RecipesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingRecipesSerpElementItem) {
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
                    this.items.push(RecipesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingRecipesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingRecipesSerpElementItem();
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
        return data;
    }
}

 
export interface IBingPeopleAlsoAskSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: PeopleAlsoAskElement[] | undefined

    [key: string]: any;

    }

export class BingPeopleAlsoAskSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingPeopleAlsoAskSerpElementItem {

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: PeopleAlsoAskElement[] | undefined;

    [key: string]: any;


    constructor(data?: IBingPeopleAlsoAskSerpElementItem) {
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
                    this.items.push(PeopleAlsoAskElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BingPeopleAlsoAskSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingPeopleAlsoAskSerpElementItem();
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
        return data;
    }
}

 
export interface IBingPeopleAlsoSearchSerpElementItem  extends IBaseBingSerpApiElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: string[] | undefined

    [key: string]: any;

    }

export class BingPeopleAlsoSearchSerpElementItem  extends BaseBingSerpApiElementItem   implements IBingPeopleAlsoSearchSerpElementItem {

    
    /** title of the item */

    title?: string | undefined;

    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IBingPeopleAlsoSearchSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.items = data["items"];
        }
    }

    static fromJS(data: any): BingPeopleAlsoSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BingPeopleAlsoSearchSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["items"] = this.items;
        return data;
    }
}