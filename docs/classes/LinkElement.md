[dataforseo-client](../README.md) / [Exports](../modules.md) / LinkElement

# Class: LinkElement

## Implements

- [`ILinkElement`](../interfaces/ILinkElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LinkElement.md#constructor)

### Properties

- [description](LinkElement.md#description)
- [domain](LinkElement.md#domain)
- [snippet](LinkElement.md#snippet)
- [title](LinkElement.md#title)
- [type](LinkElement.md#type)
- [url](LinkElement.md#url)
- [xpath](LinkElement.md#xpath)

### Methods

- [init](LinkElement.md#init)
- [toJSON](LinkElement.md#tojson)
- [fromJS](LinkElement.md#fromjs)

## Constructors

### constructor

• **new LinkElement**(`data?`): [`LinkElement`](LinkElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILinkElement`](../interfaces/ILinkElement.md) |

#### Returns

[`LinkElement`](LinkElement.md)

#### Defined in

[main.ts:21073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21073)

## Properties

### description

• `Optional` **description**: `string`

description of the results element

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[description](../interfaces/ILinkElement.md#description)

#### Defined in

[main.ts:21063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21063)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[domain](../interfaces/ILinkElement.md#domain)

#### Defined in

[main.ts:21067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21067)

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[snippet](../interfaces/ILinkElement.md#snippet)

#### Defined in

[main.ts:21061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21061)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[title](../interfaces/ILinkElement.md#title)

#### Defined in

[main.ts:21059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21059)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[type](../interfaces/ILinkElement.md#type)

#### Defined in

[main.ts:21057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21057)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[url](../interfaces/ILinkElement.md#url)

#### Defined in

[main.ts:21065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21065)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILinkElement](../interfaces/ILinkElement.md).[xpath](../interfaces/ILinkElement.md#xpath)

#### Defined in

[main.ts:21069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21069)

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

[main.ts:21082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21082)

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

[main.ts:21105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21105)

___

### fromJS

▸ **fromJS**(`data`): [`LinkElement`](LinkElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LinkElement`](LinkElement.md)

#### Defined in

[main.ts:21098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21098)
