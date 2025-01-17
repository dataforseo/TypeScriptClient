[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleImageCarouselSerpElementItem

# Class: GoogleImageCarouselSerpElementItem

Defined in: main.ts:50810

## Extends

- [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Implements

- [`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleImageCarouselSerpElementItem()

> **new GoogleImageCarouselSerpElementItem**(`data`?): [`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)

Defined in: main.ts:50826

#### Parameters

##### data?

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md)

#### Returns

[`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`constructor`](BaseGoogleImagesSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:50742

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`_discriminator`](BaseGoogleImagesSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

Defined in: main.ts:50818

items of the element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`items`](../interfaces/IGoogleImageCarouselSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:50814

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`position`](../interfaces/IGoogleImageCarouselSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:50738

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleImageCarouselSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_absolute`](BaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:50735

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`rank_group`](../interfaces/IGoogleImageCarouselSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_group`](BaseGoogleImagesSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:50822

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`rectangle`](../interfaces/IGoogleImageCarouselSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:50816

title of the element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`title`](../interfaces/IGoogleImageCarouselSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50731

type of element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`type`](../interfaces/IGoogleImageCarouselSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`type`](BaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:50740

the XPath of the element

#### Implementation of

[`IGoogleImageCarouselSerpElementItem`](../interfaces/IGoogleImageCarouselSerpElementItem.md).[`xpath`](../interfaces/IGoogleImageCarouselSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`xpath`](BaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50831

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`init`](BaseGoogleImagesSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:50856

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`toJSON`](BaseGoogleImagesSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)

Defined in: main.ts:50849

#### Parameters

##### data

`any`

#### Returns

[`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`fromJS`](BaseGoogleImagesSerpElementItem.md#fromjs)
