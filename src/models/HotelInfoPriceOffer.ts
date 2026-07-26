export interface IHotelInfoPriceOffer   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the hotel */
        title?: string | undefined
        
        /** price per night */
        price?: number | undefined
        
        /** price currency USD is applied by default, unless specified in the POST array */
        currency?: string | undefined
        
        /** url of the price offer URL to the page of the website where price offer appears */
        url?: string | undefined
        
        /** the maximal number of visitors the maximum number of visitors for which the price offer is valid */
        max_visitors?: number | undefined
        
        /** price offer images URLs of the images featured in the price offer */
        offer_images?: string[] | undefined
        
        /** date until free cancellation is available in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” equals null if free cancellation is not available for the selected dates */
        free_cancellation_until?: string | undefined

    [key: string]: any;

    }

export class HotelInfoPriceOffer  implements IHotelInfoPriceOffer {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of the hotel */

    title?: string | undefined;

    
    /** price per night */

    price?: number | undefined;

    
    /** price currency USD is applied by default, unless specified in the POST array */

    currency?: string | undefined;

    
    /** url of the price offer URL to the page of the website where price offer appears */

    url?: string | undefined;

    
    /** the maximal number of visitors the maximum number of visitors for which the price offer is valid */

    max_visitors?: number | undefined;

    
    /** price offer images URLs of the images featured in the price offer */

    offer_images?: string[] | undefined;

    
    /** date until free cancellation is available in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” equals null if free cancellation is not available for the selected dates */

    free_cancellation_until?: string | undefined;

    [key: string]: any;


    constructor(data?: IHotelInfoPriceOffer) {

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
            this.max_visitors = data["max_visitors"];
            this.offer_images = data["offer_images"];
            this.free_cancellation_until = data["free_cancellation_until"];
        }
    }

    static fromJS(data: any): HotelInfoPriceOffer {
        data = typeof data === 'object' ? data : {};


        let result = new HotelInfoPriceOffer();
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
        data["max_visitors"] = this.max_visitors;
        data["offer_images"] = this.offer_images;
        data["free_cancellation_until"] = this.free_cancellation_until;
        return data;
    }
}