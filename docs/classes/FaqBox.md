[dataforseo-client](../README.md) / [Exports](../modules.md) / FaqBox

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

[main.ts:27907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27907)

## Properties

### items

• `Optional` **items**: [`FaqBoxElement`](FaqBoxElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IFaqBox](../interfaces/IFaqBox.md).[items](../interfaces/IFaqBox.md#items)

#### Defined in

[main.ts:27903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27903)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IFaqBox](../interfaces/IFaqBox.md).[type](../interfaces/IFaqBox.md#type)

#### Defined in

[main.ts:27900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27900)

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

[main.ts:27916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27916)

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

[main.ts:27938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27938)

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

[main.ts:27931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27931)
