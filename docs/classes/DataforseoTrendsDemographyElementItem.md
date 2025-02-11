[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsDemographyElementItem

# Class: DataforseoTrendsDemographyElementItem

Defined in: main.ts:138064

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyElementItem()

> **new DataforseoTrendsDemographyElementItem**(`data`?): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

Defined in: main.ts:138072

#### Parameters

##### data?

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22797

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

***

### demography?

> `optional` **demography**: [`Demography`](Demography.md)

Defined in: main.ts:138067

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`demography`](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography)

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

Defined in: main.ts:138068

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography_comparison)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22795

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22792

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`position`](../interfaces/IDataforseoTrendsDemographyElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22789

type of element

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`type`](../interfaces/IDataforseoTrendsDemographyElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138077

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138096

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

Defined in: main.ts:138089

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)
