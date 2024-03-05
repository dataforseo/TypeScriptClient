[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleTrendsTopicsListElementItem

# Interface: IGoogleTrendsTopicsListElementItem

## Hierarchy

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

  ↳ **`IGoogleTrendsTopicsListElementItem`**

## Implemented by

- [`GoogleTrendsTopicsListElementItem`](../classes/GoogleTrendsTopicsListElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data](IGoogleTrendsTopicsListElementItem.md#data)
- [keywords](IGoogleTrendsTopicsListElementItem.md#keywords)
- [position](IGoogleTrendsTopicsListElementItem.md#position)
- [title](IGoogleTrendsTopicsListElementItem.md#title)

## Properties

### data

• `Optional` **data**: [`TrendsTopicListDataInfo`](../classes/TrendsTopicListDataInfo.md)

Google Trends data from the corresponding item

#### Defined in

[main.ts:120984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120984)

___

### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Defined in

[main.ts:120982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120982)

___

### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

[main.ts:120977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120977)

___

### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Defined in

[main.ts:120979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120979)
