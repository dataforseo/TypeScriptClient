[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MentionCarouselDataforseoLabsSerpElementItem

# Class: MentionCarouselDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselDataforseoLabsSerpElementItem()

> **new MentionCarouselDataforseoLabsSerpElementItem**(`data`?): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98715

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### items?

> `optional` **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98711

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:98709

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

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

main.ts:98720

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

main.ts:98743

***

### fromJS()

> `static` **fromJS**(`data`): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98736
