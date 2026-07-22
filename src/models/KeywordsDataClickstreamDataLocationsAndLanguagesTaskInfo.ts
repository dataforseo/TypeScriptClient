import { KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo, IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo } from "./KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IKeywordsDataClickstreamDataLocationsAndLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataLocationsAndLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataClickstreamDataLocationsAndLanguagesTaskInfo {

    
    /** array of results */

    result?: KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataLocationsAndLanguagesTaskInfo) {
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
                    this.result.push(KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataLocationsAndLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataLocationsAndLanguagesTaskInfo();
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