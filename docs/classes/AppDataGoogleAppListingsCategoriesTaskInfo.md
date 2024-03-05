[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListingsCategoriesTaskInfo

# Class: AppDataGoogleAppListingsCategoriesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`AppDataGoogleAppListingsCategoriesTaskInfo`**

## Implements

- [`IAppDataGoogleAppListingsCategoriesTaskInfo`](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListingsCategoriesTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListingsCategoriesTaskInfo.md#cost)
- [data](AppDataGoogleAppListingsCategoriesTaskInfo.md#data)
- [id](AppDataGoogleAppListingsCategoriesTaskInfo.md#id)
- [path](AppDataGoogleAppListingsCategoriesTaskInfo.md#path)
- [result](AppDataGoogleAppListingsCategoriesTaskInfo.md#result)
- [result\_count](AppDataGoogleAppListingsCategoriesTaskInfo.md#result_count)
- [status\_code](AppDataGoogleAppListingsCategoriesTaskInfo.md#status_code)
- [status\_message](AppDataGoogleAppListingsCategoriesTaskInfo.md#status_message)
- [time](AppDataGoogleAppListingsCategoriesTaskInfo.md#time)

### Methods

- [init](AppDataGoogleAppListingsCategoriesTaskInfo.md#init)
- [toJSON](AppDataGoogleAppListingsCategoriesTaskInfo.md#tojson)
- [fromJS](AppDataGoogleAppListingsCategoriesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListingsCategoriesTaskInfo**(`data?`): [`AppDataGoogleAppListingsCategoriesTaskInfo`](AppDataGoogleAppListingsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListingsCategoriesTaskInfo`](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md) |

#### Returns

[`AppDataGoogleAppListingsCategoriesTaskInfo`](AppDataGoogleAppListingsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:181954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181954)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[cost](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#cost)

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

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[data](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#data)

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

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[id](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[path](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`AppDataGoogleAppListingsCategoriesResultInfo`](AppDataGoogleAppListingsCategoriesResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[result](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#result)

#### Defined in

[main.ts:181950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181950)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[result_count](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#result_count)

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

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[status_code](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#status_code)

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

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[status_message](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleAppListingsCategoriesTaskInfo](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md).[time](../interfaces/IAppDataGoogleAppListingsCategoriesTaskInfo.md#time)

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

[main.ts:181958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181958)

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

[main.ts:181980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181980)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListingsCategoriesTaskInfo`](AppDataGoogleAppListingsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListingsCategoriesTaskInfo`](AppDataGoogleAppListingsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:181973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181973)
