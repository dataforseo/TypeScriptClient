[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo

# Interface: IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../classes/DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#filters)
- [include\_subcategories](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#include_subcategories)
- [item\_types](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#item_types)
- [language\_code](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#tag)
- [target](IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#target)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.organic.pos_1,">",0]
[["metrics.organic.count",">=",100],
"and",
["metrics.organic.impressions_etv","in",[10,100]]]
[[["metrics.organic.count",">=",100],"and",["metrics.organic.pos_1",">",0]],
"or",
["metrics.organic.impressions_etv","in",[10,100]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

main.ts:85737

___

### include\_subcategories

• `Optional` **include\_subcategories**: `boolean`

indicates if the subcategories will be included in the search
optional field
if set to false, the subcategories will be ignored
default value: false
learn more about the parameter in this help center article

#### Defined in

main.ts:85712

___

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Defined in

main.ts:85721

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:85706

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:85698

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned categories
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:85759

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Defined in

main.ts:85690

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Defined in

main.ts:85682

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned categories 
optional field
default value: 0
if you specify the 10 value, the first ten categories in the results array will be omitted and the data will be provided for the successive categories

#### Defined in

main.ts:85764

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array

#### Defined in

main.ts:85754

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:85770

___

### target

• `Optional` **target**: `string`

domain or subdomain
required field
the domain or subdomain name of the target website
the domain or subdomain should be specified without https:// and www.

#### Defined in

main.ts:85674
