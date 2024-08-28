[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageNonIndexableRequestInfo

# Class: OnPageNonIndexableRequestInfo

## Implements

- [`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableRequestInfo()

> **new OnPageNonIndexableRequestInfo**(`data`?): [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md)

#### Returns

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Defined in

main.ts:162682

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
["reason","=","robots_txt"][["reason","<>","robots_txt"],
"and",
["url","not_like","%/wp-admin/%"]]
[["url","not_like","%/wp-admin/%"],
"and",
[["reason","<>","meta_tag"],"or",["reason","<>","http_header"]]]
The full list of possible filters is available by this link.

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`filters`](../interfaces/IOnPageNonIndexableRequestInfo.md#filters)

#### Defined in

main.ts:162678

***

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`id`](../interfaces/IOnPageNonIndexableRequestInfo.md#id)

#### Defined in

main.ts:162652

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`limit`](../interfaces/IOnPageNonIndexableRequestInfo.md#limit)

#### Defined in

main.ts:162657

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md).[`offset`](../interfaces/IOnPageNonIndexableRequestInfo.md#offset)

#### Defined in

main.ts:162662

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:162691

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:162715

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Defined in

main.ts:162708
