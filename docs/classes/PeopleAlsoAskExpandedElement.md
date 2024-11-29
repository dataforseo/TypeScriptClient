[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskExpandedElement()

> **new PeopleAlsoAskExpandedElement**(`data`?): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

##### data?

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

main.ts:31784

## Properties

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`description`](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

#### Defined in

main.ts:31771

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`domain`](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

#### Defined in

main.ts:31767

***

### featured\_title?

> `optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`featured_title`](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

#### Defined in

main.ts:31763

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`images`](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

#### Defined in

main.ts:31773

***

### table?

> `optional` **table**: [`Table`](Table.md)

table element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`table`](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

#### Defined in

main.ts:31780

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`timestamp`](../interfaces/IPeopleAlsoAskExpandedElement.md#timestamp)

#### Defined in

main.ts:31778

***

### title?

> `optional` **title**: `string`

title of the carousel item

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`title`](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

#### Defined in

main.ts:31769

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`type`](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

#### Defined in

main.ts:31761

***

### url?

> `optional` **url**: `string`

URL of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`url`](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

#### Defined in

main.ts:31765

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:31793

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:31822

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

main.ts:31815
