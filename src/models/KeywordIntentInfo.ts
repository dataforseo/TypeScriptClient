export interface IKeywordIntentInfo   {
        
        /** search intent name
possible values: informational, navigational, commercial, transactional */
        label?: string | undefined
        
        /** search intent probability
1 indicates the highest probability */
        probability?: number | undefined

    [key: string]: any;

    }

export class KeywordIntentInfo  implements IKeywordIntentInfo {

    
    /** search intent name
possible values: informational, navigational, commercial, transactional */

    label?: string | undefined;

    
    /** search intent probability
1 indicates the highest probability */

    probability?: number | undefined;

    [key: string]: any;


    constructor(data?: IKeywordIntentInfo) {

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
            this.label = data["label"];
            this.probability = data["probability"];
        }
    }

    static fromJS(data: any): KeywordIntentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordIntentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["label"] = this.label;
        data["probability"] = this.probability;
        return data;
    }
}