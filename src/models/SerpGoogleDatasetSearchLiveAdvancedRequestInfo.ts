export interface ISerpGoogleDatasetSearchLiveAdvancedRequestInfo   {
        
        /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English */
        language_name?: string | undefined
        
        /** search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en */
        language_code?: string | undefined
        
        /** device type
optional field
possible value: desktop */
        device?: string | undefined
        
        /** device operating system
optional field
choose from the following values: windows, macos
default value: windows */
        os?: string | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Your account will be billed per each SERP containing up to 20 results;
Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;
If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. */
        depth?: number | undefined
        
        /** last time the dataset was updated
optional field
possible values: 1m, 1y, 3y */
        last_updated?: string | undefined
        
        /** file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular */
        file_formats?: string[] | undefined
        
        /** usage rights of the dataset
optional field
possible values: commercial, noncommercial */
        usage_rights?: string | undefined
        
        /** indicates whether displayed datasets are free
optional field
possible values: true, false */
        is_free?: boolean | undefined
        
        /** dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */
        topics?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchLiveAdvancedRequestInfo  implements ISerpGoogleDatasetSearchLiveAdvancedRequestInfo {
    
    /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English */

    language_name?: string | undefined;
    
    /** search engine language code
optional field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
possible value:
en */

    language_code?: string | undefined;
    
    /** device type
optional field
possible value: desktop */

    device?: string | undefined;
    
    /** device operating system
optional field
choose from the following values: windows, macos
default value: windows */

    os?: string | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Your account will be billed per each SERP containing up to 20 results;
Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;
If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. */

    depth?: number | undefined;
    
    /** last time the dataset was updated
optional field
possible values: 1m, 1y, 3y */

    last_updated?: string | undefined;
    
    /** file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular */

    file_formats?: string[] | undefined;
    
    /** usage rights of the dataset
optional field
possible values: commercial, noncommercial */

    usage_rights?: string | undefined;
    
    /** indicates whether displayed datasets are free
optional field
possible values: true, false */

    is_free?: boolean | undefined;
    
    /** dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */

    topics?: string[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetSearchLiveAdvancedRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.depth = data["depth"];
            this.last_updated = data["last_updated"];
            this.file_formats = data["file_formats"];
            this.usage_rights = data["usage_rights"];
            this.is_free = data["is_free"];
            this.topics = data["topics"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpGoogleDatasetSearchLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetSearchLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["depth"] = this.depth;
        data["last_updated"] = this.last_updated;
        data["file_formats"] = this.file_formats;
        data["usage_rights"] = this.usage_rights;
        data["is_free"] = this.is_free;
        data["topics"] = this.topics;
        data["tag"] = this.tag;
        return data;
    }
}