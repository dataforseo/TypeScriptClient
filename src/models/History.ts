import { KeywordInfo, IKeywordInfo } from "./KeywordInfo";


export interface IHistory   {
        
        /** year */
        year?: number | undefined
        
        /** month */
        month?: number | undefined
        
        /** historical data for the keyword */
        keyword_info?: KeywordInfo | undefined

    [key: string]: any;

    }

export class History  implements IHistory {

    
    /** year */

    year?: number | undefined;

    
    /** month */

    month?: number | undefined;

    
    /** historical data for the keyword */

    keyword_info?: KeywordInfo | undefined;

    [key: string]: any;


    constructor(data?: IHistory) {

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
            this.year = data["year"];
            this.month = data["month"];
            this.keyword_info = data["keyword_info"] ? KeywordInfo.fromJS(data["keyword_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): History {
        data = typeof data === 'object' ? data : {};


        let result = new History();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["year"] = this.year;
        data["month"] = this.month;
        data["keyword_info"] = this.keyword_info ? KeywordInfo.fromJS(this.keyword_info)?.toJSON() : <any>undefined;
        return data;
    }
}