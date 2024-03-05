[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordProperties

# Interface: IKeywordProperties

## Implemented by

- [`KeywordProperties`](../classes/KeywordProperties.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [core\_keyword](IKeywordProperties.md#core_keyword)
- [detected\_language](IKeywordProperties.md#detected_language)
- [is\_another\_language](IKeywordProperties.md#is_another_language)
- [keyword\_difficulty](IKeywordProperties.md#keyword_difficulty)
- [se\_type](IKeywordProperties.md#se_type)
- [synonym\_clustering\_algorithm](IKeywordProperties.md#synonym_clustering_algorithm)

## Properties

### core\_keyword

• `Optional` **core\_keyword**: `string`

main keyword in a group
contains the main keyword in a group determined by the synonym clustering algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Defined in

[main.ts:79092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79092)

___

### detected\_language

• `Optional` **detected\_language**: `string`

detected language of the keyword
indicates the language of the keyword as identified by our system

#### Defined in

[main.ts:79106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79106)

___

### is\_another\_language

• `Optional` **is\_another\_language**: `boolean`

detected language of the keyword is different from the set language
if true, the language set in the request does not match the language determined by our system for a given keyword

#### Defined in

[main.ts:79109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79109)

___

### keyword\_difficulty

• `Optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Defined in

[main.ts:79103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79103)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:79088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79088)

___

### synonym\_clustering\_algorithm

• `Optional` **synonym\_clustering\_algorithm**: `string`

the algorithm used to identify synonyms
possible values:
keyword_metrics – indicates the algorithm based on keyword_info parameters
text_processing – indicates the text-based algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Defined in

[main.ts:79098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79098)
