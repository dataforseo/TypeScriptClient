[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesLiveAdvancedTaskInfo

# Class: SerpGoogleImagesLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleImagesLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleImagesLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleImagesLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleImagesLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleImagesLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleImagesLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleImagesLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleImagesLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleImagesLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleImagesLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleImagesLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleImagesLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleImagesLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:46830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46830)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:46826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46826)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleImagesLiveAdvancedTaskInfo](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleImagesLiveAdvancedTaskInfo.md#time)

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

[main.ts:46834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46834)

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

[main.ts:46856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46856)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:46849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46849)
