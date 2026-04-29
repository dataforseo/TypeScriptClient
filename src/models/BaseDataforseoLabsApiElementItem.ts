import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { RankChanges, IRankChanges } from "./RankChanges";
import { BacklinksInfo, IBacklinksInfo } from "./BacklinksInfo";
import { RankInfo, IRankInfo } from "./RankInfo";
import { AdLinkElement, IAdLinkElement } from "./AdLinkElement";
import { Table, ITable } from "./Table";
import { DataforseoLabsCarouselElement, IDataforseoLabsCarouselElement } from "./DataforseoLabsCarouselElement";
import { MultiCarouselElement, IMultiCarouselElement } from "./MultiCarouselElement";
import { GoogleFlightsElement, IGoogleFlightsElement } from "./GoogleFlightsElement";
import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { RelatedImageSearchesElement, IRelatedImageSearchesElement } from "./RelatedImageSearchesElement";
import { JobsElement, IJobsElement } from "./JobsElement";
import { BaseDataforseoLabsKnowledgeGraphElementItem, IBaseDataforseoLabsKnowledgeGraphElementItem } from "./BaseDataforseoLabsKnowledgeGraphElementItem";
import { HotelsPackElement, IHotelsPackElement } from "./HotelsPackElement";
import { PeopleAlsoAskElement, IPeopleAlsoAskElement } from "./PeopleAlsoAskElement";
import { ShoppingElement, IShoppingElement } from "./ShoppingElement";
import { TopStoriesElement, ITopStoriesElement } from "./TopStoriesElement";
import { TwitterElement, ITwitterElement } from "./TwitterElement";
import { VideoElement, IVideoElement } from "./VideoElement";
import { EventsElement, IEventsElement } from "./EventsElement";
import { MentionCarouselElement, IMentionCarouselElement } from "./MentionCarouselElement";
import { RecipesElement, IRecipesElement } from "./RecipesElement";
import { TopSightsElement, ITopSightsElement } from "./TopSightsElement";
import { ScholarlyArticlesElement, IScholarlyArticlesElement } from "./ScholarlyArticlesElement";
import { PopularProductsElement, IPopularProductsElement } from "./PopularProductsElement";
import { PodcastsElement, IPodcastsElement } from "./PodcastsElement";
import { QuestionsAndAnswersElement, IQuestionsAndAnswersElement } from "./QuestionsAndAnswersElement";
import { FindResultsOnElement, IFindResultsOnElement } from "./FindResultsOnElement";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { Graph, IGraph } from "./Graph";
import { CommercialUnitsElement, ICommercialUnitsElement } from "./CommercialUnitsElement";
import { MathSolverElement, IMathSolverElement } from "./MathSolverElement";


export interface IBaseDataforseoLabsApiElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** search engine type */
        se_type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseDataforseoLabsApiElementItem  implements IBaseDataforseoLabsApiElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseDataforseoLabsApiElementItem) {

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
            this.se_type = data["se_type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseDataforseoLabsApiElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "organic") {

            let result = new DataLabsOrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_pack") {

            let result = new DataLabsLocalPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "paid") {

            let result = new DataLabsPaidSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "featured_snippet") {

            let result = new DataLabsFeaturedSnippetSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "answer_box") {

            let result = new DataLabsAnswerBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "carousel") {

            let result = new DataLabsCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "multi_carousel") {

            let result = new DataLabsMultiCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_flights") {

            let result = new DataLabsGoogleFlightsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_reviews") {

            let result = new DataLabsGoogleReviewsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_posts") {

            let result = new DataLabsGooglePostsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images") {

            let result = new DataLabsImagesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "jobs") {

            let result = new DataLabsJobsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph") {

            let result = new DataLabsKnowledgeGraphSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "hotels_pack") {

            let result = new DataLabsHotelsPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "map") {

            let result = new DataLabsMapSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask") {

            let result = new DataLabsPeopleAlsoAskSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            let result = new DataLabsRelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_search") {

            let result = new DataLabsPeopleAlsoSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shopping") {

            let result = new DataLabsShoppingSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            let result = new DataLabsTopStoriesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "twitter") {

            let result = new DataLabsTwitterSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "video") {

            let result = new DataLabsVideoSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "events") {

            let result = new DataLabsEventsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "mention_carousel") {

            let result = new DataLabsMentionCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "recipes") {

            let result = new DataLabsRecipesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_sights") {

            let result = new DataLabsTopSightsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "scholarly_articles") {

            let result = new DataLabsScholarlyArticlesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "popular_products") {

            let result = new DataLabsPopularProductsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "podcasts") {

            let result = new DataLabsPodcastsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "questions_and_answers") {

            let result = new DataLabsQuestionsAndAnswersSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "find_results_on") {

            let result = new DataLabsFindResultsOnSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "stocks_box") {

            let result = new DataLabsStocksBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "commercial_units") {

            let result = new DataLabsCommercialUnitsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_services") {

            let result = new DataLabsLocalServicesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_hotels") {

            let result = new DataLabsGoogleHotelsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "math_solver") {

            let result = new DataLabsMathSolverSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseDataforseoLabsApiElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["se_type"] = this.se_type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        return data;
    }
}

 
export interface IDataLabsOrganicSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** subdomain in SERP */
        domain?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** relevant website name in SERP */
        website_name?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** indicates whether the element is a featured_snippet */
        is_featured_snippet?: boolean | undefined
        
        /** indicates whether the element is marked as malicious */
        is_malicious?: boolean | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string | undefined
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string | undefined
        
        /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated paid monthly traffic to the target
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */
        clickstream_etv?: number | undefined
        
        /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */
        rank_changes?: RankChanges | undefined
        
        /** backlinks information for the relevant page URL */
        backlinks_info?: BacklinksInfo | undefined
        
        /** page and domain rank information */
        rank_info?: RankInfo | undefined

    [key: string]: any;

    }

