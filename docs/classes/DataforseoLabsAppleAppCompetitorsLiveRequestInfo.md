[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppCompetitorsLiveRequestInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#constructor)

### Properties

- [app\_id](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#app_id)
- [filters](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#filters)
- [language\_code](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppCompetitorsLiveRequestInfo**(`data?`): [`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:111199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111199)

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

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[app_id](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#app_id)

#### Defined in

[main.ts:111112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111112)

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
["intersections",">",500]
[["competitor_metrics.app_store_search_organic.pos_1","<>",10],"and",["avg_position",">=","10"]]
[[["intersections",">=",50],"and",["competitor_metrics.app_store_search_organic.pos_1","in",[1,5]]],
"or",
["sum_position",">=","10000"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#filters)

#### Defined in

[main.ts:111162](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111162)

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

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:111148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111148)

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

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:111139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111139)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#limit)

#### Defined in

[main.ts:111184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111184)

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

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:111130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111130)

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

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:111121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111121)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten apps in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#offset)

#### Defined in

[main.ts:111189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111189)

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
["intersections,asc"]
Note: you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
["intersections,desc","sum_position,asc"]
default rule:
["intersections,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:111179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111179)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:111195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111195)

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

[main.ts:111208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111208)

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

[main.ts:111242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111242)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:111235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111235)
