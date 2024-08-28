[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KnowledgeGraphHotelsBookingElement

# Class: KnowledgeGraphHotelsBookingElement

## Implements

- [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphHotelsBookingElement()

> **new KnowledgeGraphHotelsBookingElement**(`data`?): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Defined in

main.ts:29072

## Properties

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`description`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#description)

#### Defined in

main.ts:29059

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`domain`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#domain)

#### Defined in

main.ts:29063

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`is_paid`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#is_paid)

#### Defined in

main.ts:29068

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`price`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#price)

#### Defined in

main.ts:29066

***

### source?

> `optional` **source**: `string`

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`source`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#source)

#### Defined in

main.ts:29057

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`type`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#type)

#### Defined in

main.ts:29055

***

### url?

> `optional` **url**: `string`

relevant URL

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`url`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#url)

#### Defined in

main.ts:29061

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:29081

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:29104

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Defined in

main.ts:29097
