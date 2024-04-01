[Documentation](../README.md) / [Exports](../modules.md) / IProductConsiderationsExpandedElement

# Interface: IProductConsiderationsExpandedElement

## Implemented by

- [`ProductConsiderationsExpandedElement`](../classes/ProductConsiderationsExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [about\_this\_result](IProductConsiderationsExpandedElement.md#about_this_result)
- [breadcrumb](IProductConsiderationsExpandedElement.md#breadcrumb)
- [domain](IProductConsiderationsExpandedElement.md#domain)
- [featured\_title](IProductConsiderationsExpandedElement.md#featured_title)
- [related\_searches](IProductConsiderationsExpandedElement.md#related_searches)
- [snippet](IProductConsiderationsExpandedElement.md#snippet)
- [timestamp](IProductConsiderationsExpandedElement.md#timestamp)
- [title](IProductConsiderationsExpandedElement.md#title)
- [type](IProductConsiderationsExpandedElement.md#type)
- [url](IProductConsiderationsExpandedElement.md#url)

## Properties

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

main.ts:35464

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Defined in

main.ts:35447

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:35451

___

### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Defined in

main.ts:35445

___

### related\_searches

• `Optional` **related\_searches**: `string`[]

search queries related to the elment

#### Defined in

main.ts:35460

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:35449

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:35458

___

### title

• `Optional` **title**: `string`

title of the carousel item

#### Defined in

main.ts:35443

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:35441

___

### url

• `Optional` **url**: `string`

URL of element

#### Defined in

main.ts:35453
