[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Interface: IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`GoogleShoppingSponsoredCarouselElement`](../classes/GoogleShoppingSponsoredCarouselElement.md)[]

items in SERP

#### Defined in

main.ts:179123

***

### position?

> `optional` **position**: `string`

alignment of the element in Google Shopping SERP
possible values:
left, right

#### Defined in

main.ts:179117

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:179113

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:179110

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:179121

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:179119
