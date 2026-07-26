export interface IOnPageDuplicateContentRequestInfo   {
        
        /** ID of the task required field you can get this ID in the response of the Task POST endpoint example: “07131248-1535-0216-1000-17384017ad04” */
        id?: string | undefined
        
        /** page URL required field specify the initial page you want to receive duplicate content for */
        url?: string | undefined
        
        /** content similarity score by default, the content is considered duplicate if the value is greater than or equals 6 you can specify any similarity score in the 0-to-10 range */
        similarity?: number | undefined
        
        /** the maximum number of returned pages optional field default value: 100 maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned pages optional field default value: 0 maximum value: 2000000 if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */
        offset?: number | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageDuplicateContentRequestInfo  implements IOnPageDuplicateContentRequestInfo {

    
    /** ID of the task required field you can get this ID in the response of the Task POST endpoint example: “07131248-1535-0216-1000-17384017ad04” */

    id?: string | undefined;

    
    /** page URL required field specify the initial page you want to receive duplicate content for */

    url?: string | undefined;

    
    /** content similarity score by default, the content is considered duplicate if the value is greater than or equals 6 you can specify any similarity score in the 0-to-10 range */

    similarity?: number | undefined;

    
    /** the maximum number of returned pages optional field default value: 100 maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned pages optional field default value: 0 maximum value: 2000000 if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */

    offset?: number | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageDuplicateContentRequestInfo) {

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
            this.id = data["id"];
            this.url = data["url"];
            this.similarity = data["similarity"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageDuplicateContentRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageDuplicateContentRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["url"] = this.url;
        data["similarity"] = this.similarity;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}