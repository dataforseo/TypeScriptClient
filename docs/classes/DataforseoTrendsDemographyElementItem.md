**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoTrendsDemographyElementItem

# Class: DataforseoTrendsDemographyElementItem

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyElementItem(data)

> **new DataforseoTrendsDemographyElementItem**(`data`?): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Parameters

• **data?**: [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

#### Source

main.ts:127009

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

#### Source

main.ts:20906

***

### demography?

> **`optional`** **demography**: [`Demography`](Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`demography`](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography)

#### Source

main.ts:127001

***

### demography\_comparison?

> **`optional`** **demography\_comparison**: `any`

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography_comparison)

#### Source

main.ts:127005

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyElementItem.md#keywords)

#### Source

main.ts:126998

***

### position?

> **`optional`** **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`position`](../interfaces/IDataforseoTrendsDemographyElementItem.md#position)

#### Source

main.ts:126995

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

#### Source

main.ts:127014

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

#### Source

main.ts:127039

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)

#### Source

main.ts:127032