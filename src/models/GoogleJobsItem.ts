import { AiModeRectangleInfo, IAiModeRectangleInfo } from "./AiModeRectangleInfo";


export interface IGoogleJobsItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *group rank in SERP* position within a group of elements with identical `type` values positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank in SERP* absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** *the alignment of the element in SERP* can take the following values: `left`, `right` */
        position?: string | undefined
        
        /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */
        xpath?: string | undefined
        
        /** *ID of the job on Google Jobs* */
        job_id?: string | undefined
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *name of the employer* */
        employer_name?: string | undefined
        
        /** *URL to the employer's website* */
        employer_url?: string | undefined
        
        /** *URL to the image used in the job posting* */
        employer_image_url?: string | undefined
        
        /** *location for which the job vacancy is posted* */
        location?: string | undefined
        
        /** *original source of the job vacancy* */
        source_name?: string | undefined
        
        /** *URL to the original source of the job vacancy* */
        source_url?: string | undefined
        
        /** *the salary indicated in the job vacancy* if the salary isn't indicated, this field will equal `null` */
        salary?: string | undefined
        
        /** *employment contract type* */
        contract_type?: string | undefined
        
        /** *date and time when the result was published* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */
        timestamp?: string | undefined
        
        /** *indicates how long ago the job vacancy was posted* */
        time_ago?: string | undefined
        
        /** *rectangle parameters* contains cartesian coordinates and pixel dimensions of the result's snippet in SERP; in this case, will equal `null` */
        rectangle?: AiModeRectangleInfo | undefined

    [key: string]: any;

    }

export class GoogleJobsItem  implements IGoogleJobsItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *group rank in SERP* position within a group of elements with identical `type` values positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank in SERP* absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    
    /** *the alignment of the element in SERP* can take the following values: `left`, `right` */

    position?: string | undefined;

    
    /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */

    xpath?: string | undefined;

    
    /** *ID of the job on Google Jobs* */

    job_id?: string | undefined;

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *name of the employer* */

    employer_name?: string | undefined;

    
    /** *URL to the employer's website* */

    employer_url?: string | undefined;

    
    /** *URL to the image used in the job posting* */

    employer_image_url?: string | undefined;

    
    /** *location for which the job vacancy is posted* */

    location?: string | undefined;

    
    /** *original source of the job vacancy* */

    source_name?: string | undefined;

    
    /** *URL to the original source of the job vacancy* */

    source_url?: string | undefined;

    
    /** *the salary indicated in the job vacancy* if the salary isn't indicated, this field will equal `null` */

    salary?: string | undefined;

    
    /** *employment contract type* */

    contract_type?: string | undefined;

    
    /** *date and time when the result was published* in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00' example: `2019-11-15 12:57:46 +00:00` */

    timestamp?: string | undefined;

    
    /** *indicates how long ago the job vacancy was posted* */

    time_ago?: string | undefined;

    
    /** *rectangle parameters* contains cartesian coordinates and pixel dimensions of the result's snippet in SERP; in this case, will equal `null` */

    rectangle?: AiModeRectangleInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleJobsItem) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.job_id = data["job_id"];
            this.title = data["title"];
            this.employer_name = data["employer_name"];
            this.employer_url = data["employer_url"];
            this.employer_image_url = data["employer_image_url"];
            this.location = data["location"];
            this.source_name = data["source_name"];
            this.source_url = data["source_url"];
            this.salary = data["salary"];
            this.contract_type = data["contract_type"];
            this.timestamp = data["timestamp"];
            this.time_ago = data["time_ago"];
            this.rectangle = data["rectangle"] ? AiModeRectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleJobsItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleJobsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["job_id"] = this.job_id;
        data["title"] = this.title;
        data["employer_name"] = this.employer_name;
        data["employer_url"] = this.employer_url;
        data["employer_image_url"] = this.employer_image_url;
        data["location"] = this.location;
        data["source_name"] = this.source_name;
        data["source_url"] = this.source_url;
        data["salary"] = this.salary;
        data["contract_type"] = this.contract_type;
        data["timestamp"] = this.timestamp;
        data["time_ago"] = this.time_ago;
        data["rectangle"] = this.rectangle ? AiModeRectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}