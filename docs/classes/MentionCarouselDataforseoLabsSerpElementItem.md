**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new MentionCarouselDataforseoLabsSerpElementItem(data)

> **new MentionCarouselDataforseoLabsSerpElementItem**(`data`?): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md)

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:98322

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20377

***

### items?

> **`optional`** **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:98318

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:98312

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:98308

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:98305

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:98316

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:98314

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

main.ts:98327

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

main.ts:98354

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98347
