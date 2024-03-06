[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskGetAdvancedTaskInfo

# Class: SerpGoogleLocalFinderTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleLocalFinderTaskGetAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#data)
- [id](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#id)
- [path](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#path)
- [result](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskGetAdvancedTaskInfo**(`data?`): [`SerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:40636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40636)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#data)

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

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:40632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40632)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:40640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40640)

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

[main.ts:40662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40662)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedTaskInfo`](SerpGoogleLocalFinderTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:40655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40655)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")