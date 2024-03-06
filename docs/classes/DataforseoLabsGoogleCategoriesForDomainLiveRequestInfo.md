[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#filters)
- [include\_subcategories](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#include_subcategories)
- [item\_types](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#tag)
- [target](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Defined in

[main.ts:83209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83209)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#filters)

#### Defined in

[main.ts:83172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83172)

___


### include\_subcategories

• `Optional` **include\_subcategories**: `boolean`

indicates if the subcategories will be included in the search
optional field
if set to false, the subcategories will be ignored
default value: false
learn more about the parameter in this help center article

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[include_subcategories](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#include_subcategories)

#### Defined in

[main.ts:83147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83147)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:83156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83156)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:83141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83141)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:83133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83133)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned categories
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#limit)

#### Defined in

[main.ts:83194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83194)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:83125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83125)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:83117](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83117)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned categories
optional field
default value: 0
if you specify the 10 value, the first ten categories in the results array will be omitted and the data will be provided for the successive categories

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#offset)

#### Defined in

[main.ts:83199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83199)

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

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:83189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83189)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#tag)

#### Defined in

[main.ts:83205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83205)

___


### target

• `Optional` **target**: `string`

domain or subdomain
required field
the domain or subdomain name of the target website
the domain or subdomain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#target)

#### Defined in

[main.ts:83109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83109)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:83218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83218)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:83258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83258)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Defined in

[main.ts:83251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L83251)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")