[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphShoppingElement

# Class: KnowledgeGraphShoppingElement

Defined in: main.ts:30367

## Implements

- [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingElement()

> **new KnowledgeGraphShoppingElement**(`data`?): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

Defined in: main.ts:30394

#### Parameters

##### data?

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:30375

website domain

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`domain`](../interfaces/IKnowledgeGraphShoppingElement.md#domain)

***

### marketplace?

> `optional` **marketplace**: `string`

Defined in: main.ts:30387

merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`marketplace`](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace)

***

### marketplace\_url?

> `optional` **marketplace\_url**: `string`

Defined in: main.ts:30390

URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`marketplace_url`](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace_url)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:30378

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`price`](../interfaces/IKnowledgeGraphShoppingElement.md#price)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:30382

text alongside the link title

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`snippet`](../interfaces/IKnowledgeGraphShoppingElement.md#snippet)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:30380

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`source`](../interfaces/IKnowledgeGraphShoppingElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30371

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`title`](../interfaces/IKnowledgeGraphShoppingElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:30369

type of element

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`type`](../interfaces/IKnowledgeGraphShoppingElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:30373

relevant URL

#### Implementation of

[`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md).[`url`](../interfaces/IKnowledgeGraphShoppingElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30403

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30428

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

Defined in: main.ts:30421

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)
