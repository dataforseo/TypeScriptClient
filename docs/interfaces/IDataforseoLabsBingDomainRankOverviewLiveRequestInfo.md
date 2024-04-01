[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingDomainRankOverviewLiveRequestInfo

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

main.ts:106456

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

main.ts:106447

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:106461

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

main.ts:106438

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

main.ts:106428

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Defined in

main.ts:106466

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:106472

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Defined in

main.ts:106418
