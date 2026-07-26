import { MicrodataFieldsInfo, IMicrodataFieldsInfo } from "./MicrodataFieldsInfo";


export interface IMicrodataInspectionInfo   {
        
        /** parent microdata types for a full list of available types, please visit schema.org */
        types?: string[] | undefined
        
        /** microdata fields an array of objects containing data fields related to the certain microdata type */
        fields?: MicrodataFieldsInfo[] | undefined

    [key: string]: any;

    }

export class MicrodataInspectionInfo  implements IMicrodataInspectionInfo {

    
    /** parent microdata types for a full list of available types, please visit schema.org */

    types?: string[] | undefined;

    
    /** microdata fields an array of objects containing data fields related to the certain microdata type */

    fields?: MicrodataFieldsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMicrodataInspectionInfo) {

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
            this.types = data["types"];
            if (Array.isArray(data["fields"])) {
                this.fields = [];
                for (let item of data["fields"]) {
                    this.fields.push(MicrodataFieldsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MicrodataInspectionInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MicrodataInspectionInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["types"] = this.types;
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