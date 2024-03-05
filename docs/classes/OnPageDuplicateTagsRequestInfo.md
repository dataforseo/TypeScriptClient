[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageDuplicateTagsRequestInfo

# Class: OnPageDuplicateTagsRequestInfo

## Implements

- [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateTagsRequestInfo.md#constructor)

### Properties

- [accumulator](OnPageDuplicateTagsRequestInfo.md#accumulator)
- [id](OnPageDuplicateTagsRequestInfo.md#id)
- [limit](OnPageDuplicateTagsRequestInfo.md#limit)
- [offset](OnPageDuplicateTagsRequestInfo.md#offset)
- [tag](OnPageDuplicateTagsRequestInfo.md#tag)
- [type](OnPageDuplicateTagsRequestInfo.md#type)

### Methods

- [init](OnPageDuplicateTagsRequestInfo.md#init)
- [toJSON](OnPageDuplicateTagsRequestInfo.md#tojson)
- [fromJS](OnPageDuplicateTagsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateTagsRequestInfo**(`data?`): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md) |

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Defined in

[main.ts:147075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147075)

## Properties

### accumulator

• `Optional` **accumulator**: `string`

tag value
optional field
specify a title or description here if you want to receive a list of duplicate pages that contains this tag

#### Implementation of

[IOnPageDuplicateTagsRequestInfo](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[accumulator](../interfaces/IOnPageDuplicateTagsRequestInfo.md#accumulator)

#### Defined in

[main.ts:147055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147055)

___

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageDuplicateTagsRequestInfo](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[id](../interfaces/IOnPageDuplicateTagsRequestInfo.md#id)

#### Defined in

[main.ts:147049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147049)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPageDuplicateTagsRequestInfo](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[limit](../interfaces/IOnPageDuplicateTagsRequestInfo.md#limit)

#### Defined in

[main.ts:147060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147060)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IOnPageDuplicateTagsRequestInfo](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[offset](../interfaces/IOnPageDuplicateTagsRequestInfo.md#offset)

#### Defined in

[main.ts:147065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147065)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageDuplicateTagsRequestInfo](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[tag](../interfaces/IOnPageDuplicateTagsRequestInfo.md#tag)

#### Defined in

[main.ts:147071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147071)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IOnPageDuplicateTagsRequestInfo](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[type](../interfaces/IOnPageDuplicateTagsRequestInfo.md#type)

#### Defined in

[main.ts:147051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147051)

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

[main.ts:147084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147084)

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

[main.ts:147106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147106)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Defined in

[main.ts:147099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147099)
