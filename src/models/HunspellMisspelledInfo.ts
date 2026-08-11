export interface IHunspellMisspelledInfo   {
        
        /** *misspelled word* */
        word?: string | undefined

    [key: string]: any;

    }

export class HunspellMisspelledInfo  implements IHunspellMisspelledInfo {

    
    /** *misspelled word* */

    word?: string | undefined;

    [key: string]: any;


    constructor(data?: IHunspellMisspelledInfo) {

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
            this.word = data["word"];
        }
    }

    static fromJS(data: any): HunspellMisspelledInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HunspellMisspelledInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["word"] = this.word;
        return data;
    }
}