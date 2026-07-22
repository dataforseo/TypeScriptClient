export interface IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo   {
        
        /** product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint */
        asin?: string | undefined
        
        /** full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States */
        location_name?: string | undefined
        
        /** location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */
        language_name?: string | undefined
        
        /** language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */
        language_code?: string | undefined
        
        /** the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000 */
        limit?: number | undefined
        
        /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */
        ignore_synonyms?: boolean | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['keyword_data.keyword_info.search_volume','in',[100,1000]];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['ranked_serp_element.serp_item.rank_group,asc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_data.keyword_info.search_volume,desc','keyword_data.keyword_info.cpc,desc'] */
        order_by?: string[] | undefined
        
        /** offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */
        offset?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonRankedKeywordsLiveRequestInfo  implements IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo {

    
    /** product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint */

    asin?: string | undefined;

    
    /** full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States */

    location_name?: string | undefined;

    
    /** location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840 */

    location_code?: number | undefined;

    
    /** full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */

    language_name?: string | undefined;

    
    /** language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */

    language_code?: string | undefined;

    
    /** the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000 */

    limit?: number | undefined;

    
    /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */

    ignore_synonyms?: boolean | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['keyword_data.keyword_info.search_volume','in',[100,1000]];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['ranked_serp_element.serp_item.rank_group,asc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_data.keyword_info.search_volume,desc','keyword_data.keyword_info.cpc,desc'] */

    order_by?: string[] | undefined;

    
    /** offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */

    offset?: number | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.limit = data["limit"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonRankedKeywordsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonRankedKeywordsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["limit"] = this.limit;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}