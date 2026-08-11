export interface ISearchVolumeHistoryItemInfo   {
        
        /** *year* */
        year?: number | undefined
        
        /** *month* */
        month?: number | undefined
        
        /** *day of the month* */
        day?: number | undefined
        
        /** *search volume rate* */
        search_volume?: number | undefined

    [key: string]: any;

    }

export class SearchVolumeHistoryItemInfo  implements ISearchVolumeHistoryItemInfo {

    
    /** *year* */

    year?: number | undefined;

    
    /** *month* */

    month?: number | undefined;

    
    /** *day of the month* */

    day?: number | undefined;

    
    /** *search volume rate* */

    search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: ISearchVolumeHistoryItemInfo) {

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
            this.day = data["day"];
            this.search_volume = data["search_volume"];
        }
    }

    static fromJS(data: any): SearchVolumeHistoryItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SearchVolumeHistoryItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["year"] = this.year;
        data["month"] = this.month;
        data["day"] = this.day;
        data["search_volume"] = this.search_volume;
        return data;
    }
}