[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTaskGetAdvancedTaskInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:48178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48178)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:48174](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48174)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:48182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48182)

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

[main.ts:48204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48204)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:48197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48197)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")