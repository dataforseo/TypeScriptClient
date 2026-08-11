export interface IOnPageInstantPagesRequestInfo   {
        
        /** *target page url* **required field** absolute URL of the target page; **Note #1:** results will be returned for the specified URL only; **Note #2:** to prevent denial-of-service events, tasks that contain a duplicate crawl host will be returned with a 40501 error; to prevent this error from occurring, avoid setting tasks with the same domain if at least one of your previous tasks with this domain (including a page URL on the domain) is still in a crawling queue */
        url?: string | undefined
        
        /** *custom user agent* optional field custom user agent for crawling a website example: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36` default value: `Mozilla/5.0 (compatible; RSiteAuditor)` */
        custom_user_agent?: string | undefined
        
        /** *preset for browser screen parameters* optional field if you use this field, you don't need to indicate `browser_screen_width`, `browser_screen_height`, `browser_screen_scale_factor`possible values: `desktop`, `mobile`, `tablet``desktop` preset will apply the following values: `browser_screen_width: 1920` `browser_screen_height: 1080` `browser_screen_scale_factor: 1` `mobile` preset will apply the following values: `browser_screen_width: 390` `browser_screen_height: 844` `browser_screen_scale_factor: 3` `tablet` preset will apply the following values: `browser_screen_width: 1024` `browser_screen_height: 1366` `browser_screen_scale_factor: 2` **Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true` */
        browser_preset?: string | undefined
        
        /** *browser screen width* optional field you can set a custom browser screen width to perform audit for a particular device; if you use this field, you don't need to indicate `browser_preset` as it will be ignored;**Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true`minimum value, in pixels: `240` maximum value, in pixels: `9999` */
        browser_screen_width?: number | undefined
        
        /** *browser screen height* optional field you can set a custom browser screen height to perform audit for a particular device; if you use this field, you don't need to indicate `browser_preset` as it will be ignored;**Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true`minimum value, in pixels: `240` maximum value, in pixels: `9999` */
        browser_screen_height?: number | undefined
        
        /** *browser screen scale factor* optional field you can set a custom browser screen resolution ratio to perform audit for a particular device; if you use this field, you don't need to indicate `browser_preset` as it will be ignored;**Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true`minimum value: `0.5` maximum value: `3` */
        browser_screen_scale_factor?: number | undefined
        
        /** *store HTML of a crawled page* optional field set to `true` if you want get the HTML of the page using the [OnPage Raw HTML endpoint](/v3/on_page/raw_html/) default value: `false` */
        store_raw_html?: boolean | undefined
        
        /** *language header for accessing the website* optional field all locale formats are supported (xx, xx-XX, xxx-XX, etc.) **Note:** if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the `'type':'broken` in the response array */
        accept_language?: string | undefined
        
        /** *load resources* optional field set to `true` if you want to load image, stylesheets, scripts, and broken resources default value: `false` **Note:** if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter [in our help article](https://dataforseo.com/help-center/cost-of-onpage-api-parameters); the cost can be calculated on the [Pricing Page](https://dataforseo.com/pricing/on-page/onpage-api) */
        load_resources?: boolean | undefined
        
        /** *emulate browser rendering to measure Core Web Vitals* optional field by using this parameter you will be able to emulate a browser when loading a web page; `enable_browser_rendering` loads styles, images, fonts, animations, videos, and other resources on a page; default value: `false` set to `true` to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response; **if you use this field, parameters `enable_javascript`, and `load_resources` are enabled automatically;** **Note:** if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter [in our help article](https://dataforseo.com/help-center/cost-of-onpage-api-parameters); the cost can be calculated on the [Pricing Page](https://dataforseo.com/pricing/on-page/onpage-api) */
        enable_browser_rendering?: boolean | undefined
        
        /** *disable the cookie popup* optional field set to `true` if you want to disable the popup requesting cookie consent from the user; default value: `false` */
        disable_cookie_popup?: boolean | undefined
        
        /** *return data on pages despite the timeout error* optional field if `true`, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error; default value: `false` */
        return_despite_timeout?: boolean | undefined
        
        /** *enable XMLHttpRequest on a page* optional field set to `true` if you want our crawler to request data from a web server using the XMLHttpRequest object default value: `false`if you use this field, `enable_javascript` must be set to `true`; */
        enable_xhr?: boolean | undefined
        
        /** *custom javascript* optional field`Note` that the execution time for the script you enter here should be 700 ms maximum; for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a `scr` attribute: `let meta = { haveGoogleAnalytics: false, haveTagManager: false };rnfor (var i = 0; i = 0)rn      meta.haveGoogleAnalytics = true;rntif (src.indexOf('gtm.js') >= 0)rn      meta.haveTagManager = true;rn  }rn}rnmeta;`the returned value depends on what you specified in this field. For instance, if you specify the following script: `meta = {}; meta.url = document.URL; meta.test = 'test'; meta;` as a response you will receive the following data: `'custom_js_response': {'url': 'https://dataforseo.com/','test': 'test'}` */
        custom_js?: string | undefined
        
        /** *enable microdata validation* optional field if set to `true`, you can use the [OnPage API Microdata endpoint](/v3/on_page/microdata/) with the `id` of the task; default value: `false` */
        validate_micromarkup?: boolean | undefined
        
        /** *check spelling* optional field set to `true` to check spelling on a website using [Hunspell](http://hunspell.github.io/) library default value: `false` */
        check_spell?: boolean | undefined
        
        /** *custom threshold values for checks* optional field you can specify custom threshold values for the parameters included in the `checks` array of OnPage API responses; **Note:** only integer threshold values can be modified; */
        checks_threshold?: { [key: string]: number; } | undefined
        
        /** *switch proxy pool* optional field if `true`, additional proxy pools will be used to obtain the requested data; the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional `rate-limit` and/or `site_unreachable` errors */
        switch_pool?: boolean | undefined
        
        /** *proxy pool* optional field you can choose a location of the proxy pool that will be used to obtain the requested data; the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional `site_unreachable` errors possible values: `us`, `de` */
        ip_pool_for_scan?: string | undefined

    [key: string]: any;

    }

