export interface IInfo   {
        
        title?: string | undefined
        
        description?: string | undefined
        
        category?: string | undefined
        
        category_ids?: string | undefined
        
        additional_categories?: string | undefined
        
        cid?: string | undefined
        
        feature_id?: string | undefined
        
        address?: string | undefined
        
        address_info_borough?: string | undefined
        
        address_info_address?: string | undefined
        
        address_info_city?: string | undefined
        
        address_info_zip?: string | undefined
        
        address_info_region?: string | undefined
        
        address_info_country_code?: string | undefined
        
        place_id?: string | undefined
        
        phone?: string | undefined
        
        url?: string | undefined
        
        domain?: string | undefined
        
        logo?: string | undefined
        
        main_image?: string | undefined
        
        total_photos?: string | undefined
        
        snippet?: string | undefined
        
        latitude?: string | undefined
        
        longitude?: string | undefined
        
        is_claimed?: string | undefined
        
        rating_rating_type?: string | undefined
        
        rating_value?: string | undefined
        
        rating_votes_count?: string | undefined
        
        /** the maximum value for a rating_type */
        rating_rating_max?: number | undefined
        
        rating_distribution_1?: string | undefined
        
        rating_distribution_2?: string | undefined
        
        rating_distribution_3?: string | undefined
        
        rating_distribution_4?: string | undefined
        
        rating_distribution_5?: string | undefined
        
        work_time_work_hours_current_status?: string | undefined
        
        check_url?: string | undefined
        
        last_updated_time?: string | undefined
        
        price_level?: string | undefined
        
        hotel_rating?: string | undefined
        
        /** type of element */
        contact_info_type?: string | undefined
        
        first_seen?: string | undefined

    [key: string]: any;

    }

export class Info  implements IInfo {

    title?: string | undefined;

    description?: string | undefined;

    category?: string | undefined;

    category_ids?: string | undefined;

    additional_categories?: string | undefined;

    cid?: string | undefined;

    feature_id?: string | undefined;

    address?: string | undefined;

    address_info_borough?: string | undefined;

    address_info_address?: string | undefined;

    address_info_city?: string | undefined;

    address_info_zip?: string | undefined;

    address_info_region?: string | undefined;

    address_info_country_code?: string | undefined;

    place_id?: string | undefined;

    phone?: string | undefined;

    url?: string | undefined;

    domain?: string | undefined;

    logo?: string | undefined;

    main_image?: string | undefined;

    total_photos?: string | undefined;

    snippet?: string | undefined;

    latitude?: string | undefined;

    longitude?: string | undefined;

    is_claimed?: string | undefined;

    rating_rating_type?: string | undefined;

    rating_value?: string | undefined;

    rating_votes_count?: string | undefined;
    
    /** the maximum value for a rating_type */

    rating_rating_max?: number | undefined;

    rating_distribution_1?: string | undefined;

    rating_distribution_2?: string | undefined;

    rating_distribution_3?: string | undefined;

    rating_distribution_4?: string | undefined;

    rating_distribution_5?: string | undefined;

    work_time_work_hours_current_status?: string | undefined;

    check_url?: string | undefined;

    last_updated_time?: string | undefined;

    price_level?: string | undefined;

    hotel_rating?: string | undefined;
    
    /** type of element */

    contact_info_type?: string | undefined;

    first_seen?: string | undefined;

    [key: string]: any;


    constructor(data?: IInfo) {

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
            this.title = data["title"];
            this.description = data["description"];
            this.category = data["category"];
            this.category_ids = data["category_ids"];
            this.additional_categories = data["additional_categories"];
            this.cid = data["cid"];
            this.feature_id = data["feature_id"];
            this.address = data["address"];
            this.address_info_borough = data["address_info.borough"];
            this.address_info_address = data["address_info.address"];
            this.address_info_city = data["address_info.city"];
            this.address_info_zip = data["address_info.zip"];
            this.address_info_region = data["address_info.region"];
            this.address_info_country_code = data["address_info.country_code"];
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
            this.rating_rating_type = data["rating.rating_type"];
            this.rating_value = data["rating.value"];
            this.rating_votes_count = data["rating.votes_count"];
            this.rating_rating_max = data["rating.rating_max"];
            this.rating_distribution_1 = data["rating_distribution.1"];
            this.rating_distribution_2 = data["rating_distribution.2"];
            this.rating_distribution_3 = data["rating_distribution.3"];
            this.rating_distribution_4 = data["rating_distribution.4"];
            this.rating_distribution_5 = data["rating_distribution.5"];
            this.work_time_work_hours_current_status = data["work_time.work_hours.current_status"];
            this.check_url = data["check_url"];
            this.last_updated_time = data["last_updated_time"];
            this.price_level = data["price_level"];
            this.hotel_rating = data["hotel_rating"];
            this.contact_info_type = data["contact_info.type"];
            this.first_seen = data["first_seen"];
        }
    }

    static fromJS(data: any): Info {
        data = typeof data === 'object' ? data : {};


        let result = new Info();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["description"] = this.description;
        data["category"] = this.category;
        data["category_ids"] = this.category_ids;
        data["additional_categories"] = this.additional_categories;
        data["cid"] = this.cid;
        data["feature_id"] = this.feature_id;
        data["address"] = this.address;
        data["address_info.borough"] = this.address_info_borough;
        data["address_info.address"] = this.address_info_address;
        data["address_info.city"] = this.address_info_city;
        data["address_info.zip"] = this.address_info_zip;
        data["address_info.region"] = this.address_info_region;
        data["address_info.country_code"] = this.address_info_country_code;
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
        data["rating.rating_type"] = this.rating_rating_type;
        data["rating.value"] = this.rating_value;
        data["rating.votes_count"] = this.rating_votes_count;
        data["rating.rating_max"] = this.rating_rating_max;
        data["rating_distribution.1"] = this.rating_distribution_1;
        data["rating_distribution.2"] = this.rating_distribution_2;
        data["rating_distribution.3"] = this.rating_distribution_3;
        data["rating_distribution.4"] = this.rating_distribution_4;
        data["rating_distribution.5"] = this.rating_distribution_5;
        data["work_time.work_hours.current_status"] = this.work_time_work_hours_current_status;
        data["check_url"] = this.check_url;
        data["last_updated_time"] = this.last_updated_time;
        data["price_level"] = this.price_level;
        data["hotel_rating"] = this.hotel_rating;
        data["contact_info.type"] = this.contact_info_type;
        data["first_seen"] = this.first_seen;
        return data;
    }
}