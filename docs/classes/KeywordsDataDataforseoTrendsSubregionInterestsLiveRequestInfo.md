[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo()

> **new KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo**(`data`?): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

#### Defined in

main.ts:129024

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#date_from)

#### Defined in

main.ts:129001

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#date_to)

#### Defined in

main.ts:129008

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
the maximum number of keywords you can specify: 5
avoid symbols and special characters (e.g., UTF symbols, emojis);
specifying non-Latin characters, you’ll get data for the countries where they are used

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#keywords)

#### Defined in

main.ts:128972

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_code belongs to;
example:
2840

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:128990

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_name belongs to;
example:
United Kingdom

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:128981

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#tag)

#### Defined in

main.ts:129020

***

### time\_range?

> `optional` **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#time_range)

#### Defined in

main.ts:129014

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#type)

#### Defined in

main.ts:128992

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:129033

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:129061

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

#### Defined in

main.ts:129054
