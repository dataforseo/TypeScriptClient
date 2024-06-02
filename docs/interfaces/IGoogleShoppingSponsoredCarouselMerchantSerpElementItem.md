**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Interface: IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`GoogleShoppingSponsoredCarouselElement`](../classes/GoogleShoppingSponsoredCarouselElement.md)[]

items in SERP

#### Source

main.ts:173018

***

### position?

> **`optional`** **position**: `string`

alignment of the element in Google Shopping SERP
possible values:
left, right

#### Source

main.ts:173012

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Source

main.ts:173008

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:173005

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:173016

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:173014
