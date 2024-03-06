[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleTrendsGraphElementItem

# Interface: IGoogleTrendsGraphElementItem

## Hierarchy

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)
  
  ↳ **`IGoogleTrendsGraphElementItem`**

## Implemented by

- [`GoogleTrendsGraphElementItem`](../classes/GoogleTrendsGraphElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [averages](IGoogleTrendsGraphElementItem.md#averages)
- [data](IGoogleTrendsGraphElementItem.md#data)
- [keywords](IGoogleTrendsGraphElementItem.md#keywords)
- [position](IGoogleTrendsGraphElementItem.md#position)
- [title](IGoogleTrendsGraphElementItem.md#title)

## Properties

### averages

• `Optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Defined in

[main.ts:120574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120574)

___


### data

• `Optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Defined in

[main.ts:120572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120572)

___


### keywords

• `Optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Defined in

[main.ts:120570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120570)

___


### position

• `Optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

[main.ts:120565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120565)

___


### title

• `Optional` **title**: `string`

title of the element in Google Trends

#### Defined in

[main.ts:120567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120567)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")