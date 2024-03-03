[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataAttributesInfo

# Class: BusinessDataAttributesInfo

## Implements

- [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataAttributesInfo.md#constructor)

### Properties

- [available\_attributes](BusinessDataAttributesInfo.md#available_attributes)
- [unavailable\_attributes](BusinessDataAttributesInfo.md#unavailable_attributes)

### Methods

- [init](BusinessDataAttributesInfo.md#init)
- [toJSON](BusinessDataAttributesInfo.md#tojson)
- [fromJS](BusinessDataAttributesInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataAttributesInfo**(`data?`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md) |

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Defined in

main.ts:188724

## Properties

### available\_attributes

• `Optional` **available\_attributes**: `Object`

available attributes
indicates attributes a business entity can offer

#### Index signature

▪ [key: `string`]: (`string` \| `undefined`)[]

#### Implementation of

[IBusinessDataAttributesInfo](../interfaces/IBusinessDataAttributesInfo.md).[available_attributes](../interfaces/IBusinessDataAttributesInfo.md#available_attributes)

#### Defined in

main.ts:188717

___

### unavailable\_attributes

• `Optional` **unavailable\_attributes**: `Object`

unavailable attributes
indicates attributes a business entity cannot offer

#### Index signature

▪ [key: `string`]: (`string` \| `undefined`)[]

#### Implementation of

[IBusinessDataAttributesInfo](../interfaces/IBusinessDataAttributesInfo.md).[unavailable_attributes](../interfaces/IBusinessDataAttributesInfo.md#unavailable_attributes)

#### Defined in

main.ts:188720

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

main.ts:188733

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

main.ts:188763

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Defined in

main.ts:188756
