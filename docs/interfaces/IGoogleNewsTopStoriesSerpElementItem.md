[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleNewsTopStoriesSerpElementItem

# Interface: IGoogleNewsTopStoriesSerpElementItem

## Extends

- [`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`TopStoriesElement`](../classes/TopStoriesElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:44084

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left

#### Defined in

main.ts:44082

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_absolute`](IBaseGoogleNewsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:43926

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_group`](IBaseGoogleNewsSerpElementItem.md#rank_group)

#### Defined in

main.ts:43923

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rectangle`](IBaseGoogleNewsSerpElementItem.md#rectangle)

#### Defined in

main.ts:43934

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`title`](IBaseGoogleNewsSerpElementItem.md#title)

#### Defined in

main.ts:43930

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`type`](IBaseGoogleNewsSerpElementItem.md#type)

#### Defined in

main.ts:43919

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`xpath`](IBaseGoogleNewsSerpElementItem.md#xpath)

#### Defined in

main.ts:43928
