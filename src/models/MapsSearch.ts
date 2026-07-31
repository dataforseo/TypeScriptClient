import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { AddressInfo, IAddressInfo } from "./AddressInfo";
import { BusinessWorkHoursInfo, IBusinessWorkHoursInfo } from "./BusinessWorkHoursInfo";


export interface IMapsSearch   {
        
        /** type of element */
        type?: string | undefined
        
        /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from the `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank among all the elements* */
        rank_absolute?: number | undefined
        
        /** *domain of the business entity* */
        domain?: string | undefined
        
        /** *directory title* can take the following values: `At this place`, `Directory` */
        title?: string | undefined
        
        /** *URL to view the menu* */
        url?: string | undefined
        
        /** *the element's rating* the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** the distribution of ratings of the business entity the object displays the number of 1-star to 5-star ratings, as reviewed by users */
        rating_distribution?: { [key: string]: number; } | undefined
        
        /** *additional information about the business entity* */
        snippet?: string | undefined
        
        /** *address of the business entity* */
        address?: string | undefined
        
        /** *object containing address components of the business entity* */
        address_info?: AddressInfo | undefined
        
        /** *unique place identifier* [place id](https://developers.google.com/places/place-id) of the local establishment featured in the element learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        place_id?: string | undefined
        
        /** *phone number of the business entity* */
        phone?: string | undefined
        
        /** *URL of the main image featured in Google My Business profile* */
        main_image?: string | undefined
        
        /** *total count of images featured in Google My Business profile* */
        total_photos?: string | undefined
        
        /** *business category* Google My Business general category that best describes the services provided by the business entity */
        category?: string | undefined
        
        /** *additional business categories* additional Google My Business categories that describe the services provided by the business entity in more detail */
        additional_categories?: string[] | undefined
        
        /** *property price level* can take values: `inexpensive`, `moderate`, `expensive`, `very_expensive` if there is no price level information, the value will be `null` */
        price_level?: string | undefined
        
        /** *hotel class rating* class ratings range between 1-5 stars, [learn more](https://support.google.com/business/answer/7660515?hl=en) if there is no hotel class rating information, the value will be `null` */
        hotel_rating?: string | undefined
        
        /** *global category IDs* universal category IDs that do not change based on the selected country */
        category_ids?: string[] | undefined
        
        /** *open hours* information about work hours of the local establishment */
        work_hours?: BusinessWorkHoursInfo | undefined
        
        /** *the unique identifier of the element in SERP* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        feature_id?: string | undefined
        
        /** *google-defined client id* unique id of a local establishment; can be used with [Google Reviews API](/v3/reviews/google/overview/?php) to get a full list of reviews learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */
        cid?: string | undefined
        
        /** *latitude coordinate of the local establishments in google maps* example: `'latitude': 51.584091` */
        latitude?: number | undefined
        
        /** *longitude coordinate of the local establishment in google maps* example: `'longitude': -0.31365919999999997` */
        longitude?: number | undefined
        
        /** *shows whether the entity is verified by its owner on Google Maps* */
        is_claimed?: boolean | undefined
        
        /** *Google local justifications* snippets of text that “justify” why the business is showing up for search query */
        local_justifications?: string[] | undefined
        
        /** *business establishment is a part of the directory* indicates whether the business establishment is a part of the directory; if `true`, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre); **note:** if the business establishment is a parent item in the directory, the value will be `null` */
        is_directory_item?: boolean | undefined

    [key: string]: any;

    }

export class MapsSearch  implements IMapsSearch {

    
    /** type of element */

    type?: string | undefined;

    
    /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from the `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank among all the elements* */

    rank_absolute?: number | undefined;

    
    /** *domain of the business entity* */

    domain?: string | undefined;

    
    /** *directory title* can take the following values: `At this place`, `Directory` */

    title?: string | undefined;

    
    /** *URL to view the menu* */

    url?: string | undefined;

    
    /** *the element's rating* the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** the distribution of ratings of the business entity the object displays the number of 1-star to 5-star ratings, as reviewed by users */

    rating_distribution?: { [key: string]: number; } | undefined;

    
    /** *additional information about the business entity* */

    snippet?: string | undefined;

    
    /** *address of the business entity* */

    address?: string | undefined;

    
    /** *object containing address components of the business entity* */

