[Documentation](../README.md) / [Exports](../modules.md) / Summary

# Class: Summary

## Implements

- [`ISummary`](../interfaces/ISummary.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Summary.md#constructor)

### Properties

- [intersections\_count](Summary.md#intersections_count)

### Methods

- [init](Summary.md#init)
- [toJSON](Summary.md#tojson)
- [fromJS](Summary.md#fromjs)

## Constructors

### constructor

• **new Summary**(`data?`): [`Summary`](Summary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISummary`](../interfaces/ISummary.md) |

#### Returns

[`Summary`](Summary.md)

#### Defined in

main.ts:137165

## Properties

### intersections\_count

• `Optional` **intersections\_count**: `number`

total number of intersections

#### Implementation of

[ISummary](../interfaces/ISummary.md).[intersections_count](../interfaces/ISummary.md#intersections_count)

#### Defined in

main.ts:137161

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

main.ts:137174

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

main.ts:137191

___

### fromJS

▸ **fromJS**(`data`): [`Summary`](Summary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Summary`](Summary.md)

#### Defined in

main.ts:137184
