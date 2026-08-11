export interface ITestSummary   {
        
        /** *number of fatal microdata errors* */
        fatal?: number | undefined
        
        /** *number of serious microdata errors* */
        error?: number | undefined
        
        /** *number of microdata warnings* */
        warning?: number | undefined
        
        /** *number of microdata information flags* */
        info?: number | undefined

    [key: string]: any;

    }

export class TestSummary  implements ITestSummary {

    
    /** *number of fatal microdata errors* */

    fatal?: number | undefined;

    
    /** *number of serious microdata errors* */

    error?: number | undefined;

    
    /** *number of microdata warnings* */

    warning?: number | undefined;

    
    /** *number of microdata information flags* */

    info?: number | undefined;

    [key: string]: any;


    constructor(data?: ITestSummary) {

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
            this.fatal = data["fatal"];
            this.error = data["error"];
            this.warning = data["warning"];
            this.info = data["info"];
        }
    }

    static fromJS(data: any): TestSummary {
        data = typeof data === 'object' ? data : {};


        let result = new TestSummary();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["fatal"] = this.fatal;
        data["error"] = this.error;
        data["warning"] = this.warning;
        data["info"] = this.info;
        return data;
    }
}