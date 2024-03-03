[Documentation](../README.md) / [Exports](../modules.md) / LocalBusinessReservationLink

# Class: LocalBusinessReservationLink

## Hierarchy

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

  ↳ **`LocalBusinessReservationLink`**

## Implements

- [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalBusinessReservationLink.md#constructor)

### Properties

- [\_discriminator](LocalBusinessReservationLink.md#_discriminator)
- [title](LocalBusinessReservationLink.md#title)
- [url](LocalBusinessReservationLink.md#url)

### Methods

- [init](LocalBusinessReservationLink.md#init)
- [toJSON](LocalBusinessReservationLink.md#tojson)
- [fromJS](LocalBusinessReservationLink.md#fromjs)

## Constructors

### constructor

• **new LocalBusinessReservationLink**(`data?`): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md) |

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[constructor](BaseLocalBusinessLink.md#constructor)

#### Defined in

main.ts:22417

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[_discriminator](BaseLocalBusinessLink.md#_discriminator)

#### Defined in

main.ts:22349

___

### title

• `Optional` **title**: `string`

title of the element
domain of the reservation software

#### Implementation of

[ILocalBusinessReservationLink](../interfaces/ILocalBusinessReservationLink.md).[title](../interfaces/ILocalBusinessReservationLink.md#title)

#### Defined in

main.ts:22411

___

### url

• `Optional` **url**: `string`

URL to make a reservation

#### Implementation of

[ILocalBusinessReservationLink](../interfaces/ILocalBusinessReservationLink.md).[url](../interfaces/ILocalBusinessReservationLink.md#url)

#### Defined in

main.ts:22413

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[init](BaseLocalBusinessLink.md#init)

#### Defined in

main.ts:22422

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[toJSON](BaseLocalBusinessLink.md#tojson)

#### Defined in

main.ts:22441

___

### fromJS

▸ **fromJS**(`data`): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[fromJS](BaseLocalBusinessLink.md#fromjs)

#### Defined in

main.ts:22434
