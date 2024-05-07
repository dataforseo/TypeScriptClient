**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo(data)

> **new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Source

main.ts:86592

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
["metrics.organic.pos_1,">`",0]
[["metrics.organic.count",">=",100],
"and",
["metrics.organic.impressions_etv","in",[10,100]]]
[[["metrics.organic.count",">=",100],"and",["metrics.organic.pos_1",">",0]],
"or",
["metrics.organic.impressions_etv","in",[10,100]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#filters)

#### Source

main.ts:86555

***

### include\_subcategories?

> **`optional`** **include\_subcategories**: `boolean`

indicates if the subcategories will be included in the search
optional field
if set to false, the subcategories will be ignored
default value: false
learn more about the parameter in this help center article

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`include_subcategories`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#include_subcategories)

#### Source

main.ts:86530

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#item_types)

#### Source

main.ts:86539

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_code)

#### Source

main.ts:86524

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#language_name)

#### Source

main.ts:86516

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned categories
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#limit)

#### Source

main.ts:86577

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_code)

#### Source

main.ts:86508

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#location_name)

#### Source

main.ts:86500

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned categories 
optional field
default value: 0
if you specify the 10 value, the first ten categories in the results array will be omitted and the data will be provided for the successive categories

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#offset)

#### Source

main.ts:86582

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
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#order_by)

#### Source

main.ts:86572

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#tag)

#### Source

main.ts:86588

***

### target?

> **`optional`** **target**: `string`

domain or subdomain
required field
the domain or subdomain name of the target website
the domain or subdomain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md#target)

#### Source

main.ts:86492

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:86601

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:86641

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)

#### Source

main.ts:86634
