import { GpsCoordinatesLocationInfo, IGpsCoordinatesLocationInfo } from "./GpsCoordinatesLocationInfo";
import { HotelReviewInfo, IHotelReviewInfo } from "./HotelReviewInfo";
import { HotelPriceInfo, IHotelPriceInfo } from "./HotelPriceInfo";


export interface IBusinessDataGoogleHotelSearchesItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** unique identifier of a hotel entity in Google search example: CgoI-KWyzenM_MV3EAE */
        hotel_identifier?: string | undefined
        
        /** title of the hotel */
        title?: string | undefined
        
        /** hotel class rating class rating that ranges between 1-5 stars */
        stars?: number | undefined
        
        /** indicates a paid hotel listing if true, related hotel_search_item is a paid ad if false, related hotel_search_item is an organic hotel listing */
        is_paid?: boolean | undefined
        
        /** GPS coordinates of the hotel’s location */
        location?: GpsCoordinatesLocationInfo | undefined
        
        /** hotel reviews and rating information */
        reviews?: HotelReviewInfo | undefined
        
        /** featured images for a hotel */
        overview_images?: string[] | undefined
        
        /** hotel price */
        prices?: HotelPriceInfo | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleHotelSearchesItem  implements IBusinessDataGoogleHotelSearchesItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** unique identifier of a hotel entity in Google search example: CgoI-KWyzenM_MV3EAE */

    hotel_identifier?: string | undefined;

    
    /** title of the hotel */

    title?: string | undefined;

    
    /** hotel class rating class rating that ranges between 1-5 stars */

    stars?: number | undefined;

    
    /** indicates a paid hotel listing if true, related hotel_search_item is a paid ad if false, related hotel_search_item is an organic hotel listing */

    is_paid?: boolean | undefined;

    
    /** GPS coordinates of the hotel’s location */

    location?: GpsCoordinatesLocationInfo | undefined;

    
    /** hotel reviews and rating information */

    reviews?: HotelReviewInfo | undefined;

    
    /** featured images for a hotel */

    overview_images?: string[] | undefined;

    
    /** hotel price */

    prices?: HotelPriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleHotelSearchesItem) {

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
            this.hotel_identifier = data["hotel_identifier"];
            this.title = data["title"];
            this.stars = data["stars"];
            this.is_paid = data["is_paid"];
            this.location = data["location"] ? GpsCoordinatesLocationInfo.fromJS(data["location"]) : <any>undefined;
            this.reviews = data["reviews"] ? HotelReviewInfo.fromJS(data["reviews"]) : <any>undefined;
            this.overview_images = data["overview_images"];
            this.prices = data["prices"] ? HotelPriceInfo.fromJS(data["prices"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelSearchesItem {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelSearchesItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["hotel_identifier"] = this.hotel_identifier;
        data["title"] = this.title;
        data["stars"] = this.stars;
        data["is_paid"] = this.is_paid;
        data["location"] = this.location ? GpsCoordinatesLocationInfo.fromJS(this.location)?.toJSON() : <any>undefined;
        data["reviews"] = this.reviews ? HotelReviewInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["overview_images"] = this.overview_images;
        data["prices"] = this.prices ? HotelPriceInfo.fromJS(this.prices)?.toJSON() : <any>undefined;
        return data;
    }
}