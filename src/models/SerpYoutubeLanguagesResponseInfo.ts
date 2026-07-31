import { SerpYoutubeLanguagesTaskInfo, ISerpYoutubeLanguagesTaskInfo } from "./SerpYoutubeLanguagesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpYoutubeLanguagesResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: SerpYoutubeLanguagesTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpYoutubeLanguagesResponseInfo  extends BaseResponseInfo   implements ISerpYoutubeLanguagesResponseInfo {

    
    /** *array of tasks* */

    tasks?: SerpYoutubeLanguagesTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpYoutubeLanguagesResponseInfo) {
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
                    this.tasks.push(SerpYoutubeLanguagesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYoutubeLanguagesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeLanguagesResponseInfo();
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