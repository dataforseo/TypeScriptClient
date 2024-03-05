[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetRegularTaskInfo

# Class: SerpYahooOrganicTaskGetRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYahooOrganicTaskGetRegularTaskInfo`**

## Implements

- [`ISerpYahooOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskGetRegularTaskInfo.md#cost)
- [data](SerpYahooOrganicTaskGetRegularTaskInfo.md#data)
- [id](SerpYahooOrganicTaskGetRegularTaskInfo.md#id)
- [path](SerpYahooOrganicTaskGetRegularTaskInfo.md#path)
- [result](SerpYahooOrganicTaskGetRegularTaskInfo.md#result)
- [result\_count](SerpYahooOrganicTaskGetRegularTaskInfo.md#result_count)
- [status\_code](SerpYahooOrganicTaskGetRegularTaskInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskGetRegularTaskInfo.md#status_message)
- [time](SerpYahooOrganicTaskGetRegularTaskInfo.md#time)

### Methods

- [init](SerpYahooOrganicTaskGetRegularTaskInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetRegularTaskInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetRegularTaskInfo**(`data?`): [`SerpYahooOrganicTaskGetRegularTaskInfo`](SerpYahooOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetRegularTaskInfo`](SerpYahooOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:63880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63880)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#cost)

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

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[data](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#data)

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

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[id](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[path](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[result](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#result)

#### Defined in

[main.ts:63876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63876)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[result_count](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#result_count)

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

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#status_code)

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

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskGetRegularTaskInfo](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md).[time](../interfaces/ISerpYahooOrganicTaskGetRegularTaskInfo.md#time)

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

[main.ts:63884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63884)

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

[main.ts:63906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63906)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetRegularTaskInfo`](SerpYahooOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetRegularTaskInfo`](SerpYahooOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:63899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63899)
