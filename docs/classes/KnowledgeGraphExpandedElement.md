[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedElement

# Class: KnowledgeGraphExpandedElement

Defined in: main.ts:30077

## Implements

- [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedElement()

> **new KnowledgeGraphExpandedElement**(`data`?): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

Defined in: main.ts:30103

#### Parameters

##### data?

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:30085

domain in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`domain`](../interfaces/IKnowledgeGraphExpandedElement.md#domain)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:30081

title of a given element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`featured_title`](../interfaces/IKnowledgeGraphExpandedElement.md#featured_title)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:30091

images of the element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`images`](../interfaces/IKnowledgeGraphExpandedElement.md#images)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:30089

text alongside the link title

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`snippet`](../interfaces/IKnowledgeGraphExpandedElement.md#snippet)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:30099

results table
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`table`](../interfaces/IKnowledgeGraphExpandedElement.md#table)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:30096

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`timestamp`](../interfaces/IKnowledgeGraphExpandedElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30087

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`title`](../interfaces/IKnowledgeGraphExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:30079

type of element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`type`](../interfaces/IKnowledgeGraphExpandedElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:30083

relevant URL

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`url`](../interfaces/IKnowledgeGraphExpandedElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30112

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30141

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

Defined in: main.ts:30134

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)
