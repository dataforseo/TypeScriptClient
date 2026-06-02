export interface IAiOptimizationGeminiLlmScraperLiveHtmlRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 2000 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locationsexample:United States */
        location_name?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locationsexample:2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languagesexample:English */
        language_name?: string | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languagesexample:enn */
        language_code?: string | undefined
        
        /** return expanded citation bar in HTML resultsoptional fieldwhen enabled, the endpoint will return HTML data from the expanded citation bar;default value: false */
        expand_citations?: boolean | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationGeminiLlmScraperLiveHtmlRequestInfo  implements IAiOptimizationGeminiLlmScraperLiveHtmlRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 2000 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locationsexample:United States */

    location_name?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languagesexample:English */

    language_name?: string | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languagesexample:enn */

    language_code?: string | undefined;
    
    /** return expanded citation bar in HTML resultsoptional fieldwhen enabled, the endpoint will return HTML data from the expanded citation bar;default value: false */

    expand_citations?: boolean | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationGeminiLlmScraperLiveHtmlRequestInfo) {

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
            this.keyword = data["keyword"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.expand_citations = data["expand_citations"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationGeminiLlmScraperLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationGeminiLlmScraperLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["expand_citations"] = this.expand_citations;
        data["tag"] = this.tag;
        return data;
    }
}