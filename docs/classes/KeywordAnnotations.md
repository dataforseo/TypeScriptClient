[Documentation](../README.md) / [Exports](../modules.md) / KeywordAnnotations

# Class: KeywordAnnotations

## Implements

- [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordAnnotations.md#constructor)

### Properties

- [concepts](KeywordAnnotations.md#concepts)

### Methods

- [init](KeywordAnnotations.md#init)
- [toJSON](KeywordAnnotations.md#tojson)
- [fromJS](KeywordAnnotations.md#fromjs)

## Constructors

### constructor

• **new KeywordAnnotations**(`data?`): [`KeywordAnnotations`](KeywordAnnotations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md) |

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

#### Defined in

main.ts:117391

## Properties

### concepts

• `Optional` **concepts**: [`ConceptInfo`](ConceptInfo.md)[]

the list of concepts for the keyword

#### Implementation of

[IKeywordAnnotations](../interfaces/IKeywordAnnotations.md).[concepts](../interfaces/IKeywordAnnotations.md#concepts)

#### Defined in

main.ts:117387

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

main.ts:117400

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

main.ts:117421

___

### fromJS

▸ **fromJS**(`data`): [`KeywordAnnotations`](KeywordAnnotations.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

#### Defined in

main.ts:117414
