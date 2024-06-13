**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsDemographyLiveRequestInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveRequestInfo

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsDemographyLiveRequestInfo(data)

> **new KeywordsDataDataforseoTrendsDemographyLiveRequestInfo**(`data`?): [`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Source

main.ts:127725

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

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#date_from)

#### Source

main.ts:127702

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

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#date_to)

#### Source

main.ts:127709

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
the maximum number of keywords you can specify: 5
avoid symbols and special characters (e.g., UTF symbols, emojis);
specifying non-Latin characters, you’ll get data for the countries where they are used

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#keywords)

#### Source

main.ts:127673

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

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#location_code)

#### Source

main.ts:127691

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

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#location_name)

#### Source

main.ts:127682

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#tag)

#### Source

main.ts:127721

***

### time\_range?

> **`optional`** **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#time_range)

#### Source

main.ts:127715

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#type)

#### Source

main.ts:127693

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127734

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127762

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Source

main.ts:127755
