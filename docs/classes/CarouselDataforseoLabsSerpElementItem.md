[**Documentation**](../README.md)

***

[Documentation](../README.md) / CarouselDataforseoLabsSerpElementItem

# Class: CarouselDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CarouselDataforseoLabsSerpElementItem()

> **new CarouselDataforseoLabsSerpElementItem**(`data`?): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:106677

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:106673

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:106671

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:106682

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:106705

***

### fromJS()

> `static` **fromJS**(`data`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:106698
