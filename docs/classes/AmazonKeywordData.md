[Documentation](../README.md) / [Exports](../modules.md) / AmazonKeywordData

# Class: AmazonKeywordData

## Implements

- [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonKeywordData.md#constructor)

### Properties

- [keyword](AmazonKeywordData.md#keyword)
- [keyword\_info](AmazonKeywordData.md#keyword_info)
- [language\_code](AmazonKeywordData.md#language_code)
- [location\_code](AmazonKeywordData.md#location_code)
- [se\_type](AmazonKeywordData.md#se_type)

### Methods

- [init](AmazonKeywordData.md#init)
- [toJSON](AmazonKeywordData.md#tojson)
- [fromJS](AmazonKeywordData.md#fromjs)

## Constructors

### constructor

• **new AmazonKeywordData**(`data?`): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md) |

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Defined in

main.ts:21842

## Properties

### keyword

• `Optional` **keyword**: `string`

related keyword

#### Implementation of

[IAmazonKeywordData](../interfaces/IAmazonKeywordData.md).[keyword](../interfaces/IAmazonKeywordData.md#keyword)

#### Defined in

main.ts:21832

___

### keyword\_info

• `Optional` **keyword\_info**: [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

keyword info for the returned keyword

#### Implementation of

[IAmazonKeywordData](../interfaces/IAmazonKeywordData.md).[keyword_info](../interfaces/IAmazonKeywordData.md#keyword_info)

#### Defined in

main.ts:21838

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAmazonKeywordData](../interfaces/IAmazonKeywordData.md).[language_code](../interfaces/IAmazonKeywordData.md#language_code)

#### Defined in

main.ts:21836

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAmazonKeywordData](../interfaces/IAmazonKeywordData.md).[location_code](../interfaces/IAmazonKeywordData.md#location_code)

#### Defined in

main.ts:21834

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IAmazonKeywordData](../interfaces/IAmazonKeywordData.md).[se_type](../interfaces/IAmazonKeywordData.md#se_type)

#### Defined in

main.ts:21830

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:21851

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:21872

___

### fromJS

▸ **fromJS**(`data`): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Defined in

main.ts:21865
