[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo

# Interface: IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleAppCompetitorsLiveRequestInfo`](../classes/DataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#app_id)
- [filters](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#filters)
- [language\_code](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md#tag)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger

#### Defined in

[main.ts:109146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109146)

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
[["competitor_metrics.google_play_search_organic.pos_1","<>",10],"and",["avg_position",">=","10"]]
[[["intersections",">=",50],"and",["competitor_metrics.google_play_search_organic.pos_1","in",[1,5]]],
"or",
["sum_position",">=","10000"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

[main.ts:109196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109196)

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

#### Defined in

[main.ts:109182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109182)

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

#### Defined in

[main.ts:109173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109173)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:109218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109218)

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

#### Defined in

[main.ts:109164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109164)

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

#### Defined in

[main.ts:109155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109155)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten apps in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

[main.ts:109223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109223)

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

#### Defined in

[main.ts:109213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109213)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:109229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109229)
