[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo()

> **new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Defined in

main.ts:127617

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#datetime)

#### Defined in

main.ts:127609

***

### items?

> `optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items)

#### Defined in

main.ts:127613

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items_count)

#### Defined in

main.ts:127611

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#keywords)

#### Defined in

main.ts:127596

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#language_code)

#### Defined in

main.ts:127604

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#location_code)

#### Defined in

main.ts:127601

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#type)

#### Defined in

main.ts:127598

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:127626

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:127657

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Defined in

main.ts:127650
