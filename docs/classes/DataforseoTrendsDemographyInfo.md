**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoTrendsDemographyInfo

# Class: DataforseoTrendsDemographyInfo

## Implements

- [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyInfo(data)

> **new DataforseoTrendsDemographyInfo**(`data`?): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Parameters

• **data?**: [`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md)

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Source

main.ts:127782

## Properties

### demography?

> **`optional`** **demography**: [`Demography`](Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography)

#### Source

main.ts:127774

***

### demography\_comparison?

> **`optional`** **demography\_comparison**: [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyInfo.md#demography_comparison)

#### Source

main.ts:127778

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyInfo.md#keywords)

#### Source

main.ts:127771

***

### position?

> **`optional`** **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`position`](../interfaces/IDataforseoTrendsDemographyInfo.md#position)

#### Source

main.ts:127766

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IDataforseoTrendsDemographyInfo`](../interfaces/IDataforseoTrendsDemographyInfo.md).[`type`](../interfaces/IDataforseoTrendsDemographyInfo.md#type)

#### Source

main.ts:127768

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127791

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127816

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)

#### Source

main.ts:127809
