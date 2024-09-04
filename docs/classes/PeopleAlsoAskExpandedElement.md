[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskExpandedElement()

> **new PeopleAlsoAskExpandedElement**(`data`?): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

• **data?**: [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

main.ts:30120

## Properties

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`description`](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

#### Defined in

main.ts:30107

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`domain`](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

#### Defined in

main.ts:30103

***

### featured\_title?

> `optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`featured_title`](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

#### Defined in

main.ts:30099

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`images`](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

#### Defined in

main.ts:30109

***

### table?

> `optional` **table**: [`Table`](Table.md)

table element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`table`](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

#### Defined in

main.ts:30116

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

main.ts:30114

***

### title?

> `optional` **title**: `string`

title of the carousel item

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`title`](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

#### Defined in

main.ts:30105

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`type`](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

#### Defined in

main.ts:30097

***

### url?

> `optional` **url**: `string`

URL of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`url`](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

#### Defined in

main.ts:30101

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:30129

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:30158

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

main.ts:30151
