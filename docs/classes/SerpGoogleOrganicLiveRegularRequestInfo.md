**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveRegularRequestInfo

# Class: SerpGoogleOrganicLiveRegularRequestInfo

## Implements

- [`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveRegularRequestInfo(data)

> **new SerpGoogleOrganicLiveRegularRequestInfo**(`data`?): [`SerpGoogleOrganicLiveRegularRequestInfo`](SerpGoogleOrganicLiveRegularRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md)

#### Returns

[`SerpGoogleOrganicLiveRegularRequestInfo`](SerpGoogleOrganicLiveRegularRequestInfo.md)

#### Source

main.ts:38650

## Properties

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`depth`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#depth)

#### Source

main.ts:38610

***

### device?

> **`optional`** **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`device`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#device)

#### Source

main.ts:38587

***

### group\_organic\_results?

> **`optional`** **group\_organic\_results**: `boolean`

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`group_organic_results`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#group_organic_results)

#### Source

main.ts:38629

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#keyword)

#### Source

main.ts:38544

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#language_code)

#### Source

main.ts:38582

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#language_name)

#### Source

main.ts:38575

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#location_code)

#### Source

main.ts:38558

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#location_coordinate)

#### Source

main.ts:38568

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#location_name)

#### Source

main.ts:38551

***

### max\_crawl\_pages?

> **`optional`** **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#max_crawl_pages)

#### Source

main.ts:38636

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`os`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#os)

#### Source

main.ts:38594

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#se_domain)

#### Source

main.ts:38601

***

### search\_param?

> **`optional`** **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#search_param)

#### Source

main.ts:38640

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#tag)

#### Source

main.ts:38646

***

### target?

> **`optional`** **target**: `string`

target domain, subdomain, or webpage to get results for
optional field
a domain or a subdomain should be specified without https:// and www.
note that the results of target-specific tasks will only include SERP elements that contain a url string;
you can also use a wildcard (‘*’) character to specify the search pattern in SERP and narrow down the results;
examples:
example.com  – returns results for the website’s home page with URLs, such as https://example.com, or https://www.example.com/, or https://example.com/;
example.com* – returns results for the domain, including all its pages;
*example.com* – returns results for the entire domain, including all its pages and subdomains;
*example.com  – returns results for the home page regardless of the subdomain, such as https://en.example.com;
example.com/example-page  – returns results for the exact URL;
example.com/example-page*  – returns results for all domain’s URLs that start with the specified string

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`target`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#target)

#### Source

main.ts:38623

***

### url?

> **`optional`** **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`url`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#url)

#### Source

main.ts:38535

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:38659

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:38691

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicLiveRegularRequestInfo`](SerpGoogleOrganicLiveRegularRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicLiveRegularRequestInfo`](SerpGoogleOrganicLiveRegularRequestInfo.md)

#### Source

main.ts:38684
