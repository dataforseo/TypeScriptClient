export interface IBusinessDataAttributesInfo   {
        
        /** *available attributes* indicates attributes a business entity can offer */
        available_attributes?: { [key: string]: string[]; } | undefined
        
        /** *unavailable attributes* indicates attributes a business entity cannot offer */
        unavailable_attributes?: { [key: string]: string[]; } | undefined

    [key: string]: any;

    }

export class BusinessDataAttributesInfo  implements IBusinessDataAttributesInfo {

    
    /** *available attributes* indicates attributes a business entity can offer */

    available_attributes?: { [key: string]: string[]; } | undefined;

    
    /** *unavailable attributes* indicates attributes a business entity cannot offer */

    unavailable_attributes?: { [key: string]: string[]; } | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataAttributesInfo) {

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
            this.available_attributes = data["available_attributes"];
            this.unavailable_attributes = data["unavailable_attributes"];
        }
    }

    static fromJS(data: any): BusinessDataAttributesInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataAttributesInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["available_attributes"] = this.available_attributes;
        data["unavailable_attributes"] = this.unavailable_attributes;
        return data;
    }
}