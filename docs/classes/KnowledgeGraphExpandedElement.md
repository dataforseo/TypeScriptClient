[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphExpandedElement

# Class: KnowledgeGraphExpandedElement

## Implements

- [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphExpandedElement.md#constructor)

### Properties

- [domain](KnowledgeGraphExpandedElement.md#domain)
- [featured\_title](KnowledgeGraphExpandedElement.md#featured_title)
- [images](KnowledgeGraphExpandedElement.md#images)
- [snippet](KnowledgeGraphExpandedElement.md#snippet)
- [table](KnowledgeGraphExpandedElement.md#table)
- [timestamp](KnowledgeGraphExpandedElement.md#timestamp)
- [title](KnowledgeGraphExpandedElement.md#title)
- [type](KnowledgeGraphExpandedElement.md#type)
- [url](KnowledgeGraphExpandedElement.md#url)

### Methods

- [init](KnowledgeGraphExpandedElement.md#init)
- [toJSON](KnowledgeGraphExpandedElement.md#tojson)
- [fromJS](KnowledgeGraphExpandedElement.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphExpandedElement**(`data?`): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphExpandedElement`](../interfaces/IKnowledgeGraphExpandedElement.md) |

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Defined in

main.ts:27480

## Properties

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[domain](../interfaces/IKnowledgeGraphExpandedElement.md#domain)

#### Defined in

main.ts:27463

___

### featured\_title

• `Optional` **featured\_title**: `string`

title of a given element

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[featured_title](../interfaces/IKnowledgeGraphExpandedElement.md#featured_title)

#### Defined in

main.ts:27459

___

### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[images](../interfaces/IKnowledgeGraphExpandedElement.md#images)

#### Defined in

main.ts:27469

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[snippet](../interfaces/IKnowledgeGraphExpandedElement.md#snippet)

#### Defined in

main.ts:27467

___

### table

• `Optional` **table**: [`Table`](Table.md)

table element

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[table](../interfaces/IKnowledgeGraphExpandedElement.md#table)

#### Defined in

main.ts:27476

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[timestamp](../interfaces/IKnowledgeGraphExpandedElement.md#timestamp)

#### Defined in

main.ts:27474

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[title](../interfaces/IKnowledgeGraphExpandedElement.md#title)

#### Defined in

main.ts:27465

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[type](../interfaces/IKnowledgeGraphExpandedElement.md#type)

#### Defined in

main.ts:27457

___

### url

• `Optional` **url**: `string`

relevant URL

#### Implementation of

[IKnowledgeGraphExpandedElement](../interfaces/IKnowledgeGraphExpandedElement.md).[url](../interfaces/IKnowledgeGraphExpandedElement.md#url)

#### Defined in

main.ts:27461

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

main.ts:27489

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

main.ts:27518

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)

#### Defined in

main.ts:27511
