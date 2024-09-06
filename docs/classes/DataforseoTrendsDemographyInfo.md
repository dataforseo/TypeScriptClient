[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoTrendsDemographyInfo

# Class: DataforseoTrendsDemographyInfo

## Implements

- [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyInfo()

> **new DataforseoTrendsDemographyInfo**(`data`?): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Parameters

• **data?**: [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Defined in

main.ts:127102

## Properties

### demography?

> `optional` **demography**: [`Demography`](Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography)

#### Defined in

main.ts:127094

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography_comparison)

#### Defined in

main.ts:127098

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyInfo.md#keywords)

#### Defined in

main.ts:127091

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`position`](../interfaces/IDataforseoTrendsDemographyInfo.md#position)

#### Defined in

main.ts:127086

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`type`](../interfaces/IDataforseoTrendsDemographyInfo.md#type)

#### Defined in

main.ts:127088

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:127111

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:127136

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Defined in

main.ts:127129
