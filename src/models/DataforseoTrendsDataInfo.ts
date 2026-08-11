import { DemographyItemValueInfo, IDemographyItemValueInfo } from "./DemographyItemValueInfo";


export interface IDataforseoTrendsDataInfo   {
        
        /** *relevant keyword for which demographic data is provided* */
        keyword?: string | undefined
        
        /** *contains age range and corresponding keyword popularity values* */
        values?: DemographyItemValueInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoTrendsDataInfo  implements IDataforseoTrendsDataInfo {

    
    /** *relevant keyword for which demographic data is provided* */

    keyword?: string | undefined;

    
    /** *contains age range and corresponding keyword popularity values* */

    values?: DemographyItemValueInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsDataInfo) {

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
            this.keyword = data["keyword"];
            if (Array.isArray(data["values"])) {
                this.values = [];
                for (let item of data["values"]) {
                    this.values.push(DemographyItemValueInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoTrendsDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["values"] = null;
        if (Array.isArray(this.values)) {
            data["values"] = [];
            for (let item of this.values) {
                if (item && typeof item.toJSON === "function") {
                    data["values"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}