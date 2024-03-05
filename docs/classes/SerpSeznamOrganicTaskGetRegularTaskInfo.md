[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetRegularTaskInfo

# Class: SerpSeznamOrganicTaskGetRegularTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpSeznamOrganicTaskGetRegularTaskInfo`**

## Implements

- [`ISerpSeznamOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetRegularTaskInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTaskGetRegularTaskInfo.md#cost)
- [data](SerpSeznamOrganicTaskGetRegularTaskInfo.md#data)
- [id](SerpSeznamOrganicTaskGetRegularTaskInfo.md#id)
- [path](SerpSeznamOrganicTaskGetRegularTaskInfo.md#path)
- [result](SerpSeznamOrganicTaskGetRegularTaskInfo.md#result)
- [result\_count](SerpSeznamOrganicTaskGetRegularTaskInfo.md#result_count)
- [status\_code](SerpSeznamOrganicTaskGetRegularTaskInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTaskGetRegularTaskInfo.md#status_message)
- [time](SerpSeznamOrganicTaskGetRegularTaskInfo.md#time)

### Methods

- [init](SerpSeznamOrganicTaskGetRegularTaskInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetRegularTaskInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetRegularTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetRegularTaskInfo**(`data?`): [`SerpSeznamOrganicTaskGetRegularTaskInfo`](SerpSeznamOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetRegularTaskInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetRegularTaskInfo`](SerpSeznamOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:70278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70278)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[cost](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#cost)

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

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[data](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#data)

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

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[id](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[path](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[result](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#result)

#### Defined in

[main.ts:70274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70274)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[result_count](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#result_count)

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

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#status_code)

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

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularTaskInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md).[time](../interfaces/ISerpSeznamOrganicTaskGetRegularTaskInfo.md#time)

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

[main.ts:70282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70282)

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

[main.ts:70304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70304)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetRegularTaskInfo`](SerpSeznamOrganicTaskGetRegularTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetRegularTaskInfo`](SerpSeznamOrganicTaskGetRegularTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:70297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70297)
