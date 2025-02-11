[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRedirectChainsRequestInfo

# Class: OnPageRedirectChainsRequestInfo

Defined in: main.ts:170034

## Implements

- [`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsRequestInfo()

> **new OnPageRedirectChainsRequestInfo**(`data`?): [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

Defined in: main.ts:170076

#### Parameters

##### data?

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md)

#### Returns

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:170066

array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, not_regex, =, <>
examples:
["is_redirect_loop","=","true"]
["is_redirect_loop","<>","false"]

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`filters`](../interfaces/IOnPageRedirectChainsRequestInfo.md#filters)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:170040

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`id`](../interfaces/IOnPageRedirectChainsRequestInfo.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:170050

the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`limit`](../interfaces/IOnPageRedirectChainsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:170055

offset in the results array of returned redirect chains
optional field
default value: 0
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`offset`](../interfaces/IOnPageRedirectChainsRequestInfo.md#offset)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:170072

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`tag`](../interfaces/IOnPageRedirectChainsRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:170045

page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`url`](../interfaces/IOnPageRedirectChainsRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170085

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170111

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

Defined in: main.ts:170104

#### Parameters

##### data

`any`

#### Returns

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)
