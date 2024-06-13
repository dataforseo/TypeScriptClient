**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PerspectivesElement

# Class: PerspectivesElement

## Implements

- [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PerspectivesElement(data)

> **new PerspectivesElement**(`data`?): [`PerspectivesElement`](PerspectivesElement.md)

#### Parameters

• **data?**: [`IPerspectivesElement`](../interfaces/IPerspectivesElement.md)

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

#### Source

main.ts:36788

## Properties

### date?

> **`optional`** **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`date`](../interfaces/IPerspectivesElement.md#date)

#### Source

main.ts:36776

***

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`description`](../interfaces/IPerspectivesElement.md#description)

#### Source

main.ts:36770

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`domain`](../interfaces/IPerspectivesElement.md#domain)

#### Source

main.ts:36774

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`source`](../interfaces/IPerspectivesElement.md#source)

#### Source

main.ts:36779

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`timestamp`](../interfaces/IPerspectivesElement.md#timestamp)

#### Source

main.ts:36784

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`title`](../interfaces/IPerspectivesElement.md#title)

#### Source

main.ts:36768

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`type`](../interfaces/IPerspectivesElement.md#type)

#### Source

main.ts:36766

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IPerspectivesElement`](../interfaces/IPerspectivesElement.md).[`url`](../interfaces/IPerspectivesElement.md#url)

#### Source

main.ts:36772

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:36797

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:36821

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PerspectivesElement`](PerspectivesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PerspectivesElement`](PerspectivesElement.md)

#### Source

main.ts:36814
