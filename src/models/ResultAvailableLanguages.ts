export interface IResultAvailableLanguages   {
        
        /** *supported LLM platforms* contains the sources of data supported for a specific location and language combination only `google` and `chat_gpt` are currently available */
        available_platforms?: string[] | undefined
        
        /** *language name* */
        language_name?: string | undefined
        
        /** *language code according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)* */
        language_code?: string | undefined
        
        /** *number of LLM responses* the number of LLM responses available in the database for the certain location and language parameters */
        responses_count?: number | undefined

    [key: string]: any;

    }

export class ResultAvailableLanguages  implements IResultAvailableLanguages {

    
    /** *supported LLM platforms* contains the sources of data supported for a specific location and language combination only `google` and `chat_gpt` are currently available */

    available_platforms?: string[] | undefined;

    
    /** *language name* */

    language_name?: string | undefined;

    
    /** *language code according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)* */

    language_code?: string | undefined;

    
    /** *number of LLM responses* the number of LLM responses available in the database for the certain location and language parameters */

    responses_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IResultAvailableLanguages) {

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
            this.available_platforms = data["available_platforms"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.responses_count = data["responses_count"];
        }
    }

    static fromJS(data: any): ResultAvailableLanguages {
        data = typeof data === 'object' ? data : {};


        let result = new ResultAvailableLanguages();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["available_platforms"] = this.available_platforms;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["responses_count"] = this.responses_count;
        return data;
    }
}