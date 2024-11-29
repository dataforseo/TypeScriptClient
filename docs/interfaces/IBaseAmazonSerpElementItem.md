[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseAmazonSerpElementItem

# Interface: IBaseAmazonSerpElementItem

## Extended by

- [`IAmazonAmazonSerpSerpElementItem`](IAmazonAmazonSerpSerpElementItem.md)
- [`IAmazonAmazonPaidSerpElementItem`](IAmazonAmazonPaidSerpElementItem.md)
- [`IAmazonEditorialRecommendationsSerpElementItem`](IAmazonEditorialRecommendationsSerpElementItem.md)
- [`IAmazonRelatedSearchesSerpElementItem`](IAmazonRelatedSearchesSerpElementItem.md)
- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](IAmazonTopRatedFromOurBrandsSerpElementItem.md)
- [`IAmazonAmazonProductInfoSerpElementItem`](IAmazonAmazonProductInfoSerpElementItem.md)
- [`IAmazonAmazonReviewItemSerpElementItem`](IAmazonAmazonReviewItemSerpElementItem.md)
- [`IAmazonAmazonSellerMainItemSerpElementItem`](IAmazonAmazonSellerMainItemSerpElementItem.md)
- [`IAmazonAmazonSellerItemSerpElementItem`](IAmazonAmazonSellerItemSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:23310

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:23307

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:23304

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:23312
