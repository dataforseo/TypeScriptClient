[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PodcastsElement

# Class: PodcastsElement

## Implements

- [`IPodcastsElement`](../interfaces/IPodcastsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PodcastsElement()

> **new PodcastsElement**(`data`?): [`PodcastsElement`](PodcastsElement.md)

#### Parameters

• **data?**: [`IPodcastsElement`](../interfaces/IPodcastsElement.md)

#### Returns

[`PodcastsElement`](PodcastsElement.md)

#### Defined in

main.ts:34034

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`description`](../interfaces/IPodcastsElement.md#description)

#### Defined in

main.ts:34023

***

### time\_to\_play?

> `optional` **time\_to\_play**: `string`

the total time it will take to play an episode

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`time_to_play`](../interfaces/IPodcastsElement.md#time_to_play)

#### Defined in

main.ts:34030

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`timestamp`](../interfaces/IPodcastsElement.md#timestamp)

#### Defined in

main.ts:34028

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`title`](../interfaces/IPodcastsElement.md#title)

#### Defined in

main.ts:34019

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`type`](../interfaces/IPodcastsElement.md#type)

#### Defined in

main.ts:34017

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`url`](../interfaces/IPodcastsElement.md#url)

#### Defined in

main.ts:34021

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:34043

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:34065

***

### fromJS()

> `static` **fromJS**(`data`): [`PodcastsElement`](PodcastsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PodcastsElement`](PodcastsElement.md)

#### Defined in

main.ts:34058
