[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo()

> **new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:104905

## Properties

### keywords?

> `optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#keywords)

#### Defined in

main.ts:104848

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these locations and languages only;
example:
en

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#language_code)

#### Defined in

main.ts:104895

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these locations and languages only;
example:
English

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#language_name)

#### Defined in

main.ts:104888

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports these locations and languages only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#location_code)

#### Defined in

main.ts:104881

***

### location\_name?

> `optional` **location\_name**: `string`

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

#### Defined in

main.ts:104873

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#tag)

#### Defined in

main.ts:104901

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:104914

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:104940

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:104933
