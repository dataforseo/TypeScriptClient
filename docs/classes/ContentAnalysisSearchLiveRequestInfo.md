[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSearchLiveRequestInfo

# Class: ContentAnalysisSearchLiveRequestInfo

Defined in: main.ts:177388

## Implements

- [`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSearchLiveRequestInfo()

> **new ContentAnalysisSearchLiveRequestInfo**(`data`?): [`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)

Defined in: main.ts:177483

#### Parameters

##### data?

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md)

#### Returns

[`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:177444

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["country","=", "US"]
[["domain_rank",">",800],"and",["content_info.connotation_types.negative",">",0.9]]
[["domain_rank",">",800],
"and",
[["page_types","has","ecommerce"],
"or",
["content_info.text_category","has",10994]]]
for more information about filters, please refer to Content Analysis API – Filters

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`filters`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#filters)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:177397

target keyword
required field
UTF-8 encoding
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword": "\"tesla palo alto\""
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`keyword`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#keyword)

***

### keyword\_fields?

> `optional` **keyword\_fields**: `object`

Defined in: main.ts:177409

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

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`keyword_fields`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#keyword_fields)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:177427

the maximum number of returned citations
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`limit`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:177465

offset in the results array of returned citations
optional field
default value: 0
if you specify the 10 value, the first ten citations in the results array will be omitted and the data will be provided for the successive citations

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`offset`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:177473

offset token for subsequent requests
optional field
provided in the identical field of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`offset_token`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#offset_token)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:177460

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["content_info.sentiment_connotations.anger,desc"]
default rule:
["content_info.sentiment_connotations.anger,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["content_info.sentiment_connotations.anger,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`order_by`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#order_by)

***

### page\_type?

> `optional` **page\_type**: `string`[]

Defined in: main.ts:177415

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`page_type`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#page_type)

***

### search\_mode?

> `optional` **search\_mode**: `string`

Defined in: main.ts:177422

results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`search_mode`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#search_mode)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:177479

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentAnalysisSearchLiveRequestInfo`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md).[`tag`](../interfaces/IContentAnalysisSearchLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177492

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177536

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)

Defined in: main.ts:177529

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)
