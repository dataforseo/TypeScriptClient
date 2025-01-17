[**Documentation**](../README.md)

***

[Documentation](../README.md) / CarouselDataforseoLabsSerpElementItem

# Class: CarouselDataforseoLabsSerpElementItem

Defined in: main.ts:106737

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CarouselDataforseoLabsSerpElementItem()

> **new CarouselDataforseoLabsSerpElementItem**(`data`?): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106745

#### Parameters

##### data?

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

Defined in: main.ts:106741

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:106739

title of the result in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106750

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:106773

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106766

#### Parameters

##### data

`any`

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
