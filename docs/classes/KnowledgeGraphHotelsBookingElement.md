[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphHotelsBookingElement

# Class: KnowledgeGraphHotelsBookingElement

Defined in: main.ts:30565

## Implements

- [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphHotelsBookingElement()

> **new KnowledgeGraphHotelsBookingElement**(`data`?): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

Defined in: main.ts:30584

#### Parameters

##### data?

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:30571

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`description`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:30575

domain where a link points

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`domain`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#domain)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:30580

indicates whether the element is an ad

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`is_paid`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#is_paid)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:30578

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`price`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#price)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:30569

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`source`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#source)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:30567

type of element

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`type`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:30573

relevant URL

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`url`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30593

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30616

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

Defined in: main.ts:30609

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)
