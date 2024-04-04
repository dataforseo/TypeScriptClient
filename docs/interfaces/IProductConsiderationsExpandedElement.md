**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IProductConsiderationsExpandedElement

# Interface: IProductConsiderationsExpandedElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> **`optional`** **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Source

main.ts:35470

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Source

main.ts:35453

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Source

main.ts:35457

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

the title of the featured snippets source page

#### Source

main.ts:35451

***

### related\_searches?

> **`optional`** **related\_searches**: `string`[]

search queries related to the elment

#### Source

main.ts:35466

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Source

main.ts:35455

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:35464

***

### title?

> **`optional`** **title**: `string`

title of the carousel item

#### Source

main.ts:35449

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:35447

***

### url?

> **`optional`** **url**: `string`

URL of element

#### Source

main.ts:35459
