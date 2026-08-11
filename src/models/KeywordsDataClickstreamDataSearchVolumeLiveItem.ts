import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";


export interface IKeywordsDataClickstreamDataSearchVolumeLiveItem   {
        
        /** *keyword provided in the POST array* */
        keyword?: string | undefined
        
        /** *current search volume rate of a keyword* */
        search_volume?: number | undefined
        
        /** *monthly search volume rates* array of objects with search volume rates in a certain month of a year */
        monthly_searches?: MonthlySearchesInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataSearchVolumeLiveItem  implements IKeywordsDataClickstreamDataSearchVolumeLiveItem {

    
    /** *keyword provided in the POST array* */

    keyword?: string | undefined;

    
    /** *current search volume rate of a keyword* */

    search_volume?: number | undefined;

    
    /** *monthly search volume rates* array of objects with search volume rates in a certain month of a year */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataSearchVolumeLiveItem) {

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
            this.search_volume = data["search_volume"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataSearchVolumeLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataSearchVolumeLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["search_volume"] = this.search_volume;
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