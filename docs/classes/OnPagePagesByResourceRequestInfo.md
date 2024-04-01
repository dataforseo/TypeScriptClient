[Documentation](../README.md) / [Exports](../modules.md) / OnPagePagesByResourceRequestInfo

# Class: OnPagePagesByResourceRequestInfo

## Implements

- [`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPagePagesByResourceRequestInfo.md#constructor)

### Properties

- [filters](OnPagePagesByResourceRequestInfo.md#filters)
- [id](OnPagePagesByResourceRequestInfo.md#id)
- [limit](OnPagePagesByResourceRequestInfo.md#limit)
- [offset](OnPagePagesByResourceRequestInfo.md#offset)
- [order\_by](OnPagePagesByResourceRequestInfo.md#order_by)
- [tag](OnPagePagesByResourceRequestInfo.md#tag)
- [url](OnPagePagesByResourceRequestInfo.md#url)

### Methods

- [init](OnPagePagesByResourceRequestInfo.md#init)
- [toJSON](OnPagePagesByResourceRequestInfo.md#tojson)
- [fromJS](OnPagePagesByResourceRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPagePagesByResourceRequestInfo**(`data?`): [`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPagePagesByResourceRequestInfo`](../interfaces/IOnPagePagesByResourceRequestInfo.md) |

#### Returns

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Defined in

main.ts:150816

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.external_links_count","<=",50]["url","like","https://dataforseo.com/apis/dataforseo-labs-api"]
[["checks.high_waiting_time","=",false],
"and",["resource_type","=","html"]]
[["page_timing.duration_time","<",100],"and",[["checks.large_page_size","=",false],"or",["checks.high_waiting_time","=",false]]]
The full list of possible filters is available by this link.

#### Implementation of

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[filters](../interfaces/IOnPagePagesByResourceRequestInfo.md#filters)

#### Defined in

main.ts:150792

___

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[id](../interfaces/IOnPagePagesByResourceRequestInfo.md#id)

#### Defined in

main.ts:150762

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[limit](../interfaces/IOnPagePagesByResourceRequestInfo.md#limit)

#### Defined in

main.ts:150773

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[offset](../interfaces/IOnPagePagesByResourceRequestInfo.md#offset)

#### Defined in

main.ts:150778

___

### order\_by

• `Optional` **order\_by**: `string`[]

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

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[order_by](../interfaces/IOnPagePagesByResourceRequestInfo.md#order_by)

#### Defined in

main.ts:150806

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[tag](../interfaces/IOnPagePagesByResourceRequestInfo.md#tag)

#### Defined in

main.ts:150812

___

### url

• `Optional` **url**: `string`

resource URL
required field
you can get this URL in the response of the Resources endpoint
example:
https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js

#### Implementation of

[IOnPagePagesByResourceRequestInfo](../interfaces/IOnPagePagesByResourceRequestInfo.md).[url](../interfaces/IOnPagePagesByResourceRequestInfo.md#url)

#### Defined in

main.ts:150768

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:150825

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:150856

___

### fromJS

▸ **fromJS**(`data`): [`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)

#### Defined in

main.ts:150849
