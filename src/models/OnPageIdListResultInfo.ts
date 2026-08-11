export interface IOnPageIdListResultInfo   {
        
        /** *task identifier* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */
        id?: string | undefined
        
        /** *URL of the task* URL you used for making an API call */
        url?: string | undefined
        
        /** *date and time when the task was made* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2023-01-15 12:57:46 +00:00` */
        datetime_posted?: string | undefined
        
        /** *date and time when the task was completed* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2023-01-15 12:57:46 +00:00` */
        datetime_done?: string | undefined
        
        /** *informational message of the task* you can find the full list of general informational messages [here](/v3/appendix-errors/) */
        status?: string | undefined
        
        /** *total tasks cost, USD* */
        cost?: number | undefined
        
        /** *contains parameters you specified in the POST request* */
        metadata?: { [key: string]: any; } | undefined

    [key: string]: any;

    }

export class OnPageIdListResultInfo  implements IOnPageIdListResultInfo {

    
    /** *task identifier* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */

    id?: string | undefined;

    
    /** *URL of the task* URL you used for making an API call */

    url?: string | undefined;

    
    /** *date and time when the task was made* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2023-01-15 12:57:46 +00:00` */

    datetime_posted?: string | undefined;

    
    /** *date and time when the task was completed* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2023-01-15 12:57:46 +00:00` */

    datetime_done?: string | undefined;

    
    /** *informational message of the task* you can find the full list of general informational messages [here](/v3/appendix-errors/) */

    status?: string | undefined;

    
    /** *total tasks cost, USD* */

    cost?: number | undefined;

    
    /** *contains parameters you specified in the POST request* */

    metadata?: { [key: string]: any; } | undefined;

    [key: string]: any;


    constructor(data?: IOnPageIdListResultInfo) {

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
            this.id = data["id"];
            this.url = data["url"];
            this.datetime_posted = data["datetime_posted"];
            this.datetime_done = data["datetime_done"];
            this.status = data["status"];
            this.cost = data["cost"];
            this.metadata = data["metadata"];
        }
    }

    static fromJS(data: any): OnPageIdListResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageIdListResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["url"] = this.url;
        data["datetime_posted"] = this.datetime_posted;
        data["datetime_done"] = this.datetime_done;
        data["status"] = this.status;
        data["cost"] = this.cost;
        data["metadata"] = this.metadata;
        return data;
    }
}