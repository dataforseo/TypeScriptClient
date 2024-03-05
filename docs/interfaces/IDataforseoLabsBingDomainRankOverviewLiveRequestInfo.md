[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingDomainRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsBingDomainRankOverviewLiveRequestInfo

## Implemented by

- [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../classes/DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [language\_code](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#offset)
- [tag](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#tag)
- [target](IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#target)

## Properties

### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Defined in

[main.ts:104079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104079)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Defined in

[main.ts:104070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104070)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:104084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104084)

___

### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Defined in

[main.ts:104061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104061)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Defined in

[main.ts:104051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104051)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Defined in

[main.ts:104089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104089)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:104095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104095)

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Defined in

[main.ts:104041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104041)
