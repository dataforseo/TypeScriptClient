[**Documentation**](../README.md)

***

[Documentation](../README.md) / MentionCarouselDataforseoLabsSerpElementItem

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

##### data?

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:108451

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:108447

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

main.ts:21421

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

main.ts:21417

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

main.ts:21414

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:108445

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:108456

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

main.ts:108479

***

### fromJS()

> `static` **fromJS**(`data`): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:108472
