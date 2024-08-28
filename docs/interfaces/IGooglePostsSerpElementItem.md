[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IGooglePostsSerpElementItem

# Interface: IGooglePostsSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:36322

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:36320

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36314

***

### posts\_id?

> `optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Defined in

main.ts:36318

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36310

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36306

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36326

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36316
