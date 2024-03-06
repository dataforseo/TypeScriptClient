[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:87902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87902)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#result)

#### Defined in

[main.ts:87898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87898)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md#time)

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

[main.ts:87906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87906)

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

[main.ts:87928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87928)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:87921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87921)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")