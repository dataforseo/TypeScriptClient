[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo

Defined in: main.ts:111830

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo()

> **new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:111894

#### Parameters

##### data?

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:111837

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:111884

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these locations and languages only;
example:
en

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:111877

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these locations and languages only;
example:
English

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:111870

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports these locations and languages only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:111862

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;

Note: this endpoint currently supports the following locations and languages only:
Australia – 2036, en
Austria – 2040, de
Canada – 2124, en
Egypt – 2818, ar
France – 2250, fr
Germany – 2276, de
India – 2356, en
Italy – 2380, it
Mexico – 2484, es
Netherlands – 2528, nl
Saudi Arabia – 2682, ar
Singapore – 2702, en
Spain – 2724, es
United Arab Emirates – 2784, ar
United Kingdom – 2826, en
United States – 2840, en
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:111890

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111903

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111929

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:111922

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)
