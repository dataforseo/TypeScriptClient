export interface IAppDataAppleAppSearchesTasksReadyResultInfo   {
        
        /** *task identifier of the completed task* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */
        id?: string | undefined
        
        /** *search engine specified when setting the task* */
        se?: string | undefined
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *date when the task was posted (in the UTC format)* */
        date_posted?: string | undefined
        
        tag?: string | undefined
        
        /** *URL for collecting the results of the {{up_se_name}} {{normal_se_type}} task* */
        endpoint_advanced?: string | undefined
        
        /** *URL for collecting the results of the {{up_se_name}} {{normal_se_type}} HTML task* if HTML tasks are not supported in the specified endpoint, the value will be `null` */
        endpoint_html?: string | undefined

    [key: string]: any;

    }

export class AppDataAppleAppSearchesTasksReadyResultInfo  implements IAppDataAppleAppSearchesTasksReadyResultInfo {

    
    /** *task identifier of the completed task* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */

    id?: string | undefined;

    
    /** *search engine specified when setting the task* */

    se?: string | undefined;

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *date when the task was posted (in the UTC format)* */

    date_posted?: string | undefined;

    tag?: string | undefined;

    
    /** *URL for collecting the results of the {{up_se_name}} {{normal_se_type}} task* */

    endpoint_advanced?: string | undefined;

    
    /** *URL for collecting the results of the {{up_se_name}} {{normal_se_type}} HTML task* if HTML tasks are not supported in the specified endpoint, the value will be `null` */

    endpoint_html?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppSearchesTasksReadyResultInfo) {

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
            this.se = data["se"];
            this.se_type = data["se_type"];
            this.date_posted = data["date_posted"];
            this.tag = data["tag"];
            this.endpoint_advanced = data["endpoint_advanced"];
            this.endpoint_html = data["endpoint_html"];
        }
    }

    static fromJS(data: any): AppDataAppleAppSearchesTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppSearchesTasksReadyResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["se"] = this.se;
        data["se_type"] = this.se_type;
        data["date_posted"] = this.date_posted;
        data["tag"] = this.tag;
        data["endpoint_advanced"] = this.endpoint_advanced;
        data["endpoint_html"] = this.endpoint_html;
        return data;
    }
}