[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorSearchTaskGetResultInfo

# Class: BusinessDataTripadvisorSearchTaskGetResultInfo

## Implements

- [`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorSearchTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataTripadvisorSearchTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataTripadvisorSearchTaskGetResultInfo.md#datetime)
- [item\_types](BusinessDataTripadvisorSearchTaskGetResultInfo.md#item_types)
- [items](BusinessDataTripadvisorSearchTaskGetResultInfo.md#items)
- [items\_count](BusinessDataTripadvisorSearchTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataTripadvisorSearchTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataTripadvisorSearchTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataTripadvisorSearchTaskGetResultInfo.md#location_code)
- [se\_domain](BusinessDataTripadvisorSearchTaskGetResultInfo.md#se_domain)
- [se\_results\_count](BusinessDataTripadvisorSearchTaskGetResultInfo.md#se_results_count)

### Methods

- [init](BusinessDataTripadvisorSearchTaskGetResultInfo.md#init)
- [toJSON](BusinessDataTripadvisorSearchTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorSearchTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorSearchTaskGetResultInfo**(`data?`): [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md) |

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Defined in

[main.ts:201504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201504)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:201484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201484)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:201489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201489)

___

### item\_types

• `Optional` **item\_types**: `string`[]

item types encountered in the result
possible item types: tripadvisor_search_organic

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[item_types](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#item_types)

#### Defined in

[main.ts:201492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201492)

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[items](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items)

#### Defined in

[main.ts:201500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201500)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:201497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201497)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:201475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201475)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:201481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201481)

___

### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:201479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201479)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:201477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201477)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IBusinessDataTripadvisorSearchTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[se_results_count](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_results_count)

#### Defined in

[main.ts:201494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201494)

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

[main.ts:201513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201513)

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

[main.ts:201547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201547)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Defined in

[main.ts:201540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201540)
