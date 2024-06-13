**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PodcastsElement

# Class: PodcastsElement

## Implements

- [`IPodcastsElement`](../interfaces/IPodcastsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PodcastsElement(data)

> **new PodcastsElement**(`data`?): [`PodcastsElement`](PodcastsElement.md)

#### Parameters

• **data?**: [`IPodcastsElement`](../interfaces/IPodcastsElement.md)

#### Returns

[`PodcastsElement`](PodcastsElement.md)

#### Source

main.ts:33467

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`description`](../interfaces/IPodcastsElement.md#description)

#### Source

main.ts:33456

***

### time\_to\_play?

> **`optional`** **time\_to\_play**: `string`

the total time it will take to play an episode

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`time_to_play`](../interfaces/IPodcastsElement.md#time_to_play)

#### Source

main.ts:33463

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`timestamp`](../interfaces/IPodcastsElement.md#timestamp)

#### Source

main.ts:33461

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`title`](../interfaces/IPodcastsElement.md#title)

#### Source

main.ts:33452

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`type`](../interfaces/IPodcastsElement.md#type)

#### Source

main.ts:33450

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IPodcastsElement`](../interfaces/IPodcastsElement.md).[`url`](../interfaces/IPodcastsElement.md#url)

#### Source

main.ts:33454

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:33476

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:33498

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PodcastsElement`](PodcastsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PodcastsElement`](PodcastsElement.md)

#### Source

main.ts:33491
