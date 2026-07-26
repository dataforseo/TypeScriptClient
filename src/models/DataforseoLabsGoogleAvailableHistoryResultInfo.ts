export interface IDataforseoLabsGoogleAvailableHistoryResultInfo   {
        
        /** available date indicates the date of the range available for setting in the Domain Metrics by Categories endpoint example: 2022-05-16 */
        date?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleAvailableHistoryResultInfo  implements IDataforseoLabsGoogleAvailableHistoryResultInfo {

    
    /** available date indicates the date of the range available for setting in the Domain Metrics by Categories endpoint example: 2022-05-16 */

    date?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleAvailableHistoryResultInfo) {

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
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleAvailableHistoryResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleAvailableHistoryResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["date"] = this.date;
        return data;
    }
}