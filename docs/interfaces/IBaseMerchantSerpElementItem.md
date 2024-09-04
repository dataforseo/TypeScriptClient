[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseMerchantSerpElementItem

# Interface: IBaseMerchantSerpElementItem

## Extended by

- [`IGoogleShoppingSerpMerchantSerpElementItem`](IGoogleShoppingSerpMerchantSerpElementItem.md)
- [`IGoogleShoppingPaidMerchantSerpElementItem`](IGoogleShoppingPaidMerchantSerpElementItem.md)
- [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)
- [`IRelatedSearchesMerchantSerpElementItem`](IRelatedSearchesMerchantSerpElementItem.md)
- [`IShopsListMerchantSerpElementItem`](IShopsListMerchantSerpElementItem.md)
- [`IBuyOnGoogleMerchantSerpElementItem`](IBuyOnGoogleMerchantSerpElementItem.md)
- [`IShoppingSpecificationMerchantSerpElementItem`](IShoppingSpecificationMerchantSerpElementItem.md)
- [`IProductInfoElementMerchantSerpElementItem`](IProductInfoElementMerchantSerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:21130

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:21126

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:21123

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:21120
