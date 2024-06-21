**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MentionCarouselElement

# Class: MentionCarouselElement

## Implements

- [`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselElement(data)

> **new MentionCarouselElement**(`data`?): [`MentionCarouselElement`](MentionCarouselElement.md)

#### Parameters

• **data?**: [`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

#### Returns

[`MentionCarouselElement`](MentionCarouselElement.md)

#### Source

main.ts:32061

## Properties

### mentioned\_in?

> **`optional`** **mentioned\_in**: [`LinkElement`](LinkElement.md)[]

additional elements in the mention_carousel item

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`mentioned_in`](../interfaces/IMentionCarouselElement.md#mentioned_in)

#### Source

main.ts:32057

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`price`](../interfaces/IMentionCarouselElement.md#price)

#### Source

main.ts:32052

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`rating`](../interfaces/IMentionCarouselElement.md#rating)

#### Source

main.ts:32055

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`title`](../interfaces/IMentionCarouselElement.md#title)

#### Source

main.ts:32050

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`type`](../interfaces/IMentionCarouselElement.md#type)

#### Source

main.ts:32048

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:32070

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:32095

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MentionCarouselElement`](MentionCarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MentionCarouselElement`](MentionCarouselElement.md)

#### Source

main.ts:32088
