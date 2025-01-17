[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackElement

# Class: HotelsPackElement

Defined in: main.ts:35493

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelsPackElement()

> **new HotelsPackElement**(`data`?): [`HotelsPackElement`](HotelsPackElement.md)

Defined in: main.ts:35518

#### Parameters

##### data?

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:35501

description

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`description`](../interfaces/IHotelsPackElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:35507

website domain

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`domain`](../interfaces/IHotelsPackElement.md#domain)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:35505

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`hotel_identifier`](../interfaces/IHotelsPackElement.md#hotel_identifier)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:35511

indicates whether the element is an ad

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`is_paid`](../interfaces/IHotelsPackElement.md#is_paid)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:35497

price indicated in the element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`price`](../interfaces/IHotelsPackElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:35514

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`rating`](../interfaces/IHotelsPackElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35499

title of a given link element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`title`](../interfaces/IHotelsPackElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35495

type of element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`type`](../interfaces/IHotelsPackElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35509

URL

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`url`](../interfaces/IHotelsPackElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35527

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35552

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackElement`](HotelsPackElement.md)

Defined in: main.ts:35545

#### Parameters

##### data

`any`

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)
