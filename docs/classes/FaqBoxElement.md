[Documentation](../README.md) / [Exports](../modules.md) / FaqBoxElement

# Class: FaqBoxElement

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FaqBoxElement.md#constructor)

### Properties

- [description](FaqBoxElement.md#description)
- [links](FaqBoxElement.md#links)
- [title](FaqBoxElement.md#title)
- [type](FaqBoxElement.md#type)

### Methods

- [init](FaqBoxElement.md#init)
- [toJSON](FaqBoxElement.md#tojson)
- [fromJS](FaqBoxElement.md#fromjs)

## Constructors

### constructor

• **new FaqBoxElement**(`data?`): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md) |

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Defined in

main.ts:28583

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IFaqBoxElement](../interfaces/IFaqBoxElement.md).[description](../interfaces/IFaqBoxElement.md#description)

#### Defined in

main.ts:28577

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[IFaqBoxElement](../interfaces/IFaqBoxElement.md).[links](../interfaces/IFaqBoxElement.md#links)

#### Defined in

main.ts:28579

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IFaqBoxElement](../interfaces/IFaqBoxElement.md).[title](../interfaces/IFaqBoxElement.md#title)

#### Defined in

main.ts:28575

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IFaqBoxElement](../interfaces/IFaqBoxElement.md).[type](../interfaces/IFaqBoxElement.md#type)

#### Defined in

main.ts:28573

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

main.ts:28592

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

main.ts:28616

___

### fromJS

▸ **fromJS**(`data`): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Defined in

main.ts:28609
