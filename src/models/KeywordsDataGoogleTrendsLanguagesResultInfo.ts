export interface IKeywordsDataGoogleTrendsLanguagesResultInfo   {
        
        /** language name */
        language_name?: string | undefined
        
        /** language code according to ISO 639-1 */
        language_code?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsLanguagesResultInfo  implements IKeywordsDataGoogleTrendsLanguagesResultInfo {

    
    /** language name */

    language_name?: string | undefined;

    
    /** language code according to ISO 639-1 */

    language_code?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsLanguagesResultInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
        }
    }

    static fromJS(data: any): KeywordsDataGoogleTrendsLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsLanguagesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        return data;
    }
}