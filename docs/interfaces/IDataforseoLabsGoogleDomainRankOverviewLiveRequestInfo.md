[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../classes/DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [ignore\_synonyms](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#ignore_synonyms)
- [language\_code](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#offset)
- [tag](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#tag)
- [target](IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#target)

## Properties

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true, all highly similar keywords will be excluded from the ranking and traffic calculations, the results will be based on data for main keywords from groups of synonyms
default value: false

#### Defined in

[main.ts:90647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90647)

___


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

[main.ts:90642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90642)

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

[main.ts:90633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90633)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:90652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90652)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Defined in

[main.ts:90624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90624)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Defined in

[main.ts:90615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90615)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Defined in

[main.ts:90657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90657)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:90663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90663)

___


### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Defined in

[main.ts:90606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90606)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")