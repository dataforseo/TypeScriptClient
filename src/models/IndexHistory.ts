export interface IIndexHistory   {
        
        /** date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01 */
        date?: string | undefined
        
        /** total number of backlinks our database contained on the given date */
        total_backlinks?: number | undefined
        
        /** total number of pages our database contained on the given date */
        total_pages?: number | undefined

    [key: string]: any;

    }

export class IndexHistory  implements IIndexHistory {

    
    /** date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01 */

    date?: string | undefined;

    
    /** total number of backlinks our database contained on the given date */

    total_backlinks?: number | undefined;

    
    /** total number of pages our database contained on the given date */

    total_pages?: number | undefined;

    [key: string]: any;


    constructor(data?: IIndexHistory) {

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
            this.date = data["date"];
            this.total_backlinks = data["total_backlinks"];
            this.total_pages = data["total_pages"];
        }
    }

    static fromJS(data: any): IndexHistory {
        data = typeof data === 'object' ? data : {};


        let result = new IndexHistory();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date"] = this.date;
        data["total_backlinks"] = this.total_backlinks;
        data["total_pages"] = this.total_pages;
        return data;
    }
}