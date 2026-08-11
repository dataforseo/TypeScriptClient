import { MessageInfo, IMessageInfo } from "./MessageInfo";


export interface IMicrodataFieldsInfo   {
        
        /** *field name* name of the data field */
        name?: string | undefined
        
        /** list of microdata types */
        types?: string[] | undefined
        
        /** microdata value microdata value specified on a target web page */
        value?: string | undefined
        
        /** *microdata validation test results* sub-type microdata test results that contain detected errors and related messages */
        test_results?: MessageInfo | undefined
        
        /** *microdata fields* an array of objects containing data fields related to the certain microdata type */
        fields?: MicrodataFieldsInfo[] | undefined

    [key: string]: any;

    }

export class MicrodataFieldsInfo  implements IMicrodataFieldsInfo {

    
    /** *field name* name of the data field */

    name?: string | undefined;

    
    /** list of microdata types */

    types?: string[] | undefined;

    
    /** microdata value microdata value specified on a target web page */

    value?: string | undefined;

    
    /** *microdata validation test results* sub-type microdata test results that contain detected errors and related messages */

    test_results?: MessageInfo | undefined;

    
    /** *microdata fields* an array of objects containing data fields related to the certain microdata type */

    fields?: MicrodataFieldsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMicrodataFieldsInfo) {

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
            this.name = data["name"];
            this.types = data["types"];
            this.value = data["value"];
            this.test_results = data["test_results"] ? MessageInfo.fromJS(data["test_results"]) : <any>undefined;
            if (Array.isArray(data["fields"])) {
                this.fields = [];
                for (let item of data["fields"]) {
                    this.fields.push(MicrodataFieldsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MicrodataFieldsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MicrodataFieldsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["types"] = this.types;
        data["value"] = this.value;
        data["test_results"] = this.test_results ? MessageInfo.fromJS(this.test_results)?.toJSON() : <any>undefined;
        data["fields"] = null;
        if (Array.isArray(this.fields)) {
            data["fields"] = [];
            for (let item of this.fields) {
                if (item && typeof item.toJSON === "function") {
                    data["fields"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}