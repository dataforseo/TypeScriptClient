import { WorkDayInfo, IWorkDayInfo } from "./WorkDayInfo";


export interface IWorkHours   {
        
        /** *work hours timetable* */
        timetable?: { [key: string]: WorkDayInfo[]; } | undefined
        
        /** *current status of the establishment* indicates whether the establishment is opened or closed */
        current_status?: string | undefined

    [key: string]: any;

    }

export class WorkHours  implements IWorkHours {

    
    /** *work hours timetable* */

    timetable?: { [key: string]: WorkDayInfo[]; } | undefined;

    
    /** *current status of the establishment* indicates whether the establishment is opened or closed */

    current_status?: string | undefined;

    [key: string]: any;


    constructor(data?: IWorkHours) {

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
            this.timetable = data["timetable"];
            this.current_status = data["current_status"];
        }
    }

    static fromJS(data: any): WorkHours {
        data = typeof data === 'object' ? data : {};


        let result = new WorkHours();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["timetable"] = this.timetable;
        data["current_status"] = this.current_status;
        return data;
    }
}