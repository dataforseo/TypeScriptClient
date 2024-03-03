[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleBulkAppMetricsLiveRequestInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#constructor)

### Properties

- [app\_ids](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#app_ids)
- [language\_code](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleBulkAppMetricsLiveRequestInfo**(`data?`): [`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Defined in

main.ts:110363

## Properties

### app\_ids

• `Optional` **app\_ids**: `string`[]

ids of the apps
required field
IDs of mobile applications on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320;
the maximum number of IDs you can specify in this field is 1000

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[app_ids](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#app_ids)

#### Defined in

main.ts:110317

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:110353

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:110344

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:110335

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:110326

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md#tag)

#### Defined in

main.ts:110359

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

main.ts:110372

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

main.ts:110398

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)

#### Defined in

main.ts:110391
