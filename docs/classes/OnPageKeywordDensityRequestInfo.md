[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageKeywordDensityRequestInfo

# Class: OnPageKeywordDensityRequestInfo

Defined in: main.ts:171262

## Implements

- [`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageKeywordDensityRequestInfo()

> **new OnPageKeywordDensityRequestInfo**(`data`?): [`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

Defined in: main.ts:171325

#### Parameters

##### data?

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md)

#### Returns

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:171301

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword","=","%seo%"]
[["keyword","=","%seo%"],
"and",
["frequency","<","6"]]
[["keyword","not_like","%seo%"],
"and",
[["frequency",">","6"],"or",["density",">","0.02"]]]
The full list of possible filters is available by this link.

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`filters`](../interfaces/IOnPageKeywordDensityRequestInfo.md#filters)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:171268

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`id`](../interfaces/IOnPageKeywordDensityRequestInfo.md#id)

***

### keyword\_length?

> `optional` **keyword\_length**: `number`

Defined in: main.ts:171273

number of words for a keyword
required field
possible values:
1, 2, 3, 4, 5

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`keyword_length`](../interfaces/IOnPageKeywordDensityRequestInfo.md#keyword_length)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:171284

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`limit`](../interfaces/IOnPageKeywordDensityRequestInfo.md#limit)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:171315

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["frequency,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword,asc","frequency,desc"]

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`order_by`](../interfaces/IOnPageKeywordDensityRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:171321

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`tag`](../interfaces/IOnPageKeywordDensityRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:171279

page URL
optional field
if you do not specify a page here, the results will be provided for the whole website
if you use this field, the API response will contain only keywords from the specified page
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md).[`url`](../interfaces/IOnPageKeywordDensityRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171334

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171365

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

Defined in: main.ts:171358

#### Parameters

##### data

`any`

#### Returns

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)
