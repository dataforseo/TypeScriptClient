[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageNonIndexableRequestInfo

# Class: OnPageNonIndexableRequestInfo

Defined in: main.ts:170476

## Implements

- [`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableRequestInfo()

> **new OnPageNonIndexableRequestInfo**(`data`?): [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

Defined in: main.ts:170512

#### Parameters

##### data?

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md)

#### Returns

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:170508

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["reason","=","robots_txt"][["reason","<>","robots_txt"],
"and",
["url","not_like","%/wp-admin/%"]]
[["url","not_like","%/wp-admin/%"],
"and",
[["reason","<>","meta_tag"],"or",["reason","<>","http_header"]]]
The full list of possible filters is available by this link.

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`filters`](../interfaces/IOnPageNonIndexableRequestInfo.md#filters)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:170482

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`id`](../interfaces/IOnPageNonIndexableRequestInfo.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:170487

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`limit`](../interfaces/IOnPageNonIndexableRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:170492

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`offset`](../interfaces/IOnPageNonIndexableRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170521

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170545

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

Defined in: main.ts:170538

#### Parameters

##### data

`any`

#### Returns

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)
