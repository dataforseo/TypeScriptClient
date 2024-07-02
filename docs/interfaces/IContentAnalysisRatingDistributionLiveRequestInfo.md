**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentAnalysisRatingDistributionLiveRequestInfo

# Interface: IContentAnalysisRatingDistributionLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### initial\_dataset\_filters?

> **`optional`** **initial\_dataset\_filters**: `any`[]

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

main.ts:167606

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

main.ts:167568

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

main.ts:167539

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

main.ts:167551

***

### page\_type?

> **`optional`** **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Source

main.ts:167557

***

### positive\_connotation\_threshold?

> **`optional`** **positive\_connotation\_threshold**: `number`

positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Source

main.ts:167582

***

### search\_mode?

> **`optional`** **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is

#### Source

main.ts:167575

***

### sentiments\_connotation\_threshold?

> **`optional`** **sentiments\_connotation\_threshold**: `number`

sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Source

main.ts:167589

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:167612
