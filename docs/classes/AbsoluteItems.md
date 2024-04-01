[Documentation](../README.md) / [Exports](../modules.md) / AbsoluteItems

# Class: AbsoluteItems

## Implements

- [`IAbsoluteItems`](../interfaces/IAbsoluteItems.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AbsoluteItems.md#constructor)

### Properties

- [geo\_id](AbsoluteItems.md#geo_id)
- [geo\_name](AbsoluteItems.md#geo_name)
- [values](AbsoluteItems.md#values)

### Methods

- [init](AbsoluteItems.md#init)
- [toJSON](AbsoluteItems.md#tojson)
- [fromJS](AbsoluteItems.md#fromjs)

## Constructors

### constructor

• **new AbsoluteItems**(`data?`): [`AbsoluteItems`](AbsoluteItems.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAbsoluteItems`](../interfaces/IAbsoluteItems.md) |

#### Returns

[`AbsoluteItems`](AbsoluteItems.md)

#### Defined in

main.ts:125577

## Properties

### geo\_id

• `Optional` **geo\_id**: `string`

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Implementation of

[IAbsoluteItems](../interfaces/IAbsoluteItems.md).[geo_id](../interfaces/IAbsoluteItems.md#geo_id)

#### Defined in

main.ts:125558

___

### geo\_name

• `Optional` **geo\_name**: `string`

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Implementation of

[IAbsoluteItems](../interfaces/IAbsoluteItems.md).[geo_name](../interfaces/IAbsoluteItems.md#geo_name)

#### Defined in

main.ts:125564

___

### values

• `Optional` **values**: `number`[]

keyword popularity rates within a given location
represents location-specific keyword popularity rate over the specified time range;
using these values, you can understand which of the specified keywords is more popular in the related location;
the first value in the array is provided for the first term from the keywords array, the second value is provided for the second keyword, and so on;
calculation: we determine the highest popularity value across all specified keywords within a given location, and then express the popularity values of each keyword as a percentage of the highest value (100);
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[IAbsoluteItems](../interfaces/IAbsoluteItems.md).[values](../interfaces/IAbsoluteItems.md#values)

#### Defined in

main.ts:125573

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

main.ts:125586

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

main.ts:125609

___

### fromJS

▸ **fromJS**(`data`): [`AbsoluteItems`](AbsoluteItems.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AbsoluteItems`](AbsoluteItems.md)

#### Defined in

main.ts:125602
