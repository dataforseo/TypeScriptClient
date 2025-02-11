[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsDemographyInfo

# Class: DataforseoTrendsDemographyInfo

Defined in: main.ts:137572

## Implements

- [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyInfo()

> **new DataforseoTrendsDemographyInfo**(`data`?): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

Defined in: main.ts:137591

#### Parameters

##### data?

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

## Properties

### demography?

> `optional` **demography**: [`Demography`](Demography.md)

Defined in: main.ts:137583

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography)

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

Defined in: main.ts:137587

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography_comparison)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:137580

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyInfo.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:137575

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`position`](../interfaces/IDataforseoTrendsDemographyInfo.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:137577

type of element

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`type`](../interfaces/IDataforseoTrendsDemographyInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137600

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:137625

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

Defined in: main.ts:137618

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)
