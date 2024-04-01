[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleKeywordsForAppLiveRequestInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#constructor)

### Properties

- [app\_id](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#app_id)
- [filters](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#filters)
- [language\_code](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleKeywordsForAppLiveRequestInfo**(`data?`): [`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

#### Defined in

main.ts:112997

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app
required field
ID of the mobile application on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[app_id](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#app_id)

#### Defined in

main.ts:112913

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in
example:
["keyword_data.keyword_info.search_volume",">",500]
[["keyword_data.keyword_info.search_volume","<>",500],"and",["ranked_serp_element.serp_item.rank_group",">=","10"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#filters)

#### Defined in

main.ts:112960

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#language_code)

#### Defined in

main.ts:112949

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#language_name)

#### Defined in

main.ts:112940

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#limit)

#### Defined in

main.ts:112982

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

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#location_code)

#### Defined in

main.ts:112931

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

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#location_name)

#### Defined in

main.ts:112922

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#offset)

#### Defined in

main.ts:112987

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results;
possible sorting types:
asc – results will be sorted in the ascending order;
desc – results will be sorted in the descending order;
you should use a comma to specify a sorting type;
example:
["ranked_serp_element.serp_item.rank_group,asc"]
Note: you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
["ranked_serp_element.serp_item.rank_group,desc","keyword_data.keyword_info.search_volume,asc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#order_by)

#### Defined in

main.ts:112977

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveRequestInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#tag)

#### Defined in

main.ts:112993

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

main.ts:113006

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

main.ts:113040

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

#### Defined in

main.ts:113033
