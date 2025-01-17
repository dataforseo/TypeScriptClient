[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoTrendsSubregionInterestsElementItem

# Interface: IDataforseoTrendsSubregionInterestsElementItem

Defined in: main.ts:136796

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### interests?

> `optional` **interests**: [`Interests`](../classes/Interests.md)[]

Defined in: main.ts:136798

subregional keyword popuarity data for each specified term

***

### interests\_comparison?

> `optional` **interests\_comparison**: [`InterestsComparison`](../classes/InterestsComparison.md)

Defined in: main.ts:136801

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22865

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`keywords`](IBaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22862

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`position`](IBaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22859

type of element

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`type`](IBaseDataforseoTrendsItem.md#type)
