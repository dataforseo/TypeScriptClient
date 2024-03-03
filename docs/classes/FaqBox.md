[Documentation](../README.md) / [Exports](../modules.md) / FaqBox

# Class: FaqBox

## Implements

- [`IFaqBox`](../interfaces/IFaqBox.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FaqBox.md#constructor)

### Properties

- [items](FaqBox.md#items)
- [type](FaqBox.md#type)

### Methods

- [init](FaqBox.md#init)
- [toJSON](FaqBox.md#tojson)
- [fromJS](FaqBox.md#fromjs)

## Constructors

### constructor

• **new FaqBox**(`data?`): [`FaqBox`](FaqBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFaqBox`](../interfaces/IFaqBox.md) |

#### Returns

[`FaqBox`](FaqBox.md)

#### Defined in

main.ts:28049

## Properties

### items

• `Optional` **items**: [`FaqBoxElement`](FaqBoxElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IFaqBox](../interfaces/IFaqBox.md).[items](../interfaces/IFaqBox.md#items)

#### Defined in

main.ts:28045

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IFaqBox](../interfaces/IFaqBox.md).[type](../interfaces/IFaqBox.md#type)

#### Defined in

main.ts:28042

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

main.ts:28058

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

main.ts:28080

___

### fromJS

▸ **fromJS**(`data`): [`FaqBox`](FaqBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FaqBox`](FaqBox.md)

#### Defined in

main.ts:28073
