[**Documentation**](../README.md) • **Docs**

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

### new BaseBusinessDataSerpElementItem()

> **new BaseBusinessDataSerpElementItem**(`data`?): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Defined in

main.ts:21281

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21279

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21291

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21347

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Defined in

main.ts:21300
