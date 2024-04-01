[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo

# Interface: IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo

## Implemented by

- [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../classes/DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [item\_types](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#item_types)
- [language\_code](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#tag)
- [targets](IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#targets)

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

main.ts:104984

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:104975

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:104968

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Defined in

main.ts:104961

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Defined in

main.ts:104953

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:104990

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

main.ts:104945
