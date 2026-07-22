export interface ISerpSeznamLanguagesResultInfo   {
        
        /** language name */
        language_name?: string | undefined
        
        /** language code according to ISO 639-1 */
        language_code?: string | undefined

    [key: string]: any;

    }

export class SerpSeznamLanguagesResultInfo  implements ISerpSeznamLanguagesResultInfo {

    
    /** language name */

    language_name?: string | undefined;

    
    /** language code according to ISO 639-1 */

    language_code?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpSeznamLanguagesResultInfo) {

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

    static fromJS(data: any): SerpSeznamLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamLanguagesResultInfo();
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