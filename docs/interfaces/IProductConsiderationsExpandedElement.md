[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IProductConsiderationsExpandedElement

# Interface: IProductConsiderationsExpandedElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

main.ts:35213

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Defined in

main.ts:35196

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:35200

***

### featured\_title?

> `optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Defined in

main.ts:35194

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

search queries related to the elment

#### Defined in

main.ts:35209

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:35198

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:35207

***

### title?

> `optional` **title**: `string`

title of the carousel item

#### Defined in

main.ts:35192

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:35190

***

### url?

> `optional` **url**: `string`

URL of element

#### Defined in

main.ts:35202
