**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo(data)

> **new KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Source

main.ts:119443

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_from)

#### Source

main.ts:119414

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
Note: the indicated date cannot be greater than yesterday’s date;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_to)

#### Source

main.ts:119422

***

### include\_adult\_keywords?

> **`optional`** **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`include_adult_keywords`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#include_adult_keywords)

#### Source

main.ts:119428

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_code)

#### Source

main.ts:119401

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_name)

#### Source

main.ts:119395

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_code)

#### Source

main.ts:119380

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_coordinate)

#### Source

main.ts:119389

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_name)

#### Source

main.ts:119372

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#search_partners)

#### Source

main.ts:119406

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#sort_by)

#### Source

main.ts:119433

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#tag)

#### Source

main.ts:119439

***

### target?

> **`optional`** **target**: `string`

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`target`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target)

#### Source

main.ts:119357

***

### target\_type?

> **`optional`** **target\_type**: `string`

search keywords for site or for url
optional field
possible values: site, page;
default value: page;
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[`target_type`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target_type)

#### Source

main.ts:119364

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:119452

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:119481

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Source

main.ts:119474
