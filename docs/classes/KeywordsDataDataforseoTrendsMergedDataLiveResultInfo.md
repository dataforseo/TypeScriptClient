**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo(data)

> **new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Source

main.ts:127249

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#datetime)

#### Source

main.ts:127241

***

### items?

> **`optional`** **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items)

#### Source

main.ts:127245

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items_count)

#### Source

main.ts:127243

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#keywords)

#### Source

main.ts:127228

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#language_code)

#### Source

main.ts:127236

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#location_code)

#### Source

main.ts:127233

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#type)

#### Source

main.ts:127230

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127258

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127289

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Source

main.ts:127282
