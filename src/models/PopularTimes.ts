import { PopularWorkTimeInfo, IPopularWorkTimeInfo } from "./PopularWorkTimeInfo";


export interface IPopularTimes   {
        
        /** popular hours
information about busy hours of the local establishment on each day of the week */
        popular_times_by_days?: { [key: string]: PopularWorkTimeInfo[]; } | undefined

    [key: string]: any;

    }

export class PopularTimes  implements IPopularTimes {

    
    /** popular hours
information about busy hours of the local establishment on each day of the week */

    popular_times_by_days?: { [key: string]: PopularWorkTimeInfo[]; } | undefined;

    [key: string]: any;


    constructor(data?: IPopularTimes) {

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
            this.popular_times_by_days = data["popular_times_by_days"];
        }
    }

    static fromJS(data: any): PopularTimes {
        data = typeof data === 'object' ? data : {};


        let result = new PopularTimes();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["popular_times_by_days"] = this.popular_times_by_days;
        return data;
    }
}