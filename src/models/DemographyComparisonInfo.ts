export interface IDemographyComparisonInfo   {
        
        /** type of element */
        age?: { [key: string]: number[]; } | undefined
        
        /** type of element */
        gender?: { [key: string]: number[]; } | undefined

    [key: string]: any;

    }

export class DemographyComparisonInfo  implements IDemographyComparisonInfo {

    
    /** type of element */

    age?: { [key: string]: number[]; } | undefined;

    
    /** type of element */

    gender?: { [key: string]: number[]; } | undefined;

    [key: string]: any;


    constructor(data?: IDemographyComparisonInfo) {

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
            this.age = data["age"];
            this.gender = data["gender"];
        }
    }

    static fromJS(data: any): DemographyComparisonInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DemographyComparisonInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["age"] = this.age;
        data["gender"] = this.gender;
        return data;
    }
}