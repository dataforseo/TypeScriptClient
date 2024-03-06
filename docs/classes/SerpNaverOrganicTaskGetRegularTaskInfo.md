[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetRegularTaskInfo

# Class: SerpNaverOrganicTaskGetRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpNaverOrganicTaskGetRegularTaskInfo`**

## Implements

- [`ISerpNaverOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskGetRegularTaskInfo.md#cost)
- [data](SerpNaverOrganicTaskGetRegularTaskInfo.md#data)
- [id](SerpNaverOrganicTaskGetRegularTaskInfo.md#id)
- [path](SerpNaverOrganicTaskGetRegularTaskInfo.md#path)
- [result](SerpNaverOrganicTaskGetRegularTaskInfo.md#result)
- [result\_count](SerpNaverOrganicTaskGetRegularTaskInfo.md#result_count)
- [status\_code](SerpNaverOrganicTaskGetRegularTaskInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskGetRegularTaskInfo.md#status_message)
- [time](SerpNaverOrganicTaskGetRegularTaskInfo.md#time)

### Methods

- [init](SerpNaverOrganicTaskGetRegularTaskInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetRegularTaskInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetRegularTaskInfo**(`data?`): [`SerpNaverOrganicTaskGetRegularTaskInfo`](SerpNaverOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetRegularTaskInfo`](SerpNaverOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:68168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68168)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#cost)

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

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[data](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#data)

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

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[id](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[path](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[result](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#result)

#### Defined in

[main.ts:68164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68164)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[result_count](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#result_count)

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

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#status_code)

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

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskGetRegularTaskInfo](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md).[time](../interfaces/ISerpNaverOrganicTaskGetRegularTaskInfo.md#time)

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

[main.ts:68172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68172)

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

[main.ts:68194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68194)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularTaskInfo`](SerpNaverOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetRegularTaskInfo`](SerpNaverOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:68187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68187)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")