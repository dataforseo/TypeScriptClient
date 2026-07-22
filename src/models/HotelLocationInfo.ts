import { LocationChain, ILocationChain } from "./LocationChain";


export interface IHotelLocationInfo   {
        
        /** name of the neighborhood where the hotel is located */
        neighborhood?: string | undefined
        
        /** description of the neighborhood where the hotel is located */
        neighborhood_description?: string | undefined
        
        /** url to the location of the hotel in google maps */
        maps_url?: string | undefined
        
        /** overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score */
        overall_score?: number | undefined
        
        /** category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports; */
        score_by_categories?: { [key: string]: number; } | undefined
        
        /** hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397 */
        latitude?: number | undefined
        
        /** hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973 */
        longitude?: number | undefined
        
        /** elements of the location chain
additional parameters of each element of the location chain */
        location_chain?: LocationChain[] | undefined

    [key: string]: any;

    }

export class HotelLocationInfo  implements IHotelLocationInfo {

    
    /** name of the neighborhood where the hotel is located */

    neighborhood?: string | undefined;

    
    /** description of the neighborhood where the hotel is located */

    neighborhood_description?: string | undefined;

    
    /** url to the location of the hotel in google maps */

    maps_url?: string | undefined;

    
    /** overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score */

    overall_score?: number | undefined;

    
    /** category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports; */

    score_by_categories?: { [key: string]: number; } | undefined;

    
    /** hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397 */

    latitude?: number | undefined;

    
    /** hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973 */

    longitude?: number | undefined;

    
    /** elements of the location chain
additional parameters of each element of the location chain */

    location_chain?: LocationChain[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelLocationInfo) {

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
            this.neighborhood = data["neighborhood"];
            this.neighborhood_description = data["neighborhood_description"];
            this.maps_url = data["maps_url"];
            this.overall_score = data["overall_score"];
            this.score_by_categories = data["score_by_categories"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            if (Array.isArray(data["location_chain"])) {
                this.location_chain = [];
                for (let item of data["location_chain"]) {
                    this.location_chain.push(LocationChain.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelLocationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelLocationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["neighborhood"] = this.neighborhood;
        data["neighborhood_description"] = this.neighborhood_description;
        data["maps_url"] = this.maps_url;
        data["overall_score"] = this.overall_score;
        data["score_by_categories"] = this.score_by_categories;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["location_chain"] = null;
        if (Array.isArray(this.location_chain)) {
            data["location_chain"] = [];
            for (let item of this.location_chain) {
                if (item && typeof item.toJSON === "function") {
                    data["location_chain"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}