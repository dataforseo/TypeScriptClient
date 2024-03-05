[dataforseo-client](../README.md) / [Exports](../modules.md) / AppElement

# Class: AppElement

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppElement.md#constructor)

### Properties

- [description](AppElement.md#description)
- [price](AppElement.md#price)
- [title](AppElement.md#title)
- [type](AppElement.md#type)
- [url](AppElement.md#url)

### Methods

- [init](AppElement.md#init)
- [toJSON](AppElement.md#tojson)
- [fromJS](AppElement.md#fromjs)

## Constructors

### constructor

• **new AppElement**(`data?`): [`AppElement`](AppElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppElement`](../interfaces/IAppElement.md) |

#### Returns

[`AppElement`](AppElement.md)

#### Defined in

[main.ts:29620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29620)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[description](../interfaces/IAppElement.md#description)

#### Defined in

[main.ts:29612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29612)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[price](../interfaces/IAppElement.md#price)

#### Defined in

[main.ts:29616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29616)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[title](../interfaces/IAppElement.md#title)

#### Defined in

[main.ts:29610](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29610)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[type](../interfaces/IAppElement.md#type)

#### Defined in

[main.ts:29608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29608)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[url](../interfaces/IAppElement.md#url)

#### Defined in

[main.ts:29614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29614)

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

[main.ts:29629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29629)

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

[main.ts:29650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29650)

___

### fromJS

▸ **fromJS**(`data`): [`AppElement`](AppElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppElement`](AppElement.md)

#### Defined in

[main.ts:29643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29643)
