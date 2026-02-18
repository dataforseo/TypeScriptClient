export interface IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo   {
        
        /** keywords
required field
UTF-8 encoding
The maximum number of keywords you can specify: 1000;
The maximum number of characters in a single keyword: 250;
The keywords will be converted to lowercase format;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
United Kingdom */
        location_name?: string | undefined
        
        /** unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
English */
        language_name?: string | undefined
        
        /** language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
en */
        language_code?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo  implements IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo {
    
    /** keywords
required field
UTF-8 encoding
The maximum number of keywords you can specify: 1000;
The maximum number of characters in a single keyword: 250;
The keywords will be converted to lowercase format;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;
    
    /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
United Kingdom */

    location_name?: string | undefined;
    
    /** unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
2840 */

    location_code?: number | undefined;
    
    /** full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
English */

    language_name?: string | undefined;
    
    /** language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages
example:
en */

    language_code?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["tag"] = this.tag;
        return data;
    }
}