**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppIntersectionLiveRequestInfo

# Class: DataforseoLabsAppleAppIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppIntersectionLiveRequestInfo(data)

> **new DataforseoLabsAppleAppIntersectionLiveRequestInfo**(`data`?): [`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Source

main.ts:115442

## Properties

### app\_ids?

> **`optional`** **app\_ids**: `Object`

ids of the target apps
required field
IDs of the target mobile applications on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320;
the ids should be specified the following way:
"app_ids": \{
"1": "686449807",
"2": "382617920"
\}
if you specify a single ID here, the API will return results only for one application;
the maximum number of app IDs you can specify in this object is 20

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`app_ids`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#app_ids)

#### Source

main.ts:115358

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, `<=, >`, >=, =, `<>`, in, not_in
example:
["keyword_data.keyword_info.search_volume",">`",500]
[["keyword_data.keyword_info.search_volume","`<>`",500],"and",[intersection_result.382617920.rank_group",">`=","10"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#filters)

#### Source

main.ts:115405

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#language_code)

#### Source

main.ts:115394

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#language_name)

#### Source

main.ts:115385

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#limit)

#### Source

main.ts:115427

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#location_code)

#### Source

main.ts:115376

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#location_name)

#### Source

main.ts:115367

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#offset)

#### Source

main.ts:115432

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#order_by)

#### Source

main.ts:115422

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveRequestInfo.md#tag)

#### Source

main.ts:115438

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:115451

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:115491

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)

#### Source

main.ts:115484
