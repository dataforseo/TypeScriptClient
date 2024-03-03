[Documentation](../README.md) / [Exports](../modules.md) / BaseBusinessDataSerpElementItem

# Class: BaseBusinessDataSerpElementItem

## Hierarchy

- **`BaseBusinessDataSerpElementItem`**

  ↳ [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

  ↳ [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

  ↳ [`GoogleBusinessPostBusinessDataSerpElementItem`](GoogleBusinessPostBusinessDataSerpElementItem.md)

  ↳ [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

  ↳ [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

  ↳ [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

  ↳ [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

  ↳ [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

  ↳ [`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

  ↳ [`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

  ↳ [`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

## Implements

- [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

### Methods

- [init](BaseBusinessDataSerpElementItem.md#init)
- [toJSON](BaseBusinessDataSerpElementItem.md#tojson)
- [fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new BaseBusinessDataSerpElementItem**(`data?`): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseBusinessDataSerpElementItem`](../interfaces/IBaseBusinessDataSerpElementItem.md) |

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Defined in

main.ts:20078

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:20076

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:20088

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:20159

___

### fromJS

▸ **fromJS**(`data`): [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

#### Defined in

main.ts:20097
