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

main.ts:32317

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[description](../interfaces/IPodcastsElement.md#description)

#### Defined in

main.ts:32306

___

### time\_to\_play

• `Optional` **time\_to\_play**: `string`

the total time it will take to play an episode

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[time_to_play](../interfaces/IPodcastsElement.md#time_to_play)

#### Defined in

main.ts:32313

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

main.ts:32311

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[title](../interfaces/IPodcastsElement.md#title)

#### Defined in

main.ts:32302

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[type](../interfaces/IPodcastsElement.md#type)

#### Defined in

main.ts:32300

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IPodcastsElement](../interfaces/IPodcastsElement.md).[url](../interfaces/IPodcastsElement.md#url)

#### Defined in

main.ts:32304

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

main.ts:32326

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

main.ts:32348

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

main.ts:32341
