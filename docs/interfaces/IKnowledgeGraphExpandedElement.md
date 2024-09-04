[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphExpandedElement

# Interface: IKnowledgeGraphExpandedElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:28566

***

### featured\_title?

> `optional` **featured\_title**: `string`

title of a given element

#### Defined in

main.ts:28562

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:28572

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:28570

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:28580

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:28577

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:28568

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:28560

***

### url?

> `optional` **url**: `string`

relevant URL

#### Defined in

main.ts:28564
