**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopStoriesElement

# Class: TopStoriesElement

## Implements

- [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopStoriesElement(data)

> **new TopStoriesElement**(`data`?): [`TopStoriesElement`](TopStoriesElement.md)

#### Parameters

• **data?**: [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

#### Returns

[`TopStoriesElement`](TopStoriesElement.md)

#### Source

main.ts:29339

## Properties

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`amp_version`](../interfaces/ITopStoriesElement.md#amp_version)

#### Source

main.ts:29328

***

### date?

> **`optional`** **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`date`](../interfaces/ITopStoriesElement.md#date)

#### Source

main.ts:29325

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`domain`](../interfaces/ITopStoriesElement.md#domain)

#### Source

main.ts:29321

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`source`](../interfaces/ITopStoriesElement.md#source)

#### Source

main.ts:29319

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`timestamp`](../interfaces/ITopStoriesElement.md#timestamp)

#### Source

main.ts:29333

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`title`](../interfaces/ITopStoriesElement.md#title)

#### Source

main.ts:29323

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`type`](../interfaces/ITopStoriesElement.md#type)

#### Source

main.ts:29316

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`url`](../interfaces/ITopStoriesElement.md#url)

#### Source

main.ts:29335

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:29348

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:29372

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopStoriesElement`](TopStoriesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopStoriesElement`](TopStoriesElement.md)

#### Source

main.ts:29365
