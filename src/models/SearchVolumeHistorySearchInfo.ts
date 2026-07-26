import { SearchVolumeHistoryItemInfo, ISearchVolumeHistoryItemInfo } from "./SearchVolumeHistoryItemInfo";


export interface ISearchVolumeHistorySearchInfo   {
        
        /** device type = desktop contains historical search volume data for searches made from desktop devices */
        desktop?: SearchVolumeHistoryItemInfo[] | undefined
        
        /** device type = non-smartphones contains historical search volume data for searches made from feature phones (non-smartphone mobile devices) */
        non_smartphones?: SearchVolumeHistoryItemInfo[] | undefined
        
        /** device type = mobile contains historical search volume data for searches made from mobile devices */
        mobile?: SearchVolumeHistoryItemInfo[] | undefined
        
        /** device type = tablet contains historical search volume data for searches made from tablets */
        tablet?: SearchVolumeHistoryItemInfo[] | undefined

    [key: string]: any;

    }

export class SearchVolumeHistorySearchInfo  implements ISearchVolumeHistorySearchInfo {

    
    /** device type = desktop contains historical search volume data for searches made from desktop devices */

    desktop?: SearchVolumeHistoryItemInfo[] | undefined;

    
    /** device type = non-smartphones contains historical search volume data for searches made from feature phones (non-smartphone mobile devices) */

    non_smartphones?: SearchVolumeHistoryItemInfo[] | undefined;

    
    /** device type = mobile contains historical search volume data for searches made from mobile devices */

    mobile?: SearchVolumeHistoryItemInfo[] | undefined;

    
    /** device type = tablet contains historical search volume data for searches made from tablets */

    tablet?: SearchVolumeHistoryItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISearchVolumeHistorySearchInfo) {

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
                    this.desktop.push(SearchVolumeHistoryItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["non_smartphones"])) {
                this.non_smartphones = [];
                for (let item of data["non_smartphones"]) {
                    this.non_smartphones.push(SearchVolumeHistoryItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["mobile"])) {
                this.mobile = [];
                for (let item of data["mobile"]) {
                    this.mobile.push(SearchVolumeHistoryItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["tablet"])) {
                this.tablet = [];
                for (let item of data["tablet"]) {
                    this.tablet.push(SearchVolumeHistoryItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SearchVolumeHistorySearchInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SearchVolumeHistorySearchInfo();
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
        data["non_smartphones"] = null;
        if (Array.isArray(this.non_smartphones)) {
            data["non_smartphones"] = [];
            for (let item of this.non_smartphones) {
                if (item && typeof item.toJSON === "function") {
                    data["non_smartphones"].push(item?.toJSON());
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