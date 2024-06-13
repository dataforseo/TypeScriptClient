**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisSentimentAnalysisLiveRequestInfo

# Class: ContentAnalysisSentimentAnalysisLiveRequestInfo

## Implements

- [`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSentimentAnalysisLiveRequestInfo(data)

> **new ContentAnalysisSentimentAnalysisLiveRequestInfo**(`data`?): [`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md)

#### Returns

[`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)

#### Source

main.ts:165782

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

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`initial_dataset_filters`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#initial_dataset_filters)

#### Source

main.ts:165772

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

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#internal_list_limit)

#### Source

main.ts:165741

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

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`keyword`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#keyword)

#### Source

main.ts:165712

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

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`keyword_fields`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#keyword_fields)

#### Source

main.ts:165724

***

### page\_type?

> **`optional`** **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`page_type`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#page_type)

#### Source

main.ts:165730

***

### positive\_connotation\_threshold?

> **`optional`** **positive\_connotation\_threshold**: `number`

positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`positive_connotation_threshold`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#positive_connotation_threshold)

#### Source

main.ts:165748

***

### sentiments\_connotation\_threshold?

> **`optional`** **sentiments\_connotation\_threshold**: `number`

sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`sentiments_connotation_threshold`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#sentiments_connotation_threshold)

#### Source

main.ts:165755

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveRequestInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md).[`tag`](../interfaces/IContentAnalysisSentimentAnalysisLiveRequestInfo.md#tag)

#### Source

main.ts:165778

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:165791

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:165829

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)

#### Source

main.ts:165822
