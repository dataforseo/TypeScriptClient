export interface IAddressInfo   {
        
        /** *administrative unit or district the local establishment belongs to* */
        borough?: string | undefined
        
        /** *street address of the local establishment* */
        address?: string | undefined
        
        /** *name of the city where the local establishment is located* */
        city?: string | undefined
        
        /** *ZIP code of the local establishment* */
        zip?: string | undefined
        
        /** *DMA region the local establishment belongs to* */
        region?: string | undefined
        
        /** *ISO country code of the local establishment* */
        country_code?: string | undefined

    [key: string]: any;

    }

export class AddressInfo  implements IAddressInfo {

    
    /** *administrative unit or district the local establishment belongs to* */

    borough?: string | undefined;

    
    /** *street address of the local establishment* */

    address?: string | undefined;

    
    /** *name of the city where the local establishment is located* */

    city?: string | undefined;

    
    /** *ZIP code of the local establishment* */

    zip?: string | undefined;

    
    /** *DMA region the local establishment belongs to* */

    region?: string | undefined;

    
    /** *ISO country code of the local establishment* */

    country_code?: string | undefined;

    [key: string]: any;


    constructor(data?: IAddressInfo) {

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
            this.borough = data["borough"];
            this.address = data["address"];
            this.city = data["city"];
            this.zip = data["zip"];
            this.region = data["region"];
            this.country_code = data["country_code"];
        }
    }

    static fromJS(data: any): AddressInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AddressInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["borough"] = this.borough;
        data["address"] = this.address;
        data["city"] = this.city;
        data["zip"] = this.zip;
        data["region"] = this.region;
        data["country_code"] = this.country_code;
        return data;
    }
}