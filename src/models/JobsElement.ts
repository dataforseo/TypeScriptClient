export interface IJobsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** location for which the job vacancy is posted */
        location?: string | undefined
        
        /** author */
        author?: string | undefined
        
        /** the time when the job was posted */
        job_posted_time?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** contract type */
        contract_type?: string | undefined
        
        /** salary */
        salary?: string | undefined
        
        /** URL */
        url?: string | undefined

    [key: string]: any;

    }

export class JobsElement  implements IJobsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** location for which the job vacancy is posted */

    location?: string | undefined;
    
    /** author */

    author?: string | undefined;
    
    /** the time when the job was posted */

    job_posted_time?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** contract type */

    contract_type?: string | undefined;
    
    /** salary */

    salary?: string | undefined;
    
    /** URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IJobsElement) {

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
            this.type = data["type"];
            this.title = data["title"];
            this.description = data["description"];
            this.location = data["location"];
            this.author = data["author"];
            this.job_posted_time = data["job_posted_time"];
            this.timestamp = data["timestamp"];
            this.contract_type = data["contract_type"];
            this.salary = data["salary"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): JobsElement {
        data = typeof data === 'object' ? data : {};


        let result = new JobsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["location"] = this.location;
        data["author"] = this.author;
        data["job_posted_time"] = this.job_posted_time;
        data["timestamp"] = this.timestamp;
        data["contract_type"] = this.contract_type;
        data["salary"] = this.salary;
        data["url"] = this.url;
        return data;
    }
}