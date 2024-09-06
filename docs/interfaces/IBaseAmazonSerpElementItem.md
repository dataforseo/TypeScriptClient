[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseAmazonSerpElementItem

# Interface: IBaseAmazonSerpElementItem

## Extended by

- [`IAmazonAmazonSerpSerpElementItem`](IAmazonAmazonSerpSerpElementItem.md)
- [`IAmazonAmazonPaidSerpElementItem`](IAmazonAmazonPaidSerpElementItem.md)
- [`IAmazonEditorialRecommendationsSerpElementItem`](IAmazonEditorialRecommendationsSerpElementItem.md)
- [`IAmazonRelatedSearchesSerpElementItem`](IAmazonRelatedSearchesSerpElementItem.md)
- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](IAmazonTopRatedFromOurBrandsSerpElementItem.md)
- [`IAmazonAmazonProductInfoSerpElementItem`](IAmazonAmazonProductInfoSerpElementItem.md)
- [`IAmazonAmazonSellerMainItemSerpElementItem`](IAmazonAmazonSellerMainItemSerpElementItem.md)
- [`IAmazonAmazonSellerItemSerpElementItem`](IAmazonAmazonSellerItemSerpElementItem.md)
- [`IAmazonAmazonReviewItemSerpElementItem`](IAmazonAmazonReviewItemSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:22412

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:22409

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:22406

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:22414
