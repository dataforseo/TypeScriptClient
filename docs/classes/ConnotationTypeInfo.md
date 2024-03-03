[Documentation](../README.md) / [Exports](../modules.md) / ConnotationTypeInfo

# Class: ConnotationTypeInfo

## Implements

- [`IConnotationTypeInfo`](../interfaces/IConnotationTypeInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ConnotationTypeInfo.md#constructor)

### Properties

- [negative](ConnotationTypeInfo.md#negative)
- [neutral](ConnotationTypeInfo.md#neutral)
- [positive](ConnotationTypeInfo.md#positive)

### Methods

- [init](ConnotationTypeInfo.md#init)
- [toJSON](ConnotationTypeInfo.md#tojson)
- [fromJS](ConnotationTypeInfo.md#fromjs)

## Constructors

### constructor

• **new ConnotationTypeInfo**(`data?`): [`ConnotationTypeInfo`](ConnotationTypeInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IConnotationTypeInfo`](../interfaces/IConnotationTypeInfo.md) |

#### Returns

[`ConnotationTypeInfo`](ConnotationTypeInfo.md)

#### Defined in

main.ts:21609

## Properties

### negative

• `Optional` **negative**: `number`

negative connotation

#### Implementation of

[IConnotationTypeInfo](../interfaces/IConnotationTypeInfo.md).[negative](../interfaces/IConnotationTypeInfo.md#negative)

#### Defined in

main.ts:21603

___

### neutral

• `Optional` **neutral**: `number`

neutral connotation

#### Implementation of

[IConnotationTypeInfo](../interfaces/IConnotationTypeInfo.md).[neutral](../interfaces/IConnotationTypeInfo.md#neutral)

#### Defined in

main.ts:21605

___

### positive

• `Optional` **positive**: `number`

positive connotation

#### Implementation of

[IConnotationTypeInfo](../interfaces/IConnotationTypeInfo.md).[positive](../interfaces/IConnotationTypeInfo.md#positive)

#### Defined in

main.ts:21601

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

main.ts:21618

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

main.ts:21637

___

### fromJS

▸ **fromJS**(`data`): [`ConnotationTypeInfo`](ConnotationTypeInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ConnotationTypeInfo`](ConnotationTypeInfo.md)

#### Defined in

main.ts:21630
