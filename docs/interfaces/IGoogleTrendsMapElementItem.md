[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleTrendsMapElementItem

# Interface: IGoogleTrendsMapElementItem

## Hierarchy

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)
  
  ↳ **`IGoogleTrendsMapElementItem`**

## Implemented by

- [`GoogleTrendsMapElementItem`](../classes/GoogleTrendsMapElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data](IGoogleTrendsMapElementItem.md#data)
- [keywords](IGoogleTrendsMapElementItem.md#keywords)
- [position](IGoogleTrendsMapElementItem.md#position)
- [title](IGoogleTrendsMapElementItem.md#title)

## Properties

### data

• `Optional` **data**: [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Defined in

[main.ts:120758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120758)

___


### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_map element is based on the keywords listed in this array

#### Defined in

[main.ts:120756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120756)

___


### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

[main.ts:120751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120751)

___


### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Defined in

[main.ts:120753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120753)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")