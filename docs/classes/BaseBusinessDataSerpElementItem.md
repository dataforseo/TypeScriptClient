**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseBusinessDataSerpElementItem

# Class: BaseBusinessDataSerpElementItem

## Extended by

- [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)
- [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)
- [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)
- [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)
- [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)
- [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)
- [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)
- [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Implements

- [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseBusinessDataSerpElementItem(data)

> **new BaseBusinessDataSerpElementItem**(`data`?): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Source

main.ts:20580

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:20578

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20590

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20646

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Source

main.ts:20599
