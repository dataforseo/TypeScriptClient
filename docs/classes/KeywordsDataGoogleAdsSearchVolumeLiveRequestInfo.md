[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo()

> **new KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:127618

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

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#date_from)

#### Defined in

main.ts:127589

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

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#date_to)

#### Defined in

main.ts:127597

***

### include\_adult\_keywords?

> `optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`include_adult_keywords`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#include_adult_keywords)

#### Defined in

main.ts:127603

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
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#keywords)

#### Defined in

main.ts:127539

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#language_code)

#### Defined in

main.ts:127576

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#language_name)

#### Defined in

main.ts:127570

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

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#location_code)

#### Defined in

main.ts:127555

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

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:127564

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

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#location_name)

#### Defined in

main.ts:127547

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#search_partners)

#### Defined in

main.ts:127581

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameters
optional field
use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#sort_by)

#### Defined in

main.ts:127608

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md#tag)

#### Defined in

main.ts:127614

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:127627

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:127659

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:127652
