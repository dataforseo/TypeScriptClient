import { AddressInfo, IAddressInfo } from "./AddressInfo";
import { BusinessDataAttributesInfo, IBusinessDataAttributesInfo } from "./BusinessDataAttributesInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PeopleAlsoSearch, IPeopleAlsoSearch } from "./PeopleAlsoSearch";
import { BusinessWorkHoursInfo, IBusinessWorkHoursInfo } from "./BusinessWorkHoursInfo";
import { PopularTimes, IPopularTimes } from "./PopularTimes";
import { BaseLocalBusinessLink, IBaseLocalBusinessLink } from "./BaseLocalBusinessLink";
import { BusinessDirectoryInfo, IBusinessDirectoryInfo } from "./BusinessDirectoryInfo";
import { BusinessDataServiceInfo, IBusinessDataServiceInfo } from "./BusinessDataServiceInfo";


export interface IGoogleBusinessInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank among all the elements* */
        rank_absolute?: number | undefined
        
        /** *the alignment in SERP* */
        position?: string | undefined
        
        /** *title of the element in SERP* the name of the business entity for which the results are collected */
        title?: string | undefined
        
        /** *original title of the element* original title not translated by Google */
        original_title?: string | undefined
        
        /** *description of the element in SERP* the description of the business entity for which the results are collected */
        description?: string | undefined
        
        /** *business category* Google My Business general category that best describes the services provided by the business entity */
        category?: string | undefined
        
        /** *global category IDs* universal category IDs that do not change based on the selected country */
        category_ids?: string[] | undefined
        
        /** *additional business categories* additional Google My Business categories that describe the services provided by the business entity in more detail */
        additional_categories?: string[] | undefined
        
        /** *google-defined client id* unique id of a local establishment; can be used with [Google Reviews API](/v3/reviews/google/overview/?php) to get a full list of reviews learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        cid?: string | undefined
        
        /** *the unique identifier of the element in SERP* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        feature_id?: string | undefined
        
        /** *address of the business entity* */
        address?: string | undefined
        
        /** *object containing address components of the business entity* */
        address_info?: AddressInfo | undefined
        
        /** *unique place identifier* [place id](https://developers.google.com/places/place-id) of the local establishment featured in the element learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        place_id?: string | undefined
        
        /** *phone number of the business entity* */
        phone?: string | undefined
        
        /** *absolute url of the business entity* */
        url?: string | undefined
        
        /** *URL of the preferred contact page* */
        contact_url?: string | undefined
        
        /** *URL of the user's or entity's Local Guides profile, if available* */
        contributor_url?: string | undefined
        
        /** *URL in the 'book online' button of the element* URL directing users to the online booking or order page of the business entity */
        book_online_url?: string | undefined
        
        /** *domain of the business entity* */
        domain?: string | undefined
        
        /** *URL of the logo featured in Google My Business profile* */
        logo?: string | undefined
        
        /** *URL of the main image featured in Google My Business profile* */
        main_image?: string | undefined
        
        /** *total count of images featured in Google My Business profile* */
        total_photos?: number | undefined
        
        /** *additional information on the business entity* */
        snippet?: string | undefined
        
        /** *latitude coordinate of the local establishments in google maps* example: `'latitude': 51.584091` */
        latitude?: number | undefined
        
        /** *longitude coordinate of the local establishment in google maps* example: `'longitude': -0.31365919999999997` */
        longitude?: number | undefined
        
        /** *shows whether the entity is verified by its owner on Google Maps* */
        is_claimed?: boolean | undefined
        
        questions_and_answers_count?: number | undefined
        
        /** *service details in a form of user-reviewed checks;* service details of a business entity displayed in a form of checks and based on user feedback and business `category` */
        attributes?: BusinessDataAttributesInfo | undefined
        
        /** *keywords mentioned in customer reviews* contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword example: `'place_topics': {'egg roll': 48,'birthday': 33}` */
        place_topics?: { [key: string]: number; } | undefined
        
        /** *the element's rating* the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** *hotel class rating* class ratings range between 1-5 stars, [learn more](https://support.google.com/business/answer/7660515?hl=en) if there is no hotel class rating information, the value will be `null` */
        hotel_rating?: number | undefined
        
        /** *property price level* can take values: `inexpensive`, `moderate`, `expensive`, `very_expensive` if there is no price level information, the value will be `null` */
        price_level?: string | undefined
        
        /** *the distribution of ratings of the business entity* the object displays the number of 1-star to 5-star ratings, as reviewed by users */
        rating_distribution?: { [key: string]: number; } | undefined
        
        /** *related business entities* */
        people_also_search?: PeopleAlsoSearch[] | undefined
        
        /** *work time details* information related to operational hours of the business entity */
        work_time?: BusinessWorkHoursInfo | undefined
        
        /** *popular times* information related to busy hours of the business entity */
        popular_times?: PopularTimes | undefined
        
        /** *available interactions with the business* list of options to interact with the business directly from search results */
        local_business_links?: BaseLocalBusinessLink[] | undefined
        
        /** *business establishment is a part of the directory* indicates whether the business establishment is a part of the directory; if `true`, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre); **note:** if the business establishment is a parent item in the directory, the value will be `null` */
        is_directory_item?: boolean | undefined
        
        /** *items of the directory* includes information about businesses that are located within the target business establishment and have the same address */
        directory?: BusinessDirectoryInfo | undefined
        
        /** *list of services offered by the business* */
        services?: BusinessDataServiceInfo[] | undefined

    [key: string]: any;

    }

