[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MentionCarouselSerpElementItem

# Class: MentionCarouselSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselSerpElementItem()

> **new MentionCarouselSerpElementItem**(`data`?): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Parameters

• **data?**: [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32681

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`items`](../interfaces/IMentionCarouselSerpElementItem.md#items)

#### Defined in

main.ts:32673

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`position`](../interfaces/IMentionCarouselSerpElementItem.md#position)

#### Defined in

main.ts:32666

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IMentionCarouselSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32662

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rank_group`](../interfaces/IMentionCarouselSerpElementItem.md#rank_group)

#### Defined in

main.ts:32658

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rectangle`](../interfaces/IMentionCarouselSerpElementItem.md#rectangle)

#### Defined in

main.ts:32677

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`title`](../interfaces/IMentionCarouselSerpElementItem.md#title)

#### Defined in

main.ts:32670

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselSerpElementItem.md#xpath)

#### Defined in

main.ts:32668

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:32686

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:32714

***

### fromJS()

> `static` **fromJS**(`data`): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32707
