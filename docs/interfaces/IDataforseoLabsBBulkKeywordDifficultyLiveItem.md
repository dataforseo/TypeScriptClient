[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBBulkKeywordDifficultyLiveItem

# Interface: IDataforseoLabsBBulkKeywordDifficultyLiveItem

## Implemented by

- [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keyword](IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword)
- [keyword\_difficulty](IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword_difficulty)
- [se\_type](IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#se_type)

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:82418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82418)

___

### keyword\_difficulty

• `Optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Defined in

[main.ts:82423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82423)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:82416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82416)
