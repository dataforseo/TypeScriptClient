[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackElement

# Class: HotelsPackElement

Defined in: main.ts:35509

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelsPackElement()

> **new HotelsPackElement**(`data`?): [`HotelsPackElement`](HotelsPackElement.md)

Defined in: main.ts:35534

#### Parameters

##### data?

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:35517

description

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`description`](../interfaces/IHotelsPackElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:35523

website domain

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`domain`](../interfaces/IHotelsPackElement.md#domain)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:35521

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`hotel_identifier`](../interfaces/IHotelsPackElement.md#hotel_identifier)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:35527

indicates whether the element is an ad

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`is_paid`](../interfaces/IHotelsPackElement.md#is_paid)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:35513

price indicated in the element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`price`](../interfaces/IHotelsPackElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:35530

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`rating`](../interfaces/IHotelsPackElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35515

title of a given link element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`title`](../interfaces/IHotelsPackElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35511

type of element

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`type`](../interfaces/IHotelsPackElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35525

URL

#### Implementation of

[`IHotelsPackElement`](../interfaces/IHotelsPackElement.md).[`url`](../interfaces/IHotelsPackElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35543

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35568

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackElement`](HotelsPackElement.md)

Defined in: main.ts:35561

#### Parameters

##### data

`any`

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)
