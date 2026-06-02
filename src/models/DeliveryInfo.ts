import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IDeliveryInfo   {
        
        /** earliest delivery datethe earliest date when the product can be shipped */
        delivery_date_from?: string | undefined
        
        /** latest delivery datethe latest date when the product can be delivered */
        delivery_date_to?: string | undefined
        
        /** earliest free delivery datethe earliest date when the product can be delivered with a fast delivery option */
        fastest_delivery_date_from?: string | undefined
        
        /** latest free delivery datethe latest date when the product can be delivered with a fast delivery option */
        fastest_delivery_date_to?: string | undefined
        
        /** delivery informationmessage accompanying the delivery information as posted by the seller */
        delivery_message?: string | undefined
        
        /** price for the deliveryprice of the delivery based on the location you specified in the POST request;if free delivery is available, the value is null */
        delivery_price?: PriceInfo | undefined

    [key: string]: any;

    }

export class DeliveryInfo  implements IDeliveryInfo {
    
    /** earliest delivery datethe earliest date when the product can be shipped */

    delivery_date_from?: string | undefined;
    
    /** latest delivery datethe latest date when the product can be delivered */

    delivery_date_to?: string | undefined;
    
    /** earliest free delivery datethe earliest date when the product can be delivered with a fast delivery option */

    fastest_delivery_date_from?: string | undefined;
    
    /** latest free delivery datethe latest date when the product can be delivered with a fast delivery option */

    fastest_delivery_date_to?: string | undefined;
    
    /** delivery informationmessage accompanying the delivery information as posted by the seller */

    delivery_message?: string | undefined;
    
    /** price for the deliveryprice of the delivery based on the location you specified in the POST request;if free delivery is available, the value is null */

    delivery_price?: PriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IDeliveryInfo) {

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
            this.delivery_date_from = data["delivery_date_from"];
            this.delivery_date_to = data["delivery_date_to"];
            this.fastest_delivery_date_from = data["fastest_delivery_date_from"];
            this.fastest_delivery_date_to = data["fastest_delivery_date_to"];
            this.delivery_message = data["delivery_message"];
            this.delivery_price = data["delivery_price"] ? PriceInfo.fromJS(data["delivery_price"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DeliveryInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DeliveryInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["delivery_date_from"] = this.delivery_date_from;
        data["delivery_date_to"] = this.delivery_date_to;
        data["fastest_delivery_date_from"] = this.fastest_delivery_date_from;
        data["fastest_delivery_date_to"] = this.fastest_delivery_date_to;
        data["delivery_message"] = this.delivery_message;
        data["delivery_price"] = this.delivery_price ? PriceInfo.fromJS(this.delivery_price)?.toJSON() : <any>undefined;
        return data;
    }
}