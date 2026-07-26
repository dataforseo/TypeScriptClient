export interface ISerpGoogleDatasetInfoLiveAdvancedRequestInfo   {
        
        /** *ID of the dataset* **required field** you can find dataset ID in the dataset URL or `dataset` item of [Google Dataset Search](https://docs.dataforseo.com/v3/serp/google/dataset_search/live/advanced) result example: `L2cvMTFqbl85ZHN6MQ==` */
        dataset_id?: string | undefined
        
        /** *search engine language code* optional field if you use this field, you don't need to specify `language_name` possible value: `en` */
        language_code?: string | undefined
        
        /** *device type* optional field return results for a specific device type possible value: `desktop` */
        device?: string | undefined
        
        /** *full name of search engine language* optional field if you use this field, you don't need to specify `language_code` possible value: `English` */
        language_name?: string | undefined
        
        /** *device operating system* optional field possible values: `windows`, `macos` default value: `windows` */
        os?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetInfoLiveAdvancedRequestInfo  implements ISerpGoogleDatasetInfoLiveAdvancedRequestInfo {

    
    /** *ID of the dataset* **required field** you can find dataset ID in the dataset URL or `dataset` item of [Google Dataset Search](https://docs.dataforseo.com/v3/serp/google/dataset_search/live/advanced) result example: `L2cvMTFqbl85ZHN6MQ==` */

    dataset_id?: string | undefined;

    
    /** *search engine language code* optional field if you use this field, you don't need to specify `language_name` possible value: `en` */

    language_code?: string | undefined;

    
    /** *device type* optional field return results for a specific device type possible value: `desktop` */

    device?: string | undefined;

    
    /** *full name of search engine language* optional field if you use this field, you don't need to specify `language_code` possible value: `English` */

    language_name?: string | undefined;

    
    /** *device operating system* optional field possible values: `windows`, `macos` default value: `windows` */

    os?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetInfoLiveAdvancedRequestInfo) {

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
            this.dataset_id = data["dataset_id"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpGoogleDatasetInfoLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetInfoLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["dataset_id"] = this.dataset_id;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        return data;
    }
}