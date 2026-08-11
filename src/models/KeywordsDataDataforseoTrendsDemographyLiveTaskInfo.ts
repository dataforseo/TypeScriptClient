import { KeywordsDataDataforseoTrendsDemographyLiveResultInfo, IKeywordsDataDataforseoTrendsDemographyLiveResultInfo } from "./KeywordsDataDataforseoTrendsDemographyLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IKeywordsDataDataforseoTrendsDemographyLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: KeywordsDataDataforseoTrendsDemographyLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsDemographyLiveTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataDataforseoTrendsDemographyLiveTaskInfo {

    
    /** *array of results* */

    result?: KeywordsDataDataforseoTrendsDemographyLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsDemographyLiveTaskInfo) {
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
                    this.result.push(KeywordsDataDataforseoTrendsDemographyLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsDemographyLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsDemographyLiveTaskInfo();
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