[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MentionCarouselElement

# Class: MentionCarouselElement

## Implements

- [`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselElement()

> **new MentionCarouselElement**(`data`?): [`MentionCarouselElement`](MentionCarouselElement.md)

#### Parameters

• **data?**: [`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

#### Returns

[`MentionCarouselElement`](MentionCarouselElement.md)

#### Defined in

main.ts:32584

## Properties

### mentioned\_in?

> `optional` **mentioned\_in**: [`LinkElement`](LinkElement.md)[]

additional elements in the mention_carousel item

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`mentioned_in`](../interfaces/IMentionCarouselElement.md#mentioned_in)

#### Defined in

main.ts:32580

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`price`](../interfaces/IMentionCarouselElement.md#price)

#### Defined in

main.ts:32575

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`rating`](../interfaces/IMentionCarouselElement.md#rating)

#### Defined in

main.ts:32578

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`title`](../interfaces/IMentionCarouselElement.md#title)

#### Defined in

main.ts:32573

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`type`](../interfaces/IMentionCarouselElement.md#type)

#### Defined in

main.ts:32571

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:32593

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:32618

***

### fromJS()

> `static` **fromJS**(`data`): [`MentionCarouselElement`](MentionCarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MentionCarouselElement`](MentionCarouselElement.md)

#### Defined in

main.ts:32611
