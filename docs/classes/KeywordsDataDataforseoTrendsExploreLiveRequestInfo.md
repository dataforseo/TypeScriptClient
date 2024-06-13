**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsExploreLiveRequestInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveRequestInfo

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsExploreLiveRequestInfo(data)

> **new KeywordsDataDataforseoTrendsExploreLiveRequestInfo**(`data`?): [`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

#### Source

main.ts:126417

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

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#date_from)

#### Source

main.ts:126394

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

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#date_to)

#### Source

main.ts:126401

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
the maximum number of keywords you can specify: 5

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#keywords)

#### Source

main.ts:126365

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

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#location_code)

#### Source

main.ts:126383

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

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#location_name)

#### Source

main.ts:126374

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#tag)

#### Source

main.ts:126413

***

### time\_range?

> **`optional`** **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#time_range)

#### Source

main.ts:126407

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#type)

#### Source

main.ts:126385

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:126426

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:126454

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

#### Source

main.ts:126447
