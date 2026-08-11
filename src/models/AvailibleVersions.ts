export interface IAvailibleVersions   {
        
        /** *lighthouse version* */
        version?: string | undefined
        
        /** *the version is used by default* if `false`, the version is not used by default and should be specified in the corresponding field of the POST request if necessary */
        default_?: boolean | undefined

    [key: string]: any;

    }

export class AvailibleVersions  implements IAvailibleVersions {

    
    /** *lighthouse version* */

    version?: string | undefined;

    
    /** *the version is used by default* if `false`, the version is not used by default and should be specified in the corresponding field of the POST request if necessary */

    default_?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IAvailibleVersions) {

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
            this.version = data["version"];
            this.default_ = data["default"];
        }
    }

    static fromJS(data: any): AvailibleVersions {
        data = typeof data === 'object' ? data : {};


        let result = new AvailibleVersions();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["version"] = this.version;
        data["default"] = this.default_;
        return data;
    }
}