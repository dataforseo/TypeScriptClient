export interface IOnPageKeywordDensityItem   {
        
        /** returned keyword */
        keyword?: string | undefined
        
        /** keyword frequency number of times the keyword appears on the website (or webpage if you specified a url) */
        frequency?: number | undefined
        
        /** keyword density calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website */
        density?: number | undefined

    [key: string]: any;

    }

export class OnPageKeywordDensityItem  implements IOnPageKeywordDensityItem {

    
    /** returned keyword */

    keyword?: string | undefined;

    
    /** keyword frequency number of times the keyword appears on the website (or webpage if you specified a url) */

    frequency?: number | undefined;

    
    /** keyword density calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website */

    density?: number | undefined;

    [key: string]: any;


    constructor(data?: IOnPageKeywordDensityItem) {

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
            this.frequency = data["frequency"];
            this.density = data["density"];
        }
    }

    static fromJS(data: any): OnPageKeywordDensityItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageKeywordDensityItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["frequency"] = this.frequency;
        data["density"] = this.density;
        return data;
    }
}