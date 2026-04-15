export interface IDomainAnalyticsWhoisOverviewLiveRequestInfo   {
        
        /** the maximum number of returned domainsoptional fielddefault value: 100maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned itemsoptional fielddefault value: 0if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items;Note: we recommend using this parameter only when retrieving up to 10,000 results for retrieving over 10,000 results, use the offset_token instead */
        offset?: number | undefined
        
        /** token for subsequent requestsoptional fieldprovided in the identical filed of the response to each request;use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;offset_token values are unique for each subsequent taskNote: if the offset_token is specified in the request, all other parameters should be identical to the previous requestlearn more about this parameter on our Help Center */
        offset_token?: string | undefined
        
        /** array of results filtering parametersoptional fieldyou can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:regex, <, <=, >, >=, =, <>, in, not_in, like, not_likeyou can use the % operator with like and not_like to match any string of zero or more characters */
        filters?: any[] | undefined
        
        /** results sorting rulesoptional fieldyou can use the same values as in the filters array to sort the resultspossible sorting types:asc - results will be sorted in the ascending orderdesc - results will be sorted in the descending orderthe comma is used as a separatorexample:['metrics.organic.pos_1,desc']default rule:['metrics.organic.count,desc']note that you can set no more than three sorting rules in a single requestyou should use a comma to separate several sorting rulesexample:['expiration_datetime,asc','metrics.organic.etv,desc','metrics.organic.pos_1,desc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsWhoisOverviewLiveRequestInfo  implements IDomainAnalyticsWhoisOverviewLiveRequestInfo {
    
    /** the maximum number of returned domainsoptional fielddefault value: 100maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned itemsoptional fielddefault value: 0if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items;Note: we recommend using this parameter only when retrieving up to 10,000 results for retrieving over 10,000 results, use the offset_token instead */

    offset?: number | undefined;
    
    /** token for subsequent requestsoptional fieldprovided in the identical filed of the response to each request;use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;offset_token values are unique for each subsequent taskNote: if the offset_token is specified in the request, all other parameters should be identical to the previous requestlearn more about this parameter on our Help Center */

    offset_token?: string | undefined;
    
    /** array of results filtering parametersoptional fieldyou can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:regex, <, <=, >, >=, =, <>, in, not_in, like, not_likeyou can use the % operator with like and not_like to match any string of zero or more characters */

    filters?: any[] | undefined;
    
    /** results sorting rulesoptional fieldyou can use the same values as in the filters array to sort the resultspossible sorting types:asc - results will be sorted in the ascending orderdesc - results will be sorted in the descending orderthe comma is used as a separatorexample:['metrics.organic.pos_1,desc']default rule:['metrics.organic.count,desc']note that you can set no more than three sorting rules in a single requestyou should use a comma to separate several sorting rulesexample:['expiration_datetime,asc','metrics.organic.etv,desc','metrics.organic.pos_1,desc'] */

    order_by?: string[] | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsWhoisOverviewLiveRequestInfo) {

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
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DomainAnalyticsWhoisOverviewLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsWhoisOverviewLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}