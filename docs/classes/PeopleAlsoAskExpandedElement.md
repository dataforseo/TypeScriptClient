**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskExpandedElement(data)

> **new PeopleAlsoAskExpandedElement**(`data`?): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

• **data?**: [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Source

main.ts:29396

## Properties

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`description`](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

#### Source

main.ts:29382

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`domain`](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

#### Source

main.ts:29378

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`featured_title`](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

#### Source

main.ts:29374

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`images`](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

#### Source

main.ts:29384

***

### table?

> **`optional`** **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`table`](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

#### Source

main.ts:29392

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`timestamp`](../interfaces/IPeopleAlsoAskExpandedElement.md#timestamp)

#### Source

main.ts:29389

***

### title?

> **`optional`** **title**: `string`

title of the carousel item

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`title`](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

#### Source

main.ts:29380

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`type`](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

#### Source

main.ts:29372

***

### url?

> **`optional`** **url**: `string`

URL of element

#### Implementation of

[`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md).[`url`](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

#### Source

main.ts:29376

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:29405

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:29434

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Source

main.ts:29427
