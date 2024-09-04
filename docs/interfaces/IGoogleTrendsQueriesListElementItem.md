[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleTrendsQueriesListElementItem

# Interface: IGoogleTrendsQueriesListElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data?

> `optional` **data**: [`QueriesListDataInfo`](../classes/QueriesListDataInfo.md)

Google Trends data from the corresponding item

#### Defined in

main.ts:127276

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Defined in

main.ts:127274

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:127269

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Defined in

main.ts:127271
