[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataYelpSearchTaskGetResultInfo

# Interface: IBusinessDataYelpSearchTaskGetResultInfo

## Implemented by

- [`BusinessDataYelpSearchTaskGetResultInfo`](../classes/BusinessDataYelpSearchTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataYelpSearchTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataYelpSearchTaskGetResultInfo.md#datetime)
- [item\_types](IBusinessDataYelpSearchTaskGetResultInfo.md#item_types)
- [items](IBusinessDataYelpSearchTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataYelpSearchTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataYelpSearchTaskGetResultInfo.md#keyword)
- [language\_code](IBusinessDataYelpSearchTaskGetResultInfo.md#language_code)
- [location\_code](IBusinessDataYelpSearchTaskGetResultInfo.md#location_code)
- [se\_domain](IBusinessDataYelpSearchTaskGetResultInfo.md#se_domain)
- [se\_results\_count](IBusinessDataYelpSearchTaskGetResultInfo.md#se_results_count)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:204541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204541)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:204546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204546)

___


### item\_types

• `Optional` **item\_types**: `string`[]

item types encountered in the result
possible item types: yelp_search_organic, yelp_search_paid

#### Defined in

[main.ts:204549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204549)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Yelp search listing results
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:204557](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204557)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:204554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204554)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Defined in

[main.ts:204531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204531)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:204538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204538)

___


### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Defined in

[main.ts:204536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204536)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:204533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204533)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

[main.ts:204551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204551)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")