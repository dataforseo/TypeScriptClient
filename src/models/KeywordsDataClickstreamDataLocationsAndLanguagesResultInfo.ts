import { AvailableLanguages, IAvailableLanguages } from "./AvailableLanguages";


export interface IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo   {
        
        /** location code */
        location_code?: number | undefined
        
        /** full name of the location */
        location_name?: string | undefined
        
        /** the code of the superordinate location
the value will be null as Country is the only supported location_type for this API */
        location_code_parent?: string | undefined
        
        /** ISO country code of the location */
        country_iso_code?: string | undefined
        
        /** location type
possible values:
Country */
        location_type?: string | undefined
        
        /** supported languages
contains the languages which are supported for a specific location */
        available_languages?: AvailableLanguages[] | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo  implements IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo {

    
    /** location code */

    location_code?: number | undefined;

    
    /** full name of the location */

    location_name?: string | undefined;

    
    /** the code of the superordinate location
the value will be null as Country is the only supported location_type for this API */

    location_code_parent?: string | undefined;

    
    /** ISO country code of the location */

    country_iso_code?: string | undefined;

    
    /** location type
possible values:
Country */

    location_type?: string | undefined;

    
    /** supported languages
contains the languages which are supported for a specific location */

    available_languages?: AvailableLanguages[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo) {

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
            this.location_code = data["location_code"];
            this.location_name = data["location_name"];
            this.location_code_parent = data["location_code_parent"];
            this.country_iso_code = data["country_iso_code"];
            this.location_type = data["location_type"];
            if (Array.isArray(data["available_languages"])) {
                this.available_languages = [];
                for (let item of data["available_languages"]) {
                    this.available_languages.push(AvailableLanguages.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["location_name"] = this.location_name;
        data["location_code_parent"] = this.location_code_parent;
        data["country_iso_code"] = this.country_iso_code;
        data["location_type"] = this.location_type;
        data["available_languages"] = null;
        if (Array.isArray(this.available_languages)) {
            data["available_languages"] = [];
            for (let item of this.available_languages) {
                if (item && typeof item.toJSON === "function") {
                    data["available_languages"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}