[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IFeaturedSnippetSerpElementItem

# Interface: IFeaturedSnippetSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the ad element in SERP

#### Defined in

main.ts:27354

***

### description?

> `optional` **description**: `string`

description of the ad element in SERP

#### Defined in

main.ts:27350

***

### domain?

> `optional` **domain**: `string`

domain of the ad element in SERP

#### Defined in

main.ts:27346

***

### featured\_title?

> `optional` **featured\_title**: `string`

title

#### Defined in

main.ts:27362

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:27369

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:27358

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint

#### Defined in

main.ts:27344

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:27339

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:27376

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:27372

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:27367

***

### title?

> `optional` **title**: `string`

title of the ad element in SERP

#### Defined in

main.ts:27348

***

### url?

> `optional` **url**: `string`

relevant URL of the ad element in SERP

#### Defined in

main.ts:27352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:27360
