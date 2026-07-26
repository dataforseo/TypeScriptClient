import { AddressInfo, IAddressInfo } from "./AddressInfo";
import { BusinessDataAttributesInfo, IBusinessDataAttributesInfo } from "./BusinessDataAttributesInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PeopleAlsoSearch, IPeopleAlsoSearch } from "./PeopleAlsoSearch";
import { BusinessWorkHoursInfo, IBusinessWorkHoursInfo } from "./BusinessWorkHoursInfo";
import { PopularTimes, IPopularTimes } from "./PopularTimes";
import { BaseLocalBusinessLink, IBaseLocalBusinessLink } from "./BaseLocalBusinessLink";
import { BusinessDataContactInfo, IBusinessDataContactInfo } from "./BusinessDataContactInfo";
import { BusinessDataServiceInfo, IBusinessDataServiceInfo } from "./BusinessDataServiceInfo";


export interface IBusinessDataBusinessListingsSearchLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
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
        
        /** *google-defined client id* unique id of a local establishment learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
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
        
        /** *available contacts of the business* list of contacts to interact with the business */
        contact_info?: BusinessDataContactInfo[] | undefined
        
        /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *date and time when the data was last updated* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2023-01-26 09:03:15 +00:00` */
        last_updated_time?: string | undefined
        
        /** *date and time when our crawler found the business listing element for the first time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2023-03-11 10:04:11 +00:00` */
        first_seen?: string | undefined
        
        services?: BusinessDataServiceInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsSearchLiveItem  implements IBusinessDataBusinessListingsSearchLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
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

    
    /** *google-defined client id* unique id of a local establishment learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

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

    
    /** *available contacts of the business* list of contacts to interact with the business */

    contact_info?: BusinessDataContactInfo[] | undefined;

    
    /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *date and time when the data was last updated* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2023-01-26 09:03:15 +00:00` */

    last_updated_time?: string | undefined;

    
    /** *date and time when our crawler found the business listing element for the first time* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2023-03-11 10:04:11 +00:00` */

    first_seen?: string | undefined;

    services?: BusinessDataServiceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsSearchLiveItem) {

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
            this.domain = data["domain"];
            this.logo = data["logo"];
            this.main_image = data["main_image"];
            this.total_photos = data["total_photos"];
            this.snippet = data["snippet"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.is_claimed = data["is_claimed"];
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
            if (Array.isArray(data["contact_info"])) {
                this.contact_info = [];
                for (let item of data["contact_info"]) {
                    this.contact_info.push(BusinessDataContactInfo.fromJS(item));
                }
            }
            this.check_url = data["check_url"];
            this.last_updated_time = data["last_updated_time"];
            this.first_seen = data["first_seen"];
            if (Array.isArray(data["services"])) {
                this.services = [];
                for (let item of data["services"]) {
                    this.services.push(BusinessDataServiceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsSearchLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsSearchLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
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
        data["domain"] = this.domain;
        data["logo"] = this.logo;
        data["main_image"] = this.main_image;
        data["total_photos"] = this.total_photos;
        data["snippet"] = this.snippet;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["is_claimed"] = this.is_claimed;
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
        data["contact_info"] = null;
        if (Array.isArray(this.contact_info)) {
            data["contact_info"] = [];
            for (let item of this.contact_info) {
                if (item && typeof item.toJSON === "function") {
                    data["contact_info"].push(item?.toJSON());
                }
            }
        }
        data["check_url"] = this.check_url;
        data["last_updated_time"] = this.last_updated_time;
        data["first_seen"] = this.first_seen;
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