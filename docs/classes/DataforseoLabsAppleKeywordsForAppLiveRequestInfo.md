[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleKeywordsForAppLiveRequestInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveRequestInfo

Defined in: main.ts:123660

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleKeywordsForAppLiveRequestInfo()

> **new DataforseoLabsAppleKeywordsForAppLiveRequestInfo**(`data`?): [`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

Defined in: main.ts:123752

#### Parameters

##### data?

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:123668

id of the app
required field
ID of the mobile application on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#app_id)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:123715

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

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#filters)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123704

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:123695

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:123737

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123686

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:123677

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:123742

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:123732

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

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:123748

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveRequestInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123761

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123795

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)

Defined in: main.ts:123788

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)
