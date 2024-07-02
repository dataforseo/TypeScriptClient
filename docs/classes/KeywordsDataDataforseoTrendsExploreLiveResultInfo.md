**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsExploreLiveResultInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsExploreLiveResultInfo(data)

> **new KeywordsDataDataforseoTrendsExploreLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Source

main.ts:127768

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#datetime)

#### Source

main.ts:127760

***

### items?

> **`optional`** **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items)

#### Source

main.ts:127764

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items_count)

#### Source

main.ts:127762

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#keywords)

#### Source

main.ts:127747

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#language_code)

#### Source

main.ts:127755

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#location_code)

#### Source

main.ts:127752

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#type)

#### Source

main.ts:127749

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127777

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127808

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Source

main.ts:127801
