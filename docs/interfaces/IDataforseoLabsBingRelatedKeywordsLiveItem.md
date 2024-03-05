[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingRelatedKeywordsLiveItem

# Interface: IDataforseoLabsBingRelatedKeywordsLiveItem

## Implemented by

- [`DataforseoLabsBingRelatedKeywordsLiveItem`](../classes/DataforseoLabsBingRelatedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IDataforseoLabsBingRelatedKeywordsLiveItem.md#depth)
- [keyword\_data](IDataforseoLabsBingRelatedKeywordsLiveItem.md#keyword_data)
- [related\_keywords](IDataforseoLabsBingRelatedKeywordsLiveItem.md#related_keywords)
- [se\_type](IDataforseoLabsBingRelatedKeywordsLiveItem.md#se_type)

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth

#### Defined in

[main.ts:106014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106014)

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the returned keyword

#### Defined in

[main.ts:106012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106012)

___

### related\_keywords

• `Optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Defined in

[main.ts:106017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106017)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:106010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106010)
