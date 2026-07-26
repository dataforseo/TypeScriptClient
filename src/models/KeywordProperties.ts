export interface IKeywordProperties   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** main keyword in a group contains the main keyword in a group determined by the synonym clustering algorithm if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword */
        core_keyword?: string | undefined
        
        /** the algorithm used to identify synonyms possible values: keyword_metrics – indicates the algorithm based on keyword_info parameters text_processing – indicates the text-based algorithm if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword */
        synonym_clustering_algorithm?: string | undefined
        
        /** difficulty of ranking in the first top-10 organic results for a keyword indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100; calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP; learn more about the metric in this help center guide */
        keyword_difficulty?: number | undefined
        
        /** detected language of the keyword indicates the language of the keyword as identified by our system */
        detected_language?: string | undefined
        
        /** detected language of the keyword is different from the set language if true, the language set in the request does not match the language determined by our system for a given keyword */
        is_another_language?: boolean | undefined
        
        /** number of words in the keyword indicates how many words the keyword consists of */
        words_count?: number | undefined

    [key: string]: any;

    }

export class KeywordProperties  implements IKeywordProperties {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** main keyword in a group contains the main keyword in a group determined by the synonym clustering algorithm if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword */

    core_keyword?: string | undefined;

    
    /** the algorithm used to identify synonyms possible values: keyword_metrics – indicates the algorithm based on keyword_info parameters text_processing – indicates the text-based algorithm if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword */

    synonym_clustering_algorithm?: string | undefined;

    
    /** difficulty of ranking in the first top-10 organic results for a keyword indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100; calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP; learn more about the metric in this help center guide */

    keyword_difficulty?: number | undefined;

    
    /** detected language of the keyword indicates the language of the keyword as identified by our system */

    detected_language?: string | undefined;

    
    /** detected language of the keyword is different from the set language if true, the language set in the request does not match the language determined by our system for a given keyword */

    is_another_language?: boolean | undefined;

    
    /** number of words in the keyword indicates how many words the keyword consists of */

    words_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IKeywordProperties) {

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
            this.se_type = data["se_type"];
            this.core_keyword = data["core_keyword"];
            this.synonym_clustering_algorithm = data["synonym_clustering_algorithm"];
            this.keyword_difficulty = data["keyword_difficulty"];
            this.detected_language = data["detected_language"];
            this.is_another_language = data["is_another_language"];
            this.words_count = data["words_count"];
        }
    }

    static fromJS(data: any): KeywordProperties {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordProperties();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["core_keyword"] = this.core_keyword;
        data["synonym_clustering_algorithm"] = this.synonym_clustering_algorithm;
        data["keyword_difficulty"] = this.keyword_difficulty;
        data["detected_language"] = this.detected_language;
        data["is_another_language"] = this.is_another_language;
        data["words_count"] = this.words_count;
        return data;
    }
}