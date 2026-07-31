export interface IEventDates   {
        
        /** *date and time when the event starts* if time zone is specified in the event, value will be returned in the UTC format: 'yyyy-mm-ddThh-mm-ss+00:00' example: `2019-11-15T12:57:46+00:00` if time zone is not specified in the event, unspecified local time will be returned in the following format: 'yyyy-mm-ddThh-mm-ss'  example: `2019-11-15T12:57:46` */
        start_datetime?: string | undefined
        
        /** *date and time when the event ends* if time zone is specified in the event, value will be returned in the UTC format: 'yyyy-mm-ddThh-mm-ss+00:00' example: `2019-11-15T12:57:46+00:00` if time zone is not specified in the event, unspecified local time will be returned in the following format: 'yyyy-mm-ddThh-mm-ss'  example: `2019-11-15T12:57:46` */
        end_datetime?: string | undefined
        
        /** *date or date range as it is displayed in SERP* */
        displayed_dates?: string | undefined

    [key: string]: any;

    }

export class EventDates  implements IEventDates {

    
    /** *date and time when the event starts* if time zone is specified in the event, value will be returned in the UTC format: 'yyyy-mm-ddThh-mm-ss+00:00' example: `2019-11-15T12:57:46+00:00` if time zone is not specified in the event, unspecified local time will be returned in the following format: 'yyyy-mm-ddThh-mm-ss'  example: `2019-11-15T12:57:46` */

    start_datetime?: string | undefined;

    
    /** *date and time when the event ends* if time zone is specified in the event, value will be returned in the UTC format: 'yyyy-mm-ddThh-mm-ss+00:00' example: `2019-11-15T12:57:46+00:00` if time zone is not specified in the event, unspecified local time will be returned in the following format: 'yyyy-mm-ddThh-mm-ss'  example: `2019-11-15T12:57:46` */

    end_datetime?: string | undefined;

    
    /** *date or date range as it is displayed in SERP* */

    displayed_dates?: string | undefined;

    [key: string]: any;


    constructor(data?: IEventDates) {

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
            this.start_datetime = data["start_datetime"];
            this.end_datetime = data["end_datetime"];
            this.displayed_dates = data["displayed_dates"];
        }
    }

    static fromJS(data: any): EventDates {
        data = typeof data === 'object' ? data : {};


        let result = new EventDates();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["start_datetime"] = this.start_datetime;
        data["end_datetime"] = this.end_datetime;
        data["displayed_dates"] = this.displayed_dates;
        return data;
    }
}