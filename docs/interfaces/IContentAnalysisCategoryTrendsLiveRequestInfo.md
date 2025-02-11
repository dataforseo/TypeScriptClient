[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisCategoryTrendsLiveRequestInfo

# Interface: IContentAnalysisCategoryTrendsLiveRequestInfo

Defined in: main.ts:181048

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `string`

Defined in: main.ts:181052

target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:181082

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### date\_group?

> `optional` **date\_group**: `string`

Defined in: main.ts:181094

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:181089

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

Defined in: main.ts:181111

initial dataset filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["domain","<>", "logitech.com"]
[["domain","<>","logitech.com"],"and",["content_info.connotation_types.negative",">",1000]]
[["domain","<>","logitech.com"]],
"and",
[["content_info.connotation_types.negative",">",1000],
"or",
["content_info.text_category","has",10994]]]
for more information about filters, please refer to Content Analysis API – Filters

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:181076

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
top_domains
text_categories
page_categories
countries
languages
default value: 1
maximum value: 20

***

### page\_type?

> `optional` **page\_type**: `string`[]

Defined in: main.ts:181058

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

***

### search\_mode?

> `optional` **search\_mode**: `string`

Defined in: main.ts:181065

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:181117

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
