import { AppendixAmazonMerchantPriceDataInfo, IAppendixAmazonMerchantPriceDataInfo } from "./AppendixAmazonMerchantPriceDataInfo";


export interface IAppendixAmazonMerchantPriceData   {
        
        asin?: AppendixAmazonMerchantPriceDataInfo | undefined
        
        products?: AppendixAmazonMerchantPriceDataInfo | undefined
        
        sellers?: AppendixAmazonMerchantPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAmazonMerchantPriceData  implements IAppendixAmazonMerchantPriceData {

    asin?: AppendixAmazonMerchantPriceDataInfo | undefined;

    products?: AppendixAmazonMerchantPriceDataInfo | undefined;

    sellers?: AppendixAmazonMerchantPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAmazonMerchantPriceData) {

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
            this.asin = data["asin"] ? AppendixAmazonMerchantPriceDataInfo.fromJS(data["asin"]) : <any>undefined;
            this.products = data["products"] ? AppendixAmazonMerchantPriceDataInfo.fromJS(data["products"]) : <any>undefined;
            this.sellers = data["sellers"] ? AppendixAmazonMerchantPriceDataInfo.fromJS(data["sellers"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAmazonMerchantPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAmazonMerchantPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin ? AppendixAmazonMerchantPriceDataInfo.fromJS(this.asin)?.toJSON() : <any>undefined;
        data["products"] = this.products ? AppendixAmazonMerchantPriceDataInfo.fromJS(this.products)?.toJSON() : <any>undefined;
        data["sellers"] = this.sellers ? AppendixAmazonMerchantPriceDataInfo.fromJS(this.sellers)?.toJSON() : <any>undefined;
        return data;
    }
}