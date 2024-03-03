[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainIntersectionLiveRequestInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#filters)
- [include\_serp\_info](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#include_serp_info)
- [intersections](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#intersections)
- [item\_types](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#tag)
- [target1](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#target1)
- [target2](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#target2)

### Methods

- [init](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainIntersectionLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:88972

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume","in",[100,1000]]
[["first_domain_serp_element.etv",">",0],"and",["first_domain_serp_element.description","like","%goat%"]]
[["keyword_data.keyword_info.search_volume",">",100],
"and",
[["first_domain_serp_element.description","like","%goat%"],
"or",
["second_domain_serp_element.type","=","organic"]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#filters)

#### Defined in

main.ts:88946

___

### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[include_serp_info](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#include_serp_info)

#### Defined in

main.ts:88919

___

### intersections

• `Optional` **intersections**: `boolean`

domain intersections in SERP
optional field
if you set intersections to true, you will get the keywords for which both target domains specified as target1 and target2 have results within the same SERP; the corresponding SERP elements for both domains will be provided in the results array
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million
if you specify intersections: false, you will get the keywords for which the domain specified as target1 has results in SERP, and the domain specified as target2 doesn’t;
thus, the corresponding SERP elements and other data will be provided for the domain specified as target1only
default value: true

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[intersections](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#intersections)

#### Defined in

main.ts:88906

___

### item\_types

• `Optional` **item\_types**: `string`[]

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#item_types)

#### Defined in

main.ts:88914

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

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#language_code)

#### Defined in

main.ts:88898

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

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#language_name)

#### Defined in

main.ts:88890

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#limit)

#### Defined in

main.ts:88924

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

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#location_code)

#### Defined in

main.ts:88882

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

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#location_name)

#### Defined in

main.ts:88874

___

### offset

• `Optional` **offset**: `number`

offset in the items array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#offset)

#### Defined in

main.ts:88929

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["keyword_data.keyword_info.competition,desc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#order_by)

#### Defined in

main.ts:88962

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#tag)

#### Defined in

main.ts:88968

___

### target1

• `Optional` **target1**: `string`

domain
required field
the domain name of the first target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[target1](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#target1)

#### Defined in

main.ts:88861

___

### target2

• `Optional` **target2**: `string`

domain
required field
the domain name of the second target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md).[target2](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md#target2)

#### Defined in

main.ts:88866

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

main.ts:88981

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

main.ts:89023

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:89016
