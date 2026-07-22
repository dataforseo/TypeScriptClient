export interface IOnPageLighthouseAuditsResultInfo   {
        
        /** the list of available lighthouse audits
an array containing the titles of available audits;
Note: the titles can change depending on if the audit passed or failed and may contain markdown code;
Note #2: if you’re using the audit that contains a slash (/) in its name, search by the last word after the slash */
        audits?: string[] | undefined

    [key: string]: any;

    }

export class OnPageLighthouseAuditsResultInfo  implements IOnPageLighthouseAuditsResultInfo {

    
    /** the list of available lighthouse audits
an array containing the titles of available audits;
Note: the titles can change depending on if the audit passed or failed and may contain markdown code;
Note #2: if you’re using the audit that contains a slash (/) in its name, search by the last word after the slash */

    audits?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseAuditsResultInfo) {

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
            this.audits = data["audits"];
        }
    }

    static fromJS(data: any): OnPageLighthouseAuditsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseAuditsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["audits"] = this.audits;
        return data;
    }
}