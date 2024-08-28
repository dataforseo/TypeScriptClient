[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsBingRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveResultInfo()

> **new DataforseoLabsBingRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:112530

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:112526

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:112524

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:112520

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:112518

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:112511

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword)

#### Defined in

main.ts:112513

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

#### Defined in

main.ts:112516

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:112522

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:112539

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:112567

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:112560
