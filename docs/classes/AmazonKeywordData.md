[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonKeywordData

# Class: AmazonKeywordData

## Implements

- [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonKeywordData()

> **new AmazonKeywordData**(`data`?): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

• **data?**: [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Defined in

main.ts:22895

## Properties

### keyword?

> `optional` **keyword**: `string`

related keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword`](../interfaces/IAmazonKeywordData.md#keyword)

#### Defined in

main.ts:22885

***

### keyword\_info?

> `optional` **keyword\_info**: [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

keyword info for the returned keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword_info`](../interfaces/IAmazonKeywordData.md#keyword_info)

#### Defined in

main.ts:22891

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`language_code`](../interfaces/IAmazonKeywordData.md#language_code)

#### Defined in

main.ts:22889

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`location_code`](../interfaces/IAmazonKeywordData.md#location_code)

#### Defined in

main.ts:22887

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`se_type`](../interfaces/IAmazonKeywordData.md#se_type)

#### Defined in

main.ts:22883

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22925

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Defined in

main.ts:22918
