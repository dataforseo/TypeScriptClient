**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedElement

# Class: KnowledgeGraphExpandedElement

## Implements

- [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedElement(data)

> **new KnowledgeGraphExpandedElement**(`data`?): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Source

main.ts:27918

## Properties

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`domain`](../interfaces/IKnowledgeGraphExpandedElement.md#domain)

#### Source

main.ts:27900

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

title of a given element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`featured_title`](../interfaces/IKnowledgeGraphExpandedElement.md#featured_title)

#### Source

main.ts:27896

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`images`](../interfaces/IKnowledgeGraphExpandedElement.md#images)

#### Source

main.ts:27906

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`snippet`](../interfaces/IKnowledgeGraphExpandedElement.md#snippet)

#### Source

main.ts:27904

***

### table?

> **`optional`** **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`table`](../interfaces/IKnowledgeGraphExpandedElement.md#table)

#### Source

main.ts:27914

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`timestamp`](../interfaces/IKnowledgeGraphExpandedElement.md#timestamp)

#### Source

main.ts:27911

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`title`](../interfaces/IKnowledgeGraphExpandedElement.md#title)

#### Source

main.ts:27902

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`type`](../interfaces/IKnowledgeGraphExpandedElement.md#type)

#### Source

main.ts:27894

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Implementation of

[`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md).[`url`](../interfaces/IKnowledgeGraphExpandedElement.md#url)

#### Source

main.ts:27898

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:27927

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:27956

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Source

main.ts:27949
