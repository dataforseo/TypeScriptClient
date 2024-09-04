[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DiscussionsAndForumsElement

# Class: DiscussionsAndForumsElement

## Implements

- [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DiscussionsAndForumsElement()

> **new DiscussionsAndForumsElement**(`data`?): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Parameters

• **data?**: [`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md)

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Defined in

main.ts:35879

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`description`](../interfaces/IDiscussionsAndForumsElement.md#description)

#### Defined in

main.ts:35868

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`domain`](../interfaces/IDiscussionsAndForumsElement.md#domain)

#### Defined in

main.ts:35863

***

### posts\_count?

> `optional` **posts\_count**: `number`

number of posts from the discussion on the related source

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`posts_count`](../interfaces/IDiscussionsAndForumsElement.md#posts_count)

#### Defined in

main.ts:35875

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`source`](../interfaces/IDiscussionsAndForumsElement.md#source)

#### Defined in

main.ts:35866

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`timestamp`](../interfaces/IDiscussionsAndForumsElement.md#timestamp)

#### Defined in

main.ts:35873

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`title`](../interfaces/IDiscussionsAndForumsElement.md#title)

#### Defined in

main.ts:35859

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`type`](../interfaces/IDiscussionsAndForumsElement.md#type)

#### Defined in

main.ts:35857

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IDiscussionsAndForumsElement`](../interfaces/IDiscussionsAndForumsElement.md).[`url`](../interfaces/IDiscussionsAndForumsElement.md#url)

#### Defined in

main.ts:35861

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:35888

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:35912

***

### fromJS()

> `static` **fromJS**(`data`): [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)

#### Defined in

main.ts:35905