export class DataLabsOrganicSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsOrganicSerpElementItem {
    
    /** subdomain in SERP */

    domain?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;
    
    /** relevant website name in SERP */

    website_name?: string | undefined;
    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;
    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;
    
    /** indicates whether the element is a featured_snippet */

    is_featured_snippet?: boolean | undefined;
    
    /** indicates whether the element is marked as malicious */

    is_malicious?: boolean | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string | undefined;
    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string | undefined;
    
    /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated paid monthly traffic to the target
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;
    
    /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */

    clickstream_etv?: number | undefined;
    
    /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */

    rank_changes?: RankChanges | undefined;
    
    /** backlinks information for the relevant page URL */

    backlinks_info?: BacklinksInfo | undefined;
    
    /** page and domain rank information */

    rank_info?: RankInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsOrganicSerpElementItem) {
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
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.is_featured_snippet = data["is_featured_snippet"];
            this.is_malicious = data["is_malicious"];
            this.description = data["description"];
            this.pre_snippet = data["pre_snippet"];
            this.extended_snippet = data["extended_snippet"];
            this.amp_version = data["amp_version"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.highlighted = data["highlighted"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
            this.main_domain = data["main_domain"];
            this.relative_url = data["relative_url"];
            this.etv = data["etv"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
            this.clickstream_etv = data["clickstream_etv"];
            this.rank_changes = data["rank_changes"] ? RankChanges.fromJS(data["rank_changes"]) : <any>undefined;
            this.backlinks_info = data["backlinks_info"] ? BacklinksInfo.fromJS(data["backlinks_info"]) : <any>undefined;
            this.rank_info = data["rank_info"] ? RankInfo.fromJS(data["rank_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataLabsOrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsOrganicSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["is_featured_snippet"] = this.is_featured_snippet;
        data["is_malicious"] = this.is_malicious;
        data["description"] = this.description;
        data["pre_snippet"] = this.pre_snippet;
        data["extended_snippet"] = this.extended_snippet;
        data["amp_version"] = this.amp_version;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
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
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        data["main_domain"] = this.main_domain;
        data["relative_url"] = this.relative_url;
        data["etv"] = this.etv;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        data["clickstream_etv"] = this.clickstream_etv;
        data["rank_changes"] = this.rank_changes ? RankChanges.fromJS(this.rank_changes)?.toJSON() : <any>undefined;
        data["backlinks_info"] = this.backlinks_info ? BacklinksInfo.fromJS(this.backlinks_info)?.toJSON() : <any>undefined;
        data["rank_info"] = this.rank_info ? RankInfo.fromJS(this.rank_info)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataLabsLocalPackSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** subdomain in SERP */
        domain?: string | undefined
        
        /** phone number */
        phone?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** indicates whether the element is an ad */
        is_paid?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated paid monthly traffic to the target
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */
        clickstream_etv?: number | undefined
        
        /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */
        rank_changes?: RankChanges | undefined
        
        /** backlinks information for the relevant page URL */
        backlinks_info?: BacklinksInfo | undefined
        
        /** page and domain rank information */
        rank_info?: RankInfo | undefined

    [key: string]: any;

    }

export class DataLabsLocalPackSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsLocalPackSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** subdomain in SERP */

    domain?: string | undefined;
    
    /** phone number */

    phone?: string | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated paid monthly traffic to the target
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the target ranks for
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;
    
    /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */

    clickstream_etv?: number | undefined;
    
    /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */

    rank_changes?: RankChanges | undefined;
    
    /** backlinks information for the relevant page URL */

    backlinks_info?: BacklinksInfo | undefined;
    
    /** page and domain rank information */

    rank_info?: RankInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsLocalPackSerpElementItem) {
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
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.main_domain = data["main_domain"];
            this.relative_url = data["relative_url"];
            this.etv = data["etv"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
            this.clickstream_etv = data["clickstream_etv"];
            this.rank_changes = data["rank_changes"] ? RankChanges.fromJS(data["rank_changes"]) : <any>undefined;
            this.backlinks_info = data["backlinks_info"] ? BacklinksInfo.fromJS(data["backlinks_info"]) : <any>undefined;
            this.rank_info = data["rank_info"] ? RankInfo.fromJS(data["rank_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataLabsLocalPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsLocalPackSerpElementItem();
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
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["main_domain"] = this.main_domain;
        data["relative_url"] = this.relative_url;
        data["etv"] = this.etv;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        data["clickstream_etv"] = this.clickstream_etv;
        data["rank_changes"] = this.rank_changes ? RankChanges.fromJS(this.rank_changes)?.toJSON() : <any>undefined;
        data["backlinks_info"] = this.backlinks_info ? BacklinksInfo.fromJS(this.backlinks_info)?.toJSON() : <any>undefined;
        data["rank_info"] = this.rank_info ? RankInfo.fromJS(this.rank_info)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataLabsPaidSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** domain in SERP of the Ad element */
        domain?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** breadcrumb of the Ad element in SERP */
        breadcrumb?: string | undefined
        
        /** relevant URL of the Ad element in SERP */
        url?: string | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        extra?: { [key: string]: string; } | undefined
        
        /** extended description
if there is none, equals null */
        description_rows?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: AdLinkElement[] | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of paid monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */
        clickstream_etv?: number | undefined
        
        /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */
        rank_changes?: RankChanges | undefined
        
        /** backlinks information for the ranked website */
        backlinks_info?: BacklinksInfo | undefined
        
        /** page and domain rank information */
        rank_info?: RankInfo | undefined

    [key: string]: any;

    }

export class DataLabsPaidSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsPaidSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** domain in SERP of the Ad element */

    domain?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** breadcrumb of the Ad element in SERP */

    breadcrumb?: string | undefined;
    
    /** relevant URL of the Ad element in SERP */

    url?: string | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;

    extra?: { [key: string]: string; } | undefined;
    
    /** extended description
if there is none, equals null */

    description_rows?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: AdLinkElement[] | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of paid monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;
    
    /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */

    clickstream_etv?: number | undefined;
    
    /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */

    rank_changes?: RankChanges | undefined;
    
    /** backlinks information for the ranked website */

    backlinks_info?: BacklinksInfo | undefined;
    
    /** page and domain rank information */

    rank_info?: RankInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsPaidSerpElementItem) {
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
            this.domain = data["domain"];
            this.description = data["description"];
            this.breadcrumb = data["breadcrumb"];
            this.url = data["url"];
            this.highlighted = data["highlighted"];
            this.extra = data["extra"];
            this.description_rows = data["description_rows"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(AdLinkElement.fromJS(item));
                }
            }
            this.main_domain = data["main_domain"];
            this.relative_url = data["relative_url"];
            this.etv = data["etv"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
            this.clickstream_etv = data["clickstream_etv"];
            this.rank_changes = data["rank_changes"] ? RankChanges.fromJS(data["rank_changes"]) : <any>undefined;
            this.backlinks_info = data["backlinks_info"] ? BacklinksInfo.fromJS(data["backlinks_info"]) : <any>undefined;
            this.rank_info = data["rank_info"] ? RankInfo.fromJS(data["rank_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataLabsPaidSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsPaidSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["description"] = this.description;
        data["breadcrumb"] = this.breadcrumb;
        data["url"] = this.url;
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
        data["main_domain"] = this.main_domain;
        data["relative_url"] = this.relative_url;
        data["etv"] = this.etv;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        data["clickstream_etv"] = this.clickstream_etv;
        data["rank_changes"] = this.rank_changes ? RankChanges.fromJS(this.rank_changes)?.toJSON() : <any>undefined;
        data["backlinks_info"] = this.backlinks_info ? BacklinksInfo.fromJS(this.backlinks_info)?.toJSON() : <any>undefined;
        data["rank_info"] = this.rank_info ? RankInfo.fromJS(this.rank_info)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataLabsFeaturedSnippetSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** subdomain in SERP */
        domain?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** the title of the featured snippets source page */
        featured_title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */
        clickstream_etv?: number | undefined
        
        /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */
        rank_changes?: RankChanges | undefined
        
        /** backlinks information for the ranked website */
        backlinks_info?: BacklinksInfo | undefined
        
        /** page and domain rank information */
        rank_info?: RankInfo | undefined

    [key: string]: any;

    }

export class DataLabsFeaturedSnippetSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsFeaturedSnippetSerpElementItem {
    
    /** subdomain in SERP */

    domain?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** the title of the featured snippets source page */

    featured_title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;
    
    /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */

    clickstream_etv?: number | undefined;
    
    /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */

    rank_changes?: RankChanges | undefined;
    
    /** backlinks information for the ranked website */

    backlinks_info?: BacklinksInfo | undefined;
    
    /** page and domain rank information */

    rank_info?: RankInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsFeaturedSnippetSerpElementItem) {
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
            this.featured_title = data["featured_title"];
            this.description = data["description"];
            this.url = data["url"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.main_domain = data["main_domain"];
            this.relative_url = data["relative_url"];
            this.etv = data["etv"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
            this.clickstream_etv = data["clickstream_etv"];
            this.rank_changes = data["rank_changes"] ? RankChanges.fromJS(data["rank_changes"]) : <any>undefined;
            this.backlinks_info = data["backlinks_info"] ? BacklinksInfo.fromJS(data["backlinks_info"]) : <any>undefined;
            this.rank_info = data["rank_info"] ? RankInfo.fromJS(data["rank_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataLabsFeaturedSnippetSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsFeaturedSnippetSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["featured_title"] = this.featured_title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["main_domain"] = this.main_domain;
        data["relative_url"] = this.relative_url;
        data["etv"] = this.etv;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        data["clickstream_etv"] = this.clickstream_etv;
        data["rank_changes"] = this.rank_changes ? RankChanges.fromJS(this.rank_changes)?.toJSON() : <any>undefined;
        data["backlinks_info"] = this.backlinks_info ? BacklinksInfo.fromJS(this.backlinks_info)?.toJSON() : <any>undefined;
        data["rank_info"] = this.rank_info ? RankInfo.fromJS(this.rank_info)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataLabsAnswerBoxSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** text
if there is none, equals null */
        text?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class DataLabsAnswerBoxSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsAnswerBoxSerpElementItem {
    
    /** text
if there is none, equals null */

    text?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsAnswerBoxSerpElementItem) {
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

    static fromJS(data: any): DataLabsAnswerBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsAnswerBoxSerpElementItem();
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

 
export interface IDataLabsCarouselSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: DataforseoLabsCarouselElement[] | undefined

    [key: string]: any;

    }

export class DataLabsCarouselSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsCarouselSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: DataforseoLabsCarouselElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsCarouselSerpElementItem) {
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
                    this.items.push(DataforseoLabsCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsCarouselSerpElementItem();
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

 
export interface IDataLabsMultiCarouselSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: MultiCarouselElement[] | undefined

    [key: string]: any;

    }

export class DataLabsMultiCarouselSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsMultiCarouselSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: MultiCarouselElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsMultiCarouselSerpElementItem) {
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
                    this.items.push(MultiCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsMultiCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsMultiCarouselSerpElementItem();
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

 
export interface IDataLabsGoogleFlightsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: GoogleFlightsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsGoogleFlightsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsGoogleFlightsSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: GoogleFlightsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsGoogleFlightsSerpElementItem) {
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
                    this.items.push(GoogleFlightsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsGoogleFlightsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsGoogleFlightsSerpElementItem();
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

 
export interface IDataLabsGoogleReviewsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** the number of reviews */
        reviews_count?: number | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** the identifier of a place */
        place_id?: string | undefined
        
        /** the additional feature of the review */
        feature?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined

    [key: string]: any;

    }

export class DataLabsGoogleReviewsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsGoogleReviewsSerpElementItem {
    
    /** the number of reviews */

    reviews_count?: number | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** the identifier of a place */

    place_id?: string | undefined;
    
    /** the additional feature of the review */

    feature?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsGoogleReviewsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): DataLabsGoogleReviewsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsGoogleReviewsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        return data;
    }
}

 
export interface IDataLabsGooglePostsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** the identifier of the google_posts feature */
        posts_id?: string | undefined
        
        /** the additional feature of the review */
        feature?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined

    [key: string]: any;

    }

export class DataLabsGooglePostsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsGooglePostsSerpElementItem {
    
    /** the identifier of the google_posts feature */

    posts_id?: string | undefined;
    
    /** the additional feature of the review */

    feature?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsGooglePostsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.posts_id = data["posts_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): DataLabsGooglePostsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsGooglePostsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["posts_id"] = this.posts_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        return data;
    }
}

 
export interface IDataLabsImagesSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: AiModeImagesElementInfo[] | undefined
        
        /** contains keywords and images related to the specified search term
if there are none, equals null */
        related_image_searches?: RelatedImageSearchesElement | undefined

    [key: string]: any;

    }

export class DataLabsImagesSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsImagesSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: AiModeImagesElementInfo[] | undefined;
    
    /** contains keywords and images related to the specified search term
if there are none, equals null */

    related_image_searches?: RelatedImageSearchesElement | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsImagesSerpElementItem) {
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
            this.related_image_searches = data["related_image_searches"] ? RelatedImageSearchesElement.fromJS(data["related_image_searches"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataLabsImagesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsImagesSerpElementItem();
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
        data["related_image_searches"] = this.related_image_searches ? RelatedImageSearchesElement.fromJS(this.related_image_searches)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataLabsJobsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: JobsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsJobsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsJobsSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: JobsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsJobsSerpElementItem) {
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

    static fromJS(data: any): DataLabsJobsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsJobsSerpElementItem();
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

 
export interface IDataLabsKnowledgeGraphSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the item */
        sub_title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** card id */
        card_id?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** URL of a specific image */
        image_url?: string | undefined
        
        /** URL of the logo from knowledge graph */
        logo_url?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: BaseDataforseoLabsKnowledgeGraphElementItem[] | undefined

    [key: string]: any;

    }

export class DataLabsKnowledgeGraphSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsKnowledgeGraphSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** subtitle of the item */

    sub_title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** card id */

    card_id?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** URL of a specific image */

    image_url?: string | undefined;
    
    /** URL of the logo from knowledge graph */

    logo_url?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: BaseDataforseoLabsKnowledgeGraphElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsKnowledgeGraphSerpElementItem) {
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
            this.sub_title = data["sub_title"];
            this.description = data["description"];
            this.card_id = data["card_id"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.logo_url = data["logo_url"];
            this.cid = data["cid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseDataforseoLabsKnowledgeGraphElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsKnowledgeGraphSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsKnowledgeGraphSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["description"] = this.description;
        data["card_id"] = this.card_id;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["logo_url"] = this.logo_url;
        data["cid"] = this.cid;
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

 
export interface IDataLabsHotelsPackSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */
        date_from?: string | undefined
        
        /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */
        date_to?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: HotelsPackElement[] | undefined

    [key: string]: any;

    }

export class DataLabsHotelsPackSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsHotelsPackSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */

    date_from?: string | undefined;
    
    /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */

    date_to?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: HotelsPackElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsHotelsPackSerpElementItem) {
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

    static fromJS(data: any): DataLabsHotelsPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsHotelsPackSerpElementItem();
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

 
export interface IDataLabsMapSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined

    [key: string]: any;

    }

export class DataLabsMapSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsMapSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsMapSerpElementItem) {
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

    static fromJS(data: any): DataLabsMapSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsMapSerpElementItem();
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

 
export interface IDataLabsPeopleAlsoAskSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: PeopleAlsoAskElement[] | undefined

    [key: string]: any;

    }

export class DataLabsPeopleAlsoAskSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsPeopleAlsoAskSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: PeopleAlsoAskElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsPeopleAlsoAskSerpElementItem) {
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

    static fromJS(data: any): DataLabsPeopleAlsoAskSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsPeopleAlsoAskSerpElementItem();
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

 
export interface IDataLabsRelatedSearchesSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: string[] | undefined

    [key: string]: any;

    }

export class DataLabsRelatedSearchesSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsRelatedSearchesSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsRelatedSearchesSerpElementItem) {
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

    static fromJS(data: any): DataLabsRelatedSearchesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsRelatedSearchesSerpElementItem();
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

 
export interface IDataLabsPeopleAlsoSearchSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: string[] | undefined

    [key: string]: any;

    }

export class DataLabsPeopleAlsoSearchSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsPeopleAlsoSearchSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsPeopleAlsoSearchSerpElementItem) {
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

    static fromJS(data: any): DataLabsPeopleAlsoSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsPeopleAlsoSearchSerpElementItem();
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

 
export interface IDataLabsShoppingSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: ShoppingElement[] | undefined

    [key: string]: any;

    }

export class DataLabsShoppingSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsShoppingSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: ShoppingElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsShoppingSerpElementItem) {
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

    static fromJS(data: any): DataLabsShoppingSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsShoppingSerpElementItem();
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

 
export interface IDataLabsTopStoriesSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: TopStoriesElement[] | undefined

    [key: string]: any;

    }

export class DataLabsTopStoriesSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsTopStoriesSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: TopStoriesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsTopStoriesSerpElementItem) {
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

    static fromJS(data: any): DataLabsTopStoriesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsTopStoriesSerpElementItem();
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

 
export interface IDataLabsTwitterSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: TwitterElement[] | undefined

    [key: string]: any;

    }

export class DataLabsTwitterSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsTwitterSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: TwitterElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsTwitterSerpElementItem) {
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
                    this.items.push(TwitterElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsTwitterSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsTwitterSerpElementItem();
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

 
export interface IDataLabsVideoSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: VideoElement[] | undefined

    [key: string]: any;

    }

export class DataLabsVideoSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsVideoSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: VideoElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsVideoSerpElementItem) {
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

    static fromJS(data: any): DataLabsVideoSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsVideoSerpElementItem();
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

 
export interface IDataLabsEventsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: EventsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsEventsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsEventsSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: EventsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsEventsSerpElementItem) {
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

    static fromJS(data: any): DataLabsEventsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsEventsSerpElementItem();
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

 
export interface IDataLabsMentionCarouselSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: MentionCarouselElement[] | undefined

    [key: string]: any;

    }

export class DataLabsMentionCarouselSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsMentionCarouselSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: MentionCarouselElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsMentionCarouselSerpElementItem) {
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
                    this.items.push(MentionCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsMentionCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsMentionCarouselSerpElementItem();
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

 
export interface IDataLabsRecipesSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: RecipesElement[] | undefined

    [key: string]: any;

    }

export class DataLabsRecipesSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsRecipesSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: RecipesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsRecipesSerpElementItem) {
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

    static fromJS(data: any): DataLabsRecipesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsRecipesSerpElementItem();
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

 
export interface IDataLabsTopSightsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: TopSightsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsTopSightsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsTopSightsSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: TopSightsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsTopSightsSerpElementItem) {
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
                    this.items.push(TopSightsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsTopSightsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsTopSightsSerpElementItem();
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

 
export interface IDataLabsScholarlyArticlesSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: ScholarlyArticlesElement[] | undefined

    [key: string]: any;

    }

export class DataLabsScholarlyArticlesSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsScholarlyArticlesSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: ScholarlyArticlesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsScholarlyArticlesSerpElementItem) {
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
                    this.items.push(ScholarlyArticlesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsScholarlyArticlesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsScholarlyArticlesSerpElementItem();
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

 
export interface IDataLabsPopularProductsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: PopularProductsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsPopularProductsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsPopularProductsSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: PopularProductsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsPopularProductsSerpElementItem) {
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
                    this.items.push(PopularProductsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsPopularProductsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsPopularProductsSerpElementItem();
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

 
export interface IDataLabsPodcastsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: PodcastsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsPodcastsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsPodcastsSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: PodcastsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsPodcastsSerpElementItem) {
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
                    this.items.push(PodcastsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsPodcastsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsPodcastsSerpElementItem();
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

 
export interface IDataLabsQuestionsAndAnswersSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: QuestionsAndAnswersElement[] | undefined

    [key: string]: any;

    }

export class DataLabsQuestionsAndAnswersSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsQuestionsAndAnswersSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: QuestionsAndAnswersElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsQuestionsAndAnswersSerpElementItem) {
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

    static fromJS(data: any): DataLabsQuestionsAndAnswersSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsQuestionsAndAnswersSerpElementItem();
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

 
export interface IDataLabsFindResultsOnSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** historical SERPs and related data found in the database */
        items?: FindResultsOnElement[] | undefined

    [key: string]: any;

    }

export class DataLabsFindResultsOnSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsFindResultsOnSerpElementItem {
    
    /** historical SERPs and related data found in the database */

    items?: FindResultsOnElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsFindResultsOnSerpElementItem) {
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
                    this.items.push(FindResultsOnElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsFindResultsOnSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsFindResultsOnSerpElementItem();
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

 
export interface IDataLabsStocksBoxSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** source of the element
indicates the source of the video */
        source?: string | undefined
        
        /** snippet of the element */
        snippet?: string | undefined
        
        /** price of the shopping element */
        price?: PriceInfo | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** table element */
        table?: Table | undefined
        
        /** contains data provided in the graph of the element */
        graph?: Graph | undefined

    [key: string]: any;

    }

export class DataLabsStocksBoxSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsStocksBoxSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** source of the element
indicates the source of the video */

    source?: string | undefined;
    
    /** snippet of the element */

    snippet?: string | undefined;
    
    /** price of the shopping element */

    price?: PriceInfo | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** table element */

    table?: Table | undefined;
    
    /** contains data provided in the graph of the element */

    graph?: Graph | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsStocksBoxSerpElementItem) {
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
            this.source = data["source"];
            this.snippet = data["snippet"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.url = data["url"];
            this.domain = data["domain"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.graph = data["graph"] ? Graph.fromJS(data["graph"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataLabsStocksBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsStocksBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["source"] = this.source;
        data["snippet"] = this.snippet;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["graph"] = this.graph ? Graph.fromJS(this.graph)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataLabsCommercialUnitsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: CommercialUnitsElement[] | undefined

    [key: string]: any;

    }

export class DataLabsCommercialUnitsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsCommercialUnitsSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: CommercialUnitsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsCommercialUnitsSerpElementItem) {
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
                    this.items.push(CommercialUnitsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsCommercialUnitsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsCommercialUnitsSerpElementItem();
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

 
export interface IDataLabsLocalServicesSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: any | undefined

    [key: string]: any;

    }

export class DataLabsLocalServicesSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsLocalServicesSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: any | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsLocalServicesSerpElementItem) {
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
            this.domain = data["domain"];
            this.items = data["items"];
        }
    }

    static fromJS(data: any): DataLabsLocalServicesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsLocalServicesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["items"] = this.items;
        return data;
    }
}

 
export interface IDataLabsGoogleHotelsSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */
        hotel_identifier?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined

    [key: string]: any;

    }

export class DataLabsGoogleHotelsSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsGoogleHotelsSerpElementItem {
    
    /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */

    hotel_identifier?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsGoogleHotelsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.hotel_identifier = data["hotel_identifier"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): DataLabsGoogleHotelsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsGoogleHotelsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["hotel_identifier"] = this.hotel_identifier;
        data["url"] = this.url;
        return data;
    }
}

 
export interface IDataLabsMathSolverSerpElementItem  extends IBaseDataforseoLabsApiElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */
        result?: string | undefined
        
        /** historical SERPs and related data found in the database */
        items?: MathSolverElement[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class DataLabsMathSolverSerpElementItem  extends BaseDataforseoLabsApiElementItem   implements IDataLabsMathSolverSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */

    result?: string | undefined;
    
    /** historical SERPs and related data found in the database */

    items?: MathSolverElement[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IDataLabsMathSolverSerpElementItem) {
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
            this.result = data["result"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(MathSolverElement.fromJS(item));
                }
            }
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataLabsMathSolverSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataLabsMathSolverSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["result"] = this.result;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
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