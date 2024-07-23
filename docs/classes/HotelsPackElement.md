**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelsPackElement

# Class: HotelsPackElement

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelsPackElement(data)

> **new HotelsPackElement**(`data`?): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

• **data?**: [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Source

main.ts:34690

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`description`](../interfaces/IHotelsPackElement.md#description)

#### Source

main.ts:34673

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`domain`](../interfaces/IHotelsPackElement.md#domain)

#### Source

main.ts:34679

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`hotel_identifier`](../interfaces/IHotelsPackElement.md#hotel_identifier)

#### Source

main.ts:34677

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`is_paid`](../interfaces/IHotelsPackElement.md#is_paid)

#### Source

main.ts:34683

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`price`](../interfaces/IHotelsPackElement.md#price)

#### Source

main.ts:34669

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`rating`](../interfaces/IHotelsPackElement.md#rating)

#### Source

main.ts:34686

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`title`](../interfaces/IHotelsPackElement.md#title)

#### Source

main.ts:34671

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`type`](../interfaces/IHotelsPackElement.md#type)

#### Source

main.ts:34667

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`url`](../interfaces/IHotelsPackElement.md#url)

#### Source

main.ts:34681

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:34699

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:34724

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Source

main.ts:34717
