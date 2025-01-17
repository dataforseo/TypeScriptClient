[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleNewsTopStoriesSerpElementItem

# Interface: IGoogleNewsTopStoriesSerpElementItem

Defined in: main.ts:46356

## Extends

- [`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`TopStoriesElement`](../classes/TopStoriesElement.md)[]

Defined in: main.ts:46362

items of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:46360

the alignment of the element in SERP
can take the following values:
left

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:46204

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_absolute`](IBaseGoogleNewsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:46201

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_group`](IBaseGoogleNewsSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:46212

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rectangle`](IBaseGoogleNewsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:46208

title of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`title`](IBaseGoogleNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:46197

type of element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`type`](IBaseGoogleNewsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:46206

the XPath of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`xpath`](IBaseGoogleNewsSerpElementItem.md#xpath)
