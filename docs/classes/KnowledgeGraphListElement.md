[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphListElement

# Class: KnowledgeGraphListElement

Defined in: main.ts:29429

## Implements

- [`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphListElement()

> **new KnowledgeGraphListElement**(`data`?): [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

Defined in: main.ts:29448

#### Parameters

##### data?

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md)

#### Returns

[`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:29439

domain in SERP

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`domain`](../interfaces/IKnowledgeGraphListElement.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:29442

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`image_url`](../interfaces/IKnowledgeGraphListElement.md#image_url)

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:29435

subtitle of the item

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`subtitle`](../interfaces/IKnowledgeGraphListElement.md#subtitle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:29433

link anchor text

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`title`](../interfaces/IKnowledgeGraphListElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:29431

type of element

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`type`](../interfaces/IKnowledgeGraphListElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:29437

sitelink URL

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`url`](../interfaces/IKnowledgeGraphListElement.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:29444

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md).[`xpath`](../interfaces/IKnowledgeGraphListElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:29457

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:29480

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

Defined in: main.ts:29473

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)
