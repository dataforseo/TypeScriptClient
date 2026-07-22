export interface ISerpGoogleDatasetSearchLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine language codeoptional field if you don't specify language_nameif you use this field, you don't need to specify language_namepossible value:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 20max value: 200
Your account will be billed per each SERP containing up to 20 results;Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. */
        depth?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */
        device?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchLiveAdvancedRequestInfo  implements ISerpGoogleDatasetSearchLiveAdvancedRequestInfo {

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** search engine language codeoptional field if you don't specify language_nameif you use this field, you don't need to specify language_namepossible value:en */

    language_code?: string | undefined;

    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 20max value: 200
Your account will be billed per each SERP containing up to 20 results;Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. */

    depth?: number | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */

    device?: string | undefined;

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
        return data;
    }
}