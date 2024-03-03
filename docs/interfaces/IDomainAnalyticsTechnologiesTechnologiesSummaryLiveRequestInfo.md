[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo

## Implemented by

- [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../classes/DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#categories)
- [filters](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#filters)
- [groups](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#groups)
- [internal\_list\_limit](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#internal_list_limit)
- [keywords](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#keywords)
- [mode](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#mode)
- [tag](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#tag)
- [technologies](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technologies)
- [technology\_paths](IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technology_paths)

## Properties

### categories

• `Optional` **categories**: `string`[]

ids of the target technology categories
required field if you don’t specify groups or technologies
you can find the full list of technology category ids on this page
note: you can specify up to 10 technology categories in this array
example:
["payment_processors","crm"]

#### Defined in

main.ts:73347

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
["domain_rank",">",800]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Defined in

main.ts:73382

___

### groups

• `Optional` **groups**: `string`[]

ids of the target technology groups
required field if you don’t specify technologies or categories
you can find the full list of technology group ids on this page
note: you can specify up to 10 technology groups in this array
example:
["sales", "marketing"]

#### Defined in

main.ts:73340

___

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
countries, languages, content_languages, keywords
default value: 10
maximum value: 10000

#### Defined in

main.ts:73389

___

### keywords

• `Optional` **keywords**: `string`[]

target keywords in the domain’s title, description or meta keywords
optional field
UTF-8 encoding
each keyword should be at least 3 characters long
example:
["seo","software"]

#### Defined in

main.ts:73361

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

main.ts:73368

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:73395

___

### technologies

• `Optional` **technologies**: `string`[]

target technologies
required field if you don’t specify groups or categories
you can find the full list of technologies you can specify here on this page
note: you can specify up to 10 technologies in this array
example:
["Google Pay","Salesforce"]

#### Defined in

main.ts:73354

___

### technology\_paths

• `Optional` **technology\_paths**: `string`[]

target technology paths
required field if you don’t specify groups, technologies and categories
if you use this field, you don’t need to specify groups, technologies and categories
each technology path should be specified as a separate object containing “path” and “name”, where “path” is specified as “$group_id.$category_id” and “name” – as the name of the target technology;
each object with a technology path should be separated with a comma
you can find the full list of technology group ids, category ids and technology names on this page
note: you can specify up to 10 technology paths in this array
example:
[{"path": "content.cms","name": "wordpress"}, {"path": "marketing.crm","name": "salesforce"}]

#### Defined in

main.ts:73333
