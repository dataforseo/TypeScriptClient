**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

# Interface: IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### item\_types?

> **`optional`** **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Source

main.ts:101831

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Source

main.ts:101822

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Source

main.ts:101814

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Source

main.ts:101806

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Source

main.ts:101798

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:101837

***

### targets?

> **`optional`** **targets**: `string`[]

target domains and websites
required field
you can specify domains, subdomains, and webpages in this field;
domains and subdomains should be specified without https:// and www.;
pages should be specified with absolute URL, including https:// and www.;
you can set up to 1000 domains, subdomains or webpages

#### Source

main.ts:101790
