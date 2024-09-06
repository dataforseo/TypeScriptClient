[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentAnalysisCategoryTrendsLiveRequestInfo

# Interface: IContentAnalysisCategoryTrendsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `string`

target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:169033

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:169063

***

### date\_group?

> `optional` **date\_group**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Defined in

main.ts:169075

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:169070

***

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

initial dataset filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not
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

#### Defined in

main.ts:169092

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

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

#### Defined in

main.ts:169057

***

### page\_type?

> `optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Defined in

main.ts:169039

***

### search\_mode?

> `optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is

#### Defined in

main.ts:169046

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:169098
