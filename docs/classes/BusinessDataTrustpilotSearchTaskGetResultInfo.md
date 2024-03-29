[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTaskGetResultInfo

# Class: BusinessDataTrustpilotSearchTaskGetResultInfo

## Implements

- [`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataTrustpilotSearchTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataTrustpilotSearchTaskGetResultInfo.md#datetime)
- [items](BusinessDataTrustpilotSearchTaskGetResultInfo.md#items)
- [items\_count](BusinessDataTrustpilotSearchTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataTrustpilotSearchTaskGetResultInfo.md#keyword)
- [se\_domain](BusinessDataTrustpilotSearchTaskGetResultInfo.md#se_domain)

### Methods

- [init](BusinessDataTrustpilotSearchTaskGetResultInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTaskGetResultInfo**(`data?`): [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Defined in

[main.ts:199220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199220)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:199205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199205)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:199210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199210)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[items](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items)

#### Defined in

[main.ts:199216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199216)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:199213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199213)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:199200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199200)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:199202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199202)

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

[main.ts:199229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199229)

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

[main.ts:199255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199255)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Defined in

[main.ts:199248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199248)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")