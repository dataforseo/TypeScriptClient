[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchLiveAdvancedTaskInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleDatasetSearchLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleDatasetSearchLiveAdvancedTaskInfo`](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedTaskInfo`](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:51676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51676)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:51672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51672)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedTaskInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedTaskInfo.md#time)

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

[main.ts:51680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51680)

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

[main.ts:51702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51702)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedTaskInfo`](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedTaskInfo`](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:51695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51695)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")