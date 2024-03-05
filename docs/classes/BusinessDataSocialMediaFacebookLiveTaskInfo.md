[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaFacebookLiveTaskInfo

# Class: BusinessDataSocialMediaFacebookLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataSocialMediaFacebookLiveTaskInfo`**

## Implements

- [`IBusinessDataSocialMediaFacebookLiveTaskInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaFacebookLiveTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataSocialMediaFacebookLiveTaskInfo.md#cost)
- [data](BusinessDataSocialMediaFacebookLiveTaskInfo.md#data)
- [id](BusinessDataSocialMediaFacebookLiveTaskInfo.md#id)
- [path](BusinessDataSocialMediaFacebookLiveTaskInfo.md#path)
- [result](BusinessDataSocialMediaFacebookLiveTaskInfo.md#result)
- [result\_count](BusinessDataSocialMediaFacebookLiveTaskInfo.md#result_count)
- [status\_code](BusinessDataSocialMediaFacebookLiveTaskInfo.md#status_code)
- [status\_message](BusinessDataSocialMediaFacebookLiveTaskInfo.md#status_message)
- [time](BusinessDataSocialMediaFacebookLiveTaskInfo.md#time)

### Methods

- [init](BusinessDataSocialMediaFacebookLiveTaskInfo.md#init)
- [toJSON](BusinessDataSocialMediaFacebookLiveTaskInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaFacebookLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaFacebookLiveTaskInfo**(`data?`): [`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaFacebookLiveTaskInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md) |

#### Returns

[`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:206036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206036)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[cost](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#cost)

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

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[data](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#data)

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

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[id](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[path](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[result](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#result)

#### Defined in

[main.ts:206032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206032)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[result_count](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#result_count)

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

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[status_code](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#status_code)

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

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[status_message](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveTaskInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md).[time](../interfaces/IBusinessDataSocialMediaFacebookLiveTaskInfo.md#time)

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

[main.ts:206040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206040)

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

[main.ts:206062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206062)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:206055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206055)
