[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListingsCategoriesTaskInfo

# Class: AppDataAppleAppListingsCategoriesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`AppDataAppleAppListingsCategoriesTaskInfo`**

## Implements

- [`IAppDataAppleAppListingsCategoriesTaskInfo`](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListingsCategoriesTaskInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListingsCategoriesTaskInfo.md#cost)
- [data](AppDataAppleAppListingsCategoriesTaskInfo.md#data)
- [id](AppDataAppleAppListingsCategoriesTaskInfo.md#id)
- [path](AppDataAppleAppListingsCategoriesTaskInfo.md#path)
- [result](AppDataAppleAppListingsCategoriesTaskInfo.md#result)
- [result\_count](AppDataAppleAppListingsCategoriesTaskInfo.md#result_count)
- [status\_code](AppDataAppleAppListingsCategoriesTaskInfo.md#status_code)
- [status\_message](AppDataAppleAppListingsCategoriesTaskInfo.md#status_message)
- [time](AppDataAppleAppListingsCategoriesTaskInfo.md#time)

### Methods

- [init](AppDataAppleAppListingsCategoriesTaskInfo.md#init)
- [toJSON](AppDataAppleAppListingsCategoriesTaskInfo.md#tojson)
- [fromJS](AppDataAppleAppListingsCategoriesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListingsCategoriesTaskInfo**(`data?`): [`AppDataAppleAppListingsCategoriesTaskInfo`](AppDataAppleAppListingsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListingsCategoriesTaskInfo`](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md) |

#### Returns

[`AppDataAppleAppListingsCategoriesTaskInfo`](AppDataAppleAppListingsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:186628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186628)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[cost](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#cost)

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

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[data](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#data)

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

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[id](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[path](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`AppDataAppleAppListingsCategoriesResultInfo`](AppDataAppleAppListingsCategoriesResultInfo.md)[]

array of results

#### Implementation of

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[result](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#result)

#### Defined in

[main.ts:186624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186624)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[result_count](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#result_count)

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

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[status_code](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#status_code)

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

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[status_message](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IAppDataAppleAppListingsCategoriesTaskInfo](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md).[time](../interfaces/IAppDataAppleAppListingsCategoriesTaskInfo.md#time)

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

[main.ts:186632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186632)

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

[main.ts:186654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186654)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListingsCategoriesTaskInfo`](AppDataAppleAppListingsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListingsCategoriesTaskInfo`](AppDataAppleAppListingsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:186647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186647)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")