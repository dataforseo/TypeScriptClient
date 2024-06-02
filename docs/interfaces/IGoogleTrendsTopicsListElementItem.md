**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleTrendsTopicsListElementItem

# Interface: IGoogleTrendsTopicsListElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data?

> **`optional`** **data**: [`TrendsTopicListDataInfo`](../classes/TrendsTopicListDataInfo.md)

Google Trends data from the corresponding item

#### Source

main.ts:125589

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Source

main.ts:125587

***

### position?

> **`optional`** **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Source

main.ts:125582

***

### title?

> **`optional`** **title**: `string`

title of the element in Google Trends

#### Source

main.ts:125584
