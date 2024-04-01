[Documentation](../README.md) / [Exports](../modules.md) / OnPageErrorsRequestInfo

# Class: OnPageErrorsRequestInfo

## Implements

- [`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](OnPageErrorsRequestInfo.md#datetime_from)
- [datetime\_to](OnPageErrorsRequestInfo.md#datetime_to)
- [filtered\_function](OnPageErrorsRequestInfo.md#filtered_function)
- [limit](OnPageErrorsRequestInfo.md#limit)
- [offset](OnPageErrorsRequestInfo.md#offset)

### Methods

- [init](OnPageErrorsRequestInfo.md#init)
- [toJSON](OnPageErrorsRequestInfo.md#tojson)
- [fromJS](OnPageErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageErrorsRequestInfo**(`data?`): [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageErrorsRequestInfo`](../interfaces/IOnPageErrorsRequestInfo.md) |

#### Returns

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Defined in

main.ts:147244

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

[IOnPageErrorsRequestInfo](../interfaces/IOnPageErrorsRequestInfo.md).[datetime_from](../interfaces/IOnPageErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:147233

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

[IOnPageErrorsRequestInfo](../interfaces/IOnPageErrorsRequestInfo.md).[datetime_to](../interfaces/IOnPageErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:147240

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: on_page/task_post, postback_url, pingback_url

#### Implementation of

[IOnPageErrorsRequestInfo](../interfaces/IOnPageErrorsRequestInfo.md).[filtered_function](../interfaces/IOnPageErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:147226

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IOnPageErrorsRequestInfo](../interfaces/IOnPageErrorsRequestInfo.md).[limit](../interfaces/IOnPageErrorsRequestInfo.md#limit)

#### Defined in

main.ts:147215

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IOnPageErrorsRequestInfo](../interfaces/IOnPageErrorsRequestInfo.md).[offset](../interfaces/IOnPageErrorsRequestInfo.md#offset)

#### Defined in

main.ts:147220

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

main.ts:147253

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

main.ts:147274

___

### fromJS

▸ **fromJS**(`data`): [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)

#### Defined in

main.ts:147267
