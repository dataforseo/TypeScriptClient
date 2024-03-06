[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataErrorsRequestInfo

# Class: AppDataErrorsRequestInfo

## Implements

- [`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](AppDataErrorsRequestInfo.md#datetime_from)
- [datetime\_to](AppDataErrorsRequestInfo.md#datetime_to)
- [filtered\_function](AppDataErrorsRequestInfo.md#filtered_function)
- [limit](AppDataErrorsRequestInfo.md#limit)
- [offset](AppDataErrorsRequestInfo.md#offset)

### Methods

- [init](AppDataErrorsRequestInfo.md#init)
- [toJSON](AppDataErrorsRequestInfo.md#tojson)
- [fromJS](AppDataErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataErrorsRequestInfo**(`data?`): [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataErrorsRequestInfo`](../interfaces/IAppDataErrorsRequestInfo.md) |

#### Returns

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Defined in

[main.ts:176658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176658)

## Properties

### datetime\_from

• `Optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataErrorsRequestInfo](../interfaces/IAppDataErrorsRequestInfo.md).[datetime_from](../interfaces/IAppDataErrorsRequestInfo.md#datetime_from)

#### Defined in

[main.ts:176647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176647)

___


### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[IAppDataErrorsRequestInfo](../interfaces/IAppDataErrorsRequestInfo.md).[datetime_to](../interfaces/IAppDataErrorsRequestInfo.md#datetime_to)

#### Defined in

[main.ts:176654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176654)

___


### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: app_data/task_get/advanced, postback_url, pingback_url

#### Implementation of

[IAppDataErrorsRequestInfo](../interfaces/IAppDataErrorsRequestInfo.md).[filtered_function](../interfaces/IAppDataErrorsRequestInfo.md#filtered_function)

#### Defined in

[main.ts:176640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176640)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IAppDataErrorsRequestInfo](../interfaces/IAppDataErrorsRequestInfo.md).[limit](../interfaces/IAppDataErrorsRequestInfo.md#limit)

#### Defined in

[main.ts:176629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176629)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IAppDataErrorsRequestInfo](../interfaces/IAppDataErrorsRequestInfo.md).[offset](../interfaces/IAppDataErrorsRequestInfo.md#offset)

#### Defined in

[main.ts:176634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176634)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:176667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176667)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:176688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176688)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)

#### Defined in

[main.ts:176681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176681)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")