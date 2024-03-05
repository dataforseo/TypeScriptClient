[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksErrorsRequestInfo

# Class: BacklinksErrorsRequestInfo

## Implements

- [`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](BacklinksErrorsRequestInfo.md#datetime_from)
- [datetime\_to](BacklinksErrorsRequestInfo.md#datetime_to)
- [filtered\_function](BacklinksErrorsRequestInfo.md#filtered_function)
- [limit](BacklinksErrorsRequestInfo.md#limit)
- [offset](BacklinksErrorsRequestInfo.md#offset)

### Methods

- [init](BacklinksErrorsRequestInfo.md#init)
- [toJSON](BacklinksErrorsRequestInfo.md#tojson)
- [fromJS](BacklinksErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksErrorsRequestInfo**(`data?`): [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksErrorsRequestInfo`](../interfaces/IBacklinksErrorsRequestInfo.md) |

#### Returns

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Defined in

[main.ts:128321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128321)

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

[IBacklinksErrorsRequestInfo](../interfaces/IBacklinksErrorsRequestInfo.md).[datetime_from](../interfaces/IBacklinksErrorsRequestInfo.md#datetime_from)

#### Defined in

[main.ts:128310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128310)

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

[IBacklinksErrorsRequestInfo](../interfaces/IBacklinksErrorsRequestInfo.md).[datetime_to](../interfaces/IBacklinksErrorsRequestInfo.md#datetime_to)

#### Defined in

[main.ts:128317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128317)

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: backlinks/live

#### Implementation of

[IBacklinksErrorsRequestInfo](../interfaces/IBacklinksErrorsRequestInfo.md).[filtered_function](../interfaces/IBacklinksErrorsRequestInfo.md#filtered_function)

#### Defined in

[main.ts:128303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128303)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IBacklinksErrorsRequestInfo](../interfaces/IBacklinksErrorsRequestInfo.md).[limit](../interfaces/IBacklinksErrorsRequestInfo.md#limit)

#### Defined in

[main.ts:128292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128292)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IBacklinksErrorsRequestInfo](../interfaces/IBacklinksErrorsRequestInfo.md).[offset](../interfaces/IBacklinksErrorsRequestInfo.md#offset)

#### Defined in

[main.ts:128297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128297)

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

[main.ts:128330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128330)

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

[main.ts:128351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128351)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)

#### Defined in

[main.ts:128344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128344)
