**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphHotelsBookingElement

# Class: KnowledgeGraphHotelsBookingElement

## Implements

- [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphHotelsBookingElement(data)

> **new KnowledgeGraphHotelsBookingElement**(`data`?): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Source

main.ts:28890

## Properties

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`description`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#description)

#### Source

main.ts:28877

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`domain`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#domain)

#### Source

main.ts:28881

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`is_paid`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#is_paid)

#### Source

main.ts:28886

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`price`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#price)

#### Source

main.ts:28884

***

### source?

> **`optional`** **source**: `string`

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`source`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#source)

#### Source

main.ts:28875

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`type`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#type)

#### Source

main.ts:28873

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`url`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#url)

#### Source

main.ts:28879

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:28899

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:28922

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Source

main.ts:28915
