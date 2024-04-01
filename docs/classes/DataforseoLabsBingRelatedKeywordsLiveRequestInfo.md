[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelatedKeywordsLiveRequestInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#constructor)

### Properties

- [depth](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#depth)
- [filters](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#filters)
- [ignore\_synonyms](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)
- [include\_seed\_keyword](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)
- [include\_serp\_info](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_serp_info)
- [keyword](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#keyword)
- [language\_code](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#order_by)
- [replace\_with\_core\_keyword](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#replace_with_core_keyword)
- [tag](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelatedKeywordsLiveRequestInfo**(`data?`): [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:108118

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth
optional field
default value: 1
number of the returned results depends on the value you set in this field
you can specify a level from 0 to 4
estimated number of keywords for each level (maximum):
0 – the keyword set in the keyword field
1 – 8 keywords
2 – 72 keywords
3 – 584 keywords
4 – 4680 keywords

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[depth](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#depth)

#### Defined in

main.ts:108049

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume",">",0]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#filters)

#### Defined in

main.ts:108082

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[ignore_synonyms](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)

#### Defined in

main.ts:108071

___

### include\_seed\_keyword

• `Optional` **include\_seed\_keyword**: `boolean`

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[include_seed_keyword](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)

#### Defined in

main.ts:108054

___

### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[include_serp_info](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_serp_info)

#### Defined in

main.ts:108059

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[keyword](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#keyword)

#### Defined in

main.ts:108003

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:108037

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:108029

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#limit)

#### Defined in

main.ts:108103

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:108021

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:108012

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#offset)

#### Defined in

main.ts:108108

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["keyword_data.keyword_info.competition,desc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#order_by)

#### Defined in

main.ts:108098

___

### replace\_with\_core\_keyword

• `Optional` **replace\_with\_core\_keyword**: `boolean`

return data for core keyword
optional field
if true, serp_info and related_keywords will be returned for the main keyword in the group that the specified keyword belongs to;
if false, serp_info and related_keywords will be returned for the specified keyword (if available);
refer to this help center article for more details;
default value: false

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[replace_with_core_keyword](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#replace_with_core_keyword)

#### Defined in

main.ts:108066

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#tag)

#### Defined in

main.ts:108114

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

main.ts:108127

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

main.ts:108166

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:108159
