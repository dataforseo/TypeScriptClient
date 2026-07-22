export interface IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo   {
        
        /** keyword
required field
UTF-8 encoding
the keywords should be specified in the lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States */
        location_name?: string | undefined
        
        /** location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */
        language_name?: string | undefined
        
        /** language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */
        language_code?: string | undefined
        
        /** keyword search depth
optional field
default value: 1;
number of the returned results depends on the value you set in this field;
you can specify a level from 0 to 4;
estimated number of keywords for each level (maximum):
0 – the keyword set in the keyword field
1 – 6 keywords
2 – 42 keywords
3 – 258 keywords
4 – 1554 keywords */
        depth?: number | undefined
        
        /** include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false */
        include_seed_keyword?: boolean | undefined
        
        /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */
        ignore_synonyms?: boolean | undefined
        
        /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
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

export class DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo  implements IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo {

    
    /** keyword
required field
UTF-8 encoding
the keywords should be specified in the lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States */

    location_name?: string | undefined;

    
    /** location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840 */

    location_code?: number | undefined;

    
    /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */

    language_name?: string | undefined;

    
    /** language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */

    language_code?: string | undefined;

    
    /** keyword search depth
optional field
default value: 1;
number of the returned results depends on the value you set in this field;
you can specify a level from 0 to 4;
estimated number of keywords for each level (maximum):
0 – the keyword set in the keyword field
1 – 6 keywords
2 – 42 keywords
3 – 258 keywords
4 – 1554 keywords */

    depth?: number | undefined;

    
    /** include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false */

    include_seed_keyword?: boolean | undefined;

    
    /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */

    ignore_synonyms?: boolean | undefined;

    
    /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
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


    constructor(data?: IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.depth = data["depth"];
            this.include_seed_keyword = data["include_seed_keyword"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["include_seed_keyword"] = this.include_seed_keyword;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}