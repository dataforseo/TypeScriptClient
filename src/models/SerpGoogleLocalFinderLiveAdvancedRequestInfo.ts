export interface ISerpGoogleLocalFinderLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value for desktop: 20max value for desktop: 100
default value for mobile: 10max value for mobile: 100
Your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;Setting depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automaticallyThe cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderLiveAdvancedRequestInfo  implements ISerpGoogleLocalFinderLiveAdvancedRequestInfo {

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locationsexample:2840 */

    location_code?: number | undefined;

    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languagesexample:en */

    language_code?: string | undefined;

    
    /** parsing depthoptional fieldnumber of results in SERPdefault value for desktop: 20max value for desktop: 100
default value for mobile: 10max value for mobile: 100
Your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;Setting depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automaticallyThe cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderLiveAdvancedRequestInfo) {

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
            this.device = data["device"];
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["device"] = this.device;
        return data;
    }
}