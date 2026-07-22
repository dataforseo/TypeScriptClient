import { HotelPriceItemInfo, IHotelPriceItemInfo } from "./HotelPriceItemInfo";
import { PricesByDates, IPricesByDates } from "./PricesByDates";


export interface IHotelPriceInfo   {
        
        /** price per night */
        price?: number | undefined
        
        /** full price per night without a discount applied */
        price_without_discount?: number | undefined
        
        /** price currency
USD is applied by default, unless specified in the POST array */
        currency?: string | undefined
        
        /** text about a discount applied */
        discount_text?: string | undefined
        
        /** check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        check_in?: string | undefined
        
        /** check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        check_out?: string | undefined
        
        /** number of hotel visitors for this price */
        visitors?: number | undefined
        
        /** encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item */
        items?: HotelPriceItemInfo[] | undefined
        
        prices_by_dates?: PricesByDates[] | undefined

    [key: string]: any;

    }

export class HotelPriceInfo  implements IHotelPriceInfo {

    
    /** price per night */

    price?: number | undefined;

    
    /** full price per night without a discount applied */

    price_without_discount?: number | undefined;

    
    /** price currency
USD is applied by default, unless specified in the POST array */

    currency?: string | undefined;

    
    /** text about a discount applied */

    discount_text?: string | undefined;

    
    /** check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    check_in?: string | undefined;

    
    /** check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    check_out?: string | undefined;

    
    /** number of hotel visitors for this price */

    visitors?: number | undefined;

    
    /** encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item */

    items?: HotelPriceItemInfo[] | undefined;

    prices_by_dates?: PricesByDates[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelPriceInfo) {

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
            this.price = data["price"];
            this.price_without_discount = data["price_without_discount"];
            this.currency = data["currency"];
            this.discount_text = data["discount_text"];
            this.check_in = data["check_in"];
            this.check_out = data["check_out"];
            this.visitors = data["visitors"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HotelPriceItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["prices_by_dates"])) {
                this.prices_by_dates = [];
                for (let item of data["prices_by_dates"]) {
                    this.prices_by_dates.push(PricesByDates.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelPriceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelPriceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["price"] = this.price;
        data["price_without_discount"] = this.price_without_discount;
        data["currency"] = this.currency;
        data["discount_text"] = this.discount_text;
        data["check_in"] = this.check_in;
        data["check_out"] = this.check_out;
        data["visitors"] = this.visitors;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["prices_by_dates"] = null;
        if (Array.isArray(this.prices_by_dates)) {
            data["prices_by_dates"] = [];
            for (let item of this.prices_by_dates) {
                if (item && typeof item.toJSON === "function") {
                    data["prices_by_dates"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}