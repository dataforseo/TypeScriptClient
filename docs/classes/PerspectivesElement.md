[**Documentation**](../README.md)

***

[Documentation](../README.md) / PerspectivesElement

# Class: PerspectivesElement

## Implements

- [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PerspectivesElement()

> **new PerspectivesElement**(`data`?): [`PerspectivesElement`](PerspectivesElement.md)

#### Parameters

##### data?

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

#### Defined in

main.ts:37409

## Properties

### date?

> `optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`date`](../interfaces/IPerspectivesElement.md#date)

#### Defined in

main.ts:37397

***

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`description`](../interfaces/IPerspectivesElement.md#description)

#### Defined in

main.ts:37391

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`domain`](../interfaces/IPerspectivesElement.md#domain)

#### Defined in

main.ts:37395

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`source`](../interfaces/IPerspectivesElement.md#source)

#### Defined in

main.ts:37400

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`timestamp`](../interfaces/IPerspectivesElement.md#timestamp)

#### Defined in

main.ts:37405

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`title`](../interfaces/IPerspectivesElement.md#title)

#### Defined in

main.ts:37389

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`type`](../interfaces/IPerspectivesElement.md#type)

#### Defined in

main.ts:37387

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`url`](../interfaces/IPerspectivesElement.md#url)

#### Defined in

main.ts:37393

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:37418

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:37442

***

### fromJS()

> `static` **fromJS**(`data`): [`PerspectivesElement`](PerspectivesElement.md)

#### Parameters

##### data

`any`

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

#### Defined in

main.ts:37435
