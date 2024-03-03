[Documentation](../README.md) / [Exports](../modules.md) / MerchantErrorsRequestInfo

# Class: MerchantErrorsRequestInfo

## Implements

- [`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](MerchantErrorsRequestInfo.md#datetime_from)
- [datetime\_to](MerchantErrorsRequestInfo.md#datetime_to)
- [filtered\_function](MerchantErrorsRequestInfo.md#filtered_function)
- [limit](MerchantErrorsRequestInfo.md#limit)
- [offset](MerchantErrorsRequestInfo.md#offset)

### Methods

- [init](MerchantErrorsRequestInfo.md#init)
- [toJSON](MerchantErrorsRequestInfo.md#tojson)
- [fromJS](MerchantErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantErrorsRequestInfo**(`data?`): [`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantErrorsRequestInfo`](../interfaces/IMerchantErrorsRequestInfo.md) |

#### Returns

[`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Defined in

main.ts:163153

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

[IMerchantErrorsRequestInfo](../interfaces/IMerchantErrorsRequestInfo.md).[datetime_from](../interfaces/IMerchantErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:163142

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

[IMerchantErrorsRequestInfo](../interfaces/IMerchantErrorsRequestInfo.md).[datetime_to](../interfaces/IMerchantErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:163149

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: sellers/ad_url, postback_url, pingback_url

#### Implementation of

[IMerchantErrorsRequestInfo](../interfaces/IMerchantErrorsRequestInfo.md).[filtered_function](../interfaces/IMerchantErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:163135

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IMerchantErrorsRequestInfo](../interfaces/IMerchantErrorsRequestInfo.md).[limit](../interfaces/IMerchantErrorsRequestInfo.md#limit)

#### Defined in

main.ts:163124

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IMerchantErrorsRequestInfo](../interfaces/IMerchantErrorsRequestInfo.md).[offset](../interfaces/IMerchantErrorsRequestInfo.md#offset)

#### Defined in

main.ts:163129

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

main.ts:163162

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

main.ts:163183

___

### fromJS

▸ **fromJS**(`data`): [`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)

#### Defined in

main.ts:163176
