export interface IAvailableLanguages   {
        
        /** supported sources contains the sources of data supported for a specific location and language combination only google and bing are currently available */
        available_sources?: string[] | undefined
        
        /** language name */
        language_name?: string | undefined
        
        /** language code according to ISO 639-1 */
        language_code?: string | undefined
        
        /** the number of keywords available for the given location and language */
        keywords?: number | undefined
        
        /** the number of SERP pages available for the given location and language */
        serps?: number | undefined

    [key: string]: any;

    }

export class AvailableLanguages  implements IAvailableLanguages {

    
    /** supported sources contains the sources of data supported for a specific location and language combination only google and bing are currently available */

    available_sources?: string[] | undefined;

    
    /** language name */

    language_name?: string | undefined;

    
    /** language code according to ISO 639-1 */

    language_code?: string | undefined;

    
    /** the number of keywords available for the given location and language */

    keywords?: number | undefined;

    
    /** the number of SERP pages available for the given location and language */

    serps?: number | undefined;

    [key: string]: any;


    constructor(data?: IAvailableLanguages) {

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
            this.available_sources = data["available_sources"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.keywords = data["keywords"];
            this.serps = data["serps"];
        }
    }

    static fromJS(data: any): AvailableLanguages {
        data = typeof data === 'object' ? data : {};


        let result = new AvailableLanguages();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["available_sources"] = this.available_sources;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["keywords"] = this.keywords;
        data["serps"] = this.serps;
        return data;
    }
}