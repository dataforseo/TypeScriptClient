import { TableContentItemInfo, ITableContentItemInfo } from "./TableContentItemInfo";


export interface ITableContentInfo   {
        
        /** parsed content of the header */
        header?: TableContentItemInfo[] | undefined
        
        /** content of the body of the table */
        body?: TableContentItemInfo[] | undefined
        
        /** content of the footer of the table */
        footer?: TableContentItemInfo[] | undefined

    [key: string]: any;

    }

export class TableContentInfo  implements ITableContentInfo {

    
    /** parsed content of the header */

    header?: TableContentItemInfo[] | undefined;

    
    /** content of the body of the table */

    body?: TableContentItemInfo[] | undefined;

    
    /** content of the footer of the table */

    footer?: TableContentItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ITableContentInfo) {

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
            if (Array.isArray(data["header"])) {
                this.header = [];
                for (let item of data["header"]) {
                    this.header.push(TableContentItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["body"])) {
                this.body = [];
                for (let item of data["body"]) {
                    this.body.push(TableContentItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["footer"])) {
                this.footer = [];
                for (let item of data["footer"]) {
                    this.footer.push(TableContentItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TableContentInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TableContentInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["header"] = null;
        if (Array.isArray(this.header)) {
            data["header"] = [];
            for (let item of this.header) {
                if (item && typeof item.toJSON === "function") {
                    data["header"].push(item?.toJSON());
                }
            }
        }
        data["body"] = null;
        if (Array.isArray(this.body)) {
            data["body"] = [];
            for (let item of this.body) {
                if (item && typeof item.toJSON === "function") {
                    data["body"].push(item?.toJSON());
                }
            }
        }
        data["footer"] = null;
        if (Array.isArray(this.footer)) {
            data["footer"] = [];
            for (let item of this.footer) {
                if (item && typeof item.toJSON === "function") {
                    data["footer"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}