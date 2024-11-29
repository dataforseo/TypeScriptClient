[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackElement

# Class: HotelsPackElement

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelsPackElement()

> **new HotelsPackElement**(`data`?): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

##### data?

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Defined in

main.ts:35518

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`description`](../interfaces/IHotelsPackElement.md#description)

#### Defined in

main.ts:35501

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`domain`](../interfaces/IHotelsPackElement.md#domain)

#### Defined in

main.ts:35507

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`hotel_identifier`](../interfaces/IHotelsPackElement.md#hotel_identifier)

#### Defined in

main.ts:35505

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`is_paid`](../interfaces/IHotelsPackElement.md#is_paid)

#### Defined in

main.ts:35511

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`price`](../interfaces/IHotelsPackElement.md#price)

#### Defined in

main.ts:35497

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`rating`](../interfaces/IHotelsPackElement.md#rating)

#### Defined in

main.ts:35514

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`title`](../interfaces/IHotelsPackElement.md#title)

#### Defined in

main.ts:35499

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`type`](../interfaces/IHotelsPackElement.md#type)

#### Defined in

main.ts:35495

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`url`](../interfaces/IHotelsPackElement.md#url)

#### Defined in

main.ts:35509

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:35527

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:35552

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

##### data

`any`

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Defined in

main.ts:35545
