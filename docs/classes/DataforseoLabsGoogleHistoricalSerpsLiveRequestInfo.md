[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#constructor)

### Properties

- [date\_from](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_from)
- [date\_to](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_to)
- [keyword](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#keyword)
- [language\_code](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

#### Defined in

main.ts:93389

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the API will return all SERPs collected for 365 days starting from the current datetime value;
minimal possible value: 365 days from the current datetime value;
date format: "yyyy-mm-dd"

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[date_from](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_from)

#### Defined in

main.ts:93342

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd";
example:
"2021-09-01"

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[date_to](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_to)

#### Defined in

main.ts:93349

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[keyword](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#keyword)

#### Defined in

main.ts:93336

___

### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:93379

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:93371

___

### location\_code

• `Optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:93363

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:93356

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#tag)

#### Defined in

main.ts:93385

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

main.ts:93398

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

main.ts:93422

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

#### Defined in

main.ts:93415
