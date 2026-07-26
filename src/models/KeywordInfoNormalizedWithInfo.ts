import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";


export interface IKeywordInfoNormalizedWithInfo   {
        
        /** date and time when the dataset was updated in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined
        
        /** current search volume rate of a keyword */
        search_volume?: number | undefined
        
        /** keyword info is normalized if true, values are normalized with Bing data */
        is_normalized?: boolean | undefined
        
        /** monthly search volume rates array of objects with search volume rates in a certain month of a year */
        monthly_searches?: MonthlySearchesInfo[] | undefined

    [key: string]: any;

    }

export class KeywordInfoNormalizedWithInfo  implements IKeywordInfoNormalizedWithInfo {

    
    /** date and time when the dataset was updated in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    
    /** current search volume rate of a keyword */

    search_volume?: number | undefined;

    
    /** keyword info is normalized if true, values are normalized with Bing data */

    is_normalized?: boolean | undefined;

    
    /** monthly search volume rates array of objects with search volume rates in a certain month of a year */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordInfoNormalizedWithInfo) {

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
            this.last_updated_time = data["last_updated_time"];
            this.search_volume = data["search_volume"];
            this.is_normalized = data["is_normalized"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordInfoNormalizedWithInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordInfoNormalizedWithInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["last_updated_time"] = this.last_updated_time;
        data["search_volume"] = this.search_volume;
        data["is_normalized"] = this.is_normalized;
        data["monthly_searches"] = null;
        if (Array.isArray(this.monthly_searches)) {
            data["monthly_searches"] = [];
            for (let item of this.monthly_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["monthly_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}