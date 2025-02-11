[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisSummaryLiveRequestInfo

# Interface: IContentAnalysisSummaryLiveRequestInfo

Defined in: main.ts:178913

## Indexable

\[`key`: `string`\]: `any`

## Properties

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

Defined in: main.ts:178983

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

Defined in: main.ts:178951

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

Defined in: main.ts:178922

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

Defined in: main.ts:178934

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

Defined in: main.ts:178940

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

***

### positive\_connotation\_threshold?

> `optional` **positive\_connotation\_threshold**: `number`

Defined in: main.ts:178958

positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

***

### sentiments\_connotation\_threshold?

> `optional` **sentiments\_connotation\_threshold**: `number`

Defined in: main.ts:178966

sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the
probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:178989

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
