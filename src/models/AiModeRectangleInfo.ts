export interface IAiModeRectangleInfo   {
        
        /** x-axis coordinate x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin */
        x?: number | undefined
        
        /** y-axis coordinate y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin */
        y?: number | undefined
        
        /** width of the element in pixels */
        width?: number | undefined
        
        /** height of the element in pixels */
        height?: number | undefined

    [key: string]: any;

    }

export class AiModeRectangleInfo  implements IAiModeRectangleInfo {

    
    /** x-axis coordinate x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin */

    x?: number | undefined;

    
    /** y-axis coordinate y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin */

    y?: number | undefined;

    
    /** width of the element in pixels */

    width?: number | undefined;

    
    /** height of the element in pixels */

    height?: number | undefined;

    [key: string]: any;


    constructor(data?: IAiModeRectangleInfo) {

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
            this.x = data["x"];
            this.y = data["y"];
            this.width = data["width"];
            this.height = data["height"];
        }
    }

    static fromJS(data: any): AiModeRectangleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeRectangleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["x"] = this.x;
        data["y"] = this.y;
        data["width"] = this.width;
        data["height"] = this.height;
        return data;
    }
}