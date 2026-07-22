import { MicrodataInspectionInfo, IMicrodataInspectionInfo } from "./MicrodataInspectionInfo";


export interface IOnPageMicrodataInfoItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** information related to microdata validation */
        inspection_info?: MicrodataInspectionInfo | undefined

    [key: string]: any;

    }

export class OnPageMicrodataInfoItem  implements IOnPageMicrodataInfoItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** information related to microdata validation */

    inspection_info?: MicrodataInspectionInfo | undefined;

    [key: string]: any;


    constructor(data?: IOnPageMicrodataInfoItem) {

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
            this.inspection_info = data["inspection_info"] ? MicrodataInspectionInfo.fromJS(data["inspection_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OnPageMicrodataInfoItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageMicrodataInfoItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["inspection_info"] = this.inspection_info ? MicrodataInspectionInfo.fromJS(this.inspection_info)?.toJSON() : <any>undefined;
        return data;
    }
}