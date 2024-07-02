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

main.ts:99482

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:99478

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:99471

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:99467

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:99464

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:99475

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:99473

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

main.ts:99487

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

main.ts:99514

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

main.ts:99507
