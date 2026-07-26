export interface IDataforseoLabsGoogleSearchIntentLiveRequestInfo   {
        
        /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; the keywords will be converted to lowercase format learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of the language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports the following languages only: Arabic, ar, Chinese(Traditional), zh-TW, Czech, cs, Danish, da, Dutch, nl, English, en, Finnish, fi, French, fr, German, de, Hebrew, he, Hindi, hi, Italian, it, Japanese, ja, Korean, ko, Malay, ms, Norwegian(Bokmål), nb, Polish, pl, Portuguese, pt, Romanian, ro, Russian, ru, Spanish, es, Swedish, sv, Thai, th, Ukrainian, uk, Vietnamese, vi, Bulgarian, bg, Croatian, hr, Serbian, sr, Slovenian, sl, Bosnian, bs, Greek, el, Hungarian, hu, Slovak, sk, Turkish, tr example: English */
        language_name?: string | undefined
        
        /** language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports these languages only; example: en */
        language_code?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSearchIntentLiveRequestInfo  implements IDataforseoLabsGoogleSearchIntentLiveRequestInfo {

    
    /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; the keywords will be converted to lowercase format learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of the language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports the following languages only: Arabic, ar, Chinese(Traditional), zh-TW, Czech, cs, Danish, da, Dutch, nl, English, en, Finnish, fi, French, fr, German, de, Hebrew, he, Hindi, hi, Italian, it, Japanese, ja, Korean, ko, Malay, ms, Norwegian(Bokmål), nb, Polish, pl, Portuguese, pt, Romanian, ro, Russian, ru, Spanish, es, Swedish, sv, Thai, th, Ukrainian, uk, Vietnamese, vi, Bulgarian, bg, Croatian, hr, Serbian, sr, Slovenian, sl, Bosnian, bs, Greek, el, Hungarian, hu, Slovak, sk, Turkish, tr example: English */

    language_name?: string | undefined;

    
    /** language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports these languages only; example: en */

    language_code?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSearchIntentLiveRequestInfo) {

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
            this.keywords = data["keywords"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSearchIntentLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSearchIntentLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["tag"] = this.tag;
        return data;
    }
}