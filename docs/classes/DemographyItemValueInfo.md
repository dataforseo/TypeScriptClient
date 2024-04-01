[Documentation](../README.md) / [Exports](../modules.md) / DemographyItemValueInfo

# Class: DemographyItemValueInfo

## Implements

- [`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DemographyItemValueInfo.md#constructor)

### Properties

- [type](DemographyItemValueInfo.md#type)
- [value](DemographyItemValueInfo.md#value)

### Methods

- [init](DemographyItemValueInfo.md#init)
- [toJSON](DemographyItemValueInfo.md#tojson)
- [fromJS](DemographyItemValueInfo.md#fromjs)

## Constructors

### constructor

• **new DemographyItemValueInfo**(`data?`): [`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md) |

#### Returns

[`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Defined in

main.ts:126226

## Properties

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDemographyItemValueInfo](../interfaces/IDemographyItemValueInfo.md).[type](../interfaces/IDemographyItemValueInfo.md#type)

#### Defined in

main.ts:126216

___

### value

• `Optional` **value**: `number`

keyword popularity rate within the specified age range
using this value you can understand how popular a keyword is within each age range;
calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 0 means there was not enough data for this term

#### Implementation of

[IDemographyItemValueInfo](../interfaces/IDemographyItemValueInfo.md).[value](../interfaces/IDemographyItemValueInfo.md#value)

#### Defined in

main.ts:126222

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

main.ts:126235

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

main.ts:126253

___

### fromJS

▸ **fromJS**(`data`): [`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Defined in

main.ts:126246
