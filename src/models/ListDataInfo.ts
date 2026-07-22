export interface IListDataInfo   {
        
        /** the most popular related topics
represents the list of the most popular related topics */
        top?: any[] | undefined
        
        /** emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period */
        rising?: any[] | undefined

    [key: string]: any;

    }

export class ListDataInfo  implements IListDataInfo {

    
    /** the most popular related topics
represents the list of the most popular related topics */

    top?: any[] | undefined;

    
    /** emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period */

    rising?: any[] | undefined;

    [key: string]: any;


    constructor(data?: IListDataInfo) {

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
            this.top = data["top"];
            this.rising = data["rising"];
        }
    }

    static fromJS(data: any): ListDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ListDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["top"] = this.top;
        data["rising"] = this.rising;
        return data;
    }
}