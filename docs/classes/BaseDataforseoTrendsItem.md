**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseDataforseoTrendsItem

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

### new BaseDataforseoTrendsItem(data)

> **new BaseDataforseoTrendsItem**(`data`?): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

• **data?**: [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Source

main.ts:21458

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:21456

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21468

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21499

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

#### Source

main.ts:21477
