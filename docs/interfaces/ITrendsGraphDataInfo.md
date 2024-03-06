[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITrendsGraphDataInfo

# Interface: ITrendsGraphDataInfo

## Implemented by

- [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](ITrendsGraphDataInfo.md#date_from)
- [date\_to](ITrendsGraphDataInfo.md#date_to)
- [missing\_data](ITrendsGraphDataInfo.md#missing_data)
- [timestamp](ITrendsGraphDataInfo.md#timestamp)
- [values](ITrendsGraphDataInfo.md#values)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Defined in

[main.ts:120461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120461)

___


### date\_to

• `Optional` **date\_to**: `string`

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Defined in

[main.ts:120464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120464)

___


### missing\_data

• `Optional` **missing\_data**: `boolean`

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

#### Defined in

[main.ts:120469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120469)

___


### timestamp

• `Optional` **timestamp**: `number`

a point in time in the Unix time format

#### Defined in

[main.ts:120466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120466)

___


### values

• `Optional` **values**: `number`[]

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term

#### Defined in

[main.ts:120474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120474)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")