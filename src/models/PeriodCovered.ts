export interface IPeriodCovered   {
        
        /** *date and time when the period starts* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2020-03-02 02:00:00 +00:00` */
        start_date?: string | undefined
        
        /** *date and time when the period ends* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2022-12-09 02:00:00 +00:00` */
        end_date?: string | undefined
        
        /** *period displayed in SERP* example: `Mar 2, 2020 - Dec 9, 2022` */
        displayed_date?: string | undefined

    [key: string]: any;

    }

export class PeriodCovered  implements IPeriodCovered {

    
    /** *date and time when the period starts* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2020-03-02 02:00:00 +00:00` */

    start_date?: string | undefined;

    
    /** *date and time when the period ends* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2022-12-09 02:00:00 +00:00` */

    end_date?: string | undefined;

    
    /** *period displayed in SERP* example: `Mar 2, 2020 - Dec 9, 2022` */

    displayed_date?: string | undefined;

    [key: string]: any;


    constructor(data?: IPeriodCovered) {

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
            this.start_date = data["start_date"];
            this.end_date = data["end_date"];
            this.displayed_date = data["displayed_date"];
        }
    }

    static fromJS(data: any): PeriodCovered {
        data = typeof data === 'object' ? data : {};


        let result = new PeriodCovered();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["start_date"] = this.start_date;
        data["end_date"] = this.end_date;
        data["displayed_date"] = this.displayed_date;
        return data;
    }
}