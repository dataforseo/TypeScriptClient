[Documentation](../README.md) / [Exports](../modules.md) / TopStoriesElement

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

main.ts:28335

## Properties

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[amp_version](../interfaces/ITopStoriesElement.md#amp_version)

#### Defined in

main.ts:28324

___

### date

• `Optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[date](../interfaces/ITopStoriesElement.md#date)

#### Defined in

main.ts:28321

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[domain](../interfaces/ITopStoriesElement.md#domain)

#### Defined in

main.ts:28317

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[source](../interfaces/ITopStoriesElement.md#source)

#### Defined in

main.ts:28315

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

main.ts:28329

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[title](../interfaces/ITopStoriesElement.md#title)

#### Defined in

main.ts:28319

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[type](../interfaces/ITopStoriesElement.md#type)

#### Defined in

main.ts:28312

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ITopStoriesElement](../interfaces/ITopStoriesElement.md).[url](../interfaces/ITopStoriesElement.md#url)

#### Defined in

main.ts:28331

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

main.ts:28344

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

main.ts:28368

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

main.ts:28361
