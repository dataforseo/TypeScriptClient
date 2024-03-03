[Documentation](../README.md) / [Exports](../modules.md) / KeywordProperties

# Class: KeywordProperties

## Implements

- [`IKeywordProperties`](../interfaces/IKeywordProperties.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordProperties.md#constructor)

### Properties

- [core\_keyword](KeywordProperties.md#core_keyword)
- [detected\_language](KeywordProperties.md#detected_language)
- [is\_another\_language](KeywordProperties.md#is_another_language)
- [keyword\_difficulty](KeywordProperties.md#keyword_difficulty)
- [se\_type](KeywordProperties.md#se_type)
- [synonym\_clustering\_algorithm](KeywordProperties.md#synonym_clustering_algorithm)

### Methods

- [init](KeywordProperties.md#init)
- [toJSON](KeywordProperties.md#tojson)
- [fromJS](KeywordProperties.md#fromjs)

## Constructors

### constructor

• **new KeywordProperties**(`data?`): [`KeywordProperties`](KeywordProperties.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordProperties`](../interfaces/IKeywordProperties.md) |

#### Returns

[`KeywordProperties`](KeywordProperties.md)

#### Defined in

main.ts:79183

## Properties

### core\_keyword

• `Optional` **core\_keyword**: `string`

main keyword in a group
contains the main keyword in a group determined by the synonym clustering algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Implementation of

[IKeywordProperties](../interfaces/IKeywordProperties.md).[core_keyword](../interfaces/IKeywordProperties.md#core_keyword)

#### Defined in

main.ts:79162

___

### detected\_language

• `Optional` **detected\_language**: `string`

detected language of the keyword
indicates the language of the keyword as identified by our system

#### Implementation of

[IKeywordProperties](../interfaces/IKeywordProperties.md).[detected_language](../interfaces/IKeywordProperties.md#detected_language)

#### Defined in

main.ts:79176

___

### is\_another\_language

• `Optional` **is\_another\_language**: `boolean`

detected language of the keyword is different from the set language
if true, the language set in the request does not match the language determined by our system for a given keyword

#### Implementation of

[IKeywordProperties](../interfaces/IKeywordProperties.md).[is_another_language](../interfaces/IKeywordProperties.md#is_another_language)

#### Defined in

main.ts:79179

___

### keyword\_difficulty

• `Optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[IKeywordProperties](../interfaces/IKeywordProperties.md).[keyword_difficulty](../interfaces/IKeywordProperties.md#keyword_difficulty)

#### Defined in

main.ts:79173

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IKeywordProperties](../interfaces/IKeywordProperties.md).[se_type](../interfaces/IKeywordProperties.md#se_type)

#### Defined in

main.ts:79158

___

### synonym\_clustering\_algorithm

• `Optional` **synonym\_clustering\_algorithm**: `string`

the algorithm used to identify synonyms
possible values:
keyword_metrics – indicates the algorithm based on keyword_info parameters
text_processing – indicates the text-based algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Implementation of

[IKeywordProperties](../interfaces/IKeywordProperties.md).[synonym_clustering_algorithm](../interfaces/IKeywordProperties.md#synonym_clustering_algorithm)

#### Defined in

main.ts:79168

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

main.ts:79192

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

main.ts:79214

___

### fromJS

▸ **fromJS**(`data`): [`KeywordProperties`](KeywordProperties.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordProperties`](KeywordProperties.md)

#### Defined in

main.ts:79207
