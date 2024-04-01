[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRankedKeywordsLiveRequestInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#constructor)

### Properties

- [asin](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#asin)
- [filters](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#filters)
- [ignore\_synonyms](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#ignore_synonyms)
- [language\_code](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRankedKeywordsLiveRequestInfo**(`data?`): [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:102036

## Properties

### asin

• `Optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[asin](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#asin)

#### Defined in

main.ts:101954

___

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
["keyword_data.keyword_info.search_volume","in",[100,1000]];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#filters)

#### Defined in

main.ts:102005

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[ignore_synonyms](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#ignore_synonyms)

#### Defined in

main.ts:101994

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:101984

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:101977

___

### limit

• `Optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#limit)

#### Defined in

main.ts:101989

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:101970

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:101962

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#offset)

#### Defined in

main.ts:102026

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
["ranked_serp_element.serp_item.rank_group,asc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#order_by)

#### Defined in

main.ts:102021

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#tag)

#### Defined in

main.ts:102032

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

main.ts:102045

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

main.ts:102080

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:102073
