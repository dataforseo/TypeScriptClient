[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleShoppingPaidMerchantSerpElementItem

# Interface: IGoogleShoppingPaidMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)
  
  ↳ **`IGoogleShoppingPaidMerchantSerpElementItem`**

## Implemented by

- [`GoogleShoppingPaidMerchantSerpElementItem`](../classes/GoogleShoppingPaidMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IGoogleShoppingPaidMerchantSerpElementItem.md#description)
- [domain](IGoogleShoppingPaidMerchantSerpElementItem.md#domain)
- [position](IGoogleShoppingPaidMerchantSerpElementItem.md#position)
- [rank\_absolute](IGoogleShoppingPaidMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleShoppingPaidMerchantSerpElementItem.md#rank_group)
- [shop\_ad\_aclk](IGoogleShoppingPaidMerchantSerpElementItem.md#shop_ad_aclk)
- [title](IGoogleShoppingPaidMerchantSerpElementItem.md#title)
- [url](IGoogleShoppingPaidMerchantSerpElementItem.md#url)
- [xpath](IGoogleShoppingPaidMerchantSerpElementItem.md#xpath)

## Properties

### description

• `Optional` **description**: `string`

description of the product in Google Shopping SERP

#### Defined in

[main.ts:165031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165031)

___


### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

[main.ts:165027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165027)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:165023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165023)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

[main.ts:165019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165019)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:165016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165016)

___


### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

[main.ts:165036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165036)

___


### title

• `Optional` **title**: `string`

product title

#### Defined in

[main.ts:165029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165029)

___


### url

• `Optional` **url**: `string`

URL to the product page on the seller’s website

#### Defined in

[main.ts:165033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165033)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

[main.ts:165025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165025)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")