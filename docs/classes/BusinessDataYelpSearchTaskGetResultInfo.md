[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTaskGetResultInfo

# Class: BusinessDataYelpSearchTaskGetResultInfo

## Implements

- [`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataYelpSearchTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataYelpSearchTaskGetResultInfo.md#datetime)
- [item\_types](BusinessDataYelpSearchTaskGetResultInfo.md#item_types)
- [items](BusinessDataYelpSearchTaskGetResultInfo.md#items)
- [items\_count](BusinessDataYelpSearchTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataYelpSearchTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataYelpSearchTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataYelpSearchTaskGetResultInfo.md#location_code)
- [se\_domain](BusinessDataYelpSearchTaskGetResultInfo.md#se_domain)
- [se\_results\_count](BusinessDataYelpSearchTaskGetResultInfo.md#se_results_count)

### Methods

- [init](BusinessDataYelpSearchTaskGetResultInfo.md#init)
- [toJSON](BusinessDataYelpSearchTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTaskGetResultInfo**(`data?`): [`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md) |

#### Returns

[`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Defined in

[main.ts:204457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204457)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:204437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204437)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:204442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204442)

___


### item\_types

• `Optional` **item\_types**: `string`[]

item types encountered in the result
possible item types: yelp_search_organic, yelp_search_paid

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[item_types](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#item_types)

#### Defined in

[main.ts:204445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204445)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Yelp search listing results
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[items](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#items)

#### Defined in

[main.ts:204453](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204453)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:204450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204450)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:204427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204427)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:204434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204434)

___


### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:204432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204432)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:204429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204429)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IBusinessDataYelpSearchTaskGetResultInfo](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[se_results_count](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#se_results_count)

#### Defined in

[main.ts:204447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204447)

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

[main.ts:204466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204466)

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

[main.ts:204500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204500)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Defined in

[main.ts:204493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204493)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")