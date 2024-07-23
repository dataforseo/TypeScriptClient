**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo

# Class: DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo(data)

> **new DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

#### Source

main.ts:78505

## Properties

### categories?

> **`optional`** **categories**: `string`[]

ids of the target technology categories
required field if you don’t specify groups, technology_paths, keywords or technologies
you can find the full list of technology category ids on this page
note: you can specify up to 10 technology categories in this array
example:
["payment_processors","crm"]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`categories`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#categories)

#### Source

main.ts:78425

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, `<=, >`, >=, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["country_iso_code","=","US"]
[["country_iso_code","=","US"],
"and",
["domain_rank",">`",100]]
[["domain_rank",">",100],
"and",
[["country_iso_code","=","US"],"or",["country_iso_code","=","CA"]]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`filters`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#filters)

#### Source

main.ts:78464

***

### groups?

> **`optional`** **groups**: `string`[]

ids of the target technology groups
required field if you don’t specify technologies, technology_paths, keywords or categories
you can find the full list of technology group ids on this page
note: you can specify up to 10 technology groups in this array
example:
["sales", "marketing"]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`groups`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#groups)

#### Source

main.ts:78418

***

### keywords?

> **`optional`** **keywords**: `string`[]

target keywords in the domain’s title, description or meta keywords
required field if you don’t specify groups, technology_paths, technologies or categories
optional field
you can specify the maximum of 10 keywords;
UTF-8 encoding;
example:
["seo","software"]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#keywords)

#### Source

main.ts:78440

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 10000

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#limit)

#### Source

main.ts:78486

***

### mode?

> **`optional`** **mode**: `string`

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`mode`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#mode)

#### Source

main.ts:78447

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#offset)

#### Source

main.ts:78493

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`offset_token`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#offset_token)

#### Source

main.ts:78501

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`order_by`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#order_by)

#### Source

main.ts:78481

***

### technologies?

> **`optional`** **technologies**: `string`[]

target technologies
required field if you don’t specify groups, technology_paths, keywords or categories
you can find the full list of technologies you can specify here on this page
note: you can specify up to 10 technologies in this array
example:
["Google Pay","Salesforce"]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#technologies)

#### Source

main.ts:78432

***

### technology\_paths?

> **`optional`** **technology\_paths**: `string`[]

target technology paths
required field if you don’t specify groups, technologies, keywords or categories
at least one field (technology_paths, groups, technologies, keywords or categories) must be set;
each technology path should be specified as a separate object containing “path” and “name”, where “path” is specified as “$group_id.$category_id” and “name” – as the name of the target technology;
each object with a technology path should be separated with a comma
you can find the full list of technology group ids, category ids and technology names on this page
note: you can specify up to 10 technology paths in this array
example:
[\{"path": "content.cms","name": "wordpress"\}, \{"path": "marketing.crm","name": "salesforce"\}]

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md).[`technology_paths`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md#technology_paths)

#### Source

main.ts:78411

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:78514

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:78569

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)

#### Source

main.ts:78562
