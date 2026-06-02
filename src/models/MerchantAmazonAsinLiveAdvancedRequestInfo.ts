export interface IMerchantAmazonAsinLiveAdvancedRequestInfo   {
        
        /** product IDrequired fieldunique product identifier (ASIN) in Amazonyou can receive the asin parameter by making a separate request to the Amazon Products endpoint */
        asin?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locationsexample:HA1,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations with their location_code parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/locationsexample:9045969 */
        location_code?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with their language_name parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/languagesexample:English (United Kingdom) */
        language_name?: string | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languagesexample:en_GB */
        language_code?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:amazon.com, amazon.co.uk, amazon.fr, etc. */
        se_domain?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class MerchantAmazonAsinLiveAdvancedRequestInfo  implements IMerchantAmazonAsinLiveAdvancedRequestInfo {
    
    /** product IDrequired fieldunique product identifier (ASIN) in Amazonyou can receive the asin parameter by making a separate request to the Amazon Products endpoint */

    asin?: string | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locationsexample:HA1,England,United Kingdom */

    location_name?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations with their location_code parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/locationsexample:9045969 */

    location_code?: number | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages with their language_name parameters by making a separate request to thehttps://api.dataforseo.com/v3/merchant/amazon/languagesexample:English (United Kingdom) */

    language_name?: string | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languagesexample:en_GB */

    language_code?: string | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:amazon.com, amazon.co.uk, amazon.fr, etc. */

    se_domain?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonAsinLiveAdvancedRequestInfo) {

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
            this.asin = data["asin"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.se_domain = data["se_domain"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): MerchantAmazonAsinLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonAsinLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["se_domain"] = this.se_domain;
        data["tag"] = this.tag;
        return data;
    }
}