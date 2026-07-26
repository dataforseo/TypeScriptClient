import { HotelAboutInfo, IHotelAboutInfo } from "./HotelAboutInfo";
import { HotelLocationInfo, IHotelLocationInfo } from "./HotelLocationInfo";
import { HotelReviewInfo, IHotelReviewInfo } from "./HotelReviewInfo";
import { HotelPriceInfo, IHotelPriceInfo } from "./HotelPriceInfo";


export interface IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo   {
        
        /** *unique hotel identifier* this field will contain the `hotel_identifier` parameter; example: `CgoI-KWyzenM_MV3EAE` */
        hotel_identifier?: string | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *hotel title* the title of the hotel entity for which the results are collected */
        title?: string | undefined
        
        /** *hotel class rating* class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary */
        stars?: number | undefined
        
        /** *hotel class rating* class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary */
        stars_description?: string | undefined
        
        /** *hotel address* physical address of the hotel */
        address?: string | undefined
        
        /** *hotel phone number* contact phone number of the hotel */
        phone?: string | undefined
        
        /** *information about the hotel* */
        about?: HotelAboutInfo | undefined
        
        /** *information about the hotel location* information about the location where the hotel is located */
        location?: HotelLocationInfo | undefined
        
        /** *hotel reviews by criteria* information about reviews of the hotel entity */
        reviews?: HotelReviewInfo | undefined
        
        /** *images displayed in the hotel overview* array containing URLs to images displayed in the hotel overview */
        overview_images?: string[] | undefined
        
        /** *pricing details of the hotel entity* contains information about the hotel's prices */
        prices?: HotelPriceInfo | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo  implements IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo {

    
    /** *unique hotel identifier* this field will contain the `hotel_identifier` parameter; example: `CgoI-KWyzenM_MV3EAE` */

    hotel_identifier?: string | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *hotel title* the title of the hotel entity for which the results are collected */

    title?: string | undefined;

    
    /** *hotel class rating* class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary */

    stars?: number | undefined;

    
    /** *hotel class rating* class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary */

    stars_description?: string | undefined;

    
    /** *hotel address* physical address of the hotel */

    address?: string | undefined;

    
    /** *hotel phone number* contact phone number of the hotel */

    phone?: string | undefined;

    
    /** *information about the hotel* */

    about?: HotelAboutInfo | undefined;

    
    /** *information about the hotel location* information about the location where the hotel is located */

    location?: HotelLocationInfo | undefined;

    
    /** *hotel reviews by criteria* information about reviews of the hotel entity */

    reviews?: HotelReviewInfo | undefined;

    
    /** *images displayed in the hotel overview* array containing URLs to images displayed in the hotel overview */

    overview_images?: string[] | undefined;

    
    /** *pricing details of the hotel entity* contains information about the hotel's prices */

    prices?: HotelPriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo) {

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
            this.hotel_identifier = data["hotel_identifier"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.stars = data["stars"];
            this.stars_description = data["stars_description"];
            this.address = data["address"];
            this.phone = data["phone"];
            this.about = data["about"] ? HotelAboutInfo.fromJS(data["about"]) : <any>undefined;
            this.location = data["location"] ? HotelLocationInfo.fromJS(data["location"]) : <any>undefined;
            this.reviews = data["reviews"] ? HotelReviewInfo.fromJS(data["reviews"]) : <any>undefined;
            this.overview_images = data["overview_images"];
            this.prices = data["prices"] ? HotelPriceInfo.fromJS(data["prices"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["hotel_identifier"] = this.hotel_identifier;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["stars"] = this.stars;
        data["stars_description"] = this.stars_description;
        data["address"] = this.address;
        data["phone"] = this.phone;
        data["about"] = this.about ? HotelAboutInfo.fromJS(this.about)?.toJSON() : <any>undefined;
        data["location"] = this.location ? HotelLocationInfo.fromJS(this.location)?.toJSON() : <any>undefined;
        data["reviews"] = this.reviews ? HotelReviewInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["overview_images"] = this.overview_images;
        data["prices"] = this.prices ? HotelPriceInfo.fromJS(this.prices)?.toJSON() : <any>undefined;
        return data;
    }
}