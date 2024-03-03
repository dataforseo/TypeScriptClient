[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#constructor)

### Properties

- [categories](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#categories)
- [filters](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#filters)
- [groups](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#groups)
- [internal\_list\_limit](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#internal_list_limit)
- [keywords](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#keywords)
- [mode](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#mode)
- [tag](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#tag)
- [technologies](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technologies)
- [technology\_paths](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technology_paths)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

#### Defined in

main.ts:73222

## Properties

### categories

• `Optional` **categories**: `string`[]

ids of the target technology categories
required field if you don’t specify groups or technologies
you can find the full list of technology category ids on this page
note: you can specify up to 10 technology categories in this array
example:
["payment_processors","crm"]

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[categories](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#categories)

#### Defined in

main.ts:73170

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

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[filters](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#filters)

#### Defined in

main.ts:73205

___

### groups

• `Optional` **groups**: `string`[]

ids of the target technology groups
required field if you don’t specify technologies or categories
you can find the full list of technology group ids on this page
note: you can specify up to 10 technology groups in this array
example:
["sales", "marketing"]

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[groups](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#groups)

#### Defined in

main.ts:73163

___

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
countries, languages, content_languages, keywords
default value: 10
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[internal_list_limit](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:73212

___

### keywords

• `Optional` **keywords**: `string`[]

target keywords in the domain’s title, description or meta keywords
optional field
UTF-8 encoding
each keyword should be at least 3 characters long
example:
["seo","software"]

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[keywords](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#keywords)

#### Defined in

main.ts:73184

___

### mode

• `Optional` **mode**: `string`

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[mode](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#mode)

#### Defined in

main.ts:73191

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[tag](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#tag)

#### Defined in

main.ts:73218

___

### technologies

• `Optional` **technologies**: `string`[]

target technologies
required field if you don’t specify groups or categories
you can find the full list of technologies you can specify here on this page
note: you can specify up to 10 technologies in this array
example:
["Google Pay","Salesforce"]

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[technologies](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technologies)

#### Defined in

main.ts:73177

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

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[technology_paths](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technology_paths)

#### Defined in

main.ts:73156

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

main.ts:73231

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

main.ts:73280

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

#### Defined in

main.ts:73273
