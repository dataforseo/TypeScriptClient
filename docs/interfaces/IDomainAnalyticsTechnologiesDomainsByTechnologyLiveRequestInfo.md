[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo

Defined in: main.ts:87664

## Indexable

\[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:87688

ids of the target technology categories
required field if you don’t specify groups, technology_paths, keywords or technologies
you can find the full list of technology category ids on this page
note: you can specify up to 10 technology categories in this array
example:
["payment_processors","crm"]

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:87728

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

***

### groups?

> `optional` **groups**: `string`[]

Defined in: main.ts:87681

ids of the target technology groups
required field if you don’t specify technologies, technology_paths, keywords or categories
you can find the full list of technology group ids on this page
note: you can specify up to 10 technology groups in this array
example:
["sales", "marketing"]

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:87704

target keywords in the domain’s title, description or meta keywords
required field if you don’t specify groups, technology_paths, technologies or categories
optional field
you can specify the maximum of 10 keywords;
UTF-8 encoding;
example:
["seo","software"]
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:87750

the maximum number of returned domains
optional field
default value: 100
maximum value: 10000

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:87711

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:87757

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:87765

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:87745

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

***

### technologies?

> `optional` **technologies**: `string`[]

Defined in: main.ts:87695

target technologies
required field if you don’t specify groups, technology_paths, keywords or categories
you can find the full list of technologies you can specify here on this page
note: you can specify up to 10 technologies in this array
example:
["Google Pay","Salesforce"]

***

### technology\_paths?

> `optional` **technology\_paths**: `string`[]

Defined in: main.ts:87674

target technology paths
required field if you don’t specify groups, technologies, keywords or categories
at least one field (technology_paths, groups, technologies, keywords or categories) must be set;
each technology path should be specified as a separate object containing “path” and “name”, where “path” is specified as “$group_id.$category_id” and “name” – as the name of the target technology;
each object with a technology path should be separated with a comma
you can find the full list of technology group ids, category ids and technology names on this page
note: you can specify up to 10 technology paths in this array
example:
[{"path": "content.cms","name": "wordpress"}, {"path": "marketing.crm","name": "salesforce"}]
