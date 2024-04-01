[Documentation](../README.md) / [Exports](../modules.md) / PodcastsElement

# Class: PodcastsElement

## Implements

- [`IPodcastsElement`](../interfaces/IPodcastsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PodcastsElement.md#constructor)

### Properties

- [description](PodcastsElement.md#description)
- [time\_to\_play](PodcastsElement.md#time_to_play)
- [timestamp](PodcastsElement.md#timestamp)
- [title](PodcastsElement.md#title)
- [type](PodcastsElement.md#type)
- [url](PodcastsElement.md#url)

### Methods

- [init](PodcastsElement.md#init)
- [toJSON](PodcastsElement.md#tojson)
- [fromJS](PodcastsElement.md#fromjs)

## Constructors

### constructor

• **new PodcastsElement**(`data?`): [`PodcastsElement`](PodcastsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPodcastsElement`](../interfaces/IPodcastsElement.md) |

#### Returns

[`PodcastsElement`](PodcastsElement.md)

#### Defined in

main.ts:33050

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[description](../interfaces/IPodcastsElement.md#description)

#### Defined in

main.ts:33039

___

### time\_to\_play

• `Optional` **time\_to\_play**: `string`

the total time it will take to play an episode

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[time_to_play](../interfaces/IPodcastsElement.md#time_to_play)

#### Defined in

main.ts:33046

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[timestamp](../interfaces/IPodcastsElement.md#timestamp)

#### Defined in

main.ts:33044

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[title](../interfaces/IPodcastsElement.md#title)

#### Defined in

main.ts:33035

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[type](../interfaces/IPodcastsElement.md#type)

#### Defined in

main.ts:33033

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[url](../interfaces/IPodcastsElement.md#url)

#### Defined in

main.ts:33037

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

main.ts:33059

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

main.ts:33081

___

### fromJS

▸ **fromJS**(`data`): [`PodcastsElement`](PodcastsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PodcastsElement`](PodcastsElement.md)

#### Defined in

main.ts:33074
