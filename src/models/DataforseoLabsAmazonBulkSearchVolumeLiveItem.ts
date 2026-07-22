export interface IDataforseoLabsAmazonBulkSearchVolumeLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** keyword in a POST array */
        keyword?: string | undefined
        
        /** average monthly search volume rate
represents the (approximate) number of searches for the returned keyword on Amazon */
        search_volume?: number | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonBulkSearchVolumeLiveItem  implements IDataforseoLabsAmazonBulkSearchVolumeLiveItem {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** keyword in a POST array */

    keyword?: string | undefined;

    
    /** average monthly search volume rate
represents the (approximate) number of searches for the returned keyword on Amazon */

    search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonBulkSearchVolumeLiveItem) {

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
            this.se_type = data["se_type"];
            this.keyword = data["keyword"];
            this.search_volume = data["search_volume"];
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonBulkSearchVolumeLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonBulkSearchVolumeLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword"] = this.keyword;
        data["search_volume"] = this.search_volume;
        return data;
    }
}