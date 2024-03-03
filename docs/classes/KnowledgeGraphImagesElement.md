[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphImagesElement

# Class: KnowledgeGraphImagesElement

## Implements

- [`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphImagesElement.md#constructor)

### Properties

- [alt](KnowledgeGraphImagesElement.md#alt)
- [domain](KnowledgeGraphImagesElement.md#domain)
- [image\_url](KnowledgeGraphImagesElement.md#image_url)
- [type](KnowledgeGraphImagesElement.md#type)
- [url](KnowledgeGraphImagesElement.md#url)
- [xpath](KnowledgeGraphImagesElement.md#xpath)

### Methods

- [init](KnowledgeGraphImagesElement.md#init)
- [toJSON](KnowledgeGraphImagesElement.md#tojson)
- [fromJS](KnowledgeGraphImagesElement.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphImagesElement**(`data?`): [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphImagesElement`](../interfaces/IKnowledgeGraphImagesElement.md) |

#### Returns

[`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Defined in

main.ts:26591

## Properties

### alt

• `Optional` **alt**: `string`

alt tag of the image

#### Implementation of

[IKnowledgeGraphImagesElement](../interfaces/IKnowledgeGraphImagesElement.md).[alt](../interfaces/IKnowledgeGraphImagesElement.md#alt)

#### Defined in

main.ts:26582

___

### domain

• `Optional` **domain**: `string`

domain in SERP of the Ad element

#### Implementation of

[IKnowledgeGraphImagesElement](../interfaces/IKnowledgeGraphImagesElement.md).[domain](../interfaces/IKnowledgeGraphImagesElement.md#domain)

#### Defined in

main.ts:26580

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[IKnowledgeGraphImagesElement](../interfaces/IKnowledgeGraphImagesElement.md).[image_url](../interfaces/IKnowledgeGraphImagesElement.md#image_url)

#### Defined in

main.ts:26585

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKnowledgeGraphImagesElement](../interfaces/IKnowledgeGraphImagesElement.md).[type](../interfaces/IKnowledgeGraphImagesElement.md#type)

#### Defined in

main.ts:26576

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IKnowledgeGraphImagesElement](../interfaces/IKnowledgeGraphImagesElement.md).[url](../interfaces/IKnowledgeGraphImagesElement.md#url)

#### Defined in

main.ts:26578

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphImagesElement](../interfaces/IKnowledgeGraphImagesElement.md).[xpath](../interfaces/IKnowledgeGraphImagesElement.md#xpath)

#### Defined in

main.ts:26587

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:26600

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:26622

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)

#### Defined in

main.ts:26615
