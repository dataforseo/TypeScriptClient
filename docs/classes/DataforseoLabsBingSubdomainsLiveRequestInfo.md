[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingSubdomainsLiveRequestInfo

# Class: DataforseoLabsBingSubdomainsLiveRequestInfo

Defined in: main.ts:120430

## Implements

- [`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSubdomainsLiveRequestInfo()

> **new DataforseoLabsBingSubdomainsLiveRequestInfo**(`data`?): [`DataforseoLabsBingSubdomainsLiveRequestInfo`](DataforseoLabsBingSubdomainsLiveRequestInfo.md)

Defined in: main.ts:120547

#### Parameters

##### data?

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingSubdomainsLiveRequestInfo`](DataforseoLabsBingSubdomainsLiveRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:120510

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.paid.count",">",0]
[["metrics.paid.count",">",0],"and",["metrics.paid.etv",">","50"]]
[["metrics.organic.count",">","10"],
"and",
[["metrics.organic.pos_1","<>",0],"or",["metrics.organic.pos_2_3","<>",0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#filters)

***

### historical\_serp\_mode?

> `optional` **historical\_serp\_mode**: `string`

Defined in: main.ts:120491

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`historical_serp_mode`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#historical_serp_mode)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:120496

ignore highly similar keywords
optional field
if set to true, only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#ignore_synonyms)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:120482

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120473

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:120464

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:120532

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120455

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:120445

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:120537

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:120527

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

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:120543

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:120435

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsBingSubdomainsLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:120556

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:120597

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingSubdomainsLiveRequestInfo`](DataforseoLabsBingSubdomainsLiveRequestInfo.md)

Defined in: main.ts:120590

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingSubdomainsLiveRequestInfo`](DataforseoLabsBingSubdomainsLiveRequestInfo.md)
