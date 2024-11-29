[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveRequestInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveRequestInfo()

> **new DataforseoLabsGoogleKeywordsForAppLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

#### Defined in

main.ts:121302

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the apps
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`app_id`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#app_id)

#### Defined in

main.ts:121218

***

### filters?

> `optional` **filters**: `any`[]

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

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#filters)

#### Defined in

main.ts:121265

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#language_code)

#### Defined in

main.ts:121254

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#language_name)

#### Defined in

main.ts:121245

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#limit)

#### Defined in

main.ts:121287

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#location_code)

#### Defined in

main.ts:121236

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#location_name)

#### Defined in

main.ts:121227

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#offset)

#### Defined in

main.ts:121292

***

### order\_by?

> `optional` **order\_by**: `string`[]

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

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#order_by)

#### Defined in

main.ts:121282

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md#tag)

#### Defined in

main.ts:121298

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:121311

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:121345

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)

#### Defined in

main.ts:121338
