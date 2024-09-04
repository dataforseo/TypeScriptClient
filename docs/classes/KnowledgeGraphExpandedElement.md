[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphExpandedElement

# Class: KnowledgeGraphExpandedElement

## Implements

- [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedElement()

> **new KnowledgeGraphExpandedElement**(`data`?): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Defined in

main.ts:28497

## Properties

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`domain`](../interfaces/IKnowledgeGraphExpandedElement.md#domain)

#### Defined in

main.ts:28479

***

### featured\_title?

> `optional` **featured\_title**: `string`

title of a given element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`featured_title`](../interfaces/IKnowledgeGraphExpandedElement.md#featured_title)

#### Defined in

main.ts:28475

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`images`](../interfaces/IKnowledgeGraphExpandedElement.md#images)

#### Defined in

main.ts:28485

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`snippet`](../interfaces/IKnowledgeGraphExpandedElement.md#snippet)

#### Defined in

main.ts:28483

***

### table?

> `optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`table`](../interfaces/IKnowledgeGraphExpandedElement.md#table)

#### Defined in

main.ts:28493

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`timestamp`](../interfaces/IKnowledgeGraphExpandedElement.md#timestamp)

#### Defined in

main.ts:28490

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`title`](../interfaces/IKnowledgeGraphExpandedElement.md#title)

#### Defined in

main.ts:28481

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`type`](../interfaces/IKnowledgeGraphExpandedElement.md#type)

#### Defined in

main.ts:28473

***

### url?

> `optional` **url**: `string`

relevant URL

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`url`](../interfaces/IKnowledgeGraphExpandedElement.md#url)

#### Defined in

main.ts:28477

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:28506

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:28535

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Defined in

main.ts:28528
