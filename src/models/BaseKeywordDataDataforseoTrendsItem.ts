import { DataforseoTrendsGraphDataTrendsGraphDataInfo, IDataforseoTrendsGraphDataTrendsGraphDataInfo } from "./DataforseoTrendsGraphDataTrendsGraphDataInfo";
import { DataforseoTrendsinterestsInfo, IDataforseoTrendsinterestsInfo } from "./DataforseoTrendsinterestsInfo";
import { InterestsComparison, IInterestsComparison } from "./InterestsComparison";
import { Demography, IDemography } from "./Demography";
import { DemographyComparisonInfo, IDemographyComparisonInfo } from "./DemographyComparisonInfo";


export interface IBaseKeywordDataDataforseoTrendsItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element
can take the following values: 1, 2, 3, 4, etc. */
        position?: number | undefined
        
        /** keywords in a POST array */
        keywords?: string[] | undefined

    [key: string]: any;

    }

export class BaseKeywordDataDataforseoTrendsItem  implements IBaseKeywordDataDataforseoTrendsItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** the alignment of the element
can take the following values: 1, 2, 3, 4, etc. */

    position?: number | undefined;

    
    /** keywords in a POST array */

    keywords?: string[] | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseKeywordDataDataforseoTrendsItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.position = data["position"];
            this.keywords = data["keywords"];
        }
    }

    static fromJS(data: any): BaseKeywordDataDataforseoTrendsItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "dataforseo_trends_graph") {

            let result = new DataforseoTrendsDataforseoTrendsGraphElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "subregion_interests") {

            let result = new DataforseoTrendsSubregionInterestsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "demography") {

            let result = new DataforseoTrendsDemographyElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseKeywordDataDataforseoTrendsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["keywords"] = this.keywords;
        return data;
    }
}

 
export interface IDataforseoTrendsDataforseoTrendsGraphElementItem  extends IBaseKeywordDataDataforseoTrendsItem    {
        
        /** contains the same parameters that you specified in the POST request */
        data?: DataforseoTrendsGraphDataTrendsGraphDataInfo[] | undefined
        
        averages?: number[] | undefined

    [key: string]: any;

    }

export class DataforseoTrendsDataforseoTrendsGraphElementItem  extends BaseKeywordDataDataforseoTrendsItem   implements IDataforseoTrendsDataforseoTrendsGraphElementItem {

    
    /** contains the same parameters that you specified in the POST request */

    data?: DataforseoTrendsGraphDataTrendsGraphDataInfo[] | undefined;

    averages?: number[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsDataforseoTrendsGraphElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["data"])) {
                this.data = [];
                for (let item of data["data"]) {
                    this.data.push(DataforseoTrendsGraphDataTrendsGraphDataInfo.fromJS(item));
                }
            }
            this.averages = data["averages"];
        }
    }

    static fromJS(data: any): DataforseoTrendsDataforseoTrendsGraphElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsDataforseoTrendsGraphElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = null;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data) {
                if (item && typeof item.toJSON === "function") {
                    data["data"].push(item?.toJSON());
                }
            }
        }
        data["averages"] = this.averages;
        return data;
    }
}

 
export interface IDataforseoTrendsSubregionInterestsElementItem  extends IBaseKeywordDataDataforseoTrendsItem    {
        
        /** subregional keyword popuarity data for each specified term */
        interests?: DataforseoTrendsinterestsInfo[] | undefined
        
        /** comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null */
        interests_comparison?: InterestsComparison | undefined

    [key: string]: any;

    }

export class DataforseoTrendsSubregionInterestsElementItem  extends BaseKeywordDataDataforseoTrendsItem   implements IDataforseoTrendsSubregionInterestsElementItem {

    
    /** subregional keyword popuarity data for each specified term */

    interests?: DataforseoTrendsinterestsInfo[] | undefined;

    
    /** comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null */

    interests_comparison?: InterestsComparison | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsSubregionInterestsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["interests"])) {
                this.interests = [];
                for (let item of data["interests"]) {
                    this.interests.push(DataforseoTrendsinterestsInfo.fromJS(item));
                }
            }
            this.interests_comparison = data["interests_comparison"] ? InterestsComparison.fromJS(data["interests_comparison"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoTrendsSubregionInterestsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsSubregionInterestsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["interests"] = null;
        if (Array.isArray(this.interests)) {
            data["interests"] = [];
            for (let item of this.interests) {
                if (item && typeof item.toJSON === "function") {
                    data["interests"].push(item?.toJSON());
                }
            }
        }
        data["interests_comparison"] = this.interests_comparison ? InterestsComparison.fromJS(this.interests_comparison)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDataforseoTrendsDemographyElementItem  extends IBaseKeywordDataDataforseoTrendsItem    {
        
        /** demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender */
        demography?: Demography | undefined
        
        /** comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null */
        demography_comparison?: DemographyComparisonInfo | undefined

    [key: string]: any;

    }

export class DataforseoTrendsDemographyElementItem  extends BaseKeywordDataDataforseoTrendsItem   implements IDataforseoTrendsDemographyElementItem {

    
    /** demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender */

    demography?: Demography | undefined;

    
    /** comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null */

    demography_comparison?: DemographyComparisonInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsDemographyElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.demography = data["demography"] ? Demography.fromJS(data["demography"]) : <any>undefined;
            this.demography_comparison = data["demography_comparison"] ? DemographyComparisonInfo.fromJS(data["demography_comparison"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoTrendsDemographyElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsDemographyElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["demography"] = this.demography ? Demography.fromJS(this.demography)?.toJSON() : <any>undefined;
        data["demography_comparison"] = this.demography_comparison ? DemographyComparisonInfo.fromJS(this.demography_comparison)?.toJSON() : <any>undefined;
        return data;
    }
}