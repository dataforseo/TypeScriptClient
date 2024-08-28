[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BaseMerchantSerpElementItem

# Class: BaseMerchantSerpElementItem

## Extended by

- [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)
- [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)
- [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)
- [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)
- [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)
- [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)
- [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)
- [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

## Implements

- [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseMerchantSerpElementItem()

> **new BaseMerchantSerpElementItem**(`data`?): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Defined in

main.ts:21027

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21025

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21037

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21093

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Defined in

main.ts:21046
