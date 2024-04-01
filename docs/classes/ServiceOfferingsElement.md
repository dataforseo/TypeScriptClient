[Documentation](../README.md) / [Exports](../modules.md) / ServiceOfferingsElement

# Class: ServiceOfferingsElement

## Implements

- [`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ServiceOfferingsElement.md#constructor)

### Properties

- [is\_available](ServiceOfferingsElement.md#is_available)
- [name](ServiceOfferingsElement.md#name)
- [type](ServiceOfferingsElement.md#type)

### Methods

- [init](ServiceOfferingsElement.md#init)
- [toJSON](ServiceOfferingsElement.md#tojson)
- [fromJS](ServiceOfferingsElement.md#fromjs)

## Constructors

### constructor

• **new ServiceOfferingsElement**(`data?`): [`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md) |

#### Returns

[`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Defined in

main.ts:209415

## Properties

### is\_available

• `Optional` **is\_available**: `boolean`

availability of the offering
if the value is false, the offering is not available

#### Implementation of

[IServiceOfferingsElement](../interfaces/IServiceOfferingsElement.md).[is_available](../interfaces/IServiceOfferingsElement.md#is_available)

#### Defined in

main.ts:209411

___

### name

• `Optional` **name**: `string`

name of the label
example: Delivery

#### Implementation of

[IServiceOfferingsElement](../interfaces/IServiceOfferingsElement.md).[name](../interfaces/IServiceOfferingsElement.md#name)

#### Defined in

main.ts:209408

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IServiceOfferingsElement](../interfaces/IServiceOfferingsElement.md).[type](../interfaces/IServiceOfferingsElement.md#type)

#### Defined in

main.ts:209405

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

main.ts:209424

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

main.ts:209443

___

### fromJS

▸ **fromJS**(`data`): [`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Defined in

main.ts:209436
