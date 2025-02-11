[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo

# Interface: IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo

Defined in: main.ts:86135

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:86149

id of the target technology category
required field if you don’t specify group, keyword or technology
at least one field (group, category, keyword, technology) must be set
you can find the full list of technology category ids on this page
example:
"crm"

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:86185

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
you can use the following parameters to filter the results: domain_rank, last_visited, country_iso_code, language_code, content_language_code
Note: all filtering parameters are taken from the domain_technology_item of the domain_technologies endpoint;
example:
[["country_iso_code","=","US"],
"and",
["domain_rank",">",800]]for more information about filters, please refer to Domain Analytics Technologies API – Filters

***

### group?

> `optional` **group**: `string`

Defined in: main.ts:86142

id of the target technology group
required field if you don’t specify technology, category  or keyword
at least one field (group, category, keyword, technology) must be set
you can find the full list of technology group ids on this page
example:
"marketing"

***

### internal\_categories\_list\_limit?

> `optional` **internal\_categories\_list\_limit**: `number`

Defined in: main.ts:86215

maximum number of returned technology categories within the same group
optional field
you can use this field to limit the number of items with identical "category" in the results
default value: 5
minimum value: 1
maximum value: 10000

***

### internal\_groups\_list\_limit?

> `optional` **internal\_groups\_list\_limit**: `number`

Defined in: main.ts:86208

maximum number of returned technology groups
optional field
you can use this field to limit the number of items with identical "group" in the results
default value: 5
minimum value: 1
maximum value: 10000

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:86230

maximum number of items with identical "category", "group", and "technology"
optional field
if you use this field, the values specified in internal_groups_list_limit, internal_categories_list_limit and internal_technologies_list_limit will be ignored;
you can use this field to limit the number of items with identical "category", "group", or "technology"
default value: 10
minimum value: 1
maximum value: 10000

***

### internal\_technologies\_list\_limit?

> `optional` **internal\_technologies\_list\_limit**: `number`

Defined in: main.ts:86222

maximum number of returned technologies within the same category
optional field
you can use this field to limit the number of items with identical "technology" in the results
default value: 10
minimum value: 1
maximum value: 10000

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:86164

target keyword in the domain’s meta keywords
required field if you don’t specify group, category or technology
at least one field (group, category, keyword, technology) must be set
UTF-8 encoding
example:
"seo"
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:86235

the maximum number of returned technologies
optional field
default value: 100
maximum value: 10000

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:86171

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:86241

offset in the results array of returned domains
optional field
default value: 0
maximum value: 9999
if you specify the 10 value, the first ten technologies in the results array will be omitted and the data will be provided for the successive technologies

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:86201

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

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:86247

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### technology?

> `optional` **technology**: `string`

Defined in: main.ts:86156

target technology
required field if you don’t specify group, keyword or category
at least one field (group, category, keyword, technology) must be set
you can find the full list of technologies on this page
example:
"Salesforce"
