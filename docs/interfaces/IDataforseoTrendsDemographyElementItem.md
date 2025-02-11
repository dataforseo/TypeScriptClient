[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoTrendsDemographyElementItem

# Interface: IDataforseoTrendsDemographyElementItem

Defined in: main.ts:138109

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### demography?

> `optional` **demography**: [`Demography`](../classes/Demography.md)

Defined in: main.ts:138112

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

Defined in: main.ts:138113

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
