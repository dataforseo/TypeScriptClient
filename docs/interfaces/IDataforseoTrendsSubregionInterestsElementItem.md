[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoTrendsSubregionInterestsElementItem

# Interface: IDataforseoTrendsSubregionInterestsElementItem

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### interests?

> `optional` **interests**: [`Interests`](../classes/Interests.md)[]

subregional keyword popuarity data for each specified term

#### Defined in

main.ts:126442

***

### interests\_comparison?

> `optional` **interests\_comparison**: [`InterestsComparison`](../classes/InterestsComparison.md)

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Defined in

main.ts:126445

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`keywords`](IBaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:21962

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`position`](IBaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:21959

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`type`](IBaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:21956
