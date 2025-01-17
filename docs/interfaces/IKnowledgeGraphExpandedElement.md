[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphExpandedElement

# Interface: IKnowledgeGraphExpandedElement

Defined in: main.ts:30164

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:30172

domain in SERP

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:30168

title of a given element

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:30178

images of the element

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:30176

text alongside the link title

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

Defined in: main.ts:30186

results table
if there are none, equals null

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:30183

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30174

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:30166

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:30170

relevant URL
