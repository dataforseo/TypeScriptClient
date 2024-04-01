[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppIntersectionLiveRequestInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#constructor)

### Properties

- [app\_ids](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#app_ids)
- [filters](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#filters)
- [language\_code](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppIntersectionLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleAppIntersectionLiveRequestInfo`](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveRequestInfo`](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:112064

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the target apps
required field
IDs of the target mobile applications on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger;;
the ids should be specified the following way:
"app_ids": {
"1": "org.telegram.messenger",
"2": "com.zhiliaoapp.musically"
}
if you specify a single ID here, the API will return results only for one application;
the maximum number of app IDs you can specify in this object is 20

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[app_ids](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#app_ids)

#### Defined in

main.ts:111980

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

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#filters)

#### Defined in

main.ts:112027

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

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#language_code)

#### Defined in

main.ts:112016

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

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#language_name)

#### Defined in

main.ts:112007

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#limit)

#### Defined in

main.ts:112049

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

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#location_code)

#### Defined in

main.ts:111998

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

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#location_name)

#### Defined in

main.ts:111989

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#offset)

#### Defined in

main.ts:112054

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

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#order_by)

#### Defined in

main.ts:112044

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveRequestInfo.md#tag)

#### Defined in

main.ts:112060

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

main.ts:112073

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

main.ts:112113

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveRequestInfo`](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveRequestInfo`](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:112106
