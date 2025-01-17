[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsExploreLiveResultInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveResultInfo

Defined in: main.ts:136012

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsExploreLiveResultInfo()

> **new KeywordsDataDataforseoTrendsExploreLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

Defined in: main.ts:136035

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:136027

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

Defined in: main.ts:136031

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:136029

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:136014

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:136022

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:136019

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:136016

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136044

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:136075

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

Defined in: main.ts:136068

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)
