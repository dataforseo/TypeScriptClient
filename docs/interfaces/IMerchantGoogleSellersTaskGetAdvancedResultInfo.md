[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleSellersTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleSellersTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](../classes/MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)
- [se\_domain](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)
- [type](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:166908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166908)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:166913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166913)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Defined in

[main.ts:166918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166918)

___


### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:166922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166922)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:166920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166920)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:166905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166905)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:166903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166903)

___


### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Defined in

[main.ts:166897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166897)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:166901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166901)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:166899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166899)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")