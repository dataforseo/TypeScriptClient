export interface IMerchantAmazonProductsTasksReadyResultInfo   {
        
        /** *task identifier of the completed task* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */
        id?: string | undefined
        
        /** *search engine specified when setting the task* */
        se?: string | undefined
        
        /** *type of search engine* can take the following values: `organic` */
        se_type?: string | undefined
        
        /** *date when the task was posted (in the UTC format)* */
        date_posted?: string | undefined
        
        /** *user-defined task identifier* */
        tag?: string | undefined
        
        /** *URL for collecting the results of the Amazon Products Advanced task* */
        endpoint_advanced?: string | undefined
        
        /** *URL for collecting the results of the Amazon Products HTML task* */
        endpoint_html?: string | undefined

    [key: string]: any;

    }

export class MerchantAmazonProductsTasksReadyResultInfo  implements IMerchantAmazonProductsTasksReadyResultInfo {

    
    /** *task identifier of the completed task* **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** */

    id?: string | undefined;

    
    /** *search engine specified when setting the task* */

    se?: string | undefined;

    
    /** *type of search engine* can take the following values: `organic` */

    se_type?: string | undefined;

    
    /** *date when the task was posted (in the UTC format)* */

    date_posted?: string | undefined;

    
    /** *user-defined task identifier* */

    tag?: string | undefined;

    
    /** *URL for collecting the results of the Amazon Products Advanced task* */

    endpoint_advanced?: string | undefined;

    
    /** *URL for collecting the results of the Amazon Products HTML task* */

    endpoint_html?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonProductsTasksReadyResultInfo) {

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

    static fromJS(data: any): MerchantAmazonProductsTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonProductsTasksReadyResultInfo();
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