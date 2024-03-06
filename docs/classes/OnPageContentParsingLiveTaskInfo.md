[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageContentParsingLiveTaskInfo

# Class: OnPageContentParsingLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`OnPageContentParsingLiveTaskInfo`**

## Implements

- [`IOnPageContentParsingLiveTaskInfo`](../interfaces/IOnPageContentParsingLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingLiveTaskInfo.md#constructor)

### Properties

- [cost](OnPageContentParsingLiveTaskInfo.md#cost)
- [data](OnPageContentParsingLiveTaskInfo.md#data)
- [id](OnPageContentParsingLiveTaskInfo.md#id)
- [path](OnPageContentParsingLiveTaskInfo.md#path)
- [result](OnPageContentParsingLiveTaskInfo.md#result)
- [result\_count](OnPageContentParsingLiveTaskInfo.md#result_count)
- [status\_code](OnPageContentParsingLiveTaskInfo.md#status_code)
- [status\_message](OnPageContentParsingLiveTaskInfo.md#status_message)
- [time](OnPageContentParsingLiveTaskInfo.md#time)

### Methods

- [init](OnPageContentParsingLiveTaskInfo.md#init)
- [toJSON](OnPageContentParsingLiveTaskInfo.md#tojson)
- [fromJS](OnPageContentParsingLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingLiveTaskInfo**(`data?`): [`OnPageContentParsingLiveTaskInfo`](OnPageContentParsingLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingLiveTaskInfo`](../interfaces/IOnPageContentParsingLiveTaskInfo.md) |

#### Returns

[`OnPageContentParsingLiveTaskInfo`](OnPageContentParsingLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:152881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152881)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[cost](../interfaces/IOnPageContentParsingLiveTaskInfo.md#cost)

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

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[data](../interfaces/IOnPageContentParsingLiveTaskInfo.md#data)

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

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[id](../interfaces/IOnPageContentParsingLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[path](../interfaces/IOnPageContentParsingLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)[]

array of results

#### Implementation of

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[result](../interfaces/IOnPageContentParsingLiveTaskInfo.md#result)

#### Defined in

[main.ts:152877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152877)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[result_count](../interfaces/IOnPageContentParsingLiveTaskInfo.md#result_count)

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

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[status_code](../interfaces/IOnPageContentParsingLiveTaskInfo.md#status_code)

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

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[status_message](../interfaces/IOnPageContentParsingLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IOnPageContentParsingLiveTaskInfo](../interfaces/IOnPageContentParsingLiveTaskInfo.md).[time](../interfaces/IOnPageContentParsingLiveTaskInfo.md#time)

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

[main.ts:152885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152885)

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

[main.ts:152907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152907)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingLiveTaskInfo`](OnPageContentParsingLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingLiveTaskInfo`](OnPageContentParsingLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:152900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152900)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")