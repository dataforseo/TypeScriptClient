import { TimeInfo, ITimeInfo } from "./TimeInfo";
import { HotelAmenityInfo, IHotelAmenityInfo } from "./HotelAmenityInfo";
import { HotelAmenityItemInfo, IHotelAmenityItemInfo } from "./HotelAmenityItemInfo";


export interface IHotelAboutInfo   {
        
        /** *description of the hotel* the description of the hotel entity for which the results are collected */
        description?: string | undefined
        
        /** *additional description of the hotel* details about the hotel provided in addition to the description */
        sub_descriptions?: string[] | undefined
        
        /** *hotel check-in time* check-in time indicated in the hotel listing */
        check_in_time?: TimeInfo | undefined
        
        /** *hotel check-out time* check-out time indicated in the hotel listing */
        check_out_time?: TimeInfo | undefined
        
        /** *full address of the hotel* address of the hotel indicated in the standardised format */
        full_address?: string | undefined
        
        /** *hotel domain* domain of the hotel's website */
        domain?: string | undefined
        
        /** *hotel url* URL to the hotel's website indicated in the listing */
        url?: string | undefined
        
        /** *hotel amenities* information about hotel amenities */
        amenities?: HotelAmenityInfo[] | undefined
        
        /** *hotel amenities* information about hotel amenities labelled as 'popular' */
        popular_amenities?: HotelAmenityItemInfo[] | undefined

    [key: string]: any;

    }

export class HotelAboutInfo  implements IHotelAboutInfo {

    
    /** *description of the hotel* the description of the hotel entity for which the results are collected */

    description?: string | undefined;

    
    /** *additional description of the hotel* details about the hotel provided in addition to the description */

    sub_descriptions?: string[] | undefined;

    
    /** *hotel check-in time* check-in time indicated in the hotel listing */

    check_in_time?: TimeInfo | undefined;

    
    /** *hotel check-out time* check-out time indicated in the hotel listing */

    check_out_time?: TimeInfo | undefined;

    
    /** *full address of the hotel* address of the hotel indicated in the standardised format */

    full_address?: string | undefined;

    
    /** *hotel domain* domain of the hotel's website */

    domain?: string | undefined;

    
    /** *hotel url* URL to the hotel's website indicated in the listing */

    url?: string | undefined;

    
    /** *hotel amenities* information about hotel amenities */

    amenities?: HotelAmenityInfo[] | undefined;

    
    /** *hotel amenities* information about hotel amenities labelled as 'popular' */

    popular_amenities?: HotelAmenityItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelAboutInfo) {

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
            this.description = data["description"];
            this.sub_descriptions = data["sub_descriptions"];
            this.check_in_time = data["check_in_time"] ? TimeInfo.fromJS(data["check_in_time"]) : <any>undefined;
            this.check_out_time = data["check_out_time"] ? TimeInfo.fromJS(data["check_out_time"]) : <any>undefined;
            this.full_address = data["full_address"];
            this.domain = data["domain"];
            this.url = data["url"];
            if (Array.isArray(data["amenities"])) {
                this.amenities = [];
                for (let item of data["amenities"]) {
                    this.amenities.push(HotelAmenityInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["popular_amenities"])) {
                this.popular_amenities = [];
                for (let item of data["popular_amenities"]) {
                    this.popular_amenities.push(HotelAmenityItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelAboutInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelAboutInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["description"] = this.description;
        data["sub_descriptions"] = this.sub_descriptions;
        data["check_in_time"] = this.check_in_time ? TimeInfo.fromJS(this.check_in_time)?.toJSON() : <any>undefined;
        data["check_out_time"] = this.check_out_time ? TimeInfo.fromJS(this.check_out_time)?.toJSON() : <any>undefined;
        data["full_address"] = this.full_address;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["amenities"] = null;
        if (Array.isArray(this.amenities)) {
            data["amenities"] = [];
            for (let item of this.amenities) {
                if (item && typeof item.toJSON === "function") {
                    data["amenities"].push(item?.toJSON());
                }
            }
        }
        data["popular_amenities"] = null;
        if (Array.isArray(this.popular_amenities)) {
            data["popular_amenities"] = [];
            for (let item of this.popular_amenities) {
                if (item && typeof item.toJSON === "function") {
                    data["popular_amenities"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}