[dataforseo-client](../README.md) / [Exports](../modules.md) / PerspectivesElement

# Class: PerspectivesElement

## Implements

- [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PerspectivesElement.md#constructor)

### Properties

- [date](PerspectivesElement.md#date)
- [description](PerspectivesElement.md#description)
- [domain](PerspectivesElement.md#domain)
- [source](PerspectivesElement.md#source)
- [timestamp](PerspectivesElement.md#timestamp)
- [title](PerspectivesElement.md#title)
- [type](PerspectivesElement.md#type)
- [url](PerspectivesElement.md#url)

### Methods

- [init](PerspectivesElement.md#init)
- [toJSON](PerspectivesElement.md#tojson)
- [fromJS](PerspectivesElement.md#fromjs)

## Constructors

### constructor

• **new PerspectivesElement**(`data?`): [`PerspectivesElement`](PerspectivesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md) |

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

#### Defined in

[main.ts:35404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35404)

## Properties

### date

• `Optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[date](../interfaces/IPerspectivesElement.md#date)

#### Defined in

[main.ts:35392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35392)

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[description](../interfaces/IPerspectivesElement.md#description)

#### Defined in

[main.ts:35386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35386)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[domain](../interfaces/IPerspectivesElement.md#domain)

#### Defined in

[main.ts:35390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35390)

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[source](../interfaces/IPerspectivesElement.md#source)

#### Defined in

[main.ts:35395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35395)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[timestamp](../interfaces/IPerspectivesElement.md#timestamp)

#### Defined in

[main.ts:35400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35400)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[title](../interfaces/IPerspectivesElement.md#title)

#### Defined in

[main.ts:35384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35384)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[type](../interfaces/IPerspectivesElement.md#type)

#### Defined in

[main.ts:35382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35382)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IPerspectivesElement](../interfaces/IPerspectivesElement.md).[url](../interfaces/IPerspectivesElement.md#url)

#### Defined in

[main.ts:35388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35388)

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

[main.ts:35413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35413)

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

[main.ts:35437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35437)

___

### fromJS

▸ **fromJS**(`data`): [`PerspectivesElement`](PerspectivesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

#### Defined in

[main.ts:35430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35430)
