export interface ISpellInfo   {
        
        /** keyword obtained as a result of search engine autocorrection  the results will be provided for the corrected keyword */
        keyword?: string | undefined
        
        /** type of autocorrection  possible values:  did_you_mean, showing_results_for, no_results_found_for, including_results_for  note: Yahoo and Yandex support only the following autocorrection type:  including_results_for */
        type?: string | undefined

    [key: string]: any;

    }

export class SpellInfo  implements ISpellInfo {

    
    /** keyword obtained as a result of search engine autocorrection  the results will be provided for the corrected keyword */

    keyword?: string | undefined;

    
    /** type of autocorrection  possible values:  did_you_mean, showing_results_for, no_results_found_for, including_results_for  note: Yahoo and Yandex support only the following autocorrection type:  including_results_for */

    type?: string | undefined;

    [key: string]: any;


    constructor(data?: ISpellInfo) {

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
            this.type = data["type"];
        }
    }

    static fromJS(data: any): SpellInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SpellInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["type"] = this.type;
        return data;
    }
}