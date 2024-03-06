[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo

## Implemented by

- [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../classes/DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#categories)
- [filters](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#filters)
- [groups](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#groups)
- [keywords](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#keywords)
- [limit](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#limit)
- [mode](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#mode)
- [offset](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#offset)
- [offset\_token](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#offset_token)
- [order\_by](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#order_by)
- [technologies](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#technologies)
- [technology\_paths](IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#technology_paths)

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

[main.ts:74154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74154)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["country_iso_code","=","US"]
[["country_iso_code","=","US"],
"and",
["domain_rank",">",100]]
[["domain_rank",">",100],
"and",
[["country_iso_code","=","US"],"or",["country_iso_code","=","CA"]]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Defined in

[main.ts:74192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74192)

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

[main.ts:74147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74147)

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

[main.ts:74168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74168)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 10000

#### Defined in

[main.ts:74214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74214)

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

[main.ts:74175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74175)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results

#### Defined in

[main.ts:74221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74221)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Defined in

[main.ts:74229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74229)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
available fields:
domain_rank, domain, last_visited, country_iso_code, language_code, content_language_code
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["last_visited,desc"]
default rule:
["domain_rank,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["last_visited,desc","domain_rank,desc"]

#### Defined in

[main.ts:74209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74209)

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

[main.ts:74161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74161)

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

[main.ts:74140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74140)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")