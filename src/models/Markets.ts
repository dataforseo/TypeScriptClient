import { BaseSerpApiGoogleFinanceElementItem, IBaseSerpApiGoogleFinanceElementItem } from "./BaseSerpApiGoogleFinanceElementItem";


export interface IMarkets   {
        
        /** *financial market identifier* possible values: `US`, `Europe`, `Asia`, `Currencies`, `Crypto`, `Futures` */
        market?: string | undefined
        
        /** *elements of search results found in SERP* */
        items?: BaseSerpApiGoogleFinanceElementItem[] | undefined

    [key: string]: any;

    }

export class Markets  implements IMarkets {

    
    /** *financial market identifier* possible values: `US`, `Europe`, `Asia`, `Currencies`, `Crypto`, `Futures` */

    market?: string | undefined;

    
    /** *elements of search results found in SERP* */

    items?: BaseSerpApiGoogleFinanceElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IMarkets) {

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
            this.market = data["market"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiGoogleFinanceElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): Markets {
        data = typeof data === 'object' ? data : {};


        let result = new Markets();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["market"] = this.market;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}