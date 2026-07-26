export interface IDataforseoLabsGoogleCategoriesForKeywordsLiveItem   {
        
        /** keyword in a POST array */
        keyword?: string | undefined
        
        /** product and service categories you can download the full list of possible categories */
        categories?: number[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleCategoriesForKeywordsLiveItem  implements IDataforseoLabsGoogleCategoriesForKeywordsLiveItem {

    
    /** keyword in a POST array */

    keyword?: string | undefined;

    
    /** product and service categories you can download the full list of possible categories */

    categories?: number[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCategoriesForKeywordsLiveItem) {

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
            this.categories = data["categories"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCategoriesForKeywordsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCategoriesForKeywordsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["categories"] = this.categories;
        return data;
    }
}