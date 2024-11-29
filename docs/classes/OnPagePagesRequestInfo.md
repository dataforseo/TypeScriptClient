[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePagesRequestInfo

# Class: OnPagePagesRequestInfo

## Implements

- [`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesRequestInfo()

> **new OnPagePagesRequestInfo**(`data`?): [`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)

#### Parameters

##### data?

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md)

#### Returns

[`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)

#### Defined in

main.ts:165845

## Properties

### filters?

> `optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.external_links_count","<=",50]["url","like","https://dataforseo.com/apis/dataforseo-labs-api"][["checks.high_waiting_time","=",false],
"and",["resource_type","=","html"]][["page_timing.duration_time","<",100],"and",[["checks.large_page_size","=",false],"or",["checks.high_waiting_time","=",false]]]The full list of possible filters is available by this link.

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`filters`](../interfaces/IOnPagePagesRequestInfo.md#filters)

#### Defined in

main.ts:165821

***

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`id`](../interfaces/IOnPagePagesRequestInfo.md#id)

#### Defined in

main.ts:165800

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`limit`](../interfaces/IOnPagePagesRequestInfo.md#limit)

#### Defined in

main.ts:165805

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`offset`](../interfaces/IOnPagePagesRequestInfo.md#offset)

#### Defined in

main.ts:165810

***

### order\_by?

> `optional` **order\_by**: `string`[]

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

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`order_by`](../interfaces/IOnPagePagesRequestInfo.md#order_by)

#### Defined in

main.ts:165835

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`tag`](../interfaces/IOnPagePagesRequestInfo.md#tag)

#### Defined in

main.ts:165841

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:165854

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:165884

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)

#### Defined in

main.ts:165877
