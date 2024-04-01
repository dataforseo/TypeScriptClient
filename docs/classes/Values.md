[Documentation](../README.md) / [Exports](../modules.md) / Values

# Class: Values

## Implements

- [`IValues`](../interfaces/IValues.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Values.md#constructor)

### Properties

- [geo\_id](Values.md#geo_id)
- [geo\_name](Values.md#geo_name)
- [value](Values.md#value)

### Methods

- [init](Values.md#init)
- [toJSON](Values.md#tojson)
- [fromJS](Values.md#fromjs)

## Constructors

### constructor

• **new Values**(`data?`): [`Values`](Values.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IValues`](../interfaces/IValues.md) |

#### Returns

[`Values`](Values.md)

#### Defined in

main.ts:125420

## Properties

### geo\_id

• `Optional` **geo\_id**: `string`

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Implementation of

[IValues](../interfaces/IValues.md).[geo_id](../interfaces/IValues.md#geo_id)

#### Defined in

main.ts:125402

___

### geo\_name

• `Optional` **geo\_name**: `string`

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Implementation of

[IValues](../interfaces/IValues.md).[geo_name](../interfaces/IValues.md#geo_name)

#### Defined in

main.ts:125408

___

### value

• `Optional` **value**: `number`

relative keyword popularity rate in a given location
represents location-specific keyword popularity rate over the specified time range;
using this value you can understand how popular a keyword is in one location compared to another location;
calculation: we determine the highest popularity value for the relevant keyword across all locations, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[IValues](../interfaces/IValues.md).[value](../interfaces/IValues.md#value)

#### Defined in

main.ts:125416

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

main.ts:125429

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

main.ts:125448

___

### fromJS

▸ **fromJS**(`data`): [`Values`](Values.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Values`](Values.md)

#### Defined in

main.ts:125441
