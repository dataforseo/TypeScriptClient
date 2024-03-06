[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetRegularTaskInfo

# Class: SerpBingOrganicTaskGetRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingOrganicTaskGetRegularTaskInfo`**

## Implements

- [`ISerpBingOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskGetRegularTaskInfo.md#cost)
- [data](SerpBingOrganicTaskGetRegularTaskInfo.md#data)
- [id](SerpBingOrganicTaskGetRegularTaskInfo.md#id)
- [path](SerpBingOrganicTaskGetRegularTaskInfo.md#path)
- [result](SerpBingOrganicTaskGetRegularTaskInfo.md#result)
- [result\_count](SerpBingOrganicTaskGetRegularTaskInfo.md#result_count)
- [status\_code](SerpBingOrganicTaskGetRegularTaskInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskGetRegularTaskInfo.md#status_message)
- [time](SerpBingOrganicTaskGetRegularTaskInfo.md#time)

### Methods

- [init](SerpBingOrganicTaskGetRegularTaskInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetRegularTaskInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetRegularTaskInfo**(`data?`): [`SerpBingOrganicTaskGetRegularTaskInfo`](SerpBingOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetRegularTaskInfo`](SerpBingOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:54364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54364)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[cost](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#cost)

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

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[data](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#data)

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

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[id](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[path](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[result](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#result)

#### Defined in

[main.ts:54360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54360)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[result_count](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#result_count)

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

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#status_code)

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

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md).[time](../interfaces/ISerpBingOrganicTaskGetRegularTaskInfo.md#time)

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

[main.ts:54368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54368)

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

[main.ts:54390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54390)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetRegularTaskInfo`](SerpBingOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetRegularTaskInfo`](SerpBingOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:54383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54383)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")