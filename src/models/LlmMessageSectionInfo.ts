import { AnnotationInfo, IAnnotationInfo } from "./AnnotationInfo";


export interface ILlmMessageSectionInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** AI-generated text content */
        text?: string | undefined
        
        /** array of references used to generate the responseequals null if the web_search parameter is not set to trueNote: annotations may return empty even when web_search is true, as the AI will attempt to retrieve web information but may not find relevant results */
        annotations?: AnnotationInfo[] | undefined

    [key: string]: any;

    }

export class LlmMessageSectionInfo  implements ILlmMessageSectionInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** AI-generated text content */

    text?: string | undefined;
    
    /** array of references used to generate the responseequals null if the web_search parameter is not set to trueNote: annotations may return empty even when web_search is true, as the AI will attempt to retrieve web information but may not find relevant results */

    annotations?: AnnotationInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ILlmMessageSectionInfo) {

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
            this.text = data["text"];
            if (Array.isArray(data["annotations"])) {
                this.annotations = [];
                for (let item of data["annotations"]) {
                    this.annotations.push(AnnotationInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): LlmMessageSectionInfo {
        data = typeof data === 'object' ? data : {};


        let result = new LlmMessageSectionInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["text"] = this.text;
        data["annotations"] = null;
        if (Array.isArray(this.annotations)) {
            data["annotations"] = [];
            for (let item of this.annotations) {
                if (item && typeof item.toJSON === "function") {
                    data["annotations"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}