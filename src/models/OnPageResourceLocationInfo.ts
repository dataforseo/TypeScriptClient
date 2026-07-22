export interface IOnPageResourceLocationInfo   {
        
        /** line number
the number of the line on which the resource is located */
        line?: number | undefined
        
        /** position in line
the number of line characters before the resource;
sometimes referred to as column
Note: counts from 1, i.e. if the resource doesn’t have any characters to the left, the value will be 1 */
        offset_left?: number | undefined
        
        /** position in the document
the total number of characters between the resource and the top of HTML */
        offset_top?: number | undefined

    [key: string]: any;

    }

export class OnPageResourceLocationInfo  implements IOnPageResourceLocationInfo {

    
    /** line number
the number of the line on which the resource is located */

    line?: number | undefined;

    
    /** position in line
the number of line characters before the resource;
sometimes referred to as column
Note: counts from 1, i.e. if the resource doesn’t have any characters to the left, the value will be 1 */

    offset_left?: number | undefined;

    
    /** position in the document
the total number of characters between the resource and the top of HTML */

    offset_top?: number | undefined;

    [key: string]: any;


    constructor(data?: IOnPageResourceLocationInfo) {

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
            this.line = data["line"];
            this.offset_left = data["offset_left"];
            this.offset_top = data["offset_top"];
        }
    }

    static fromJS(data: any): OnPageResourceLocationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourceLocationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["line"] = this.line;
        data["offset_left"] = this.offset_left;
        data["offset_top"] = this.offset_top;
        return data;
    }
}