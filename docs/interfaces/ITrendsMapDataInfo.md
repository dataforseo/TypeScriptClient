[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITrendsMapDataInfo

# Interface: ITrendsMapDataInfo

## Implemented by

- [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [geo\_id](ITrendsMapDataInfo.md#geo_id)
- [geo\_name](ITrendsMapDataInfo.md#geo_name)
- [max\_value\_index](ITrendsMapDataInfo.md#max_value_index)
- [values](ITrendsMapDataInfo.md#values)

## Properties

### geo\_id

• `Optional` **geo\_id**: `string`

Google Trends location identifier
you can use this field for matching obtained results with location parameters specified in the request
example:
US-NY

#### Defined in

[main.ts:120658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120658)

___


### geo\_name

• `Optional` **geo\_name**: `string`

Google Trends location name
you can use this field for matching obtained results with location parameters specified in the request

#### Defined in

[main.ts:120661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120661)

___


### max\_value\_index

• `Optional` **max\_value\_index**: `number`

max value among comparable terms
represents the maximum value if you specified more than two keywords in a POST array
if you specified only one keyword, the value will be null

#### Defined in

[main.ts:120672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120672)

___


### values

• `Optional` **values**: `number`[]

relative keyword popularity rate in a given location
represents the location-specific keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Defined in

[main.ts:120668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120668)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")