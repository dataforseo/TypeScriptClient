import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { AddressInfo, IAddressInfo } from "./AddressInfo";
import { WorkHours, IWorkHours } from "./WorkHours";
import { LocalJustificationInfo, ILocalJustificationInfo } from "./LocalJustificationInfo";


export interface IBaseSerpApiGoogleMapsElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users */
        rating_distribution?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class BaseSerpApiGoogleMapsElementItem  implements IBaseSerpApiGoogleMapsElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** domain in SERP */

    domain?: string | undefined;

    
    /** title of the element */

    title?: string | undefined;

    
    /** search URL with refinement parameters */

    url?: string | undefined;

    
    /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    
    /** the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users */

    rating_distribution?: { [key: string]: number; } | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiGoogleMapsElementItem) {

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
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.rating_distribution = data["rating_distribution"];
        }
    }

    static fromJS(data: any): BaseSerpApiGoogleMapsElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "maps_search") {

            let result = new SerpApiMapsSearchElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "maps_paid_item") {

            let result = new SerpApiMapsPaidItemElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiGoogleMapsElementItem();
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
        return data;
    }
}

 
export interface ISerpApiMapsSearchElementItem  extends IBaseSerpApiGoogleMapsElementItem    {
        
        /** original title of the element
original title not translated by Google */
        original_title?: string | undefined
        
        /** URL of the preferred contact page */
        contact_url?: string | undefined
        
        /** URL of the user’s or entity’s Local Guides profile, if available */
        contributor_url?: string | undefined
        
        /** URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity */
        book_online_url?: string | undefined
        
        /** hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null */
        hotel_rating?: number | undefined
        
        /** property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null */
        price_level?: string | undefined
        
        /** element snippet
contains the address and other information about the local establishment featured in the element */
        snippet?: string | undefined
        
        /** address line
address of the local establishment featured in the element */
        address?: string | undefined
        
        /** object containing address components of the local establishment */
        address_info?: AddressInfo | undefined
        
        /** unique place identifier
place id of the local establishment featured in the element */
        place_id?: string | undefined
        
        /** phone number
phone number of the local establishment featured in the element */
        phone?: string | undefined
        
        /** URL of the main image featured in Google My Business profile */
        main_image?: string | undefined
        
        /** total count of images featured in Google My Business profile */
        total_photos?: number | undefined
        
        /** business category
Google My Business general category that best describes the services provided by the business entity */
        category?: string | undefined
        
        /** additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail */
        additional_categories?: string[] | undefined
        
        /** global category IDs
universal category IDs that do not change based on the selected country */
        category_ids?: string[] | undefined
        
        /** open hours
information about work hours of the local establishment */
        work_hours?: WorkHours | undefined
        
        /** the unique identifier of the element in SERP */
        feature_id?: string | undefined
        
        /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */
        cid?: string | undefined
        
        /** latitude coordinate of the local establishments in google maps
example:
'latitude': 51.584091 */
        latitude?: number | undefined
        
        /** longitude coordinate of the local establishment in google maps
example:
'longitude': -0.31365919999999997 */
        longitude?: number | undefined
        
        /** indicates whether ownership of this local establishment is claimed */
        is_claimed?: boolean | undefined
        
        /** Google local justifications
snippets of text that “justify” why the business is showing up for search query */
        local_justifications?: LocalJustificationInfo[] | undefined
        
        /** indicates whether this local establishment is a directory */
        is_directory_item?: boolean | undefined

    [key: string]: any;

    }

export class SerpApiMapsSearchElementItem  extends BaseSerpApiGoogleMapsElementItem   implements ISerpApiMapsSearchElementItem {

    
    /** original title of the element
original title not translated by Google */

    original_title?: string | undefined;

    
    /** URL of the preferred contact page */

    contact_url?: string | undefined;

    
    /** URL of the user’s or entity’s Local Guides profile, if available */

    contributor_url?: string | undefined;

    
    /** URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity */

    book_online_url?: string | undefined;

    
    /** hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null */

    hotel_rating?: number | undefined;

    
    /** property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null */

    price_level?: string | undefined;

    
    /** element snippet
contains the address and other information about the local establishment featured in the element */

    snippet?: string | undefined;

    
    /** address line
address of the local establishment featured in the element */

    address?: string | undefined;

    
    /** object containing address components of the local establishment */

    address_info?: AddressInfo | undefined;

    
    /** unique place identifier
place id of the local establishment featured in the element */

