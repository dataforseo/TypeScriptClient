import { WorkHours, IWorkHours } from "./WorkHours";


export interface IBusinessWorkHoursInfo   {
        
        /** *open hours* information about work hours of the local establishment */
        work_hours?: WorkHours | undefined

    [key: string]: any;

    }

export class BusinessWorkHoursInfo  implements IBusinessWorkHoursInfo {

    
    /** *open hours* information about work hours of the local establishment */

    work_hours?: WorkHours | undefined;

    [key: string]: any;


    constructor(data?: IBusinessWorkHoursInfo) {

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
            this.work_hours = data["work_hours"] ? WorkHours.fromJS(data["work_hours"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BusinessWorkHoursInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessWorkHoursInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["work_hours"] = this.work_hours ? WorkHours.fromJS(this.work_hours)?.toJSON() : <any>undefined;
        return data;
    }
}