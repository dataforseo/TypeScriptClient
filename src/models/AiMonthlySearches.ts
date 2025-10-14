export interface IAiMonthlySearches   {
        
        /** year */
        year?: number | undefined
        
        /** month */
        month?: number | undefined
        
        /** AI search volume rate in a certain month of a year
learn more about this metric here */
        ai_search_volume?: number | undefined

    [key: string]: any;

    }

export class AiMonthlySearches  implements IAiMonthlySearches {
    
    /** year */

    year?: number | undefined;
    
    /** month */

    month?: number | undefined;
    
    /** AI search volume rate in a certain month of a year
learn more about this metric here */

    ai_search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IAiMonthlySearches) {

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
            this.ai_search_volume = data["ai_search_volume"];
        }
    }

    static fromJS(data: any): AiMonthlySearches {
        data = typeof data === 'object' ? data : {};


        let result = new AiMonthlySearches();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["year"] = this.year;
        data["month"] = this.month;
        data["ai_search_volume"] = this.ai_search_volume;
        return data;
    }
}