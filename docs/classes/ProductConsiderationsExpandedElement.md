[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ProductConsiderationsExpandedElement

# Class: ProductConsiderationsExpandedElement

## Implements

- [`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsExpandedElement()

> **new ProductConsiderationsExpandedElement**(`data`?): [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Parameters

• **data?**: [`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md)

#### Returns

[`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Defined in

main.ts:36360

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`about_this_result`](../interfaces/IProductConsiderationsExpandedElement.md#about_this_result)

#### Defined in

main.ts:36356

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`breadcrumb`](../interfaces/IProductConsiderationsExpandedElement.md#breadcrumb)

#### Defined in

main.ts:36339

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`domain`](../interfaces/IProductConsiderationsExpandedElement.md#domain)

#### Defined in

main.ts:36343

***

### featured\_title?

> `optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`featured_title`](../interfaces/IProductConsiderationsExpandedElement.md#featured_title)

#### Defined in

main.ts:36337

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`related_searches`](../interfaces/IProductConsiderationsExpandedElement.md#related_searches)

#### Defined in

main.ts:36352

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`snippet`](../interfaces/IProductConsiderationsExpandedElement.md#snippet)

#### Defined in

main.ts:36341

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`timestamp`](../interfaces/IProductConsiderationsExpandedElement.md#timestamp)

#### Defined in

main.ts:36350

***

### title?

> `optional` **title**: `string`

title of the carousel item

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`title`](../interfaces/IProductConsiderationsExpandedElement.md#title)

#### Defined in

main.ts:36335

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`type`](../interfaces/IProductConsiderationsExpandedElement.md#type)

#### Defined in

main.ts:36333

***

### url?

> `optional` **url**: `string`

URL of element

#### Implementation of

[`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md).[`url`](../interfaces/IProductConsiderationsExpandedElement.md#url)

#### Defined in

main.ts:36345

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:36369

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:36399

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Defined in

main.ts:36392