export class GoogleBusinessInfo  implements IGoogleBusinessInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank among all the elements* */

    rank_absolute?: number | undefined;

    
    /** *the alignment in SERP* */

    position?: string | undefined;

    
    /** *title of the element in SERP* the name of the business entity for which the results are collected */

    title?: string | undefined;

    
    /** *original title of the element* original title not translated by Google */

    original_title?: string | undefined;

    
    /** *description of the element in SERP* the description of the business entity for which the results are collected */

    description?: string | undefined;

    
    /** *business category* Google My Business general category that best describes the services provided by the business entity */

    category?: string | undefined;

    
    /** *global category IDs* universal category IDs that do not change based on the selected country */

    category_ids?: string[] | undefined;

    
    /** *additional business categories* additional Google My Business categories that describe the services provided by the business entity in more detail */

    additional_categories?: string[] | undefined;

    
    /** *google-defined client id* unique id of a local establishment; can be used with [Google Reviews API](/v3/reviews/google/overview/?php) to get a full list of reviews learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    cid?: string | undefined;

    
    /** *the unique identifier of the element in SERP* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    feature_id?: string | undefined;

    
    /** *address of the business entity* */

    address?: string | undefined;

    
    /** *object containing address components of the business entity* */

    address_info?: AddressInfo | undefined;

    
    /** *unique place identifier* [place id](https://developers.google.com/places/place-id) of the local establishment featured in the element learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    place_id?: string | undefined;

    
    /** *phone number of the business entity* */

    phone?: string | undefined;

    
    /** *absolute url of the business entity* */

    url?: string | undefined;

    
    /** *URL of the preferred contact page* */

    contact_url?: string | undefined;

    
    /** *URL of the user's or entity's Local Guides profile, if available* */

    contributor_url?: string | undefined;

    
    /** *URL in the 'book online' button of the element* URL directing users to the online booking or order page of the business entity */

    book_online_url?: string | undefined;

    
    /** *domain of the business entity* */

    domain?: string | undefined;

    
    /** *URL of the logo featured in Google My Business profile* */

    logo?: string | undefined;

    
    /** *URL of the main image featured in Google My Business profile* */

    main_image?: string | undefined;

    
    /** *total count of images featured in Google My Business profile* */

    total_photos?: number | undefined;

    
    /** *additional information on the business entity* */

    snippet?: string | undefined;

    
    /** *latitude coordinate of the local establishments in google maps* example: `'latitude': 51.584091` */

    latitude?: number | undefined;

    
    /** *longitude coordinate of the local establishment in google maps* example: `'longitude': -0.31365919999999997` */

    longitude?: number | undefined;

    
    /** *shows whether the entity is verified by its owner on Google Maps* */

    is_claimed?: boolean | undefined;

    questions_and_answers_count?: number | undefined;

    
    /** *service details in a form of user-reviewed checks;* service details of a business entity displayed in a form of checks and based on user feedback and business `category` */

    attributes?: BusinessDataAttributesInfo | undefined;

    
    /** *keywords mentioned in customer reviews* contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword example: `'place_topics': {'egg roll': 48,'birthday': 33}` */

    place_topics?: { [key: string]: number; } | undefined;

    
    /** *the element's rating* the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** *hotel class rating* class ratings range between 1-5 stars, [learn more](https://support.google.com/business/answer/7660515?hl=en) if there is no hotel class rating information, the value will be `null` */

    hotel_rating?: number | undefined;

    
    /** *property price level* can take values: `inexpensive`, `moderate`, `expensive`, `very_expensive` if there is no price level information, the value will be `null` */

    price_level?: string | undefined;

    
    /** *the distribution of ratings of the business entity* the object displays the number of 1-star to 5-star ratings, as reviewed by users */

    rating_distribution?: { [key: string]: number; } | undefined;

    
    /** *related business entities* */

    people_also_search?: PeopleAlsoSearch[] | undefined;

    
    /** *work time details* information related to operational hours of the business entity */

    work_time?: BusinessWorkHoursInfo | undefined;

    
    /** *popular times* information related to busy hours of the business entity */

    popular_times?: PopularTimes | undefined;

    
    /** *available interactions with the business* list of options to interact with the business directly from search results */

    local_business_links?: BaseLocalBusinessLink[] | undefined;

    
    /** *business establishment is a part of the directory* indicates whether the business establishment is a part of the directory; if `true`, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre); **note:** if the business establishment is a parent item in the directory, the value will be `null` */

    is_directory_item?: boolean | undefined;

    
    /** *items of the directory* includes information about businesses that are located within the target business establishment and have the same address */

    directory?: BusinessDirectoryInfo | undefined;

    
    /** *list of services offered by the business* */

    services?: BusinessDataServiceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleBusinessInfo) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.title = data["title"];
            this.original_title = data["original_title"];
            this.description = data["description"];
            this.category = data["category"];
            this.category_ids = data["category_ids"];
            this.additional_categories = data["additional_categories"];
            this.cid = data["cid"];
            this.feature_id = data["feature_id"];
            this.address = data["address"];
            this.address_info = data["address_info"] ? AddressInfo.fromJS(data["address_info"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.phone = data["phone"];
            this.url = data["url"];
            this.contact_url = data["contact_url"];
            this.contributor_url = data["contributor_url"];
            this.book_online_url = data["book_online_url"];
            this.domain = data["domain"];
            this.logo = data["logo"];
            this.main_image = data["main_image"];
            this.total_photos = data["total_photos"];
            this.snippet = data["snippet"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.is_claimed = data["is_claimed"];
            this.questions_and_answers_count = data["questions_and_answers_count"];
            this.attributes = data["attributes"] ? BusinessDataAttributesInfo.fromJS(data["attributes"]) : <any>undefined;
            this.place_topics = data["place_topics"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.hotel_rating = data["hotel_rating"];
            this.price_level = data["price_level"];
            this.rating_distribution = data["rating_distribution"];
            if (Array.isArray(data["people_also_search"])) {
                this.people_also_search = [];
                for (let item of data["people_also_search"]) {
                    this.people_also_search.push(PeopleAlsoSearch.fromJS(item));
                }
            }
            this.work_time = data["work_time"] ? BusinessWorkHoursInfo.fromJS(data["work_time"]) : <any>undefined;
            this.popular_times = data["popular_times"] ? PopularTimes.fromJS(data["popular_times"]) : <any>undefined;
            if (Array.isArray(data["local_business_links"])) {
                this.local_business_links = [];
                for (let item of data["local_business_links"]) {
                    this.local_business_links.push(BaseLocalBusinessLink.fromJS(item));
                }
            }
            this.is_directory_item = data["is_directory_item"];
            this.directory = data["directory"] ? BusinessDirectoryInfo.fromJS(data["directory"]) : <any>undefined;
            if (Array.isArray(data["services"])) {
                this.services = [];
                for (let item of data["services"]) {
                    this.services.push(BusinessDataServiceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleBusinessInfo {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleBusinessInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["title"] = this.title;
        data["original_title"] = this.original_title;
        data["description"] = this.description;
        data["category"] = this.category;
        data["category_ids"] = this.category_ids;
        data["additional_categories"] = this.additional_categories;
        data["cid"] = this.cid;
        data["feature_id"] = this.feature_id;
        data["address"] = this.address;
        data["address_info"] = this.address_info ? AddressInfo.fromJS(this.address_info)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["phone"] = this.phone;
        data["url"] = this.url;
        data["contact_url"] = this.contact_url;
        data["contributor_url"] = this.contributor_url;
        data["book_online_url"] = this.book_online_url;
        data["domain"] = this.domain;
        data["logo"] = this.logo;
        data["main_image"] = this.main_image;
        data["total_photos"] = this.total_photos;
        data["snippet"] = this.snippet;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["is_claimed"] = this.is_claimed;
        data["questions_and_answers_count"] = this.questions_and_answers_count;
        data["attributes"] = this.attributes ? BusinessDataAttributesInfo.fromJS(this.attributes)?.toJSON() : <any>undefined;
        data["place_topics"] = this.place_topics;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["hotel_rating"] = this.hotel_rating;
        data["price_level"] = this.price_level;
        data["rating_distribution"] = this.rating_distribution;
        data["people_also_search"] = null;
        if (Array.isArray(this.people_also_search)) {
            data["people_also_search"] = [];
            for (let item of this.people_also_search) {
                if (item && typeof item.toJSON === "function") {
                    data["people_also_search"].push(item?.toJSON());
                }
            }
        }
        data["work_time"] = this.work_time ? BusinessWorkHoursInfo.fromJS(this.work_time)?.toJSON() : <any>undefined;
        data["popular_times"] = this.popular_times ? PopularTimes.fromJS(this.popular_times)?.toJSON() : <any>undefined;
        data["local_business_links"] = null;
        if (Array.isArray(this.local_business_links)) {
            data["local_business_links"] = [];
            for (let item of this.local_business_links) {
                if (item && typeof item.toJSON === "function") {
                    data["local_business_links"].push(item?.toJSON());
                }
            }
        }
        data["is_directory_item"] = this.is_directory_item;
        data["directory"] = this.directory ? BusinessDirectoryInfo.fromJS(this.directory)?.toJSON() : <any>undefined;
        data["services"] = null;
        if (Array.isArray(this.services)) {
            data["services"] = [];
            for (let item of this.services) {
                if (item && typeof item.toJSON === "function") {
                    data["services"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}