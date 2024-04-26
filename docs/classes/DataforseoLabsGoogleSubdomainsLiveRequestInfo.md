**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSubdomainsLiveRequestInfo

# Class: DataforseoLabsGoogleSubdomainsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSubdomainsLiveRequestInfo(data)

> **new DataforseoLabsGoogleSubdomainsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleSubdomainsLiveRequestInfo`](DataforseoLabsGoogleSubdomainsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveRequestInfo`](DataforseoLabsGoogleSubdomainsLiveRequestInfo.md)

#### Source

main.ts:92073

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, `<=, >`, >=, =, `<>`, in, not_in
example:
["metrics.paid.count",">`",0]
[["metrics.paid.count",">",0],"and",["metrics.paid.etv",">","50"]]
[["metrics.organic.count",">","10"],
"and",
[["metrics.organic.pos_1","<>",0],"or",["metrics.organic.pos_2_3","<>",0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#filters)

#### Source

main.ts:92036

***

### historical\_serp\_mode?

> **`optional`** **historical\_serp\_mode**: `string`

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`historical_serp_mode`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#historical_serp_mode)

#### Source

main.ts:92022

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#item_types)

#### Source

main.ts:92013

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#language_code)

#### Source

main.ts:92004

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#language_name)

#### Source

main.ts:91995

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#limit)

#### Source

main.ts:92058

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#location_code)

#### Source

main.ts:91986

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#location_name)

#### Source

main.ts:91977

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#offset)

#### Source

main.ts:92063

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#order_by)

#### Source

main.ts:92053

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#tag)

#### Source

main.ts:92069

***

### target?

> **`optional`** **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveRequestInfo.md#target)

#### Source

main.ts:91968

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:92082

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:92122

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveRequestInfo`](DataforseoLabsGoogleSubdomainsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveRequestInfo`](DataforseoLabsGoogleSubdomainsLiveRequestInfo.md)

#### Source

main.ts:92115
