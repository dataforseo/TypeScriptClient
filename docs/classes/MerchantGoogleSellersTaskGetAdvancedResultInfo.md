[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetAdvancedResultInfo

# Class: MerchantGoogleSellersTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)
- [se\_domain](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)
- [type](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetAdvancedResultInfo**(`data?`): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:166823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166823)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:166805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166805)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:166810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166810)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:166815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166815)

___


### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items in SERP

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:166819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166819)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:166817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166817)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:166802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166802)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:166800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166800)

___


### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[product_id](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)

#### Defined in

[main.ts:166794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166794)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:166798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166798)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:166796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166796)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:166832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166832)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:166866](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166866)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:166859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166859)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")