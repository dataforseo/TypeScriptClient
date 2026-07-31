export interface IMerchantErrorsResultInfo   {
        
        /** *task identifier* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */
        id?: string | undefined
        
        /** *date and time when an error occurred* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *corresponding API function* */
        function?: string | undefined
        
        /** *error code* */
        error_code?: number | undefined
        
        /** *error message or error URL* error message [(see full list)](https://docs.dataforseo.com/v3/appendix/errors/) or URL that caused an error */
        error_message?: string | undefined
        
        /** *URL that caused an error* URL you used for making an API call or pingback/postback URL */
        http_url?: string | undefined
        
        /** *HTTP method* */
        http_method?: string | undefined
        
        /** *HTTP status code* */
        http_code?: number | undefined
        
        /** *time taken by HTTP request* for tasks set with a pingback/postback, this field will show the time it took your server to respond */
        http_time?: number | undefined
        
        /** *HTTP response* server response */
        http_response?: string | undefined

    [key: string]: any;

    }

export class MerchantErrorsResultInfo  implements IMerchantErrorsResultInfo {

    
    /** *task identifier* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */

    id?: string | undefined;

    
    /** *date and time when an error occurred* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *corresponding API function* */

    function?: string | undefined;

    
    /** *error code* */

    error_code?: number | undefined;

    
    /** *error message or error URL* error message [(see full list)](https://docs.dataforseo.com/v3/appendix/errors/) or URL that caused an error */

    error_message?: string | undefined;

    
    /** *URL that caused an error* URL you used for making an API call or pingback/postback URL */

    http_url?: string | undefined;

    
    /** *HTTP method* */

    http_method?: string | undefined;

    
    /** *HTTP status code* */

    http_code?: number | undefined;

    
    /** *time taken by HTTP request* for tasks set with a pingback/postback, this field will show the time it took your server to respond */

    http_time?: number | undefined;

    
    /** *HTTP response* server response */

    http_response?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantErrorsResultInfo) {

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
            this.id = data["id"];
            this.datetime = data["datetime"];
            this.function = data["function"];
            this.error_code = data["error_code"];
            this.error_message = data["error_message"];
            this.http_url = data["http_url"];
            this.http_method = data["http_method"];
            this.http_code = data["http_code"];
            this.http_time = data["http_time"];
            this.http_response = data["http_response"];
        }
    }

    static fromJS(data: any): MerchantErrorsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantErrorsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["datetime"] = this.datetime;
        data["function"] = this.function;
        data["error_code"] = this.error_code;
        data["error_message"] = this.error_message;
        data["http_url"] = this.http_url;
        data["http_method"] = this.http_method;
        data["http_code"] = this.http_code;
        data["http_time"] = this.http_time;
        data["http_response"] = this.http_response;
        return data;
    }
}