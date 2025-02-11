[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo

Defined in: main.ts:105560

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo()

> **new DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

Defined in: main.ts:105620

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:105573

starting date of the time range
optional field
if you don’t specify this field, the API will return all SERPs collected for 365 days starting from the current datetime value;
minimal possible value: 365 days from the current datetime value;
date format: "yyyy-mm-dd"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`date_from`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:105580

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd";
example:
"2021-09-01"

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`date_to`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_to)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:105567

keyword
required field
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:105610

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:105602

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:105594

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:105587

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:105616

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:105629

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:105653

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

Defined in: main.ts:105646

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)
