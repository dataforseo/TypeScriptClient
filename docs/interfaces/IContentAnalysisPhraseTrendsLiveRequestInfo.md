[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisPhraseTrendsLiveRequestInfo

# Interface: IContentAnalysisPhraseTrendsLiveRequestInfo

Defined in: main.ts:180113

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:180164

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### date\_group?

> `optional` **date\_group**: `string`

Defined in: main.ts:180176

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:180171

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### initial\_dataset\_filter?

> `optional` **initial\_dataset\_filter**: `string`[]

Defined in: main.ts:180193

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

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:180158

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

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:180122

target keyword
required field
UTF-8 encoding
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword": "\"tesla palo alto\""
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### keyword\_fields?

> `optional` **keyword\_fields**: `object`

Defined in: main.ts:180134

target keyword fields and target keywords
optional field
use this parameter to filter the dataset by keywords that certain fields should contain;
fields you can specify: title, main_title, previous_title, snippet
you can indicate several fields;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword_fields": {
    "snippet": "\"logitech mouse\"",
    "main_title": "sale"
}

#### Index Signature

\[`key`: `string`\]: `string`

***

### page\_type?

> `optional` **page\_type**: `string`[]

Defined in: main.ts:180140

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

***

### search\_mode?

> `optional` **search\_mode**: `string`

Defined in: main.ts:180147

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target keyword
one_per_domain – returns data on one citation of the keyword per domain
default value: as_is

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:180199

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
