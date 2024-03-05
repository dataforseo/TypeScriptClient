[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveAdvancedTaskInfo

# Class: SerpYahooOrganicLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYahooOrganicLiveAdvancedTaskInfo`**

## Implements

- [`ISerpYahooOrganicLiveAdvancedTaskInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicLiveAdvancedTaskInfo.md#cost)
- [data](SerpYahooOrganicLiveAdvancedTaskInfo.md#data)
- [id](SerpYahooOrganicLiveAdvancedTaskInfo.md#id)
- [path](SerpYahooOrganicLiveAdvancedTaskInfo.md#path)
- [result](SerpYahooOrganicLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpYahooOrganicLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicLiveAdvancedTaskInfo.md#status_message)
- [time](SerpYahooOrganicLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpYahooOrganicLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveAdvancedTaskInfo**(`data?`): [`SerpYahooOrganicLiveAdvancedTaskInfo`](SerpYahooOrganicLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveAdvancedTaskInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpYahooOrganicLiveAdvancedTaskInfo`](SerpYahooOrganicLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:64878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64878)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#cost)

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

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#data)

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

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:64874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64874)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#result_count)

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

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#status_code)

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

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicLiveAdvancedTaskInfo](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpYahooOrganicLiveAdvancedTaskInfo.md#time)

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

[main.ts:64882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64882)

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

[main.ts:64904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64904)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedTaskInfo`](SerpYahooOrganicLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveAdvancedTaskInfo`](SerpYahooOrganicLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:64897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64897)
