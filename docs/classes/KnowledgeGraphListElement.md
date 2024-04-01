[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphListElement

# Class: KnowledgeGraphListElement

## Implements

- [`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphListElement.md#constructor)

### Properties

- [domain](KnowledgeGraphListElement.md#domain)
- [image\_url](KnowledgeGraphListElement.md#image_url)
- [subtitle](KnowledgeGraphListElement.md#subtitle)
- [title](KnowledgeGraphListElement.md#title)
- [type](KnowledgeGraphListElement.md#type)
- [url](KnowledgeGraphListElement.md#url)
- [xpath](KnowledgeGraphListElement.md#xpath)

### Methods

- [init](KnowledgeGraphListElement.md#init)
- [toJSON](KnowledgeGraphListElement.md#tojson)
- [fromJS](KnowledgeGraphListElement.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphListElement**(`data?`): [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphListElement`](../interfaces/IKnowledgeGraphListElement.md) |

#### Returns

[`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Defined in

main.ts:26650

## Properties

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[domain](../interfaces/IKnowledgeGraphListElement.md#domain)

#### Defined in

main.ts:26641

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[image_url](../interfaces/IKnowledgeGraphListElement.md#image_url)

#### Defined in

main.ts:26644

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the item

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[subtitle](../interfaces/IKnowledgeGraphListElement.md#subtitle)

#### Defined in

main.ts:26637

___

### title

• `Optional` **title**: `string`

link anchor text

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[title](../interfaces/IKnowledgeGraphListElement.md#title)

#### Defined in

main.ts:26635

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[type](../interfaces/IKnowledgeGraphListElement.md#type)

#### Defined in

main.ts:26633

___

### url

• `Optional` **url**: `string`

sitelink URL

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[url](../interfaces/IKnowledgeGraphListElement.md#url)

#### Defined in

main.ts:26639

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphListElement](../interfaces/IKnowledgeGraphListElement.md).[xpath](../interfaces/IKnowledgeGraphListElement.md#xpath)

#### Defined in

main.ts:26646

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

main.ts:26659

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

main.ts:26682

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)

#### Defined in

main.ts:26675
