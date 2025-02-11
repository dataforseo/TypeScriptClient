[**Documentation**](../README.md)

***

[Documentation](../README.md) / MentionCarouselElement

# Class: MentionCarouselElement

Defined in: main.ts:33693

## Implements

- [`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselElement()

> **new MentionCarouselElement**(`data`?): [`MentionCarouselElement`](MentionCarouselElement.md)

Defined in: main.ts:33708

#### Parameters

##### data?

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

#### Returns

[`MentionCarouselElement`](MentionCarouselElement.md)

## Properties

### mentioned\_in?

> `optional` **mentioned\_in**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:33704

additional elements in the mention_carousel item

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`mentioned_in`](../interfaces/IMentionCarouselElement.md#mentioned_in)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:33699

price indicated in the element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`price`](../interfaces/IMentionCarouselElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:33702

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`rating`](../interfaces/IMentionCarouselElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33697

title of a given link element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`title`](../interfaces/IMentionCarouselElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33695

type of element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`type`](../interfaces/IMentionCarouselElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33717

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:33742

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MentionCarouselElement`](MentionCarouselElement.md)

Defined in: main.ts:33735

#### Parameters

##### data

`any`

#### Returns

[`MentionCarouselElement`](MentionCarouselElement.md)
