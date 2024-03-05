[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo

# Interface: IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../classes/DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#app_id)
- [filters](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#filters)
- [language\_code](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#tag)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the apps
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger

#### Defined in

[main.ts:108395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108395)

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

#### Defined in

[main.ts:108442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108442)

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

[main.ts:108431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108431)

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

[main.ts:108422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108422)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:108464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108464)

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

[main.ts:108413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108413)

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

[main.ts:108404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108404)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

[main.ts:108469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108469)

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

#### Defined in

[main.ts:108459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108459)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:108475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108475)
