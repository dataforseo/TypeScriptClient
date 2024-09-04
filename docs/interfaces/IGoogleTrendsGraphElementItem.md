[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleTrendsGraphElementItem

# Interface: IGoogleTrendsGraphElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### averages?

> `optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Defined in

main.ts:126705

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Defined in

main.ts:126703

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Defined in

main.ts:126701

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:126696

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Defined in

main.ts:126698
