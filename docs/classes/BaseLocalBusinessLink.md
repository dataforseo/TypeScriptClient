[Documentation](../README.md) / [Exports](../modules.md) / BaseLocalBusinessLink

# Class: BaseLocalBusinessLink

## Hierarchy

- **`BaseLocalBusinessLink`**

  ↳ [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

  ↳ [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

  ↳ [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

## Implements

- [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseLocalBusinessLink.md#constructor)

### Properties

- [\_discriminator](BaseLocalBusinessLink.md#_discriminator)

### Methods

- [init](BaseLocalBusinessLink.md#init)
- [toJSON](BaseLocalBusinessLink.md#tojson)
- [fromJS](BaseLocalBusinessLink.md#fromjs)

## Constructors

### constructor

• **new BaseLocalBusinessLink**(`data?`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md) |

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:22728

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:22726

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

main.ts:22738

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

main.ts:22769

___

### fromJS

▸ **fromJS**(`data`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:22747
