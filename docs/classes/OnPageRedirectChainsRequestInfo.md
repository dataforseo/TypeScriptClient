**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageRedirectChainsRequestInfo

# Class: OnPageRedirectChainsRequestInfo

## Implements

- [`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsRequestInfo(data)

> **new OnPageRedirectChainsRequestInfo**(`data`?): [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md)

#### Returns

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Source

main.ts:154346

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, =, <>
examples:
["is_redirect_loop","=","true"]
["is_redirect_loop","<>","false"]

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`filters`](../interfaces/IOnPageRedirectChainsRequestInfo.md#filters)

#### Source

main.ts:154336

***

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`id`](../interfaces/IOnPageRedirectChainsRequestInfo.md#id)

#### Source

main.ts:154310

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`limit`](../interfaces/IOnPageRedirectChainsRequestInfo.md#limit)

#### Source

main.ts:154320

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned redirect chains
optional field
default value: 0
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`offset`](../interfaces/IOnPageRedirectChainsRequestInfo.md#offset)

#### Source

main.ts:154325

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`tag`](../interfaces/IOnPageRedirectChainsRequestInfo.md#tag)

#### Source

main.ts:154342

***

### url?

> **`optional`** **url**: `string`

page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL

#### Implementation of

[`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md).[`url`](../interfaces/IOnPageRedirectChainsRequestInfo.md#url)

#### Source

main.ts:154315

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:154355

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:154381

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Source

main.ts:154374
