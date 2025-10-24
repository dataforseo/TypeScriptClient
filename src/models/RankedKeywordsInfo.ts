import { DataforseoLabsAvailableFiltersGoogleInfo, IDataforseoLabsAvailableFiltersGoogleInfo } from "./DataforseoLabsAvailableFiltersGoogleInfo";
import { DataforseoLabsAvailableFiltersAmazonInfo, IDataforseoLabsAvailableFiltersAmazonInfo } from "./DataforseoLabsAvailableFiltersAmazonInfo";


export interface IRankedKeywordsInfo   {
        
        google?: DataforseoLabsAvailableFiltersGoogleInfo | undefined
        
        bing?: { [key: string]: string; } | undefined
        
        amazon?: DataforseoLabsAvailableFiltersAmazonInfo | undefined

    [key: string]: any;

    }

export class RankedKeywordsInfo  implements IRankedKeywordsInfo {

    google?: DataforseoLabsAvailableFiltersGoogleInfo | undefined;

    bing?: { [key: string]: string; } | undefined;

    amazon?: DataforseoLabsAvailableFiltersAmazonInfo | undefined;

    [key: string]: any;


    constructor(data?: IRankedKeywordsInfo) {

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
            this.google = data["google"] ? DataforseoLabsAvailableFiltersGoogleInfo.fromJS(data["google"]) : <any>undefined;
            this.bing = data["bing"];
            this.amazon = data["amazon"] ? DataforseoLabsAvailableFiltersAmazonInfo.fromJS(data["amazon"]) : <any>undefined;
        }
    }

    static fromJS(data: any): RankedKeywordsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new RankedKeywordsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google"] = this.google ? DataforseoLabsAvailableFiltersGoogleInfo.fromJS(this.google)?.toJSON() : <any>undefined;
        data["bing"] = this.bing;
        data["amazon"] = this.amazon ? DataforseoLabsAvailableFiltersAmazonInfo.fromJS(this.amazon)?.toJSON() : <any>undefined;
        return data;
    }
}