import { KeywordsDataBingSearchVolumeHistoryLiveResultInfo, IKeywordsDataBingSearchVolumeHistoryLiveResultInfo } from "./KeywordsDataBingSearchVolumeHistoryLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IKeywordsDataBingSearchVolumeHistoryLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: KeywordsDataBingSearchVolumeHistoryLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeHistoryLiveTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingSearchVolumeHistoryLiveTaskInfo {

    
    /** *array of results* */

    result?: KeywordsDataBingSearchVolumeHistoryLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeHistoryLiveTaskInfo) {
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
                    this.result.push(KeywordsDataBingSearchVolumeHistoryLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeHistoryLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeHistoryLiveTaskInfo();
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