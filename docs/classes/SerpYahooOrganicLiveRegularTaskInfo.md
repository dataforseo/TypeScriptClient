[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveRegularTaskInfo

# Class: SerpYahooOrganicLiveRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYahooOrganicLiveRegularTaskInfo`**

## Implements

- [`ISerpYahooOrganicLiveRegularTaskInfo`](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicLiveRegularTaskInfo.md#cost)
- [data](SerpYahooOrganicLiveRegularTaskInfo.md#data)
- [id](SerpYahooOrganicLiveRegularTaskInfo.md#id)
- [path](SerpYahooOrganicLiveRegularTaskInfo.md#path)
- [result](SerpYahooOrganicLiveRegularTaskInfo.md#result)
- [result\_count](SerpYahooOrganicLiveRegularTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicLiveRegularTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicLiveRegularTaskInfo.md#status_message)
- [time](SerpYahooOrganicLiveRegularTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicLiveRegularTaskInfo.md#init)
- [toJSON](SerpYahooOrganicLiveRegularTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveRegularTaskInfo**(`data?`): [`SerpYahooOrganicLiveRegularTaskInfo`](SerpYahooOrganicLiveRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveRegularTaskInfo`](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md) |

#### Returns

[`SerpYahooOrganicLiveRegularTaskInfo`](SerpYahooOrganicLiveRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:64618](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64618)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#cost)

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

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[data](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#data)

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

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[id](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[path](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[result](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#result)

#### Defined in

[main.ts:64614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64614)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#result_count)

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

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#status_code)

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

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicLiveRegularTaskInfo](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md).[time](../interfaces/ISerpYahooOrganicLiveRegularTaskInfo.md#time)

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

[main.ts:64622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64622)

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

[main.ts:64644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64644)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveRegularTaskInfo`](SerpYahooOrganicLiveRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveRegularTaskInfo`](SerpYahooOrganicLiveRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:64637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64637)
