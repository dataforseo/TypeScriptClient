export interface IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo   {
        
        /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; each keyword should be at least 3 characters long; the keywords will be converted to lowercase format; Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed to learn more about which symbols and characters can be used, please refer to this article learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo  implements IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo {

    
    /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; each keyword should be at least 3 characters long; the keywords will be converted to lowercase format; Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed to learn more about which symbols and characters can be used, please refer to this article learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo) {

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
            this.keywords = data["keywords"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["tag"] = this.tag;
        return data;
    }
}