export interface IDomainAnalyticsTechnologiesLanguagesResultInfo   {
        
        /** *language name* */
        language_name?: string | undefined
        
        /** *language code according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)* */
        language_code?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesLanguagesResultInfo  implements IDomainAnalyticsTechnologiesLanguagesResultInfo {

    
    /** *language name* */

    language_name?: string | undefined;

    
    /** *language code according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)* */

    language_code?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesLanguagesResultInfo) {

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

    static fromJS(data: any): DomainAnalyticsTechnologiesLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesLanguagesResultInfo();
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