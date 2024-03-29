[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveRegularTaskInfo

# Class: SerpGoogleOrganicLiveRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleOrganicLiveRegularTaskInfo`**

## Implements

- [`ISerpGoogleOrganicLiveRegularTaskInfo`](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicLiveRegularTaskInfo.md#cost)
- [data](SerpGoogleOrganicLiveRegularTaskInfo.md#data)
- [id](SerpGoogleOrganicLiveRegularTaskInfo.md#id)
- [path](SerpGoogleOrganicLiveRegularTaskInfo.md#path)
- [result](SerpGoogleOrganicLiveRegularTaskInfo.md#result)
- [result\_count](SerpGoogleOrganicLiveRegularTaskInfo.md#result_count)
- [status\_code](SerpGoogleOrganicLiveRegularTaskInfo.md#status_code)
- [status\_message](SerpGoogleOrganicLiveRegularTaskInfo.md#status_message)
- [time](SerpGoogleOrganicLiveRegularTaskInfo.md#time)

### Methods

- [init](SerpGoogleOrganicLiveRegularTaskInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveRegularTaskInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveRegularTaskInfo**(`data?`): [`SerpGoogleOrganicLiveRegularTaskInfo`](SerpGoogleOrganicLiveRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveRegularTaskInfo`](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveRegularTaskInfo`](SerpGoogleOrganicLiveRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:36728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36728)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[cost](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#cost)

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

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[data](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#data)

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

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[id](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[path](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleOrganicLiveRegularResultInfo`](SerpGoogleOrganicLiveRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[result](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#result)

#### Defined in

[main.ts:36724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36724)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[result_count](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#result_count)

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

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[status_code](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#status_code)

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

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[status_message](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleOrganicLiveRegularTaskInfo](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md).[time](../interfaces/ISerpGoogleOrganicLiveRegularTaskInfo.md#time)

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

[main.ts:36732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36732)

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

[main.ts:36754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36754)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveRegularTaskInfo`](SerpGoogleOrganicLiveRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveRegularTaskInfo`](SerpGoogleOrganicLiveRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:36747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36747)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")