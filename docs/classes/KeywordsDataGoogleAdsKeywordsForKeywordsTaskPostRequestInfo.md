[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo

## Extends

- [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo()

> **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

#### Overrides

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`constructor`](KeywordsDataTaskRequestInfo.md#constructors)

#### Defined in

main.ts:122804

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#date_from)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`date_from`](KeywordsDataTaskRequestInfo.md#date_from)

#### Defined in

main.ts:74423

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
Note: the indicated date cannot be greater than the past month, Google Ads does not return data on the current month;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#date_to)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`date_to`](KeywordsDataTaskRequestInfo.md#date_to)

#### Defined in

main.ts:74431

***

### include\_adult\_keywords?

> `optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`include_adult_keywords`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#include_adult_keywords)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`include_adult_keywords`](KeywordsDataTaskRequestInfo.md#include_adult_keywords)

#### Defined in

main.ts:74437

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the keywords you specify will be converted to a lowercase format
Note #1: Google Ads may return no data for certain groups of keywords;
Note #2: Google Ads provides combined search volume values for groups of similar keywords
to obtain search volume for similar keywords, we recommend submitting such keywords in separate requests;
Note #3: Google Ads doesn’t allow using certain symbols and characters (e.g., UTF symbols, emojis), so you can’t use them when setting a task;
to learn more about which symbols can be used, please refer to this article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#keywords)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`keywords`](KeywordsDataTaskRequestInfo.md#keywords)

#### Defined in

main.ts:74373

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#language_code)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`language_code`](KeywordsDataTaskRequestInfo.md#language_code)

#### Defined in

main.ts:74410

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#language_name)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`language_name`](KeywordsDataTaskRequestInfo.md#language_name)

#### Defined in

main.ts:74404

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#location_code)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`location_code`](KeywordsDataTaskRequestInfo.md#location_code)

#### Defined in

main.ts:74389

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`location_coordinate`](KeywordsDataTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:74398

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#location_name)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`location_name`](KeywordsDataTaskRequestInfo.md#location_name)

#### Defined in

main.ts:74381

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`pingback_url`](KeywordsDataTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:74462

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#postback_url)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`postback_url`](KeywordsDataTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:74452

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#search_partners)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`search_partners`](KeywordsDataTaskRequestInfo.md#search_partners)

#### Defined in

main.ts:74415

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameters
optional field
use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#sort_by)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`sort_by`](KeywordsDataTaskRequestInfo.md#sort_by)

#### Defined in

main.ts:74442

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#tag)

#### Inherited from

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`tag`](KeywordsDataTaskRequestInfo.md#tag)

#### Defined in

main.ts:74468

***

### target?

> `optional` **target**: `string`

target website
optional field
specify a website or URL to get a list of keywords relevant to it;
Note: if a website url is specified, you will still get keywords relevant for the entire website

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md).[`target`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md#target)

#### Defined in

main.ts:122800

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`init`](KeywordsDataTaskRequestInfo.md#init)

#### Defined in

main.ts:122808

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`toJSON`](KeywordsDataTaskRequestInfo.md#tojson)

#### Defined in

main.ts:122826

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

#### Overrides

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md).[`fromJS`](KeywordsDataTaskRequestInfo.md#fromjs)

#### Defined in

main.ts:122819