    address_info?: AddressInfo | undefined;

    
    /** *unique place identifier* [place id](https://developers.google.com/places/place-id) of the local establishment featured in the element learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    place_id?: string | undefined;

    
    /** *phone number of the business entity* */

    phone?: string | undefined;

    
    /** *URL of the main image featured in Google My Business profile* */

    main_image?: string | undefined;

    
    /** *total count of images featured in Google My Business profile* */

    total_photos?: string | undefined;

    
    /** *business category* Google My Business general category that best describes the services provided by the business entity */

    category?: string | undefined;

    
    /** *additional business categories* additional Google My Business categories that describe the services provided by the business entity in more detail */

    additional_categories?: string[] | undefined;

    
    /** *property price level* can take values: `inexpensive`, `moderate`, `expensive`, `very_expensive` if there is no price level information, the value will be `null` */

    price_level?: string | undefined;

    
    /** *hotel class rating* class ratings range between 1-5 stars, [learn more](https://support.google.com/business/answer/7660515?hl=en) if there is no hotel class rating information, the value will be `null` */

    hotel_rating?: string | undefined;

    
    /** *global category IDs* universal category IDs that do not change based on the selected country */

    category_ids?: string[] | undefined;

    
    /** *open hours* information about work hours of the local establishment */

    work_hours?: BusinessWorkHoursInfo | undefined;

    
    /** *the unique identifier of the element in SERP* learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    feature_id?: string | undefined;

    
    /** *google-defined client id* unique id of a local establishment; can be used with [Google Reviews API](/v3/reviews/google/overview/?php) to get a full list of reviews learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) */

    cid?: string | undefined;

    
    /** *latitude coordinate of the local establishments in google maps* example: `'latitude': 51.584091` */

    latitude?: number | undefined;

    
    /** *longitude coordinate of the local establishment in google maps* example: `'longitude': -0.31365919999999997` */

    longitude?: number | undefined;

    
    /** *shows whether the entity is verified by its owner on Google Maps* */

    is_claimed?: boolean | undefined;

    
    /** *Google local justifications* snippets of text that “justify” why the business is showing up for search query */

    local_justifications?: string[] | undefined;

    
    /** *business establishment is a part of the directory* indicates whether the business establishment is a part of the directory; if `true`, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre); **note:** if the business establishment is a parent item in the directory, the value will be `null` */

    is_directory_item?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IMapsSearch) {

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
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.rating_distribution = data["rating_distribution"];
            this.snippet = data["snippet"];
            this.address = data["address"];
            this.address_info = data["address_info"] ? AddressInfo.fromJS(data["address_info"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.phone = data["phone"];
            this.main_image = data["main_image"];
            this.total_photos = data["total_photos"];
            this.category = data["category"];
            this.additional_categories = data["additional_categories"];
            this.price_level = data["price_level"];
            this.hotel_rating = data["hotel_rating"];
            this.category_ids = data["category_ids"];
            this.work_hours = data["work_hours"] ? BusinessWorkHoursInfo.fromJS(data["work_hours"]) : <any>undefined;
            this.feature_id = data["feature_id"];
            this.cid = data["cid"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.is_claimed = data["is_claimed"];
            this.local_justifications = data["local_justifications"];
            this.is_directory_item = data["is_directory_item"];
        }
    }

    static fromJS(data: any): MapsSearch {
        data = typeof data === 'object' ? data : {};


        let result = new MapsSearch();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["rating_distribution"] = this.rating_distribution;
        data["snippet"] = this.snippet;
        data["address"] = this.address;
        data["address_info"] = this.address_info ? AddressInfo.fromJS(this.address_info)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["phone"] = this.phone;
        data["main_image"] = this.main_image;
        data["total_photos"] = this.total_photos;
        data["category"] = this.category;
        data["additional_categories"] = this.additional_categories;
        data["price_level"] = this.price_level;
        data["hotel_rating"] = this.hotel_rating;
        data["category_ids"] = this.category_ids;
        data["work_hours"] = this.work_hours ? BusinessWorkHoursInfo.fromJS(this.work_hours)?.toJSON() : <any>undefined;
        data["feature_id"] = this.feature_id;
        data["cid"] = this.cid;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["is_claimed"] = this.is_claimed;
        data["local_justifications"] = this.local_justifications;
        data["is_directory_item"] = this.is_directory_item;
        return data;
    }
}