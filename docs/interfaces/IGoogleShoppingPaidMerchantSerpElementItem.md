[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IGoogleShoppingPaidMerchantSerpElementItem

# Interface: IGoogleShoppingPaidMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### description?

> `optional` **description**: `string`

description of the product in Google Shopping SERP

#### Defined in

main.ts:178880

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:178876

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:178872

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:178868

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:178865

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:178885

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:178878

***

### url?

> `optional` **url**: `string`

URL to the product page on the seller’s website

#### Defined in

main.ts:178882

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:178874
