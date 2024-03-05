[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetRegularTaskInfo

# Class: SerpBaiduOrganicTaskGetRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpBaiduOrganicTaskGetRegularTaskInfo`**

## Implements

- [`ISerpBaiduOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTaskGetRegularTaskInfo.md#cost)
- [data](SerpBaiduOrganicTaskGetRegularTaskInfo.md#data)
- [id](SerpBaiduOrganicTaskGetRegularTaskInfo.md#id)
- [path](SerpBaiduOrganicTaskGetRegularTaskInfo.md#path)
- [result](SerpBaiduOrganicTaskGetRegularTaskInfo.md#result)
- [result\_count](SerpBaiduOrganicTaskGetRegularTaskInfo.md#result_count)
- [status\_code](SerpBaiduOrganicTaskGetRegularTaskInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTaskGetRegularTaskInfo.md#status_message)
- [time](SerpBaiduOrganicTaskGetRegularTaskInfo.md#time)

### Methods

- [init](SerpBaiduOrganicTaskGetRegularTaskInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetRegularTaskInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetRegularTaskInfo**(`data?`): [`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:66748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66748)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[cost](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#cost)

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

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[data](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#data)

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

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[id](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[path](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[result](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#result)

#### Defined in

[main.ts:66744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66744)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[result_count](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#result_count)

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

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#status_code)

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

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularTaskInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md).[time](../interfaces/ISerpBaiduOrganicTaskGetRegularTaskInfo.md#time)

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

[main.ts:66752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66752)

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

[main.ts:66774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66774)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:66767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66767)
