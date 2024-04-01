[Documentation](../README.md) / [Exports](../modules.md) / VideoElement

# Class: VideoElement

## Implements

- [`IVideoElement`](../interfaces/IVideoElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](VideoElement.md#constructor)

### Properties

- [preview](VideoElement.md#preview)
- [source](VideoElement.md#source)
- [timestamp](VideoElement.md#timestamp)
- [title](VideoElement.md#title)
- [type](VideoElement.md#type)
- [url](VideoElement.md#url)

### Methods

- [init](VideoElement.md#init)
- [toJSON](VideoElement.md#tojson)
- [fromJS](VideoElement.md#fromjs)

## Constructors

### constructor

• **new VideoElement**(`data?`): [`VideoElement`](VideoElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IVideoElement`](../interfaces/IVideoElement.md) |

#### Returns

[`VideoElement`](VideoElement.md)

#### Defined in

main.ts:30915

## Properties

### preview

• `Optional` **preview**: `string`

URL to the video preview image

#### Implementation of

[IVideoElement](../interfaces/IVideoElement.md).[preview](../interfaces/IVideoElement.md#preview)

#### Defined in

main.ts:30911

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[IVideoElement](../interfaces/IVideoElement.md).[source](../interfaces/IVideoElement.md#source)

#### Defined in

main.ts:30900

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IVideoElement](../interfaces/IVideoElement.md).[timestamp](../interfaces/IVideoElement.md#timestamp)

#### Defined in

main.ts:30907

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IVideoElement](../interfaces/IVideoElement.md).[title](../interfaces/IVideoElement.md#title)

#### Defined in

main.ts:30902

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IVideoElement](../interfaces/IVideoElement.md).[type](../interfaces/IVideoElement.md#type)

#### Defined in

main.ts:30897

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IVideoElement](../interfaces/IVideoElement.md).[url](../interfaces/IVideoElement.md#url)

#### Defined in

main.ts:30909

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

main.ts:30924

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

main.ts:30946

___

### fromJS

▸ **fromJS**(`data`): [`VideoElement`](VideoElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`VideoElement`](VideoElement.md)

#### Defined in

main.ts:30939
