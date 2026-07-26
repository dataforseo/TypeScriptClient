import { DataforseoTrendsinterestsValuesInfo, IDataforseoTrendsinterestsValuesInfo } from "./DataforseoTrendsinterestsValuesInfo";


export interface IDataforseoTrendsinterestsInfo   {
        
        /** relevant keyword the data included in the values element is based on this keyword */
        keyword?: string | undefined
        
        /** contains data on relative keyword popularity by country or region */
        values?: DataforseoTrendsinterestsValuesInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoTrendsinterestsInfo  implements IDataforseoTrendsinterestsInfo {

    
    /** relevant keyword the data included in the values element is based on this keyword */

    keyword?: string | undefined;

    
    /** contains data on relative keyword popularity by country or region */

    values?: DataforseoTrendsinterestsValuesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsinterestsInfo) {

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
                    this.values.push(DataforseoTrendsinterestsValuesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoTrendsinterestsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsinterestsInfo();
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