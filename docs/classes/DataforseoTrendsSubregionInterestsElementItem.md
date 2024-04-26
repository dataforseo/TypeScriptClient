**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoTrendsSubregionInterestsElementItem

# Class: DataforseoTrendsSubregionInterestsElementItem

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsSubregionInterestsElementItem(data)

> **new DataforseoTrendsSubregionInterestsElementItem**(`data`?): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Parameters

• **data?**: [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

#### Source

main.ts:126035

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

#### Source

main.ts:21034

***

### interests?

> **`optional`** **interests**: [`Interests`](Interests.md)[]

subregional keyword popuarity data for each specified term

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`interests`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests)

#### Source

main.ts:126028

***

### interests\_comparison?

> **`optional`** **interests\_comparison**: [`InterestsComparison`](InterestsComparison.md)

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`interests_comparison`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests_comparison)

#### Source

main.ts:126031

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#keywords)

#### Source

main.ts:126026

***

### position?

> **`optional`** **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`position`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#position)

#### Source

main.ts:126023

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

main.ts:126040

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

main.ts:126069

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)

#### Source

main.ts:126062
