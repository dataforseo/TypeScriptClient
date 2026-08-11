export interface IDemographyItemValueInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** *keyword popularity rate within the specified age range* using this `value` you can understand how popular a keyword is within each age range;  calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100); a value of `100` is the highest popularity for the term a value of `0` means there was not enough data for this term */
        value?: number | undefined

    [key: string]: any;

    }

export class DemographyItemValueInfo  implements IDemographyItemValueInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** *keyword popularity rate within the specified age range* using this `value` you can understand how popular a keyword is within each age range;  calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100); a value of `100` is the highest popularity for the term a value of `0` means there was not enough data for this term */

    value?: number | undefined;

    [key: string]: any;


    constructor(data?: IDemographyItemValueInfo) {

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
            this.value = data["value"];
        }
    }

    static fromJS(data: any): DemographyItemValueInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DemographyItemValueInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["value"] = this.value;
        return data;
    }
}