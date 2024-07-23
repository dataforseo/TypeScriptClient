**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordAnnotations

# Class: KeywordAnnotations

## Implements

- [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordAnnotations(data)

> **new KeywordAnnotations**(`data`?): [`KeywordAnnotations`](KeywordAnnotations.md)

#### Parameters

• **data?**: [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

#### Source

main.ts:121307

## Properties

### concepts?

> **`optional`** **concepts**: [`ConceptInfo`](ConceptInfo.md)[]

the list of concepts for the keyword

#### Implementation of

[`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md).[`concepts`](../interfaces/IKeywordAnnotations.md#concepts)

#### Source

main.ts:121303

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:121316

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:121337

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordAnnotations`](KeywordAnnotations.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

#### Source

main.ts:121330
