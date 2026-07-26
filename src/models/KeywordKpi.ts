import { KeywordKpiItemInfo, IKeywordKpiItemInfo } from "./KeywordKpiItemInfo";


export interface IKeywordKpi   {
        
        /** keyword data aggregated for desktop devices if there is no data, then the value is null */
        desktop?: KeywordKpiItemInfo[] | undefined
        
        /** keyword data aggregated for mobile devices if there is no data, then the value is null */
        mobile?: KeywordKpiItemInfo[] | undefined
        
        /** keyword data aggregated for tablet devices if there is no data, then the value is null */
        tablet?: KeywordKpiItemInfo[] | undefined

    [key: string]: any;

    }

export class KeywordKpi  implements IKeywordKpi {

    
    /** keyword data aggregated for desktop devices if there is no data, then the value is null */

    desktop?: KeywordKpiItemInfo[] | undefined;

    
    /** keyword data aggregated for mobile devices if there is no data, then the value is null */

    mobile?: KeywordKpiItemInfo[] | undefined;

    
    /** keyword data aggregated for tablet devices if there is no data, then the value is null */

    tablet?: KeywordKpiItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordKpi) {

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
            if (Array.isArray(data["desktop"])) {
                this.desktop = [];
                for (let item of data["desktop"]) {
                    this.desktop.push(KeywordKpiItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["mobile"])) {
                this.mobile = [];
                for (let item of data["mobile"]) {
                    this.mobile.push(KeywordKpiItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["tablet"])) {
                this.tablet = [];
                for (let item of data["tablet"]) {
                    this.tablet.push(KeywordKpiItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordKpi {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordKpi();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["desktop"] = null;
        if (Array.isArray(this.desktop)) {
            data["desktop"] = [];
            for (let item of this.desktop) {
                if (item && typeof item.toJSON === "function") {
                    data["desktop"].push(item?.toJSON());
                }
            }
        }
        data["mobile"] = null;
        if (Array.isArray(this.mobile)) {
            data["mobile"] = [];
            for (let item of this.mobile) {
                if (item && typeof item.toJSON === "function") {
                    data["mobile"].push(item?.toJSON());
                }
            }
        }
        data["tablet"] = null;
        if (Array.isArray(this.tablet)) {
            data["tablet"] = [];
            for (let item of this.tablet) {
                if (item && typeof item.toJSON === "function") {
                    data["tablet"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}