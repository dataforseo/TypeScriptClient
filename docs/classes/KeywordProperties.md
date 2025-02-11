[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordProperties

# Class: KeywordProperties

Defined in: main.ts:92716

## Implements

- [`IKeywordProperties`](../interfaces/IKeywordProperties.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordProperties()

> **new KeywordProperties**(`data`?): [`KeywordProperties`](KeywordProperties.md)

Defined in: main.ts:92743

#### Parameters

##### data?

[`IKeywordProperties`](../interfaces/IKeywordProperties.md)

#### Returns

[`KeywordProperties`](KeywordProperties.md)

## Properties

### core\_keyword?

> `optional` **core\_keyword**: `string`

Defined in: main.ts:92722

main keyword in a group
contains the main keyword in a group determined by the synonym clustering algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`core_keyword`](../interfaces/IKeywordProperties.md#core_keyword)

***

### detected\_language?

> `optional` **detected\_language**: `string`

Defined in: main.ts:92736

detected language of the keyword
indicates the language of the keyword as identified by our system

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`detected_language`](../interfaces/IKeywordProperties.md#detected_language)

***

### is\_another\_language?

> `optional` **is\_another\_language**: `boolean`

Defined in: main.ts:92739

detected language of the keyword is different from the set language
if true, the language set in the request does not match the language determined by our system for a given keyword

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`is_another_language`](../interfaces/IKeywordProperties.md#is_another_language)

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

Defined in: main.ts:92733

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`keyword_difficulty`](../interfaces/IKeywordProperties.md#keyword_difficulty)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:92718

search engine type

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`se_type`](../interfaces/IKeywordProperties.md#se_type)

***

### synonym\_clustering\_algorithm?

> `optional` **synonym\_clustering\_algorithm**: `string`

Defined in: main.ts:92728

the algorithm used to identify synonyms
possible values:
keyword_metrics – indicates the algorithm based on keyword_info parameters
text_processing – indicates the text-based algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`synonym_clustering_algorithm`](../interfaces/IKeywordProperties.md#synonym_clustering_algorithm)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92752

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92774

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordProperties`](KeywordProperties.md)

Defined in: main.ts:92767

#### Parameters

##### data

`any`

#### Returns

[`KeywordProperties`](KeywordProperties.md)
