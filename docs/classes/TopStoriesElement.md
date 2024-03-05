[dataforseo-client](../README.md) / [Exports](../modules.md) / TopStoriesElement

# Class: TopStoriesElement

## Implements

- [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopStoriesElement.md#constructor)

### Properties

- [amp\_version](TopStoriesElement.md#amp_version)
- [date](TopStoriesElement.md#date)
- [domain](TopStoriesElement.md#domain)
- [source](TopStoriesElement.md#source)
- [timestamp](TopStoriesElement.md#timestamp)
- [title](TopStoriesElement.md#title)
- [type](TopStoriesElement.md#type)
- [url](TopStoriesElement.md#url)

### Methods

- [init](TopStoriesElement.md#init)
- [toJSON](TopStoriesElement.md#tojson)
- [fromJS](TopStoriesElement.md#fromjs)

## Constructors

### constructor

• **new TopStoriesElement**(`data?`): [`TopStoriesElement`](TopStoriesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md) |

#### Returns

[`TopStoriesElement`](TopStoriesElement.md)

#### Defined in

[main.ts:28193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28193)

## Properties

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[amp_version](../interfaces/ITopStoriesElement.md#amp_version)

#### Defined in

[main.ts:28182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28182)

___

### date

• `Optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[date](../interfaces/ITopStoriesElement.md#date)

#### Defined in

[main.ts:28179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28179)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[domain](../interfaces/ITopStoriesElement.md#domain)

#### Defined in

[main.ts:28175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28175)

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[source](../interfaces/ITopStoriesElement.md#source)

#### Defined in

[main.ts:28173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28173)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[timestamp](../interfaces/ITopStoriesElement.md#timestamp)

#### Defined in

[main.ts:28187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28187)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[title](../interfaces/ITopStoriesElement.md#title)

#### Defined in

[main.ts:28177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28177)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[type](../interfaces/ITopStoriesElement.md#type)

#### Defined in

[main.ts:28170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28170)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[url](../interfaces/ITopStoriesElement.md#url)

#### Defined in

[main.ts:28189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28189)

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

[main.ts:28202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28202)

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

[main.ts:28226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28226)

___

### fromJS

▸ **fromJS**(`data`): [`TopStoriesElement`](TopStoriesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopStoriesElement`](TopStoriesElement.md)

#### Defined in

[main.ts:28219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28219)
