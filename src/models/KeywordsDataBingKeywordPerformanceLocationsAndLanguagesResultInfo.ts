import { AvailableLocations, IAvailableLocations } from "./AvailableLocations";


export interface IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo   {
        
        /** *language name* */
        language_name?: string | undefined
        
        /** *language code* */
        language_code?: string | undefined
        
        /** *supported locations* contains locations supported in combination with a specific language */
        available_locations?: AvailableLocations[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo  implements IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo {

    
    /** *language name* */

    language_name?: string | undefined;

    
    /** *language code* */

    language_code?: string | undefined;

    
    /** *supported locations* contains locations supported in combination with a specific language */

    available_locations?: AvailableLocations[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            if (Array.isArray(data["available_locations"])) {
                this.available_locations = [];
                for (let item of data["available_locations"]) {
                    this.available_locations.push(AvailableLocations.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["available_locations"] = null;
        if (Array.isArray(this.available_locations)) {
            data["available_locations"] = [];
            for (let item of this.available_locations) {
                if (item && typeof item.toJSON === "function") {
                    data["available_locations"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}