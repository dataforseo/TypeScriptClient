[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveResultInfo

Defined in: main.ts:119168

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveResultInfo()

> **new DataforseoLabsBingRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

Defined in: main.ts:119189

#### Parameters

##### data?

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)[]

Defined in: main.ts:119185

contains keywords and related data

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:119183

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:119179

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:119177

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:119170

search engine type

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#se_type)

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:119172

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword)

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:119175

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:119181

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119198

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:119226

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

Defined in: main.ts:119219

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)
