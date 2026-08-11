import { DataforseoTrendsDataInfo, IDataforseoTrendsDataInfo } from "./DataforseoTrendsDataInfo";


export interface IDemography   {
        
        /** *distribution of keyword popularity by age* */
        age?: DataforseoTrendsDataInfo[] | undefined
        
        /** *distribution of keyword popularity by gender* */
        gender?: DataforseoTrendsDataInfo[] | undefined

    [key: string]: any;

    }

export class Demography  implements IDemography {

    
    /** *distribution of keyword popularity by age* */

    age?: DataforseoTrendsDataInfo[] | undefined;

    
    /** *distribution of keyword popularity by gender* */

    gender?: DataforseoTrendsDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDemography) {

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
            if (Array.isArray(data["age"])) {
                this.age = [];
                for (let item of data["age"]) {
                    this.age.push(DataforseoTrendsDataInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["gender"])) {
                this.gender = [];
                for (let item of data["gender"]) {
                    this.gender.push(DataforseoTrendsDataInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): Demography {
        data = typeof data === 'object' ? data : {};


        let result = new Demography();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["age"] = null;
        if (Array.isArray(this.age)) {
            data["age"] = [];
            for (let item of this.age) {
                if (item && typeof item.toJSON === "function") {
                    data["age"].push(item?.toJSON());
                }
            }
        }
        data["gender"] = null;
        if (Array.isArray(this.gender)) {
            data["gender"] = [];
            for (let item of this.gender) {
                if (item && typeof item.toJSON === "function") {
                    data["gender"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}