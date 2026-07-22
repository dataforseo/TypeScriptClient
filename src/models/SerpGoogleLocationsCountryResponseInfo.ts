import { SerpGoogleLocationsCountryTaskInfo, ISerpGoogleLocationsCountryTaskInfo } from "./SerpGoogleLocationsCountryTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleLocationsCountryResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpGoogleLocationsCountryTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleLocationsCountryResponseInfo  extends BaseResponseInfo   implements ISerpGoogleLocationsCountryResponseInfo {

    
    /** array of tasks */

    tasks?: SerpGoogleLocationsCountryTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocationsCountryResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(SerpGoogleLocationsCountryTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocationsCountryResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocationsCountryResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}