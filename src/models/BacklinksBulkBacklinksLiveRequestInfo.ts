export interface IBacklinksBulkBacklinksLiveRequestInfo   {
        
        /** domains, subdomains or webpages to get the number of backlinks for
required field
you can set up to 1000 domains, subdomains or webpages
the domain or subdomain should be specified without https:// and www.
the page should be specified with absolute URL (including http:// or https://)
example:
'targets': [
  'forbes.com',
  'cnn.com',
  'bbc.com',
  'yelp.com',
  'https://www.apple.com/iphone/',
  'https://ahrefs.com/blog/',
  'ibm.com',
  'https://variety.com/',
  'https://stackoverflow.com/',
  'www.trustpilot.com'
] */
        targets?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksBulkBacklinksLiveRequestInfo  implements IBacklinksBulkBacklinksLiveRequestInfo {

    
    /** domains, subdomains or webpages to get the number of backlinks for
required field
you can set up to 1000 domains, subdomains or webpages
the domain or subdomain should be specified without https:// and www.
the page should be specified with absolute URL (including http:// or https://)
example:
'targets': [
  'forbes.com',
  'cnn.com',
  'bbc.com',
  'yelp.com',
  'https://www.apple.com/iphone/',
  'https://ahrefs.com/blog/',
  'ibm.com',
  'https://variety.com/',
  'https://stackoverflow.com/',
  'www.trustpilot.com'
] */

    targets?: string[] | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkBacklinksLiveRequestInfo) {

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
            this.targets = data["targets"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksBulkBacklinksLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkBacklinksLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = this.targets;
        data["tag"] = this.tag;
        return data;
    }
}