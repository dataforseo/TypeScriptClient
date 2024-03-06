[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTaskGetAdvancedTaskInfo

# Class: SerpGoogleNewsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleNewsTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleNewsTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleNewsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleNewsTaskGetAdvancedTaskInfo`](SerpGoogleNewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleNewsTaskGetAdvancedTaskInfo`](SerpGoogleNewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:42772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42772)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:42768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42768)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleNewsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:42776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42776)

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

[main.ts:42798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42798)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTaskGetAdvancedTaskInfo`](SerpGoogleNewsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTaskGetAdvancedTaskInfo`](SerpGoogleNewsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:42791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42791)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")