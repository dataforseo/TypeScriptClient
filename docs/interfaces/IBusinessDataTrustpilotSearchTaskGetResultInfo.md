[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataTrustpilotSearchTaskGetResultInfo

# Interface: IBusinessDataTrustpilotSearchTaskGetResultInfo

## Implemented by

- [`BusinessDataTrustpilotSearchTaskGetResultInfo`](../classes/BusinessDataTrustpilotSearchTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataTrustpilotSearchTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataTrustpilotSearchTaskGetResultInfo.md#datetime)
- [items](IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataTrustpilotSearchTaskGetResultInfo.md#keyword)
- [se\_domain](IBusinessDataTrustpilotSearchTaskGetResultInfo.md#se_domain)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:199282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199282)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:199287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199287)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:199293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199293)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:199290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199290)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:199277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199277)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:199279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199279)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")