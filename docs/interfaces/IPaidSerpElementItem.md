[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IPaidSerpElementItem

# Interface: IPaidSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:26870

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:26884

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Defined in

main.ts:26887

***

### domain?

> `optional` **domain**: `string`

website domain

#### Defined in

main.ts:26868

***

### extra?

> `optional` **extra**: `object`

additional information about the result

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:26882

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:26880

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:26876

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:26872

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:26874

***

### links?

> `optional` **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:26891

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26862

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Defined in

main.ts:26894

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26858

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26855

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:26898

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:26866

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:26878

***

### website\_name?

> `optional` **website\_name**: `string`

website name in SERP

#### Defined in

main.ts:26900

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26864
