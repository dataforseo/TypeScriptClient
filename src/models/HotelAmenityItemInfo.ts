export interface IHotelAmenityItemInfo   {
        
        /** *standardised amenity name* */
        amenity?: string | undefined
        
        /** *displayed amenity name* */
        amenity_label?: string | undefined
        
        /** *standardised details about the amenity* */
        hint?: string | undefined
        
        /** *displayed details about the amenity* */
        hint_label?: string | undefined
        
        /** *indicates whether the `amenity` is available in the hotel* */
        is_available?: boolean | undefined

    [key: string]: any;

    }

export class HotelAmenityItemInfo  implements IHotelAmenityItemInfo {

    
    /** *standardised amenity name* */

    amenity?: string | undefined;

    
    /** *displayed amenity name* */

    amenity_label?: string | undefined;

    
    /** *standardised details about the amenity* */

    hint?: string | undefined;

    
    /** *displayed details about the amenity* */

    hint_label?: string | undefined;

    
    /** *indicates whether the `amenity` is available in the hotel* */

    is_available?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IHotelAmenityItemInfo) {

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
            this.amenity = data["amenity"];
            this.amenity_label = data["amenity_label"];
            this.hint = data["hint"];
            this.hint_label = data["hint_label"];
            this.is_available = data["is_available"];
        }
    }

    static fromJS(data: any): HotelAmenityItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelAmenityItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["amenity"] = this.amenity;
        data["amenity_label"] = this.amenity_label;
        data["hint"] = this.hint;
        data["hint_label"] = this.hint_label;
        data["is_available"] = this.is_available;
        return data;
    }
}