import { RowCellInfo, IRowCellInfo } from "./RowCellInfo";


export interface ITableContentItemInfo   {
        
        /** content of the row cells of the header */
        row_cells?: RowCellInfo[] | undefined

    [key: string]: any;

    }

export class TableContentItemInfo  implements ITableContentItemInfo {

    
    /** content of the row cells of the header */

    row_cells?: RowCellInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ITableContentItemInfo) {

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
            if (Array.isArray(data["row_cells"])) {
                this.row_cells = [];
                for (let item of data["row_cells"]) {
                    this.row_cells.push(RowCellInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TableContentItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TableContentItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["row_cells"] = null;
        if (Array.isArray(this.row_cells)) {
            data["row_cells"] = [];
            for (let item of this.row_cells) {
                if (item && typeof item.toJSON === "function") {
                    data["row_cells"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}