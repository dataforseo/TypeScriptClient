[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AmazonKeywordData

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

main.ts:22574

## Properties

### keyword?

> `optional` **keyword**: `string`

related keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword`](../interfaces/IAmazonKeywordData.md#keyword)

#### Defined in

main.ts:22564

***

### keyword\_info?

> `optional` **keyword\_info**: [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

keyword info for the returned keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword_info`](../interfaces/IAmazonKeywordData.md#keyword_info)

#### Defined in

main.ts:22570

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`language_code`](../interfaces/IAmazonKeywordData.md#language_code)

#### Defined in

main.ts:22568

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`location_code`](../interfaces/IAmazonKeywordData.md#location_code)

#### Defined in

main.ts:22566

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`se_type`](../interfaces/IAmazonKeywordData.md#se_type)

#### Defined in

main.ts:22562

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22583

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22604

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Defined in

main.ts:22597
