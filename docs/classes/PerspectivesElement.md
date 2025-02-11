[**Documentation**](../README.md)

***

[Documentation](../README.md) / PerspectivesElement

# Class: PerspectivesElement

Defined in: main.ts:37401

## Implements

- [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PerspectivesElement()

> **new PerspectivesElement**(`data`?): [`PerspectivesElement`](PerspectivesElement.md)

Defined in: main.ts:37425

#### Parameters

##### data?

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:37413

the date when the page source of the element was published

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`date`](../interfaces/IPerspectivesElement.md#date)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:37407

description

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`description`](../interfaces/IPerspectivesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37411

website domain

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`domain`](../interfaces/IPerspectivesElement.md#domain)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37416

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`source`](../interfaces/IPerspectivesElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:37421

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`timestamp`](../interfaces/IPerspectivesElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37405

title of a given link element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`title`](../interfaces/IPerspectivesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:37403

type of element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`type`](../interfaces/IPerspectivesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37409

URL

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`url`](../interfaces/IPerspectivesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37434

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37458

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PerspectivesElement`](PerspectivesElement.md)

Defined in: main.ts:37451

#### Parameters

##### data

`any`

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)
