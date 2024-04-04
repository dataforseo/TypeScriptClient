**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DiscussionsAndForumsElement

# Class: DiscussionsAndForumsElement

## Implements

- [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DiscussionsAndForumsElement(data)

> **new DiscussionsAndForumsElement**(`data`?): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Parameters

• **data?**: [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Source

main.ts:36589

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`description`](../interfaces/IDiscussionsAndForumsElement.md#description)

#### Source

main.ts:36578

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`domain`](../interfaces/IDiscussionsAndForumsElement.md#domain)

#### Source

main.ts:36573

***

### posts\_count?

> **`optional`** **posts\_count**: `number`

number of posts from the discussion on the related source

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`posts_count`](../interfaces/IDiscussionsAndForumsElement.md#posts_count)

#### Source

main.ts:36585

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`source`](../interfaces/IDiscussionsAndForumsElement.md#source)

#### Source

main.ts:36576

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`timestamp`](../interfaces/IDiscussionsAndForumsElement.md#timestamp)

#### Source

main.ts:36583

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`title`](../interfaces/IDiscussionsAndForumsElement.md#title)

#### Source

main.ts:36569

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`type`](../interfaces/IDiscussionsAndForumsElement.md#type)

#### Source

main.ts:36567

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`url`](../interfaces/IDiscussionsAndForumsElement.md#url)

#### Source

main.ts:36571

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:36598

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:36622

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Source

main.ts:36615
