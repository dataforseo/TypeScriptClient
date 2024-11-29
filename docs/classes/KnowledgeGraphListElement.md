[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphListElement

# Class: KnowledgeGraphListElement

## Implements

- [`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphListElement()

> **new KnowledgeGraphListElement**(`data`?): [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Parameters

##### data?

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md)

#### Returns

[`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Defined in

main.ts:29440

## Properties

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`domain`](../interfaces/IKnowledgeGraphListElement.md#domain)

#### Defined in

main.ts:29431

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`image_url`](../interfaces/IKnowledgeGraphListElement.md#image_url)

#### Defined in

main.ts:29434

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the item

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`subtitle`](../interfaces/IKnowledgeGraphListElement.md#subtitle)

#### Defined in

main.ts:29427

***

### title?

> `optional` **title**: `string`

link anchor text

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`title`](../interfaces/IKnowledgeGraphListElement.md#title)

#### Defined in

main.ts:29425

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`type`](../interfaces/IKnowledgeGraphListElement.md#type)

#### Defined in

main.ts:29423

***

### url?

> `optional` **url**: `string`

sitelink URL

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`url`](../interfaces/IKnowledgeGraphListElement.md#url)

#### Defined in

main.ts:29429

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`xpath`](../interfaces/IKnowledgeGraphListElement.md#xpath)

#### Defined in

main.ts:29436

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:29449

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:29472

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Defined in

main.ts:29465
