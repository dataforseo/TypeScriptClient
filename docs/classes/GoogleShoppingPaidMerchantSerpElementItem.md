[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleShoppingPaidMerchantSerpElementItem

# Class: GoogleShoppingPaidMerchantSerpElementItem

## Hierarchy

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)
  
  ↳ **`GoogleShoppingPaidMerchantSerpElementItem`**

## Implements

- [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleShoppingPaidMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleShoppingPaidMerchantSerpElementItem.md#_discriminator)
- [description](GoogleShoppingPaidMerchantSerpElementItem.md#description)
- [domain](GoogleShoppingPaidMerchantSerpElementItem.md#domain)
- [position](GoogleShoppingPaidMerchantSerpElementItem.md#position)
- [rank\_absolute](GoogleShoppingPaidMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleShoppingPaidMerchantSerpElementItem.md#rank_group)
- [shop\_ad\_aclk](GoogleShoppingPaidMerchantSerpElementItem.md#shop_ad_aclk)
- [title](GoogleShoppingPaidMerchantSerpElementItem.md#title)
- [url](GoogleShoppingPaidMerchantSerpElementItem.md#url)
- [xpath](GoogleShoppingPaidMerchantSerpElementItem.md#xpath)

### Methods

- [init](GoogleShoppingPaidMerchantSerpElementItem.md#init)
- [toJSON](GoogleShoppingPaidMerchantSerpElementItem.md#tojson)
- [fromJS](GoogleShoppingPaidMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleShoppingPaidMerchantSerpElementItem**(`data?`): [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md) |

#### Returns

[`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[constructor](BaseMerchantSerpElementItem.md#constructor)

#### Defined in

[main.ts:164962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164962)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19988)

___


### description

• `Optional` **description**: `string`

description of the product in Google Shopping SERP

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[description](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#description)

#### Defined in

[main.ts:164953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164953)

___


### domain

• `Optional` **domain**: `string`

domain in SERP

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[domain](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#domain)

#### Defined in

[main.ts:164949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164949)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[position](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#position)

#### Defined in

[main.ts:164945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164945)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[rank_absolute](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:164941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164941)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[rank_group](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_group)

#### Defined in

[main.ts:164938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164938)

___


### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[shop_ad_aclk](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

[main.ts:164958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164958)

___


### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[title](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#title)

#### Defined in

[main.ts:164951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164951)

___


### url

• `Optional` **url**: `string`

URL to the product page on the seller’s website

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[url](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#url)

#### Defined in

[main.ts:164955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164955)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IGoogleShoppingPaidMerchantSerpElementItem](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[xpath](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#xpath)

#### Defined in

[main.ts:164947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164947)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[init](BaseMerchantSerpElementItem.md#init)

#### Defined in

[main.ts:164967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164967)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[toJSON](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

[main.ts:164993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164993)

___


### fromJS

▸ **fromJS**(`data`): [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[fromJS](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

[main.ts:164986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164986)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")