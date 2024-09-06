[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoTrendsDemographyElementItem

# Class: DataforseoTrendsDemographyElementItem

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDemographyElementItem()

> **new DataforseoTrendsDemographyElementItem**(`data`?): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Parameters

• **data?**: [`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md)

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

#### Defined in

main.ts:127581

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:21899

***

### demography?

> `optional` **demography**: [`Demography`](Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`demography`](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography)

#### Defined in

main.ts:127576

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`demography_comparison`](../interfaces/IDataforseoTrendsDemographyElementItem.md#demography_comparison)

#### Defined in

main.ts:127577

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsDemographyElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:21897

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`position`](../interfaces/IDataforseoTrendsDemographyElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:21894

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDataforseoTrendsDemographyElementItem`](../interfaces/IDataforseoTrendsDemographyElementItem.md).[`type`](../interfaces/IDataforseoTrendsDemographyElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:21891

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

#### Defined in

main.ts:127586

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

#### Defined in

main.ts:127605

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:127598
