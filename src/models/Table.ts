export interface ITable   {
        
        /** name assigned to the table element
possible values:
table_element */
        table_element?: string | undefined
        
        /** column names */
        table_header?: string[] | undefined
        
        /** the content of the table
one line of the table in this element of the array */
        table_content?: string[][] | undefined

    [key: string]: any;

    }

export class Table  implements ITable {

    
    /** name assigned to the table element
possible values:
table_element */

    table_element?: string | undefined;

    
    /** column names */

    table_header?: string[] | undefined;

    
    /** the content of the table
one line of the table in this element of the array */

    table_content?: string[][] | undefined;

    [key: string]: any;


    constructor(data?: ITable) {

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
            this.table_element = data["table_element"];
            this.table_header = data["table_header"];
            this.table_content = data["table_content"];
        }
    }

    static fromJS(data: any): Table {
        data = typeof data === 'object' ? data : {};


        let result = new Table();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["table_element"] = this.table_element;
        data["table_header"] = this.table_header;
        data["table_content"] = this.table_content;
        return data;
    }
}