[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetAdvancedTaskInfo

# Class: SerpGoogleImagesTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleImagesTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleImagesTaskGetAdvancedTaskInfo`](SerpGoogleImagesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedTaskInfo`](SerpGoogleImagesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:46352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46352)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:46348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46348)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleImagesTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:46356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46356)

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

[main.ts:46378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46378)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetAdvancedTaskInfo`](SerpGoogleImagesTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedTaskInfo`](SerpGoogleImagesTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:46371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46371)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")