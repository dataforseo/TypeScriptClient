[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordAnnotations

# Class: KeywordAnnotations

## Implements

- [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordAnnotations()

> **new KeywordAnnotations**(`data`?): [`KeywordAnnotations`](KeywordAnnotations.md)

#### Parameters

• **data?**: [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

#### Defined in

main.ts:119030

## Properties

### concepts?

> `optional` **concepts**: [`ConceptInfo`](ConceptInfo.md)[]

the list of concepts for the keyword

#### Implementation of

[`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md).[`concepts`](../interfaces/IKeywordAnnotations.md#concepts)

#### Defined in

main.ts:119026

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:119039

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:119060

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordAnnotations`](KeywordAnnotations.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

#### Defined in

main.ts:119053
