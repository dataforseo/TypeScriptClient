export interface IMerchantAmazonSellersLiveHtmlRequestInfo   {
        
        /** *unique product identifier on Amazon* **required field** you can get this value making a separate request to [the Amazon Products endpoint](/v3/merchant/amazon/products/task_post) note that there is no full list of possible values as the `asin` values is a dynamic value assigned by Amazon example: `B085RFFC9Q` learn more about the identifier in [this help center guide](https://dataforseo.com/help-center/asin-in-amazon-api) */
        asin?: string | undefined
        
        /** *full name of the location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available Amazon locations with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/locations` example: `London,England,United Kingdom` */
        location_name?: string | undefined
        
        /** *location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available Amazon locations with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/locations` example: `2840` */
        location_code?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 example: `53.476225,-2.243572,200` */
        location_coordinate?: string | undefined
        
        /** *full name of the language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available Amazon languages with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/languages` example: `English (United States)` */
        language_name?: string | undefined
        
        /** *language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`** you can receive the list of available Amazon languages with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/languages`**example:**`en_US` */
        language_code?: string | undefined
        
        /** *search engine domain* optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: *`amazon.co.uk`*, *`amazon.com.au`*, *`amazon.de`*, etc. */
        se_domain?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class MerchantAmazonSellersLiveHtmlRequestInfo  implements IMerchantAmazonSellersLiveHtmlRequestInfo {

    
    /** *unique product identifier on Amazon* **required field** you can get this value making a separate request to [the Amazon Products endpoint](/v3/merchant/amazon/products/task_post) note that there is no full list of possible values as the `asin` values is a dynamic value assigned by Amazon example: `B085RFFC9Q` learn more about the identifier in [this help center guide](https://dataforseo.com/help-center/asin-in-amazon-api) */

    asin?: string | undefined;

    
    /** *full name of the location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available Amazon locations with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/locations` example: `London,England,United Kingdom` */

    location_name?: string | undefined;

    
    /** *location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available Amazon locations with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/locations` example: `2840` */

    location_code?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 example: `53.476225,-2.243572,200` */

    location_coordinate?: string | undefined;

    
    /** *full name of the language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available Amazon languages with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/languages` example: `English (United States)` */

    language_name?: string | undefined;

    
    /** *language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`** you can receive the list of available Amazon languages with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/merchant/amazon/languages`**example:**`en_US` */

    language_code?: string | undefined;

    
    /** *search engine domain* optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: *`amazon.co.uk`*, *`amazon.com.au`*, *`amazon.de`*, etc. */

    se_domain?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonSellersLiveHtmlRequestInfo) {

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

    static fromJS(data: any): MerchantAmazonSellersLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonSellersLiveHtmlRequestInfo();
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