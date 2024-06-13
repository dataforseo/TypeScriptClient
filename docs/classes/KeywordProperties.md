**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordProperties

# Class: KeywordProperties

## Implements

- [`IKeywordProperties`](../interfaces/IKeywordProperties.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordProperties(data)

> **new KeywordProperties**(`data`?): [`KeywordProperties`](KeywordProperties.md)

#### Parameters

• **data?**: [`IKeywordProperties`](../interfaces/IKeywordProperties.md)

#### Returns

[`KeywordProperties`](KeywordProperties.md)

#### Source

main.ts:82843

## Properties

### core\_keyword?

> **`optional`** **core\_keyword**: `string`

main keyword in a group
contains the main keyword in a group determined by the synonym clustering algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`core_keyword`](../interfaces/IKeywordProperties.md#core_keyword)

#### Source

main.ts:82822

***

### detected\_language?

> **`optional`** **detected\_language**: `string`

detected language of the keyword
indicates the language of the keyword as identified by our system

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`detected_language`](../interfaces/IKeywordProperties.md#detected_language)

#### Source

main.ts:82836

***

### is\_another\_language?

> **`optional`** **is\_another\_language**: `boolean`

detected language of the keyword is different from the set language
if true, the language set in the request does not match the language determined by our system for a given keyword

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`is_another_language`](../interfaces/IKeywordProperties.md#is_another_language)

#### Source

main.ts:82839

***

### keyword\_difficulty?

> **`optional`** **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`keyword_difficulty`](../interfaces/IKeywordProperties.md#keyword_difficulty)

#### Source

main.ts:82833

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`se_type`](../interfaces/IKeywordProperties.md#se_type)

#### Source

main.ts:82818

***

### synonym\_clustering\_algorithm?

> **`optional`** **synonym\_clustering\_algorithm**: `string`

the algorithm used to identify synonyms
possible values:
keyword_metrics – indicates the algorithm based on keyword_info parameters
text_processing – indicates the text-based algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Implementation of

[`IKeywordProperties`](../interfaces/IKeywordProperties.md).[`synonym_clustering_algorithm`](../interfaces/IKeywordProperties.md#synonym_clustering_algorithm)

#### Source

main.ts:82828

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82852

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82874

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordProperties`](KeywordProperties.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordProperties`](KeywordProperties.md)

#### Source

main.ts:82867
