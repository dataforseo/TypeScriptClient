[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAppleAppCompetitorsLiveRequestInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppCompetitorsLiveRequestInfo()

> **new DataforseoLabsAppleAppCompetitorsLiveRequestInfo**(`data`?): [`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Defined in

main.ts:114937

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app
required field
ID of the mobile application on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#app_id)

#### Defined in

main.ts:114850

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
["intersections",">",500]
[["competitor_metrics.app_store_search_organic.pos_1","<>",10],"and",["avg_position",">=","10"]]
[[["intersections",">=",50],"and",["competitor_metrics.app_store_search_organic.pos_1","in",[1,5]]],
"or",
["sum_position",">=","10000"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#filters)

#### Defined in

main.ts:114900

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

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:114886

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

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:114877

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned apps
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#limit)

#### Defined in

main.ts:114922

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

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:114868

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

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:114859

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned apps
optional field
default value: 0
if you specify the 10 value, the first ten apps in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#offset)

#### Defined in

main.ts:114927

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
["intersections,asc"]
Note: you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
["intersections,desc","sum_position,asc"]
default rule:
["intersections,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#order_by)

#### Defined in

main.ts:114917

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveRequestInfo.md#tag)

#### Defined in

main.ts:114933

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:114946

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:114980

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)

#### Defined in

main.ts:114973
