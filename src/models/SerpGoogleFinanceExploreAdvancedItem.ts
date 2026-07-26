import { GoogleFinanceMarketTrendsElement, IGoogleFinanceMarketTrendsElement } from "./GoogleFinanceMarketTrendsElement";


export interface ISerpGoogleFinanceExploreAdvancedItem   {
        
        /** array of items this array can take the following names: most_active, gainers, losers */
        most_active?: GoogleFinanceMarketTrendsElement[] | undefined
        
        gainers?: GoogleFinanceMarketTrendsElement[] | undefined
        
        losers?: GoogleFinanceMarketTrendsElement[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceExploreAdvancedItem  implements ISerpGoogleFinanceExploreAdvancedItem {

    
    /** array of items this array can take the following names: most_active, gainers, losers */

    most_active?: GoogleFinanceMarketTrendsElement[] | undefined;

    gainers?: GoogleFinanceMarketTrendsElement[] | undefined;

    losers?: GoogleFinanceMarketTrendsElement[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceExploreAdvancedItem) {

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
            if (Array.isArray(data["most_active"])) {
                this.most_active = [];
                for (let item of data["most_active"]) {
                    this.most_active.push(GoogleFinanceMarketTrendsElement.fromJS(item));
                }
            }
            if (Array.isArray(data["gainers"])) {
                this.gainers = [];
                for (let item of data["gainers"]) {
                    this.gainers.push(GoogleFinanceMarketTrendsElement.fromJS(item));
                }
            }
            if (Array.isArray(data["losers"])) {
                this.losers = [];
                for (let item of data["losers"]) {
                    this.losers.push(GoogleFinanceMarketTrendsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceExploreAdvancedItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceExploreAdvancedItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["most_active"] = null;
        if (Array.isArray(this.most_active)) {
            data["most_active"] = [];
            for (let item of this.most_active) {
                if (item && typeof item.toJSON === "function") {
                    data["most_active"].push(item?.toJSON());
                }
            }
        }
        data["gainers"] = null;
        if (Array.isArray(this.gainers)) {
            data["gainers"] = [];
            for (let item of this.gainers) {
                if (item && typeof item.toJSON === "function") {
                    data["gainers"].push(item?.toJSON());
                }
            }
        }
        data["losers"] = null;
        if (Array.isArray(this.losers)) {
            data["losers"] = [];
            for (let item of this.losers) {
                if (item && typeof item.toJSON === "function") {
                    data["losers"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}