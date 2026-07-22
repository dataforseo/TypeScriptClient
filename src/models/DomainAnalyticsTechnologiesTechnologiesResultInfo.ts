import { Groups, IGroups } from "./Groups";


export interface IDomainAnalyticsTechnologiesTechnologiesResultInfo   {
        
        /** array of technology groups */
        groups?: Groups[] | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesTechnologiesResultInfo  implements IDomainAnalyticsTechnologiesTechnologiesResultInfo {

    
    /** array of technology groups */

    groups?: Groups[] | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesTechnologiesResultInfo) {

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
            if (Array.isArray(data["groups"])) {
                this.groups = [];
                for (let item of data["groups"]) {
                    this.groups.push(Groups.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesTechnologiesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesTechnologiesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["groups"] = null;
        if (Array.isArray(this.groups)) {
            data["groups"] = [];
            for (let item of this.groups) {
                if (item && typeof item.toJSON === "function") {
                    data["groups"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}