[dataforseo-client](../README.md) / [Exports](../modules.md) / ServiceOfferingsElement

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

[main.ts:203954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203954)

## Properties

### is\_available

• `Optional` **is\_available**: `boolean`

availability of the offering
if the value is false, the offering is not available

#### Implementation of

[IServiceOfferingsElement](../interfaces/IServiceOfferingsElement.md).[is_available](../interfaces/IServiceOfferingsElement.md#is_available)

#### Defined in

[main.ts:203950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203950)

___

### name

• `Optional` **name**: `string`

name of the label
example: Delivery

#### Implementation of

[IServiceOfferingsElement](../interfaces/IServiceOfferingsElement.md).[name](../interfaces/IServiceOfferingsElement.md#name)

#### Defined in

[main.ts:203947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203947)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IServiceOfferingsElement](../interfaces/IServiceOfferingsElement.md).[type](../interfaces/IServiceOfferingsElement.md#type)

#### Defined in

[main.ts:203944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203944)

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

[main.ts:203963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203963)

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

[main.ts:203982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203982)

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

[main.ts:203975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203975)
