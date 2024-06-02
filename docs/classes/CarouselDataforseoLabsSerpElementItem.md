**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new CarouselDataforseoLabsSerpElementItem(data)

> **new CarouselDataforseoLabsSerpElementItem**(`data`?): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:96090

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

***

### items?

> **`optional`** **items**: [`CarouselElement`](CarouselElement.md)[]

elements of search results found in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:96086

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:96080

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:96076

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:96073

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:96084

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:96082

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:96095

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:96122

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:96115