export class OnPageInstantPagesRequestInfo  implements IOnPageInstantPagesRequestInfo {

    
    /** *target page url* **required field** absolute URL of the target page; **Note #1:** results will be returned for the specified URL only; **Note #2:** to prevent denial-of-service events, tasks that contain a duplicate crawl host will be returned with a 40501 error; to prevent this error from occurring, avoid setting tasks with the same domain if at least one of your previous tasks with this domain (including a page URL on the domain) is still in a crawling queue */

    url?: string | undefined;

    
    /** *custom user agent* optional field custom user agent for crawling a website example: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36` default value: `Mozilla/5.0 (compatible; RSiteAuditor)` */

    custom_user_agent?: string | undefined;

    
    /** *preset for browser screen parameters* optional field if you use this field, you don't need to indicate `browser_screen_width`, `browser_screen_height`, `browser_screen_scale_factor`possible values: `desktop`, `mobile`, `tablet``desktop` preset will apply the following values: `browser_screen_width: 1920` `browser_screen_height: 1080` `browser_screen_scale_factor: 1` `mobile` preset will apply the following values: `browser_screen_width: 390` `browser_screen_height: 844` `browser_screen_scale_factor: 3` `tablet` preset will apply the following values: `browser_screen_width: 1024` `browser_screen_height: 1366` `browser_screen_scale_factor: 2` **Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true` */

    browser_preset?: string | undefined;

    
    /** *browser screen width* optional field you can set a custom browser screen width to perform audit for a particular device; if you use this field, you don't need to indicate `browser_preset` as it will be ignored;**Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true`minimum value, in pixels: `240` maximum value, in pixels: `9999` */

    browser_screen_width?: number | undefined;

    
    /** *browser screen height* optional field you can set a custom browser screen height to perform audit for a particular device; if you use this field, you don't need to indicate `browser_preset` as it will be ignored;**Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true`minimum value, in pixels: `240` maximum value, in pixels: `9999` */

    browser_screen_height?: number | undefined;

    
    /** *browser screen scale factor* optional field you can set a custom browser screen resolution ratio to perform audit for a particular device; if you use this field, you don't need to indicate `browser_preset` as it will be ignored;**Note:** to use this parameter, set `enable_javascript` or `enable_browser_rendering` to `true`minimum value: `0.5` maximum value: `3` */

    browser_screen_scale_factor?: number | undefined;

    
    /** *store HTML of a crawled page* optional field set to `true` if you want get the HTML of the page using the [OnPage Raw HTML endpoint](/v3/on_page/raw_html/) default value: `false` */

    store_raw_html?: boolean | undefined;

    
    /** *language header for accessing the website* optional field all locale formats are supported (xx, xx-XX, xxx-XX, etc.) **Note:** if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the `'type':'broken` in the response array */

    accept_language?: string | undefined;

    
    /** *load resources* optional field set to `true` if you want to load image, stylesheets, scripts, and broken resources default value: `false` **Note:** if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter [in our help article](https://dataforseo.com/help-center/cost-of-onpage-api-parameters); the cost can be calculated on the [Pricing Page](https://dataforseo.com/pricing/on-page/onpage-api) */

