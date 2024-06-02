**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleShoppingPaidMerchantSerpElementItem

# Interface: IGoogleShoppingPaidMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### description?

> **`optional`** **description**: `string`

description of the product in Google Shopping SERP

#### Source

main.ts:172775

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Source

main.ts:172771

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:172767

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Source

main.ts:172763

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:172760

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Source

main.ts:172780

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:172773

***

### url?

> **`optional`** **url**: `string`

URL to the product page on the seller’s website

#### Source

main.ts:172777

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:172769
