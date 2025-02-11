[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleImageCarouselSerpElementItem

# Interface: IGoogleImageCarouselSerpElementItem

Defined in: main.ts:50891

## Extends

- [`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

Defined in: main.ts:50899

items of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:50895

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:50821

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](IBaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:50818

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_group`](IBaseGoogleImagesSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:50903

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:50897

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50814

type of element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`type`](IBaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:50823

the XPath of the element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`xpath`](IBaseGoogleImagesSerpElementItem.md#xpath)
