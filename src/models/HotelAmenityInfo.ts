import { HotelAmenityItemInfo, IHotelAmenityItemInfo } from "./HotelAmenityItemInfo";


export interface IHotelAmenityInfo   {
        
        /** *standardised category of the ammenity* */
        category?: string | undefined
        
        /** *label of the category* */
        category_label?: string | undefined
        
        /** *specific amenities and details* */
        items?: HotelAmenityItemInfo[] | undefined

    [key: string]: any;

    }

export class HotelAmenityInfo  implements IHotelAmenityInfo {

    
    /** *standardised category of the ammenity* */

    category?: string | undefined;

    
    /** *label of the category* */

    category_label?: string | undefined;

    
    /** *specific amenities and details* */

    items?: HotelAmenityItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelAmenityInfo) {

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
            this.category = data["category"];
            this.category_label = data["category_label"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HotelAmenityItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelAmenityInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelAmenityInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["category_label"] = this.category_label;
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