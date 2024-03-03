[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo

## Implemented by

- [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](../classes/DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#category)
- [filters](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#filters)
- [group](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#group)
- [internal\_categories\_list\_limit](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_categories_list_limit)
- [internal\_groups\_list\_limit](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_groups_list_limit)
- [internal\_list\_limit](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_list_limit)
- [internal\_technologies\_list\_limit](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_technologies_list_limit)
- [keyword](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#keyword)
- [limit](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#limit)
- [mode](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#mode)
- [offset](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#offset)
- [order\_by](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#order_by)
- [tag](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#tag)
- [technology](IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#technology)

## Properties

### category

• `Optional` **category**: `string`

id of the target technology category
required field if you don’t specify group or technology
you can find the full list of technology category ids on this page
example:
"crm"

#### Defined in

main.ts:72770

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
you can use the following parameters to filter the results: domain_rank, last_visited, country_iso_code, language_code, content_language_code
example:
[["country_iso_code","=","US"],
"and",
["domain_rank",">",800]]for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Defined in

main.ts:72803

___

### group

• `Optional` **group**: `string`

id of the target technology group
required field if you don’t specify technology or category
you can find the full list of technology group ids on this page
example:
"marketing"

#### Defined in

main.ts:72764

___

### internal\_categories\_list\_limit

• `Optional` **internal\_categories\_list\_limit**: `number`

maximum number of returned technology categories within the same group
optional field
you can use this field to limit the number of items with identical "category" in the results
default value: 5
maximum value: 10000

#### Defined in

main.ts:72831

___

### internal\_groups\_list\_limit

• `Optional` **internal\_groups\_list\_limit**: `number`

maximum number of returned technology groups
optional field
you can use this field to limit the number of items with identical "group" in the results
default value: 5
maximum value: 10000

#### Defined in

main.ts:72825

___

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of items with identical "category", "group", and "technology"
optional field
if you use this field, the values specified in internal_groups_list_limit, internal_categories_list_limit and internal_technologies_list_limit will be ignored;
you can use this field to limit the number of items with identical "category", "group", or "technology"
default value: 10
maximum value: 10000

#### Defined in

main.ts:72844

___

### internal\_technologies\_list\_limit

• `Optional` **internal\_technologies\_list\_limit**: `number`

maximum number of returned technologies within the same category
optional field
you can use this field to limit the number of items with identical "technology" in the results
default value: 10
maximum value: 10000

#### Defined in

main.ts:72837

___

### keyword

• `Optional` **keyword**: `string`

target keyword in the domain’s meta keywords
optional field
UTF-8 encoding
each keyword should be at least 3 characters long
example:
"seo"

#### Defined in

main.ts:72783

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned technologies
optional field
default value: 100
maximum value: 10000

#### Defined in

main.ts:72849

___

### mode

• `Optional` **mode**: `string`

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

#### Defined in

main.ts:72790

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
maximum value: 9999
if you specify the 10 value, the first ten technologies in the results array will be omitted and the data will be provided for the successive technologies

#### Defined in

main.ts:72855

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the following values to sort the results: groups_count, categories_count, technologies_count
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["groups_count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["groups_count,desc","technologies_count,desc"]
default value:
["groups_count,desc","categories_count,desc","technologies_count,desc"]

#### Defined in

main.ts:72819

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:72861

___

### technology

• `Optional` **technology**: `string`

target technology
required field if you don’t specify group or category
you can find the full list of technologies on this page
example:
"Salesforce"

#### Defined in

main.ts:72776
