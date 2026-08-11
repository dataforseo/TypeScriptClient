import { HunspellMisspelledInfo, IHunspellMisspelledInfo } from "./HunspellMisspelledInfo";


export interface IHunspellInfo   {
        
        /** *spellcheck language code* */
        hunspell_language_code?: string | undefined
        
        /** *array of misspelled words* */
        misspelled?: HunspellMisspelledInfo[] | undefined

    [key: string]: any;

    }

export class HunspellInfo  implements IHunspellInfo {

    
    /** *spellcheck language code* */

    hunspell_language_code?: string | undefined;

    
    /** *array of misspelled words* */

    misspelled?: HunspellMisspelledInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IHunspellInfo) {

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
            this.hunspell_language_code = data["hunspell_language_code"];
            if (Array.isArray(data["misspelled"])) {
                this.misspelled = [];
                for (let item of data["misspelled"]) {
                    this.misspelled.push(HunspellMisspelledInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HunspellInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HunspellInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["hunspell_language_code"] = this.hunspell_language_code;
        data["misspelled"] = null;
        if (Array.isArray(this.misspelled)) {
            data["misspelled"] = [];
            for (let item of this.misspelled) {
                if (item && typeof item.toJSON === "function") {
                    data["misspelled"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}