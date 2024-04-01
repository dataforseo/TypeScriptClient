[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTripadvisorSearchTaskGetResultInfo

# Interface: IBusinessDataTripadvisorSearchTaskGetResultInfo

## Implemented by

- [`BusinessDataTripadvisorSearchTaskGetResultInfo`](../classes/BusinessDataTripadvisorSearchTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#datetime)
- [item\_types](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#item_types)
- [items](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#keyword)
- [language\_code](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#language_code)
- [location\_code](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#location_code)
- [se\_domain](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_domain)
- [se\_results\_count](IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_results_count)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:207048

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:207053

___

### item\_types

• `Optional` **item\_types**: `string`[]

item types encountered in the result
possible item types: tripadvisor_search_organic

#### Defined in

main.ts:207056

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:207064

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:207061

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Defined in

main.ts:207039

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:207045

___

### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array

#### Defined in

main.ts:207043

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:207041

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:207058
