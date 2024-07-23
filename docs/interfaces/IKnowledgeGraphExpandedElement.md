**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphExpandedElement

# Interface: IKnowledgeGraphExpandedElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Source

main.ts:28384

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

title of a given element

#### Source

main.ts:28380

***

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Source

main.ts:28390

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Source

main.ts:28388

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:28398

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:28395

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:28386

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:28378

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Source

main.ts:28382
