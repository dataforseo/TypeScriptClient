export interface IAiModeTableInfo   {
        
        /** content in the header of the table */
        table_header?: string[] | undefined
        
        /** array of contents of the table present in the elementeach array represents the table row */
        table_content?: string[][] | undefined

    [key: string]: any;

    }

export class AiModeTableInfo  implements IAiModeTableInfo {

    
    /** content in the header of the table */

    table_header?: string[] | undefined;

    
    /** array of contents of the table present in the elementeach array represents the table row */

    table_content?: string[][] | undefined;

    [key: string]: any;


    constructor(data?: IAiModeTableInfo) {

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
            this.table_header = data["table_header"];
            this.table_content = data["table_content"];
        }
    }

    static fromJS(data: any): AiModeTableInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeTableInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["table_header"] = this.table_header;
        data["table_content"] = this.table_content;
        return data;
    }
}