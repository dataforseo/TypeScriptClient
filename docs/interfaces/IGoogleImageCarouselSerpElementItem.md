[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleImageCarouselSerpElementItem

# Interface: IGoogleImageCarouselSerpElementItem

## Extends

- [`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:47689

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:47685

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](IBaseGoogleImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:47611

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_group`](IBaseGoogleImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:47608

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

#### Defined in

main.ts:47693

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:47687

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`type`](IBaseGoogleImagesSerpElementItem.md#type)

#### Defined in

main.ts:47604

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`xpath`](IBaseGoogleImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:47613
