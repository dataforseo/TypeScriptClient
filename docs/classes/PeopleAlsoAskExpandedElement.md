[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

Defined in: main.ts:31759

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskExpandedElement()

> **new PeopleAlsoAskExpandedElement**(`data`?): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

Defined in: main.ts:31784

#### Parameters

##### data?

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:31771

description of the results element in SERP

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`description`](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:31767

domain where a link points

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`domain`](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:31763

the title of the featured snippets source page

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`featured_title`](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:31773

images of the element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`images`](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:31780

table element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`table`](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:31778

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`timestamp`](../interfaces/IPeopleAlsoAskExpandedElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31769

title of the carousel item

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`title`](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31761

type of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`type`](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31765

URL of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`url`](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31793

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:31822

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

Defined in: main.ts:31815

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)
