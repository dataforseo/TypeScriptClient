[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

Defined in: main.ts:138118

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo()

> **new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

Defined in: main.ts:138141

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:138133

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

Defined in: main.ts:138137

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:138135

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:138120

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:138128

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:138125

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:138122

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138150

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138181

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

Defined in: main.ts:138174

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)
