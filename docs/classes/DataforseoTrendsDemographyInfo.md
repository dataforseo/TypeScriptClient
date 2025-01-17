[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsDemographyInfo

# Class: DataforseoTrendsDemographyInfo

Defined in: main.ts:137408

## Implements

- [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyInfo()

> **new DataforseoTrendsDemographyInfo**(`data`?): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

Defined in: main.ts:137427

#### Parameters

##### data?

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

## Properties

### demography?

> `optional` **demography**: [`Demography`](Demography.md)

Defined in: main.ts:137419

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography)

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

Defined in: main.ts:137423

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography_comparison)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:137416

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyInfo.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:137411

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`position`](../interfaces/IDataforseoTrendsDemographyInfo.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:137413

type of element

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`type`](../interfaces/IDataforseoTrendsDemographyInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137436

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:137461

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

Defined in: main.ts:137454

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)
