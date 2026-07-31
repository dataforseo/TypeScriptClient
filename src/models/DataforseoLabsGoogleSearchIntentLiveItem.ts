import { KeywordIntentInfo, IKeywordIntentInfo } from "./KeywordIntentInfo";


export interface IDataforseoLabsGoogleSearchIntentLiveItem   {
        
        /** *target keyword in a POST array* */
        keyword?: string | undefined
        
        /** *search intent data relevant for the specified keyword* */
        keyword_intent?: KeywordIntentInfo | undefined
        
        /** *contains objects with other possible search intents for the specified keyword* */
        secondary_keyword_intents?: KeywordIntentInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSearchIntentLiveItem  implements IDataforseoLabsGoogleSearchIntentLiveItem {

    
    /** *target keyword in a POST array* */

    keyword?: string | undefined;

    
    /** *search intent data relevant for the specified keyword* */

    keyword_intent?: KeywordIntentInfo | undefined;

    
    /** *contains objects with other possible search intents for the specified keyword* */

    secondary_keyword_intents?: KeywordIntentInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSearchIntentLiveItem) {

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
            this.keyword_intent = data["keyword_intent"] ? KeywordIntentInfo.fromJS(data["keyword_intent"]) : <any>undefined;
            if (Array.isArray(data["secondary_keyword_intents"])) {
                this.secondary_keyword_intents = [];
                for (let item of data["secondary_keyword_intents"]) {
                    this.secondary_keyword_intents.push(KeywordIntentInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSearchIntentLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSearchIntentLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["keyword_intent"] = this.keyword_intent ? KeywordIntentInfo.fromJS(this.keyword_intent)?.toJSON() : <any>undefined;
        data["secondary_keyword_intents"] = null;
        if (Array.isArray(this.secondary_keyword_intents)) {
            data["secondary_keyword_intents"] = [];
            for (let item of this.secondary_keyword_intents) {
                if (item && typeof item.toJSON === "function") {
                    data["secondary_keyword_intents"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}