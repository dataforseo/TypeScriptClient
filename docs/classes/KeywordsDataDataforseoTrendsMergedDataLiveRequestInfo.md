**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo(data)

> **new KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo**(`data`?): [`KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)

#### Source

main.ts:130708

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#date_from)

#### Source

main.ts:130685

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#date_to)

#### Source

main.ts:130692

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
the maximum number of keywords you can specify: 5
avoid symbols and special characters (e.g., UTF symbols, emojis);
specifying non-Latin characters, you’ll get data for the countries where they are used

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#keywords)

#### Source

main.ts:130656

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_code belongs to;
example:
2840

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#location_code)

#### Source

main.ts:130674

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_name belongs to;
example:
United Kingdom

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#location_name)

#### Source

main.ts:130665

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#tag)

#### Source

main.ts:130704

***

### time\_range?

> **`optional`** **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#time_range)

#### Source

main.ts:130698

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md#type)

#### Source

main.ts:130676

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:130717

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:130745

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)

#### Source

main.ts:130738
