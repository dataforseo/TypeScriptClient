[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo

Defined in: main.ts:132110

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo()

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)

Defined in: main.ts:132214

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)

## Properties

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:132128

the maximum custom bid
required field
the collected data will be based on this value
it stands for the price you are willing to pay for an ad; the higher value you specify here, the higher values you will get in the returned metrics
learn more in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`bid`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#bid)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:132184

starting date of the forecasting time range
required field if you specify date_to
if you indicate date_from and date_to, you don’t need to specify date_interval
minimum value is tomorrow’s date
the value you specify in date_from shouldn’t be further than date_to
date format: "yyyy-mm-dd"
example:
"2021-10-30"if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#date_from)

***

### date\_interval?

> `optional` **date\_interval**: `string`

Defined in: main.ts:132199

forecasting date interval
optional field
if you specify date_interval, you don’t need to indicate date_from and date_to
possible values: next_week, next_month, next_quarter
default value: next_month

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`date_interval`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#date_interval)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:132193

ending date of the forecasting time range
required field if you specify date_from
if you indicate date_from and date_to, you don’t need to specify date_interval
minimum value is date_from +1 day
maximum value is current day and month of the next year
date format: "yyyy-mm-dd"
example:
"2022-10-30"

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#date_to)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:132122

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the keywords you specify will be converted to a lowercase format
Note: Google Ads may return no data for certain groups of keywords
visit our Help Center to learn more
Also note that Google Ads doesn’t allow using certain symbols and characters (e.g., UTF symbols, emojis), so you can’t use them when setting a task;
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:132174

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:132168

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:132153

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:132162

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:132145

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#location_name)

***

### match?

> `optional` **match**: `string`

Defined in: main.ts:132132

keywords match-type
required field
can take the following values: exact, broad, phrase

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`match`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#match)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:132137

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:132204

results sorting parameters
optional field
Use these parameters to sort the results by relevance, impressions, ctr, average_cpc, cost, or clicks in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:132210

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:132223

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:132257

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)

Defined in: main.ts:132250

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)
