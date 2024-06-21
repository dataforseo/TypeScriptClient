**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentAnalysisPhraseTrendsLiveRequestInfo

# Interface: IContentAnalysisPhraseTrendsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:167771

***

### date\_group?

> **`optional`** **date\_group**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Source

main.ts:167783

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:167778

***

### initial\_dataset\_filter?

> **`optional`** **initial\_dataset\_filter**: `string`[]

initial dataset filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, <>, in, not_in, like,not_like, has, has_not
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["domain","<>", "logitech.com"]
[["domain","`<>`","logitech.com"],"and",["content_info.connotation_types.negative",">`",1000]]
[["domain","`<>`","logitech.com"]],
"and",
[["content_info.connotation_types.negative",">`",1000],
"or",
["content_info.text_category","has",10994]]]
for more information about filters, please refer to Content Analysis API – Filters

#### Source

main.ts:167800

***

### internal\_list\_limit?

> **`optional`** **internal\_list\_limit**: `number`

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

#### Source

main.ts:167765

***

### keyword?

> **`optional`** **keyword**: `string`

target keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword": "\"tesla palo alto\""

#### Source

main.ts:167729

***

### keyword\_fields?

> **`optional`** **keyword\_fields**: `Object`

target keyword fields and target keywords
optional field
use this parameter to filter the dataset by keywords that certain fields should contain;
fields you can specify: title, main_title, previous_title, snippet
you can indicate several fields;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword_fields": \{
    "snippet": "\"logitech mouse\"",
    "main_title": "sale"
\}

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:167741

***

### page\_type?

> **`optional`** **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Source

main.ts:167747

***

### search\_mode?

> **`optional`** **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target keyword
one_per_domain – returns data on one citation of the keyword per domain
default value: as_is

#### Source

main.ts:167754

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:167806
