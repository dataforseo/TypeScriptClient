import { OnPageResourceIssueItemInfo, IOnPageResourceIssueItemInfo } from "./OnPageResourceIssueItemInfo";


export interface IOnPageResourceIssueInfo   {
        
        /** *resource errors* */
        errors?: OnPageResourceIssueItemInfo[] | undefined
        
        /** *resource warnings* */
        warnings?: OnPageResourceIssueItemInfo[] | undefined

    [key: string]: any;

    }

export class OnPageResourceIssueInfo  implements IOnPageResourceIssueInfo {

    
    /** *resource errors* */

    errors?: OnPageResourceIssueItemInfo[] | undefined;

    
    /** *resource warnings* */

    warnings?: OnPageResourceIssueItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageResourceIssueInfo) {

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
            if (Array.isArray(data["errors"])) {
                this.errors = [];
                for (let item of data["errors"]) {
                    this.errors.push(OnPageResourceIssueItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["warnings"])) {
                this.warnings = [];
                for (let item of data["warnings"]) {
                    this.warnings.push(OnPageResourceIssueItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageResourceIssueInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourceIssueInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["errors"] = null;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors) {
                if (item && typeof item.toJSON === "function") {
                    data["errors"].push(item?.toJSON());
                }
            }
        }
        data["warnings"] = null;
        if (Array.isArray(this.warnings)) {
            data["warnings"] = [];
            for (let item of this.warnings) {
                if (item && typeof item.toJSON === "function") {
                    data["warnings"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}