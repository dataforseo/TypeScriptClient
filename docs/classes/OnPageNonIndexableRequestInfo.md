[Documentation](../README.md) / [Exports](../modules.md) / OnPageNonIndexableRequestInfo

# Class: OnPageNonIndexableRequestInfo

## Implements

- [`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageNonIndexableRequestInfo.md#constructor)

### Properties

- [filters](OnPageNonIndexableRequestInfo.md#filters)
- [id](OnPageNonIndexableRequestInfo.md#id)
- [limit](OnPageNonIndexableRequestInfo.md#limit)
- [offset](OnPageNonIndexableRequestInfo.md#offset)

### Methods

- [init](OnPageNonIndexableRequestInfo.md#init)
- [toJSON](OnPageNonIndexableRequestInfo.md#tojson)
- [fromJS](OnPageNonIndexableRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageNonIndexableRequestInfo**(`data?`): [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageNonIndexableRequestInfo`](../interfaces/IOnPageNonIndexableRequestInfo.md) |

#### Returns

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Defined in

main.ts:154716

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
["reason","=","robots_txt"][["reason","<>","robots_txt"],
"and",
["url","not_like","%/wp-admin/%"]]
[["url","not_like","%/wp-admin/%"],
"and",
[["reason","<>","meta_tag"],"or",["reason","<>","http_header"]]]
The full list of possible filters is available by this link.

#### Implementation of

[IOnPageNonIndexableRequestInfo](../interfaces/IOnPageNonIndexableRequestInfo.md).[filters](../interfaces/IOnPageNonIndexableRequestInfo.md#filters)

#### Defined in

main.ts:154712

___

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageNonIndexableRequestInfo](../interfaces/IOnPageNonIndexableRequestInfo.md).[id](../interfaces/IOnPageNonIndexableRequestInfo.md#id)

#### Defined in

main.ts:154686

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPageNonIndexableRequestInfo](../interfaces/IOnPageNonIndexableRequestInfo.md).[limit](../interfaces/IOnPageNonIndexableRequestInfo.md#limit)

#### Defined in

main.ts:154691

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IOnPageNonIndexableRequestInfo](../interfaces/IOnPageNonIndexableRequestInfo.md).[offset](../interfaces/IOnPageNonIndexableRequestInfo.md#offset)

#### Defined in

main.ts:154696

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

main.ts:154725

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

main.ts:154749

___

### fromJS

▸ **fromJS**(`data`): [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)

#### Defined in

main.ts:154742
