export interface ISerpGoogleEventsLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language codeoptional fieldif you use this field, you don't need to specify language_nameby default, language settings correspond to one of the local official languages of the specified locationyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200
Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically;The cost can be calculated on the Pricing page. */
        depth?: number | undefined

    [key: string]: any;

    }

export class SerpGoogleEventsLiveAdvancedRequestInfo  implements ISerpGoogleEventsLiveAdvancedRequestInfo {

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locationsexample:2840 */

    location_code?: number | undefined;

    
    /** search engine language codeoptional fieldif you use this field, you don't need to specify language_nameby default, language settings correspond to one of the local official languages of the specified locationyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languagesexample:en */

    language_code?: string | undefined;

    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200
Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleEventsLiveAdvancedRequestInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.depth = data["depth"];
        }
    }

    static fromJS(data: any): SerpGoogleEventsLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleEventsLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        return data;
    }
}