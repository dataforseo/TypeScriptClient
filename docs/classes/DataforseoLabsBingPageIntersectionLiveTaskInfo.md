[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingPageIntersectionLiveTaskInfo

# Class: DataforseoLabsBingPageIntersectionLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingPageIntersectionLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#data)
- [id](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#id)
- [path](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#path)
- [result](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingPageIntersectionLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingPageIntersectionLiveTaskInfo**(`data?`): [`DataforseoLabsBingPageIntersectionLiveTaskInfo`](DataforseoLabsBingPageIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingPageIntersectionLiveTaskInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveTaskInfo`](DataforseoLabsBingPageIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:104854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104854)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#result)

#### Defined in

[main.ts:104850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104850)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveTaskInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingPageIntersectionLiveTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:104858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104858)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:104880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104880)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveTaskInfo`](DataforseoLabsBingPageIntersectionLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveTaskInfo`](DataforseoLabsBingPageIntersectionLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:104873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104873)
