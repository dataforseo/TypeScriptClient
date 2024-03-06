[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo

# Interface: IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo

## Implemented by

- [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keywords](IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#keywords)
- [language\_code](IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md#tag)

## Properties

### keywords

• `Optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Defined in

[main.ts:98740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98740)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these locations and languages only;
example:
en

#### Defined in

[main.ts:98787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98787)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these locations and languages only;
example:
English

#### Defined in

[main.ts:98780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98780)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports these locations and languages only;
example:
2840

#### Defined in

[main.ts:98773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98773)

___


### location\_name

• `Optional` **location\_name**: `string`

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

#### Defined in

[main.ts:98765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98765)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:98793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98793)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")