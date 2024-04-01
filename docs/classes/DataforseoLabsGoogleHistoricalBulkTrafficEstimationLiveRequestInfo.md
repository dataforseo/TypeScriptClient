[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#constructor)

### Properties

- [date\_from](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_from)
- [date\_to](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_to)
- [item\_types](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#tag)
- [targets](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#targets)

### Methods

- [init](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Defined in

main.ts:100413

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 12 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[date_from](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_from)

#### Defined in

main.ts:100387

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[date_to](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_to)

#### Defined in

main.ts:100394

___

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response;
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#item_types)

#### Defined in

main.ts:100403

___

### language\_code

• `Optional` **language\_code**: `string`

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_code)

#### Defined in

main.ts:100381

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_name)

#### Defined in

main.ts:100373

___

### location\_code

• `Optional` **location\_code**: `number`

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_code)

#### Defined in

main.ts:100365

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_name)

#### Defined in

main.ts:100357

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#tag)

#### Defined in

main.ts:100409

___

### targets

• `Optional` **targets**: `string`[]

target domains and subdomains
required field
you can specify domains and subdomains in this field;
domains and subdomains should be specified without https:// and www.;
you can set up to 1000 domains or subdomains

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md).[targets](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#targets)

#### Defined in

main.ts:100349

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

main.ts:100422

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

main.ts:100455

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

#### Defined in

main.ts:100448
