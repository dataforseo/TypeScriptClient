export interface ISerpScreenshotRequestInfo   {
        
        /** task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time */
        task_id?: string | undefined
        
        /** browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
Note: by default, browser preset corresponds to the device type specified in the POST request */
        browser_preset?: string | undefined
        
        /** width of the browser resolution
optional field
can be specified in the following range: 240-9999
default value for desktop: 1920
default value for mobile: 390
default value for table: 1024 */
        browser_screen_width?: number | undefined
        
        /** height of the browser resolution
optional field
can be specified in the following range: 240-9999
default value for desktop: 1080
default value for mobile: 844
default value for table: 1366 */
        browser_screen_height?: number | undefined
        
        /** browser scale factor
optional field
can be specified in the following range: 0.5-3
default value for desktop: 1
default value for mobile: 3
default value for table: 2 */
        browser_screen_scale_factor?: number | undefined
        
        /** number of SERP pages
optional field
if depth in the corresponding Task POST request exceeds 10 results (or 1 SERP page), specify the number of SERP pages to screenshot;
default value: 1 */
        page?: number | undefined

    [key: string]: any;

    }

export class SerpScreenshotRequestInfo  implements ISerpScreenshotRequestInfo {
    
    /** task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time */

    task_id?: string | undefined;
    
    /** browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
Note: by default, browser preset corresponds to the device type specified in the POST request */

    browser_preset?: string | undefined;
    
    /** width of the browser resolution
optional field
can be specified in the following range: 240-9999
default value for desktop: 1920
default value for mobile: 390
default value for table: 1024 */

    browser_screen_width?: number | undefined;
    
    /** height of the browser resolution
optional field
can be specified in the following range: 240-9999
default value for desktop: 1080
default value for mobile: 844
default value for table: 1366 */

    browser_screen_height?: number | undefined;
    
    /** browser scale factor
optional field
can be specified in the following range: 0.5-3
default value for desktop: 1
default value for mobile: 3
default value for table: 2 */

    browser_screen_scale_factor?: number | undefined;
    
    /** number of SERP pages
optional field
if depth in the corresponding Task POST request exceeds 10 results (or 1 SERP page), specify the number of SERP pages to screenshot;
default value: 1 */

    page?: number | undefined;

    [key: string]: any;


    constructor(data?: ISerpScreenshotRequestInfo) {

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
            this.task_id = data["task_id"];
            this.browser_preset = data["browser_preset"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_scale_factor = data["browser_screen_scale_factor"];
            this.page = data["page"];
        }
    }

    static fromJS(data: any): SerpScreenshotRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpScreenshotRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_id"] = this.task_id;
        data["browser_preset"] = this.browser_preset;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_scale_factor"] = this.browser_screen_scale_factor;
        data["page"] = this.page;
        return data;
    }
}