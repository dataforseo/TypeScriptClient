[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleShoppingSponsoredCarouselMerchantSerpElementItem

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

[main.ts:165274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165274)

___


### position

• `Optional` **position**: `string`

alignment of the element in Google Shopping SERP
possible values:
left, right

#### Defined in

[main.ts:165268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165268)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

[main.ts:165264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165264)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:165261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165261)

___


### title

• `Optional` **title**: `string`

product title

#### Defined in

[main.ts:165272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165272)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

[main.ts:165270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165270)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")