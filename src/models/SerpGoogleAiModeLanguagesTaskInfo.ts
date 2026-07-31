import { SerpGoogleAiModeLanguagesResultInfo, ISerpGoogleAiModeLanguagesResultInfo } from "./SerpGoogleAiModeLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleAiModeLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpGoogleAiModeLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleAiModeLanguagesTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleAiModeLanguagesTaskInfo {

    
    /** *array of results* */

    result?: SerpGoogleAiModeLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAiModeLanguagesTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["result"])) {
                this.result = [];
                for (let item of data["result"]) {
                    this.result.push(SerpGoogleAiModeLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAiModeLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAiModeLanguagesTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = null;
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result) {
                if (item && typeof item.toJSON === "function") {
                    data["result"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}