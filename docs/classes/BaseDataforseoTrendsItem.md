[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseDataforseoTrendsItem

# Class: BaseDataforseoTrendsItem

## Extended by

- [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)
- [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)
- [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

## Implements

- [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseDataforseoTrendsItem()

> **new BaseDataforseoTrendsItem**(`data`?): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

• **data?**: [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Defined in

main.ts:21640

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21638

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21650

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21681

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Defined in

main.ts:21659