    place_id?: string | undefined;

    
    /** phone number
phone number of the local establishment featured in the element */

    phone?: string | undefined;

    
    /** URL of the main image featured in Google My Business profile */

    main_image?: string | undefined;

    
    /** total count of images featured in Google My Business profile */

    total_photos?: number | undefined;

    
    /** business category
Google My Business general category that best describes the services provided by the business entity */

    category?: string | undefined;

    
    /** additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail */

    additional_categories?: string[] | undefined;

    
    /** global category IDs
universal category IDs that do not change based on the selected country */

    category_ids?: string[] | undefined;

    
    /** open hours
information about work hours of the local establishment */

    work_hours?: WorkHours | undefined;

    
    /** the unique identifier of the element in SERP */

    feature_id?: string | undefined;

    
    /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */

    cid?: string | undefined;

    
    /** latitude coordinate of the local establishments in google maps
example:
'latitude': 51.584091 */

    latitude?: number | undefined;

    
    /** longitude coordinate of the local establishment in google maps
example:
'longitude': -0.31365919999999997 */

    longitude?: number | undefined;

    
    /** indicates whether ownership of this local establishment is claimed */

    is_claimed?: boolean | undefined;

    
    /** Google local justifications
snippets of text that “justify” why the business is showing up for search query */

    local_justifications?: LocalJustificationInfo[] | undefined;

    
    /** indicates whether this local establishment is a directory */

    is_directory_item?: boolean | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiMapsSearchElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.original_title = data["original_title"];
            this.contact_url = data["contact_url"];
            this.contributor_url = data["contributor_url"];
            this.book_online_url = data["book_online_url"];
            this.hotel_rating = data["hotel_rating"];
            this.price_level = data["price_level"];
            this.snippet = data["snippet"];
            this.address = data["address"];
            this.address_info = data["address_info"] ? AddressInfo.fromJS(data["address_info"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.phone = data["phone"];
            this.main_image = data["main_image"];
            this.total_photos = data["total_photos"];
            this.category = data["category"];
            this.additional_categories = data["additional_categories"];
            this.category_ids = data["category_ids"];
            this.work_hours = data["work_hours"] ? WorkHours.fromJS(data["work_hours"]) : <any>undefined;
            this.feature_id = data["feature_id"];
            this.cid = data["cid"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.is_claimed = data["is_claimed"];
            if (Array.isArray(data["local_justifications"])) {
                this.local_justifications = [];
                for (let item of data["local_justifications"]) {
                    this.local_justifications.push(LocalJustificationInfo.fromJS(item));
                }
            }
            this.is_directory_item = data["is_directory_item"];
        }
    }

    static fromJS(data: any): SerpApiMapsSearchElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiMapsSearchElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["original_title"] = this.original_title;
        data["contact_url"] = this.contact_url;
        data["contributor_url"] = this.contributor_url;
        data["book_online_url"] = this.book_online_url;
        data["hotel_rating"] = this.hotel_rating;
        data["price_level"] = this.price_level;
        data["snippet"] = this.snippet;
        data["address"] = this.address;
        data["address_info"] = this.address_info ? AddressInfo.fromJS(this.address_info)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["phone"] = this.phone;
        data["main_image"] = this.main_image;
        data["total_photos"] = this.total_photos;
        data["category"] = this.category;
        data["additional_categories"] = this.additional_categories;
        data["category_ids"] = this.category_ids;
        data["work_hours"] = this.work_hours ? WorkHours.fromJS(this.work_hours)?.toJSON() : <any>undefined;
        data["feature_id"] = this.feature_id;
        data["cid"] = this.cid;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["is_claimed"] = this.is_claimed;
        data["local_justifications"] = null;
        if (Array.isArray(this.local_justifications)) {
            data["local_justifications"] = [];
            for (let item of this.local_justifications) {
                if (item && typeof item.toJSON === "function") {
                    data["local_justifications"].push(item?.toJSON());
                }
            }
        }
        data["is_directory_item"] = this.is_directory_item;
        return data;
    }
}

 
export interface ISerpApiMapsPaidItemElementItem  extends IBaseSerpApiGoogleMapsElementItem    {

    [key: string]: any;

    }

export class SerpApiMapsPaidItemElementItem  extends BaseSerpApiGoogleMapsElementItem   implements ISerpApiMapsPaidItemElementItem {

    [key: string]: any;


    constructor(data?: ISerpApiMapsPaidItemElementItem) {
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

    static fromJS(data: any): SerpApiMapsPaidItemElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiMapsPaidItemElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}