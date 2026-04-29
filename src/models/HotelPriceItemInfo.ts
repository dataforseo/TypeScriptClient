import { HotelInfoPriceOffer, IHotelInfoPriceOffer } from "./HotelInfoPriceOffer";


export interface IHotelPriceItemInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the hotel */
        title?: string | undefined
        
        /** price per night */
        price?: number | undefined
        
        /** price currency
USD is applied by default, unless specified in the POST array */
        currency?: string | undefined
        
        /** third-party page url
URL to the third-party website page with pricing information */
        url?: string | undefined
        
        /** third-party domain
domain of the third-party website page with pricing information */
        domain?: string | undefined
        
        /** indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing */
        is_paid?: boolean | undefined
        
        official_site?: boolean | undefined
        
        /** date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates */
        free_cancellation_until?: string | undefined
        
        /** featured price offers */
        offers?: HotelInfoPriceOffer[] | undefined

    [key: string]: any;

    }

export class HotelPriceItemInfo  implements IHotelPriceItemInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the hotel */

    title?: string | undefined;
    
    /** price per night */

    price?: number | undefined;
    
    /** price currency
USD is applied by default, unless specified in the POST array */

    currency?: string | undefined;
    
    /** third-party page url
URL to the third-party website page with pricing information */

    url?: string | undefined;
    
    /** third-party domain
domain of the third-party website page with pricing information */

    domain?: string | undefined;
    
    /** indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing */

    is_paid?: boolean | undefined;

    official_site?: boolean | undefined;
    
    /** date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates */

    free_cancellation_until?: string | undefined;
    
    /** featured price offers */

    offers?: HotelInfoPriceOffer[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelPriceItemInfo) {

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
            this.type = data["type"];
            this.title = data["title"];
            this.price = data["price"];
            this.currency = data["currency"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.is_paid = data["is_paid"];
            this.official_site = data["official_site"];
            this.free_cancellation_until = data["free_cancellation_until"];
            if (Array.isArray(data["offers"])) {
                this.offers = [];
                for (let item of data["offers"]) {
                    this.offers.push(HotelInfoPriceOffer.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelPriceItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelPriceItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["price"] = this.price;
        data["currency"] = this.currency;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["is_paid"] = this.is_paid;
        data["official_site"] = this.official_site;
        data["free_cancellation_until"] = this.free_cancellation_until;
        data["offers"] = null;
        if (Array.isArray(this.offers)) {
            data["offers"] = [];
            for (let item of this.offers) {
                if (item && typeof item.toJSON === "function") {
                    data["offers"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}