[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / TopStoriesElement

# Class: TopStoriesElement

## Implements

- [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopStoriesElement()

> **new TopStoriesElement**(`data`?): [`TopStoriesElement`](TopStoriesElement.md)

#### Parameters

• **data?**: [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

#### Returns

[`TopStoriesElement`](TopStoriesElement.md)

#### Defined in

main.ts:29890

## Properties

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`amp_version`](../interfaces/ITopStoriesElement.md#amp_version)

#### Defined in

main.ts:29875

***

### badges?

> `optional` **badges**: `string`[]

badges relevant to the element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`badges`](../interfaces/ITopStoriesElement.md#badges)

#### Defined in

main.ts:29886

***

### date?

> `optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`date`](../interfaces/ITopStoriesElement.md#date)

#### Defined in

main.ts:29872

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`domain`](../interfaces/ITopStoriesElement.md#domain)

#### Defined in

main.ts:29868

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`image_url`](../interfaces/ITopStoriesElement.md#image_url)

#### Defined in

main.ts:29884

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`source`](../interfaces/ITopStoriesElement.md#source)

#### Defined in

main.ts:29866

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`timestamp`](../interfaces/ITopStoriesElement.md#timestamp)

#### Defined in

main.ts:29880

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`title`](../interfaces/ITopStoriesElement.md#title)

#### Defined in

main.ts:29870

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`type`](../interfaces/ITopStoriesElement.md#type)

#### Defined in

main.ts:29863

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`url`](../interfaces/ITopStoriesElement.md#url)

#### Defined in

main.ts:29882

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:29899

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:29929

***

### fromJS()

> `static` **fromJS**(`data`): [`TopStoriesElement`](TopStoriesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopStoriesElement`](TopStoriesElement.md)

#### Defined in

main.ts:29922
