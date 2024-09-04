[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveResultInfo()

> **new DataforseoLabsGoogleRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:85610

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:85606

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:85604

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:85600

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:85598

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:85591

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#seed_keyword)

#### Defined in

main.ts:85593

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: `object`

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

#### Defined in

main.ts:85596

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:85602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:85619

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:85653

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:85646
