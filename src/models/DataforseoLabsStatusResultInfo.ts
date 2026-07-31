import { DataforseoLabsStatusInfo, IDataforseoLabsStatusInfo } from "./DataforseoLabsStatusInfo";


export interface IDataforseoLabsStatusResultInfo   {
        
        /** *update information for the Google endpoints* */
        google?: DataforseoLabsStatusInfo | undefined
        
        /** *update information for the Bing endpoints* */
        bing?: DataforseoLabsStatusInfo | undefined
        
        /** *update information for the Amazon endpoints* */
        amazon?: DataforseoLabsStatusInfo | undefined

    [key: string]: any;

    }

export class DataforseoLabsStatusResultInfo  implements IDataforseoLabsStatusResultInfo {

    
    /** *update information for the Google endpoints* */

    google?: DataforseoLabsStatusInfo | undefined;

    
    /** *update information for the Bing endpoints* */

    bing?: DataforseoLabsStatusInfo | undefined;

    
    /** *update information for the Amazon endpoints* */

    amazon?: DataforseoLabsStatusInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsStatusResultInfo) {

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
            this.google = data["google"] ? DataforseoLabsStatusInfo.fromJS(data["google"]) : <any>undefined;
            this.bing = data["bing"] ? DataforseoLabsStatusInfo.fromJS(data["bing"]) : <any>undefined;
            this.amazon = data["amazon"] ? DataforseoLabsStatusInfo.fromJS(data["amazon"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsStatusResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsStatusResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google"] = this.google ? DataforseoLabsStatusInfo.fromJS(this.google)?.toJSON() : <any>undefined;
        data["bing"] = this.bing ? DataforseoLabsStatusInfo.fromJS(this.bing)?.toJSON() : <any>undefined;
        data["amazon"] = this.amazon ? DataforseoLabsStatusInfo.fromJS(this.amazon)?.toJSON() : <any>undefined;
        return data;
    }
}