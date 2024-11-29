[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseDataforseoTrendsItem

# Class: BaseDataforseoTrendsItem

## Extended by

- [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)
- [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)
- [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

## Implements

- [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

## Constructors

### new BaseDataforseoTrendsItem()

> **new BaseDataforseoTrendsItem**(`data`?): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

##### data?

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Defined in

main.ts:22799

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:22797

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`keywords`](../interfaces/IBaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:22795

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`position`](../interfaces/IBaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:22792

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`type`](../interfaces/IBaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:22789

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:22809

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:22843

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Defined in

main.ts:22821
