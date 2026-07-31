export interface IMerchantGoogleSellersTaskPostRequestInfo   {
        
        /** *unique product identifier on Google Shopping* **required field if `data_docid` or `gid` is not specified** we recommend specifying `product_id` together with `data_docid` and `gid` for optimal results; you can get this value for a certain product by making a separate request to [the Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `4485466949985702538` learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */
        product_id?: string | undefined
        
        /** *unique identifier of the SERP data element* **required field if `product_id` or `gid` is not specified** we recommend specifying `data_docid` together with `product_id` and `gid` for optimal results; you can get this value for a certain element by making a separate request to [the Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `13071766526042404278` */
        data_docid?: string | undefined
        
        /** *global product identifier on Google Shopping* **required field if `product_id` or `data_docid` is not specified** we recommend specifying `gid` together with `product_id` and `data_docid` for optimal results; you can get this value for a certain product by making a separate request to [the Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `4702526954592161872` learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) */
        gid?: string | undefined
        
        /** *product variant filter  on Google Shopping* optional field parameter in Google Shopping URL, setting optional product variant filtration; example: `Eg4iBWNvbG9yKgV3aGl0ZRISIgxwYWNrYWdlIHNpemUqAjE0EgoiBHNpemUqAnhs` */
        pvf?: string | undefined
        
        /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priorityYou will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/merchant/google-shopping-api) page. */
        priority?: number | undefined
        
        /** *full name of the location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available Google Shopping locations with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/locations` example: `London,England,United Kingdom` */
        location_name?: string | undefined
        
        /** *location code* **required field if you don't specify** `location_name`_or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available Google Shopping locations with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/locations` example: `2840` */
        location_code?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name`_or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 example: `53.476225,-2.243572,200` */
        location_coordinate?: string | undefined
        
        /** *full name of the language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available Google Shopping languages with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/languages` example: `English` */
        language_name?: string | undefined
        
        /** *language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`** you can receive the list of available Google Shopping languages with their `language_code`_by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/languages`**example:**`en` */
        language_code?: string | undefined
        
        /** *parsing depth* optional field number of results to be retrieved from Google Shopping SERP default value: `10` max value: `200` **your account will be billed per each SERP containing up to 10 results;**  setting depth above 10 may result in additional charges [if the search engine returns more than 10 results](https://dataforseo.com/help-center/how-many-results-scraped); the cost can be calculated on the [Pricing](https://dataforseo.com/pricing/merchant/google-shopping-api) page */
        depth?: number | undefined
        
        /** *search engine domain* optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: *`google.co.uk`*, *`google.com.au`*, *`google.de`*, etc. */
        se_domain?: string | undefined
        
        /** *include 'buy on Google' shops* optional field if set to `true`, the response will contain the list of sellers that allow to purchase a given product directly on Google Note: if set to `true`, the cost of a task will be doubled */
        get_shops_on_google?: boolean | undefined
        
        /** *object containing additional url parameters* you can get additional information about the product by using the `'additional_specifications` object, which you can get by making a separate request to the [Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `'additional_specifications': {'eto': '16157121050167572763_0'}` */
        additional_specifications?: { [key: string]: string; } | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined
        
        /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        postback_url?: string | undefined
        
        postback_data?: string | undefined
        
        /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class MerchantGoogleSellersTaskPostRequestInfo  implements IMerchantGoogleSellersTaskPostRequestInfo {

    
    /** *unique product identifier on Google Shopping* **required field if `data_docid` or `gid` is not specified** we recommend specifying `product_id` together with `data_docid` and `gid` for optimal results; you can get this value for a certain product by making a separate request to [the Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `4485466949985702538` learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */

    product_id?: string | undefined;

    
    /** *unique identifier of the SERP data element* **required field if `product_id` or `gid` is not specified** we recommend specifying `data_docid` together with `product_id` and `gid` for optimal results; you can get this value for a certain element by making a separate request to [the Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `13071766526042404278` */

    data_docid?: string | undefined;

    
    /** *global product identifier on Google Shopping* **required field if `product_id` or `data_docid` is not specified** we recommend specifying `gid` together with `product_id` and `data_docid` for optimal results; you can get this value for a certain product by making a separate request to [the Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `4702526954592161872` learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) */

    gid?: string | undefined;

    
    /** *product variant filter  on Google Shopping* optional field parameter in Google Shopping URL, setting optional product variant filtration; example: `Eg4iBWNvbG9yKgV3aGl0ZRISIgxwYWNrYWdlIHNpemUqAjE0EgoiBHNpemUqAnhs` */

    pvf?: string | undefined;

    
    /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priorityYou will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/merchant/google-shopping-api) page. */

    priority?: number | undefined;

    
    /** *full name of the location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available Google Shopping locations with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/locations` example: `London,England,United Kingdom` */

    location_name?: string | undefined;

    
    /** *location code* **required field if you don't specify** `location_name`_or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available Google Shopping locations with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/locations` example: `2840` */

    location_code?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name`_or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 example: `53.476225,-2.243572,200` */

    location_coordinate?: string | undefined;

    
    /** *full name of the language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available Google Shopping languages with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/languages` example: `English` */

    language_name?: string | undefined;

    
    /** *language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`** you can receive the list of available Google Shopping languages with their `language_code`_by making a separate request to the `https://api.dataforseo.com/v3/merchant/google/languages`**example:**`en` */

    language_code?: string | undefined;

    
    /** *parsing depth* optional field number of results to be retrieved from Google Shopping SERP default value: `10` max value: `200` **your account will be billed per each SERP containing up to 10 results;**  setting depth above 10 may result in additional charges [if the search engine returns more than 10 results](https://dataforseo.com/help-center/how-many-results-scraped); the cost can be calculated on the [Pricing](https://dataforseo.com/pricing/merchant/google-shopping-api) page */

    depth?: number | undefined;

    
    /** *search engine domain* optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: *`google.co.uk`*, *`google.com.au`*, *`google.de`*, etc. */

    se_domain?: string | undefined;

    
    /** *include 'buy on Google' shops* optional field if set to `true`, the response will contain the list of sellers that allow to purchase a given product directly on Google Note: if set to `true`, the cost of a task will be doubled */

    get_shops_on_google?: boolean | undefined;

    
    /** *object containing additional url parameters* you can get additional information about the product by using the `'additional_specifications` object, which you can get by making a separate request to the [Google Shopping Products endpoint](/v3/merchant/google/products/task_post) example: `'additional_specifications': {'eto': '16157121050167572763_0'}` */

    additional_specifications?: { [key: string]: string; } | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    
    /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    postback_url?: string | undefined;

    postback_data?: string | undefined;

    
    /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleSellersTaskPostRequestInfo) {

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
            this.product_id = data["product_id"];
            this.data_docid = data["data_docid"];
            this.gid = data["gid"];
            this.pvf = data["pvf"];
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.depth = data["depth"];
            this.se_domain = data["se_domain"];
            this.get_shops_on_google = data["get_shops_on_google"];
            this.additional_specifications = data["additional_specifications"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): MerchantGoogleSellersTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleSellersTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["product_id"] = this.product_id;
        data["data_docid"] = this.data_docid;
        data["gid"] = this.gid;
        data["pvf"] = this.pvf;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["se_domain"] = this.se_domain;
        data["get_shops_on_google"] = this.get_shops_on_google;
        data["additional_specifications"] = this.additional_specifications;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}