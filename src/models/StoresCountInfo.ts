export interface IStoresCountInfo   {
        
        /** *number of stores that offer the product* */
        count?: number | undefined
        
        /** *text displayed on the Google Shopping page* */
        displayed_text?: string | undefined
        
        /** *whether the number of stores is taken from text* indicates whether the number of stores is taken from `displayed_text`; if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is `false`; if the API cannot find the number of stores in the HTML code of the page, it takes the number from the `displayed_text`; in this case, the parameter is `true` */
        count_from_text?: boolean | undefined

    [key: string]: any;

    }

export class StoresCountInfo  implements IStoresCountInfo {

    
    /** *number of stores that offer the product* */

    count?: number | undefined;

    
    /** *text displayed on the Google Shopping page* */

    displayed_text?: string | undefined;

    
    /** *whether the number of stores is taken from text* indicates whether the number of stores is taken from `displayed_text`; if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is `false`; if the API cannot find the number of stores in the HTML code of the page, it takes the number from the `displayed_text`; in this case, the parameter is `true` */

    count_from_text?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IStoresCountInfo) {

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
            this.count = data["count"];
            this.displayed_text = data["displayed_text"];
            this.count_from_text = data["count_from_text"];
        }
    }

    static fromJS(data: any): StoresCountInfo {
        data = typeof data === 'object' ? data : {};


        let result = new StoresCountInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["count"] = this.count;
        data["displayed_text"] = this.displayed_text;
        data["count_from_text"] = this.count_from_text;
        return data;
    }
}