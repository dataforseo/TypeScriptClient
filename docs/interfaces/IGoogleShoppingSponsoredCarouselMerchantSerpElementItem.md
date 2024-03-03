[Documentation](../README.md) / [Exports](../modules.md) / IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Interface: IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`**

## Implemented by

- [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../classes/GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#items)
- [position](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#position)
- [rank\_absolute](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_group)
- [title](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#title)
- [xpath](IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`GoogleShoppingSponsoredCarouselElement`](../classes/GoogleShoppingSponsoredCarouselElement.md)[]

items in SERP

#### Defined in

main.ts:165394

___

### position

• `Optional` **position**: `string`

alignment of the element in Google Shopping SERP
possible values:
left, right

#### Defined in

main.ts:165388

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:165384

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:165381

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

main.ts:165392

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:165390
