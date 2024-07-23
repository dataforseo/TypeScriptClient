**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphImagesElement

# Class: KnowledgeGraphImagesElement

## Implements

- [`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphImagesElement(data)

> **new KnowledgeGraphImagesElement**(`data`?): [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Parameters

• **data?**: [`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md)

#### Returns

[`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Source

main.ts:27802

## Properties

### alt?

> **`optional`** **alt**: `string`

alt tag of the image

#### Implementation of

[`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md).[`alt`](../interfaces/IKnowledgeGraphImagesElement.md#alt)

#### Source

main.ts:27793

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP of the Ad element

#### Implementation of

[`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md).[`domain`](../interfaces/IKnowledgeGraphImagesElement.md#domain)

#### Source

main.ts:27791

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md).[`image_url`](../interfaces/IKnowledgeGraphImagesElement.md#image_url)

#### Source

main.ts:27796

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md).[`type`](../interfaces/IKnowledgeGraphImagesElement.md#type)

#### Source

main.ts:27787

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md).[`url`](../interfaces/IKnowledgeGraphImagesElement.md#url)

#### Source

main.ts:27789

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md).[`xpath`](../interfaces/IKnowledgeGraphImagesElement.md#xpath)

#### Source

main.ts:27798

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:27811

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:27833

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Source

main.ts:27826
