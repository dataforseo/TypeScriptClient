[Documentation](../README.md) / [Exports](../modules.md) / BaseMerchantSerpElementItem

# Class: BaseMerchantSerpElementItem

## Hierarchy

- **`BaseMerchantSerpElementItem`**

  ↳ [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

  ↳ [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

  ↳ [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

  ↳ [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

  ↳ [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

  ↳ [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

  ↳ [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

  ↳ [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

## Implements

- [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

### Methods

- [init](BaseMerchantSerpElementItem.md#init)
- [toJSON](BaseMerchantSerpElementItem.md#tojson)
- [fromJS](BaseMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new BaseMerchantSerpElementItem**(`data?`): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md) |

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Defined in

main.ts:20446

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:20444

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

main.ts:20456

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

main.ts:20512

___

### fromJS

▸ **fromJS**(`data`): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Defined in

main.ts:20465
