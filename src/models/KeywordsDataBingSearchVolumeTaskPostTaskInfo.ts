import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IKeywordsDataBingSearchVolumeTaskPostTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results in this case, the value will be null */
        result?: any | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeTaskPostTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingSearchVolumeTaskPostTaskInfo {

    
    /** array of results in this case, the value will be null */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeTaskPostTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeTaskPostTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeTaskPostTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}