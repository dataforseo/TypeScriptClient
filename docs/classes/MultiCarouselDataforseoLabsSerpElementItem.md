[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MultiCarouselDataforseoLabsSerpElementItem

# Class: MultiCarouselDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MultiCarouselDataforseoLabsSerpElementItem()

> **new MultiCarouselDataforseoLabsSerpElementItem**(`data`?): [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98621

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`MultiCarouselElement`](MultiCarouselElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98617

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:98613

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:98609

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:98606

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:98615

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:98626

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:98652

***

### fromJS()

> `static` **fromJS**(`data`): [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98645
