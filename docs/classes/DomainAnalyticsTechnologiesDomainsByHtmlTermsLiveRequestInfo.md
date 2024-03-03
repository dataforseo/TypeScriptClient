[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#constructor)

### Properties

- [filters](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#filters)
- [keywords](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#keywords)
- [limit](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#limit)
- [mode](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#mode)
- [offset](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#offset)
- [offset\_token](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#offset_token)
- [order\_by](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#order_by)
- [search\_terms](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#search_terms)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

#### Defined in

main.ts:74841

## Properties

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
["domain","like","%seo%"]
[["country_iso_code","=","US"],
"and",
["domain_rank",">",100]]
[["domain_rank",">",100],
"and",
[["country_iso_code","=","US"],"or",["country_iso_code","=","CA"]]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[filters](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#filters)

#### Defined in

main.ts:74800

___

### keywords

• `Optional` **keywords**: `string`[]

target keywords in the domain’s title, description or meta keywords
optional field
UTF-8 encoding
each keyword should be at least 3 characters long
maximum number of keywords you can specify: 10
example:
["seo","software"]

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[keywords](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#keywords)

#### Defined in

main.ts:74776

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[limit](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#limit)

#### Defined in

main.ts:74822

___

### mode

• `Optional` **mode**: `string`

search mode
optional field
possible search mode types:
strict_entry – search for results exactly matching the order, intervals and separators in the specified search terms
entry – search for results ignoring the order, intervals and separators in the specified search terms
default value: entry

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[mode](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#mode)

#### Defined in

main.ts:74783

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[offset](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#offset)

#### Defined in

main.ts:74829

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

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[offset_token](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#offset_token)

#### Defined in

main.ts:74837

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

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[order_by](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#order_by)

#### Defined in

main.ts:74817

___

### search\_terms

• `Optional` **search\_terms**: `string`[]

target search terms
required field
specify target HTML elements, tags, attributes, their content or all of the above
if you specify more than one search term, you will receive only the domains containing all of the specified terms in the HTML code of their homepage
maximum number of search terms you can specify: 10
example:
["data-attrid"]

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md).[search_terms](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md#search_terms)

#### Defined in

main.ts:74768

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

main.ts:74850

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

main.ts:74890

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)

#### Defined in

main.ts:74883
