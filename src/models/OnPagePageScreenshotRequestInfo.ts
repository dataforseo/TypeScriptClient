export interface IOnPagePageScreenshotRequestInfo   {
        
        /** page url required field absolute URL of the page to snap note: if the URL you indicate here returns a 404 status code or the indicated value is not a valid URL, you will obtain 'error_message':'Screenshot is empty' in the response array */
        url?: string | undefined
        
        /** language header for accessing the website optional field all locale formats are supported (xx, xx-XX, xxx-XX, etc.) note: if you do not specify this parameter, some websites may deny access; in this case, you will obtain 'error_message':'Screenshot is empty' in the response array */
        accept_language?: string | undefined
        
        /** custom user agent optional field custom user agent for crawling a website example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 default value: Mozilla/5.0 (compatible; RSiteAuditor) */
        custom_user_agent?: string | undefined
        
        /** preset for browser screen parameters optional field if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factor possible values: desktop, mobile, tablet desktop preset will apply the following values: browser_screen_width: 1920 browser_screen_height: 1080 browser_screen_scale_factor: 1 mobile preset will apply the following values: browser_screen_width: 390 browser_screen_height: 844 browser_screen_scale_factor: 3 tablet preset will apply the following values: browser_screen_width: 1024 browser_screen_height: 1366 browser_screen_scale_factor: 2 Note: in this endpoint, the enable_browser_rendering, enable_javascript, load_resources, and enable_xhr parameters are always enabled. */
        browser_preset?: string | undefined
        
        /** browser screen width optional field you can set a custom browser screen width to perform audit for a particular device; if you use this field, you don’t need to indicate browser_preset as it will be ignored; minimum value, in pixels: 240 maximum value, in pixels: 9999 */
        browser_screen_width?: number | undefined
        
        /** browser screen height optional field you can set a custom browser screen height to perform audit for a particular device; if you use this field, you don’t need to indicate browser_preset as it will be ignored; minimum value, in pixels: 240 maximum value, in pixels: 9999 */
        browser_screen_height?: number | undefined
        
        /** browser screen scale factor optional field you can set a custom browser screen resolution ratio to perform audit for a particular device; if you use this field, you don’t need to indicate browser_preset as it will be ignored; minimum value: 0.5 maximum value: 3 */
        browser_screen_scale_factor?: number | undefined
        
        /** take a screenshot of the full page optional field set to false if you want to capture only the part of the page displayed before scrolling default value: true */
        full_page_screenshot?: boolean | undefined
        
        /** disable the cookie popup  optional field set to true if you want to disable the popup requesting cookie consent from the user; default value: false */
        disable_cookie_popup?: boolean | undefined
        
        /** switch proxy pool optional field if true, additional proxy pools will be used to obtain the requested data; the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors */
        switch_pool?: boolean | undefined
        
        /** proxy pool optional field you can choose a location of the proxy pool that will be used to obtain the requested data; the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors possible values: us, de */
        ip_pool_for_scan?: string | undefined

    [key: string]: any;

    }

export class OnPagePageScreenshotRequestInfo  implements IOnPagePageScreenshotRequestInfo {

    
    /** page url required field absolute URL of the page to snap note: if the URL you indicate here returns a 404 status code or the indicated value is not a valid URL, you will obtain 'error_message':'Screenshot is empty' in the response array */

    url?: string | undefined;

    
    /** language header for accessing the website optional field all locale formats are supported (xx, xx-XX, xxx-XX, etc.) note: if you do not specify this parameter, some websites may deny access; in this case, you will obtain 'error_message':'Screenshot is empty' in the response array */

    accept_language?: string | undefined;

    
    /** custom user agent optional field custom user agent for crawling a website example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 default value: Mozilla/5.0 (compatible; RSiteAuditor) */

    custom_user_agent?: string | undefined;

    
    /** preset for browser screen parameters optional field if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factor possible values: desktop, mobile, tablet desktop preset will apply the following values: browser_screen_width: 1920 browser_screen_height: 1080 browser_screen_scale_factor: 1 mobile preset will apply the following values: browser_screen_width: 390 browser_screen_height: 844 browser_screen_scale_factor: 3 tablet preset will apply the following values: browser_screen_width: 1024 browser_screen_height: 1366 browser_screen_scale_factor: 2 Note: in this endpoint, the enable_browser_rendering, enable_javascript, load_resources, and enable_xhr parameters are always enabled. */

    browser_preset?: string | undefined;

    
    /** browser screen width optional field you can set a custom browser screen width to perform audit for a particular device; if you use this field, you don’t need to indicate browser_preset as it will be ignored; minimum value, in pixels: 240 maximum value, in pixels: 9999 */

    browser_screen_width?: number | undefined;

    
    /** browser screen height optional field you can set a custom browser screen height to perform audit for a particular device; if you use this field, you don’t need to indicate browser_preset as it will be ignored; minimum value, in pixels: 240 maximum value, in pixels: 9999 */

    browser_screen_height?: number | undefined;

    
    /** browser screen scale factor optional field you can set a custom browser screen resolution ratio to perform audit for a particular device; if you use this field, you don’t need to indicate browser_preset as it will be ignored; minimum value: 0.5 maximum value: 3 */

    browser_screen_scale_factor?: number | undefined;

    
    /** take a screenshot of the full page optional field set to false if you want to capture only the part of the page displayed before scrolling default value: true */

    full_page_screenshot?: boolean | undefined;

    
    /** disable the cookie popup  optional field set to true if you want to disable the popup requesting cookie consent from the user; default value: false */

    disable_cookie_popup?: boolean | undefined;

    
    /** switch proxy pool optional field if true, additional proxy pools will be used to obtain the requested data; the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors */

    switch_pool?: boolean | undefined;

    
    /** proxy pool optional field you can choose a location of the proxy pool that will be used to obtain the requested data; the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors possible values: us, de */

    ip_pool_for_scan?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPagePageScreenshotRequestInfo) {

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
            this.url = data["url"];
            this.accept_language = data["accept_language"];
            this.custom_user_agent = data["custom_user_agent"];
            this.browser_preset = data["browser_preset"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_scale_factor = data["browser_screen_scale_factor"];
            this.full_page_screenshot = data["full_page_screenshot"];
            this.disable_cookie_popup = data["disable_cookie_popup"];
            this.switch_pool = data["switch_pool"];
            this.ip_pool_for_scan = data["ip_pool_for_scan"];
        }
    }

    static fromJS(data: any): OnPagePageScreenshotRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPagePageScreenshotRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["accept_language"] = this.accept_language;
        data["custom_user_agent"] = this.custom_user_agent;
        data["browser_preset"] = this.browser_preset;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_scale_factor"] = this.browser_screen_scale_factor;
        data["full_page_screenshot"] = this.full_page_screenshot;
        data["disable_cookie_popup"] = this.disable_cookie_popup;
        data["switch_pool"] = this.switch_pool;
        data["ip_pool_for_scan"] = this.ip_pool_for_scan;
        return data;
    }
}