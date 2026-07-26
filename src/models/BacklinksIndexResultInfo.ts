import { IndexHistory, IIndexHistory } from "./IndexHistory";


export interface IBacklinksIndexResultInfo   {
        
        /** *total number of backlinks our database contains for the moment of checking* */
        total_backlinks?: number | undefined
        
        /** *total number of pages our database contains for the moment of checking* */
        total_pages?: number | undefined
        
        /** *index volume data for the past 12 months* */
        index_history?: IndexHistory[] | undefined

    [key: string]: any;

    }

export class BacklinksIndexResultInfo  implements IBacklinksIndexResultInfo {

    
    /** *total number of backlinks our database contains for the moment of checking* */

    total_backlinks?: number | undefined;

    
    /** *total number of pages our database contains for the moment of checking* */

    total_pages?: number | undefined;

    
    /** *index volume data for the past 12 months* */

    index_history?: IndexHistory[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksIndexResultInfo) {

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
            this.total_backlinks = data["total_backlinks"];
            this.total_pages = data["total_pages"];
            if (Array.isArray(data["index_history"])) {
                this.index_history = [];
                for (let item of data["index_history"]) {
                    this.index_history.push(IndexHistory.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksIndexResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksIndexResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_backlinks"] = this.total_backlinks;
        data["total_pages"] = this.total_pages;
        data["index_history"] = null;
        if (Array.isArray(this.index_history)) {
            data["index_history"] = [];
            for (let item of this.index_history) {
                if (item && typeof item.toJSON === "function") {
                    data["index_history"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}