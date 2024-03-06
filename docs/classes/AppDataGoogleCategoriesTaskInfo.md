[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleCategoriesTaskInfo

# Class: AppDataGoogleCategoriesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataGoogleCategoriesTaskInfo`**

## Implements

- [`IAppDataGoogleCategoriesTaskInfo`](../interfaces/IAppDataGoogleCategoriesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleCategoriesTaskInfo.md#constructor)

### Properties

- [cost](AppDataGoogleCategoriesTaskInfo.md#cost)
- [data](AppDataGoogleCategoriesTaskInfo.md#data)
- [id](AppDataGoogleCategoriesTaskInfo.md#id)
- [path](AppDataGoogleCategoriesTaskInfo.md#path)
- [result](AppDataGoogleCategoriesTaskInfo.md#result)
- [result\_count](AppDataGoogleCategoriesTaskInfo.md#result_count)
- [status\_code](AppDataGoogleCategoriesTaskInfo.md#status_code)
- [status\_message](AppDataGoogleCategoriesTaskInfo.md#status_message)
- [time](AppDataGoogleCategoriesTaskInfo.md#time)

### Methods

- [init](AppDataGoogleCategoriesTaskInfo.md#init)
- [toJSON](AppDataGoogleCategoriesTaskInfo.md#tojson)
- [fromJS](AppDataGoogleCategoriesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleCategoriesTaskInfo**(`data?`): [`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleCategoriesTaskInfo`](../interfaces/IAppDataGoogleCategoriesTaskInfo.md) |

#### Returns

[`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:177030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177030)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[cost](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#cost)

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

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[data](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#data)

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

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[id](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[path](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataGoogleCategoriesResultInfo`](AppDataGoogleCategoriesResultInfo.md)[]

array of results

#### Implementation of

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[result](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#result)

#### Defined in

[main.ts:177026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177026)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[result_count](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#result_count)

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

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[status_code](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#status_code)

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

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[status_message](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataGoogleCategoriesTaskInfo](../interfaces/IAppDataGoogleCategoriesTaskInfo.md).[time](../interfaces/IAppDataGoogleCategoriesTaskInfo.md#time)

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

[main.ts:177034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177034)

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

[main.ts:177056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177056)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:177049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177049)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")