import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixSerpPriceDataInfo   {
        
        html?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        regular?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        advanced?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixSerpPriceDataInfo  implements IAppendixSerpPriceDataInfo {

    html?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    regular?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    advanced?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixSerpPriceDataInfo) {

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
            this.html = data["html"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["html"]) : <any>undefined;
            this.regular = data["regular"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["regular"]) : <any>undefined;
            this.advanced = data["advanced"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["advanced"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixSerpPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSerpPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["html"] = this.html ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.html)?.toJSON() : <any>undefined;
        data["regular"] = this.regular ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.regular)?.toJSON() : <any>undefined;
        data["advanced"] = this.advanced ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.advanced)?.toJSON() : <any>undefined;
        return data;
    }
}