    load_resources?: boolean | undefined;

    
    /** *emulate browser rendering to measure Core Web Vitals* optional field by using this parameter you will be able to emulate a browser when loading a web page; `enable_browser_rendering` loads styles, images, fonts, animations, videos, and other resources on a page; default value: `false` set to `true` to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response; **if you use this field, parameters `enable_javascript`, and `load_resources` are enabled automatically;** **Note:** if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter [in our help article](https://dataforseo.com/help-center/cost-of-onpage-api-parameters); the cost can be calculated on the [Pricing Page](https://dataforseo.com/pricing/on-page/onpage-api) */

    enable_browser_rendering?: boolean | undefined;

    
    /** *disable the cookie popup* optional field set to `true` if you want to disable the popup requesting cookie consent from the user; default value: `false` */

    disable_cookie_popup?: boolean | undefined;

    
    /** *return data on pages despite the timeout error* optional field if `true`, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error; default value: `false` */

    return_despite_timeout?: boolean | undefined;

    
    /** *enable XMLHttpRequest on a page* optional field set to `true` if you want our crawler to request data from a web server using the XMLHttpRequest object default value: `false`if you use this field, `enable_javascript` must be set to `true`; */

    enable_xhr?: boolean | undefined;

    
    /** *custom javascript* optional field`Note` that the execution time for the script you enter here should be 700 ms maximum; for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a `scr` attribute: `let meta = { haveGoogleAnalytics: false, haveTagManager: false };rnfor (var i = 0; i = 0)rn      meta.haveGoogleAnalytics = true;rntif (src.indexOf('gtm.js') >= 0)rn      meta.haveTagManager = true;rn  }rn}rnmeta;`the returned value depends on what you specified in this field. For instance, if you specify the following script: `meta = {}; meta.url = document.URL; meta.test = 'test'; meta;` as a response you will receive the following data: `'custom_js_response': {'url': 'https://dataforseo.com/','test': 'test'}` */

    custom_js?: string | undefined;

    
    /** *enable microdata validation* optional field if set to `true`, you can use the [OnPage API Microdata endpoint](/v3/on_page/microdata/) with the `id` of the task; default value: `false` */

    validate_micromarkup?: boolean | undefined;

    
    /** *check spelling* optional field set to `true` to check spelling on a website using [Hunspell](http://hunspell.github.io/) library default value: `false` */

    check_spell?: boolean | undefined;

    
    /** *custom threshold values for checks* optional field you can specify custom threshold values for the parameters included in the `checks` array of OnPage API responses; **Note:** only integer threshold values can be modified; */

    checks_threshold?: { [key: string]: number; } | undefined;

    
    /** *switch proxy pool* optional field if `true`, additional proxy pools will be used to obtain the requested data; the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional `rate-limit` and/or `site_unreachable` errors */

    switch_pool?: boolean | undefined;

    
    /** *proxy pool* optional field you can choose a location of the proxy pool that will be used to obtain the requested data; the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional `site_unreachable` errors possible values: `us`, `de` */

    ip_pool_for_scan?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageInstantPagesRequestInfo) {

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
            this.custom_user_agent = data["custom_user_agent"];
            this.browser_preset = data["browser_preset"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_scale_factor = data["browser_screen_scale_factor"];
            this.store_raw_html = data["store_raw_html"];
            this.accept_language = data["accept_language"];
            this.load_resources = data["load_resources"];
            this.enable_browser_rendering = data["enable_browser_rendering"];
            this.disable_cookie_popup = data["disable_cookie_popup"];
            this.return_despite_timeout = data["return_despite_timeout"];
            this.enable_xhr = data["enable_xhr"];
            this.custom_js = data["custom_js"];
            this.validate_micromarkup = data["validate_micromarkup"];
            this.check_spell = data["check_spell"];
            this.checks_threshold = data["checks_threshold"];
            this.switch_pool = data["switch_pool"];
            this.ip_pool_for_scan = data["ip_pool_for_scan"];
        }
    }

    static fromJS(data: any): OnPageInstantPagesRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageInstantPagesRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["custom_user_agent"] = this.custom_user_agent;
        data["browser_preset"] = this.browser_preset;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_scale_factor"] = this.browser_screen_scale_factor;
        data["store_raw_html"] = this.store_raw_html;
        data["accept_language"] = this.accept_language;
        data["load_resources"] = this.load_resources;
        data["enable_browser_rendering"] = this.enable_browser_rendering;
        data["disable_cookie_popup"] = this.disable_cookie_popup;
        data["return_despite_timeout"] = this.return_despite_timeout;
        data["enable_xhr"] = this.enable_xhr;
        data["custom_js"] = this.custom_js;
        data["validate_micromarkup"] = this.validate_micromarkup;
        data["check_spell"] = this.check_spell;
        data["checks_threshold"] = this.checks_threshold;
        data["switch_pool"] = this.switch_pool;
        data["ip_pool_for_scan"] = this.ip_pool_for_scan;
        return data;
    }
}