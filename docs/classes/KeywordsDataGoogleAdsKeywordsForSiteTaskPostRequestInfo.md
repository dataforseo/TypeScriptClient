[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo

Defined in: main.ts:128124

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo()

> **new KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

Defined in: main.ts:128237

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:128186

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:128194

ending date of the time range
optional field
Note: the indicated date cannot be greater than yesterday’s date;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_to)

***

### include\_adult\_keywords?

> `optional` **include\_adult\_keywords**: `boolean`

Defined in: main.ts:128200

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`include_adult_keywords`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#include_adult_keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:128173

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:128167

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:128152

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:128161

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:128144

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:128227

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:128216

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#postback_url)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:128178

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:128205

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:128233

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:128129

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`target`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target)

***

### target\_type?

> `optional` **target\_type**: `string`

Defined in: main.ts:128136

search keywords for site or url
optional field
possible values: site, page;
default value: page
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[`target_type`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:128246

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:128277

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

Defined in: main.ts:128270

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)
