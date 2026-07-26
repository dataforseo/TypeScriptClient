export interface IGraphElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** date when the video was published or indexed example: Apr 26, 2024 */
        date?: string | undefined
        
        /** the value of the rating */
        value?: number | undefined

    [key: string]: any;

    }

export class GraphElement  implements IGraphElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** date when the video was published or indexed example: Apr 26, 2024 */

    date?: string | undefined;

    
    /** the value of the rating */

    value?: number | undefined;

    [key: string]: any;


    constructor(data?: IGraphElement) {

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
            this.date = data["date"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): GraphElement {
        data = typeof data === 'object' ? data : {};


        let result = new GraphElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["date"] = this.date;
        data["value"] = this.value;
        return data;
    }
}