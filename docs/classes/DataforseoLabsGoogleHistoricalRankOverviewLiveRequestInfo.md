[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#constructor)

### Properties

- [correlate](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#correlate)
- [date\_from](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_from)
- [date\_to](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_to)
- [language\_code](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#tag)
- [target](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Defined in

main.ts:96459

## Properties

### correlate

• `Optional` **correlate**: `boolean`

correlate data with previously obtained datasets
optional field
default value: true
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets
this parameter is intended to mitigate any inconsistencies that may result from changes to our database
we recommend always setting correlate to true

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[correlate](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#correlate)

#### Defined in

main.ts:96449

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 6 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[date_from](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_from)

#### Defined in

main.ts:96435

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[date_to](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_to)

#### Defined in

main.ts:96442

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_code)

#### Defined in

main.ts:96429

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_name)

#### Defined in

main.ts:96421

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_code)

#### Defined in

main.ts:96413

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_name)

#### Defined in

main.ts:96405

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#tag)

#### Defined in

main.ts:96455

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#target)

#### Defined in

main.ts:96397

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

main.ts:96468

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

main.ts:96493

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

#### Defined in

main.ts:96486
