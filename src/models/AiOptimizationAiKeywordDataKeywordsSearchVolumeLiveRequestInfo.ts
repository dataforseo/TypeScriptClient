export interface IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo   {
        
        /** keywordsrequired fieldUTF-8 encodingThe maximum number of keywords you can specify: 1000;The maximum number of characters in a single keyword: 250;The keywords will be converted to lowercase format;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of the locationrequired field if you don't specify location_codeNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_name by making a separate request to thehttps://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:United Kingdom */
        location_name?: string | undefined
        
        /** unique location identifierrequired field if you don't specify location_nameNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:2840 */
        location_code?: number | undefined
        
        /** full name of the languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with their language_name by making a separate request to thehttps://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:English */
        language_name?: string | undefined
        
        /** language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code by making a separate request to thehttps://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:en */
        language_code?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo  implements IAiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo {
    
    /** keywordsrequired fieldUTF-8 encodingThe maximum number of keywords you can specify: 1000;The maximum number of characters in a single keyword: 250;The keywords will be converted to lowercase format;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;
    
    /** full name of the locationrequired field if you don't specify location_codeNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_name by making a separate request to thehttps://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:United Kingdom */

    location_name?: string | undefined;
    
    /** unique location identifierrequired field if you don't specify location_nameNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:2840 */

    location_code?: number | undefined;
    
    /** full name of the languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with their language_name by making a separate request to thehttps://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:English */

    language_name?: string | undefined;
    
    /** language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code by making a separate request to thehttps://api.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languagesexample:en */

    language_code?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

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