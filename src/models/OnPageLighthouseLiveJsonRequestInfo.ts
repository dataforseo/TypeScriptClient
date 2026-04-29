export interface IOnPageLighthouseLiveJsonRequestInfo   {
        
        /** target URLrequired fieldtarget page should be specified with its absolute URL (including http:// or https://)example:https://dataforseo.com/ */
        url?: string | undefined
        
        /** applies mobile emulationoptional fieldif set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environmentif set to false, the results will be provided for desktopdefault value: false */
        for_mobile?: boolean | undefined
        
        /** categories of Lighthouse auditsoptional fieldeach category is a collection of audits and audit groups that applies weighting and scoring to the section (see official definition)if you ignore this field, we will return data for all categories unless you specify auditsuse this field to get data for specific categories you indicate herepossible values:seo, performance, best_practices, accessibility */
        categories?: string[] | undefined
        
        /** Lighthouse auditsoptional fieldaudits are individual tests Lighthouse runs for each specific feature/optimization/metric to produce a numeric score (see official definition);  if you ignore this field, we will return data for all audits;use this field to get data for specific audits you indicate here;Note: that some audits do not belong to a specific category and are stand-alone page quality measurements;in general, there can be several use cases:1. if you ignore categories, you can use this field to get data for the specified audits onlyfor example, if you ignore 'categories' and specify 'audits': ['metrics/cumulative-layout-shift','metrics/largest-contentful-paint','metrics/total-blocking-time'], you will get data only for these audits2. if you specify a category, you can use this field to additionally receive audits that do not belong to the category(-ies) you specifiedfor example, if you specify 'categories': ['seo'] and 'audits': ['metrics/cumulative-layout-shift','metrics/largest-contentful-paint','metrics/total-blocking-time'], you will get only these audits under 'performance' and all audits under 'seo'you can get the full list of possible audits here */
        audits?: string[] | undefined
        
        /** lighthouse versionoptional fieldyou can obtain the results specific to a certain Lighthouse version by specifying its numberthe list of available versions is available through the Lighthouse Versions endpoint */
        version?: string | undefined
        
        /** lighthouse language nameoptional fieldyou can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languagesdefault value:English */
        language_name?: string | undefined
        
        /** lighthouse language codeoptional fieldyou can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languagesdefault value:en */
        language_code?: string | undefined
        
        /** custom user agentoptional fieldspecify the custom user agent used by the browser when running the Lighthouse audit;can be specified with up to 254 characters; */
        custom_user_agent?: string | undefined
        
        /** browser screen widthoptional fieldset the screen width of the browser used for the Lighthouse audit to emulate a specific device;can be specified within the following range: 240–9999; */
        browser_screen_width?: number | undefined
        
        /** browser screen heightoptional fieldset the screen height of the browser used for the Lighthouse audit to emulate a specific device;can be specified within the following range: 240–9999; */
        browser_screen_height?: number | undefined
        
        /** browser screen scale factoroptional fieldset the device pixel ratio of the browser used for the Lighthouse audit;can be specified within the following range: 0.5–3; */
        browser_screen_scale_factor?: number | undefined
        
        /** browser network throttling methodoptional fielddefines the method used to apply throttling during the Lighthouse audit;possible vaules:simulate - calculates estimated performance metrics without applying explicit throttling;devtools -  applies the throttling settings specified in browser_network_throttling and browser_cpu_throttling_multiplier;provided - uses the network conditions of the crawling environment; */
        browser_network_throttling_method?: string | undefined
        
        /** browser CPU throttling multiplierrequired if browser_network_throttling_method is set to devtools;set the CPU throttling multiplier to simulate device performance conditions during the Lighthouse audit;can be specified within the following range: 1–4;Note: this parameter is applied only when browser_network_throttling_method is set to devtools; */
        browser_cpu_throttling_multiplier?: number | undefined
        
        /** browser network throttlingrequired if browser_network_throttling_method is set to devtools;set the network throttling profile to simulate connection speed conditions during the Lighthouse audit;possible values: no_throttling, fast_4g, slow_4g, regular_3g, pc;Note: this parameter is applied only when browser_network_throttling_method is set to devtools; */
        browser_network_throttling?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageLighthouseLiveJsonRequestInfo  implements IOnPageLighthouseLiveJsonRequestInfo {
    
    /** target URLrequired fieldtarget page should be specified with its absolute URL (including http:// or https://)example:https://dataforseo.com/ */

    url?: string | undefined;
    
    /** applies mobile emulationoptional fieldif set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environmentif set to false, the results will be provided for desktopdefault value: false */

    for_mobile?: boolean | undefined;
    
    /** categories of Lighthouse auditsoptional fieldeach category is a collection of audits and audit groups that applies weighting and scoring to the section (see official definition)if you ignore this field, we will return data for all categories unless you specify auditsuse this field to get data for specific categories you indicate herepossible values:seo, performance, best_practices, accessibility */

    categories?: string[] | undefined;
    
    /** Lighthouse auditsoptional fieldaudits are individual tests Lighthouse runs for each specific feature/optimization/metric to produce a numeric score (see official definition);  if you ignore this field, we will return data for all audits;use this field to get data for specific audits you indicate here;Note: that some audits do not belong to a specific category and are stand-alone page quality measurements;in general, there can be several use cases:1. if you ignore categories, you can use this field to get data for the specified audits onlyfor example, if you ignore 'categories' and specify 'audits': ['metrics/cumulative-layout-shift','metrics/largest-contentful-paint','metrics/total-blocking-time'], you will get data only for these audits2. if you specify a category, you can use this field to additionally receive audits that do not belong to the category(-ies) you specifiedfor example, if you specify 'categories': ['seo'] and 'audits': ['metrics/cumulative-layout-shift','metrics/largest-contentful-paint','metrics/total-blocking-time'], you will get only these audits under 'performance' and all audits under 'seo'you can get the full list of possible audits here */

    audits?: string[] | undefined;
    
    /** lighthouse versionoptional fieldyou can obtain the results specific to a certain Lighthouse version by specifying its numberthe list of available versions is available through the Lighthouse Versions endpoint */

    version?: string | undefined;
    
    /** lighthouse language nameoptional fieldyou can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languagesdefault value:English */

    language_name?: string | undefined;
    
    /** lighthouse language codeoptional fieldyou can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languagesdefault value:en */

    language_code?: string | undefined;
    
    /** custom user agentoptional fieldspecify the custom user agent used by the browser when running the Lighthouse audit;can be specified with up to 254 characters; */

    custom_user_agent?: string | undefined;
    
    /** browser screen widthoptional fieldset the screen width of the browser used for the Lighthouse audit to emulate a specific device;can be specified within the following range: 240–9999; */

    browser_screen_width?: number | undefined;
    
    /** browser screen heightoptional fieldset the screen height of the browser used for the Lighthouse audit to emulate a specific device;can be specified within the following range: 240–9999; */

    browser_screen_height?: number | undefined;
    
    /** browser screen scale factoroptional fieldset the device pixel ratio of the browser used for the Lighthouse audit;can be specified within the following range: 0.5–3; */

    browser_screen_scale_factor?: number | undefined;
    
    /** browser network throttling methodoptional fielddefines the method used to apply throttling during the Lighthouse audit;possible vaules:simulate - calculates estimated performance metrics without applying explicit throttling;devtools -  applies the throttling settings specified in browser_network_throttling and browser_cpu_throttling_multiplier;provided - uses the network conditions of the crawling environment; */

    browser_network_throttling_method?: string | undefined;
    
    /** browser CPU throttling multiplierrequired if browser_network_throttling_method is set to devtools;set the CPU throttling multiplier to simulate device performance conditions during the Lighthouse audit;can be specified within the following range: 1–4;Note: this parameter is applied only when browser_network_throttling_method is set to devtools; */

    browser_cpu_throttling_multiplier?: number | undefined;
    
    /** browser network throttlingrequired if browser_network_throttling_method is set to devtools;set the network throttling profile to simulate connection speed conditions during the Lighthouse audit;possible values: no_throttling, fast_4g, slow_4g, regular_3g, pc;Note: this parameter is applied only when browser_network_throttling_method is set to devtools; */

    browser_network_throttling?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseLiveJsonRequestInfo) {

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
            this.for_mobile = data["for_mobile"];
            this.categories = data["categories"];
            this.audits = data["audits"];
            this.version = data["version"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.custom_user_agent = data["custom_user_agent"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_scale_factor = data["browser_screen_scale_factor"];
            this.browser_network_throttling_method = data["browser_network_throttling_method"];
            this.browser_cpu_throttling_multiplier = data["browser_cpu_throttling_multiplier"];
            this.browser_network_throttling = data["browser_network_throttling"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageLighthouseLiveJsonRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseLiveJsonRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["for_mobile"] = this.for_mobile;
        data["categories"] = this.categories;
        data["audits"] = this.audits;
        data["version"] = this.version;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["custom_user_agent"] = this.custom_user_agent;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_scale_factor"] = this.browser_screen_scale_factor;
        data["browser_network_throttling_method"] = this.browser_network_throttling_method;
        data["browser_cpu_throttling_multiplier"] = this.browser_cpu_throttling_multiplier;
        data["browser_network_throttling"] = this.browser_network_throttling;
        data["tag"] = this.tag;
        return data;
    }
}