export interface IDataforseoLabsStatusInfo   {
        
        /** *update date of the Google endpoints* indicates the last date when the Google endpoints of DataForSEO Labs API were updated; example: `2022-05-16` */
        date_update?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsStatusInfo  implements IDataforseoLabsStatusInfo {

    
    /** *update date of the Google endpoints* indicates the last date when the Google endpoints of DataForSEO Labs API were updated; example: `2022-05-16` */

    date_update?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsStatusInfo) {

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
            this.date_update = data["date_update"];
        }
    }

    static fromJS(data: any): DataforseoLabsStatusInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsStatusInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date_update"] = this.date_update;
        return data;
    }
}