[**Documentation**](../README.md)

***

[Documentation](../README.md) / DiscussionsAndForumsElement

# Class: DiscussionsAndForumsElement

Defined in: main.ts:37557

## Implements

- [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DiscussionsAndForumsElement()

> **new DiscussionsAndForumsElement**(`data`?): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

Defined in: main.ts:37581

#### Parameters

##### data?

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:37570

description

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`description`](../interfaces/IDiscussionsAndForumsElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37565

website domain

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`domain`](../interfaces/IDiscussionsAndForumsElement.md#domain)

***

### posts\_count?

> `optional` **posts\_count**: `number`

Defined in: main.ts:37577

number of posts from the discussion on the related source

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`posts_count`](../interfaces/IDiscussionsAndForumsElement.md#posts_count)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37568

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`source`](../interfaces/IDiscussionsAndForumsElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:37575

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`timestamp`](../interfaces/IDiscussionsAndForumsElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37561

title of a given link element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`title`](../interfaces/IDiscussionsAndForumsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:37559

type of element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`type`](../interfaces/IDiscussionsAndForumsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37563

URL

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`url`](../interfaces/IDiscussionsAndForumsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37590

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37614

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

Defined in: main.ts:37607

#### Parameters

##### data

`any`

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)
