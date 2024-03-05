[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaPinterestLiveTaskInfo

# Class: BusinessDataSocialMediaPinterestLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataSocialMediaPinterestLiveTaskInfo`**

## Implements

- [`IBusinessDataSocialMediaPinterestLiveTaskInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaPinterestLiveTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataSocialMediaPinterestLiveTaskInfo.md#cost)
- [data](BusinessDataSocialMediaPinterestLiveTaskInfo.md#data)
- [id](BusinessDataSocialMediaPinterestLiveTaskInfo.md#id)
- [path](BusinessDataSocialMediaPinterestLiveTaskInfo.md#path)
- [result](BusinessDataSocialMediaPinterestLiveTaskInfo.md#result)
- [result\_count](BusinessDataSocialMediaPinterestLiveTaskInfo.md#result_count)
- [status\_code](BusinessDataSocialMediaPinterestLiveTaskInfo.md#status_code)
- [status\_message](BusinessDataSocialMediaPinterestLiveTaskInfo.md#status_message)
- [time](BusinessDataSocialMediaPinterestLiveTaskInfo.md#time)

### Methods

- [init](BusinessDataSocialMediaPinterestLiveTaskInfo.md#init)
- [toJSON](BusinessDataSocialMediaPinterestLiveTaskInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaPinterestLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaPinterestLiveTaskInfo**(`data?`): [`BusinessDataSocialMediaPinterestLiveTaskInfo`](BusinessDataSocialMediaPinterestLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaPinterestLiveTaskInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md) |

#### Returns

[`BusinessDataSocialMediaPinterestLiveTaskInfo`](BusinessDataSocialMediaPinterestLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:205778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205778)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[cost](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#cost)

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

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[data](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#data)

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

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[id](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[path](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[result](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#result)

#### Defined in

[main.ts:205774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205774)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[result_count](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#result_count)

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

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[status_code](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#status_code)

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

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[status_message](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveTaskInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md).[time](../interfaces/IBusinessDataSocialMediaPinterestLiveTaskInfo.md#time)

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

[main.ts:205782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205782)

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

[main.ts:205804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205804)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveTaskInfo`](BusinessDataSocialMediaPinterestLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaPinterestLiveTaskInfo`](BusinessDataSocialMediaPinterestLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:205797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205797)
