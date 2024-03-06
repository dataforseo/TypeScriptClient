[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

# Interface: IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../classes/DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [item\_types](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#item_types)
- [language\_code](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#tag)
- [targets](IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#targets)

## Properties

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Defined in

[main.ts:97617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97617)

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

#### Defined in

[main.ts:97608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97608)

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

#### Defined in

[main.ts:97600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97600)

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

#### Defined in

[main.ts:97592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97592)

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

#### Defined in

[main.ts:97584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97584)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:97623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97623)

___


### targets

• `Optional` **targets**: `string`[]

target domains and websites
required field
you can specify domains, subdomains, and webpages in this field;
domains and subdomains should be specified without https:// and www.;
pages should be specified with absolute URL, including https:// and www.;
you can set up to 1000 domains, subdomains or webpages

#### Defined in

[main.ts:97576](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97576)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")