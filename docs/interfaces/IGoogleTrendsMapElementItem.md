[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleTrendsMapElementItem

# Interface: IGoogleTrendsMapElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data?

> `optional` **data**: [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Defined in

main.ts:127064

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_map element is based on the keywords listed in this array

#### Defined in

main.ts:127062

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:127057

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Defined in

main.ts:127059
