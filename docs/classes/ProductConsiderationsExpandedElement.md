[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductConsiderationsExpandedElement

# Class: ProductConsiderationsExpandedElement

Defined in: main.ts:36597

## Implements

- [`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsExpandedElement()

> **new ProductConsiderationsExpandedElement**(`data`?): [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

Defined in: main.ts:36626

#### Parameters

##### data?

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md)

#### Returns

[`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

Defined in: main.ts:36622

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`about_this_result`](../interfaces/IProductConsiderationsExpandedElement.md#about_this_result)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:36605

breadcrumb of the Ad element in SERP

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`breadcrumb`](../interfaces/IProductConsiderationsExpandedElement.md#breadcrumb)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:36609

domain where a link points

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`domain`](../interfaces/IProductConsiderationsExpandedElement.md#domain)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:36603

the title of the featured snippets source page

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`featured_title`](../interfaces/IProductConsiderationsExpandedElement.md#featured_title)

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

Defined in: main.ts:36618

search queries related to the elment

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`related_searches`](../interfaces/IProductConsiderationsExpandedElement.md#related_searches)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:36607

text alongside the link title

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`snippet`](../interfaces/IProductConsiderationsExpandedElement.md#snippet)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:36616

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`timestamp`](../interfaces/IProductConsiderationsExpandedElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36601

title of the carousel item

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`title`](../interfaces/IProductConsiderationsExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36599

type of element

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`type`](../interfaces/IProductConsiderationsExpandedElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36611

URL of element

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`url`](../interfaces/IProductConsiderationsExpandedElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36635

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36665

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

Defined in: main.ts:36658

#### Parameters

##### data

`any`

#### Returns

[`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)
