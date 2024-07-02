**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPagePagesByResourceRequestInfo

# Class: OnPagePagesByResourceRequestInfo

## Implements

- [`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesByResourceRequestInfo(data)

> **new OnPagePagesByResourceRequestInfo**(`data`?): [`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Parameters

• **data?**: [`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md)

#### Returns

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Source

main.ts:154083

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.external_links_count","<=",50]["url","like","https://dataforseo.com/apis/dataforseo-labs-api"]
[["checks.high_waiting_time","=",false],
"and",["resource_type","=","html"]]
[["page_timing.duration_time","<",100],"and",[["checks.large_page_size","=",false],"or",["checks.high_waiting_time","=",false]]]
The full list of possible filters is available by this link.

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`filters`](../interfaces/IOnPagePagesByResourceRequestInfo.md#filters)

#### Source

main.ts:154059

***

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`id`](../interfaces/IOnPagePagesByResourceRequestInfo.md#id)

#### Source

main.ts:154029

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`limit`](../interfaces/IOnPagePagesByResourceRequestInfo.md#limit)

#### Source

main.ts:154040

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`offset`](../interfaces/IOnPagePagesByResourceRequestInfo.md#offset)

#### Source

main.ts:154045

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["meta.external_links_count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_timing.dom_complete,asc","size,desc"]

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`order_by`](../interfaces/IOnPagePagesByResourceRequestInfo.md#order_by)

#### Source

main.ts:154073

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`tag`](../interfaces/IOnPagePagesByResourceRequestInfo.md#tag)

#### Source

main.ts:154079

***

### url?

> **`optional`** **url**: `string`

resource URL
required field
you can get this URL in the response of the Resources endpoint
example:
https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js

#### Implementation of

[`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md).[`url`](../interfaces/IOnPagePagesByResourceRequestInfo.md#url)

#### Source

main.ts:154035

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:154092

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:154123

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Source

main.ts:154116
