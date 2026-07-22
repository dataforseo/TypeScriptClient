export interface IBusinessDataBusinessListingsSearchLiveRequestInfo   {

    [key: string]: any;

    }

export class BusinessDataBusinessListingsSearchLiveRequestInfo  implements IBusinessDataBusinessListingsSearchLiveRequestInfo {

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsSearchLiveRequestInfo) {

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
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsSearchLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsSearchLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        return data;
    }
}