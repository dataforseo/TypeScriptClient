[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphShoppingElement

# Class: KnowledgeGraphShoppingElement

## Implements

- [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingElement()

> **new KnowledgeGraphShoppingElement**(`data`?): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Defined in

main.ts:28835

## Properties

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`domain`](../interfaces/IKnowledgeGraphShoppingElement.md#domain)

#### Defined in

main.ts:28816

***

### marketplace?

> `optional` **marketplace**: `string`

merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`marketplace`](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace)

#### Defined in

main.ts:28828

***

### marketplace\_url?

> `optional` **marketplace\_url**: `string`

URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`marketplace_url`](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace_url)

#### Defined in

main.ts:28831

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`price`](../interfaces/IKnowledgeGraphShoppingElement.md#price)

#### Defined in

main.ts:28819

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`snippet`](../interfaces/IKnowledgeGraphShoppingElement.md#snippet)

#### Defined in

main.ts:28823

***

### source?

> `optional` **source**: `string`

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`source`](../interfaces/IKnowledgeGraphShoppingElement.md#source)

#### Defined in

main.ts:28821

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`title`](../interfaces/IKnowledgeGraphShoppingElement.md#title)

#### Defined in

main.ts:28812

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`type`](../interfaces/IKnowledgeGraphShoppingElement.md#type)

#### Defined in

main.ts:28810

***

### url?

> `optional` **url**: `string`

relevant URL

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`url`](../interfaces/IKnowledgeGraphShoppingElement.md#url)

#### Defined in

main.ts:28814

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:28844

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:28869

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Defined in

main.ts:28862
