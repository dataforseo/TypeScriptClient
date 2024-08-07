**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphShoppingElement

# Class: KnowledgeGraphShoppingElement

## Implements

- [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingElement(data)

> **new KnowledgeGraphShoppingElement**(`data`?): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Source

main.ts:28672

## Properties

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`domain`](../interfaces/IKnowledgeGraphShoppingElement.md#domain)

#### Source

main.ts:28653

***

### marketplace?

> **`optional`** **marketplace**: `string`

merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`marketplace`](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace)

#### Source

main.ts:28665

***

### marketplace\_url?

> **`optional`** **marketplace\_url**: `string`

URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`marketplace_url`](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace_url)

#### Source

main.ts:28668

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`price`](../interfaces/IKnowledgeGraphShoppingElement.md#price)

#### Source

main.ts:28656

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`snippet`](../interfaces/IKnowledgeGraphShoppingElement.md#snippet)

#### Source

main.ts:28660

***

### source?

> **`optional`** **source**: `string`

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`source`](../interfaces/IKnowledgeGraphShoppingElement.md#source)

#### Source

main.ts:28658

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`title`](../interfaces/IKnowledgeGraphShoppingElement.md#title)

#### Source

main.ts:28649

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`type`](../interfaces/IKnowledgeGraphShoppingElement.md#type)

#### Source

main.ts:28647

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`url`](../interfaces/IKnowledgeGraphShoppingElement.md#url)

#### Source

main.ts:28651

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:28681

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:28706

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Source

main.ts:28699
