[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppIntersectionLiveRequestInfo

# Class: DataforseoLabsAppleAppIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#constructor)

### Properties

- [app\_ids](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#app_ids)
- [filters](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#filters)
- [language\_code](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppIntersectionLiveRequestInfo**(`data?`): [`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:111963

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the target apps
required field
IDs of the target mobile applications on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320;
the ids should be specified the following way:
"app_ids": {
"1": "686449807",
"2": "382617920"
}
if you specify a single ID here, the API will return results only for one application;
the maximum number of app IDs you can specify in this object is 20

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[app_ids](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#app_ids)

#### Defined in

main.ts:111879

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
[["keyword_data.keyword_info.search_volume","<>",500],"and",[intersection_result.382617920.rank_group",">=","10"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#filters)

#### Defined in

main.ts:111926

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

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#language_code)

#### Defined in

main.ts:111915

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

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#language_name)

#### Defined in

main.ts:111906

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#limit)

#### Defined in

main.ts:111948

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

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#location_code)

#### Defined in

main.ts:111897

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

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#location_name)

#### Defined in

main.ts:111888

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#offset)

#### Defined in

main.ts:111953

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
["intersection_result.382617920.rank_absolute,asc"]
Note: you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
["intersection_result.382617920.rank_absolute,desc","keyword_data.keyword_info.search_volume,asc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#order_by)

#### Defined in

main.ts:111943

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#tag)

#### Defined in

main.ts:111959

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

main.ts:111972

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

main.ts:112012

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:112005
