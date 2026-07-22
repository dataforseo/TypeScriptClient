import { ContentAnalysisCategoriesTaskInfo, IContentAnalysisCategoriesTaskInfo } from "./ContentAnalysisCategoriesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IContentAnalysisCategoriesResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: ContentAnalysisCategoriesTaskInfo[] | undefined

    [key: string]: any;

    }

export class ContentAnalysisCategoriesResponseInfo  extends BaseResponseInfo   implements IContentAnalysisCategoriesResponseInfo {

    
    /** array of tasks */

    tasks?: ContentAnalysisCategoriesTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisCategoriesResponseInfo) {
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
                    this.tasks.push(ContentAnalysisCategoriesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisCategoriesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisCategoriesResponseInfo();
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