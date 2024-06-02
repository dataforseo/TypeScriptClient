**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new BaseMerchantSerpElementItem(data)

> **new BaseMerchantSerpElementItem**(`data`?): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Source

main.ts:20326

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:20324

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20336

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20392

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Source

main.ts:20345
