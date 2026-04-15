export interface ISerpGoogleDatasetSearchLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine language codeoptional field if you don't specify language_nameif you use this field, you don't need to specify language_namepossible value:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 20max value: 700Your account will be billed per each SERP containing up to 20 results;Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. */
        depth?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */
        device?: string | undefined
        
        /** full name of search engine languageoptional fieldif you use this field, you don't need to specify language_codepossible value:English */
        language_name?: string | undefined
        
        /** device operating systemoptional fieldchoose from the following values: windows, macosdefault value: windows */
        os?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** last time the dataset was updatedoptional fieldpossible values: 1m, 1y, 3y */
        last_updated?: string | undefined
        
        /** file formats of the datasetoptional fieldpossible values: other, archive, text, image, document, tabular */
        file_formats?: string[] | undefined
        
        /** usage rights of the datasetoptional fieldpossible values: commercial, noncommercial */
        usage_rights?: string | undefined
        
        /** indicates whether displayed datasets are freeoptional fieldpossible values: true, false */
        is_free?: boolean | undefined
        
        /** dataset topicsoptional fieldpossible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */
        topics?: string[] | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchLiveAdvancedRequestInfo  implements ISerpGoogleDatasetSearchLiveAdvancedRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine language codeoptional field if you don't specify language_nameif you use this field, you don't need to specify language_namepossible value:en */

    language_code?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 20max value: 700Your account will be billed per each SERP containing up to 20 results;Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. */

    depth?: number | undefined;
    
    /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */

    device?: string | undefined;
    
    /** full name of search engine languageoptional fieldif you use this field, you don't need to specify language_codepossible value:English */

    language_name?: string | undefined;
    
    /** device operating systemoptional fieldchoose from the following values: windows, macosdefault value: windows */

    os?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** last time the dataset was updatedoptional fieldpossible values: 1m, 1y, 3y */

    last_updated?: string | undefined;
    
    /** file formats of the datasetoptional fieldpossible values: other, archive, text, image, document, tabular */

    file_formats?: string[] | undefined;
    
    /** usage rights of the datasetoptional fieldpossible values: commercial, noncommercial */

    usage_rights?: string | undefined;
    
    /** indicates whether displayed datasets are freeoptional fieldpossible values: true, false */

    is_free?: boolean | undefined;
    
    /** dataset topicsoptional fieldpossible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */

    topics?: string[] | undefined;

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
            this.language_code = data["language_code"];
            this.depth = data["depth"];
            this.device = data["device"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.last_updated = data["last_updated"];
            this.file_formats = data["file_formats"];
            this.usage_rights = data["usage_rights"];
            this.is_free = data["is_free"];
            this.topics = data["topics"];
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
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["device"] = this.device;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["last_updated"] = this.last_updated;
        data["file_formats"] = this.file_formats;
        data["usage_rights"] = this.usage_rights;
        data["is_free"] = this.is_free;
        data["topics"] = this.topics;
        return data;
    }
}