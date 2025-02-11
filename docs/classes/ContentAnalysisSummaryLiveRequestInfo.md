[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSummaryLiveRequestInfo

# Class: ContentAnalysisSummaryLiveRequestInfo

Defined in: main.ts:178754

## Implements

- [`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSummaryLiveRequestInfo()

> **new ContentAnalysisSummaryLiveRequestInfo**(`data`?): [`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

Defined in: main.ts:178834

#### Parameters

##### data?

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md)

#### Returns

[`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

## Properties

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

Defined in: main.ts:178824

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

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`initial_dataset_filters`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#initial_dataset_filters)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:178792

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

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#internal_list_limit)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:178763

target keyword
required field
UTF-8 encoding
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword": "\"tesla palo alto\""
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`keyword`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#keyword)

***

### keyword\_fields?

> `optional` **keyword\_fields**: `object`

Defined in: main.ts:178775

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

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`keyword_fields`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#keyword_fields)

***

### page\_type?

> `optional` **page\_type**: `string`[]

Defined in: main.ts:178781

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`page_type`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#page_type)

***

### positive\_connotation\_threshold?

> `optional` **positive\_connotation\_threshold**: `number`

Defined in: main.ts:178799

positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`positive_connotation_threshold`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#positive_connotation_threshold)

***

### sentiments\_connotation\_threshold?

> `optional` **sentiments\_connotation\_threshold**: `number`

Defined in: main.ts:178807

sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the
probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`sentiments_connotation_threshold`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#sentiments_connotation_threshold)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:178830

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[`tag`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178843

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:178881

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

Defined in: main.ts:178874

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)
