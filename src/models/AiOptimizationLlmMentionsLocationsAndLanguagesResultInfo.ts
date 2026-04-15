import { ResultAvailableLanguages, IResultAvailableLanguages } from "./ResultAvailableLanguages";


export interface IAiOptimizationLlmMentionsLocationsAndLanguagesResultInfo   {
        
        /** location code */
        location_code?: number | undefined
        
        /** full name of the location */
        location_name?: string | undefined
        
        /** supported languagescontains the languages which are supported for a specific location */
        available_languages?: ResultAvailableLanguages[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo  implements IAiOptimizationLlmMentionsLocationsAndLanguagesResultInfo {
    
    /** location code */

    location_code?: number | undefined;
    
    /** full name of the location */

    location_name?: string | undefined;
    
    /** supported languagescontains the languages which are supported for a specific location */

    available_languages?: ResultAvailableLanguages[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsLocationsAndLanguagesResultInfo) {

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
            if (Array.isArray(data["available_languages"])) {
                this.available_languages = [];
                for (let item of data["available_languages"]) {
                    this.available_languages.push(ResultAvailableLanguages.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["location_name"] = this.location_name;
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