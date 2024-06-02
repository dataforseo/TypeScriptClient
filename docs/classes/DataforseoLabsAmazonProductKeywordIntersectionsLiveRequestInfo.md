**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo(data)

> **new DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Source

main.ts:105182

## Properties

### asins?

> **`optional`** **asins**: `Object`

asins of target products
required field
product IDs of the products for which you need to find keyword intersections;
specify the ASINs as in the following example:
"asins": \{
"1": "019005476X",
"2": "0190074442"
\}
the maximum number of ASINs you can specify in this object is 20;
learn more about the parameter on this help center page

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`asins`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#asins)

#### Source

main.ts:105099

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["avg_position","<", 10]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#filters)

#### Source

main.ts:105151

***

### intersection\_mode?

> **`optional`** **intersection\_mode**: `string`

mode for finding asin intersections
optional field
possible values: union, intersect;
default value: intersect;
learn more about the parameter in this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`intersection_mode`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#intersection_mode)

#### Source

main.ts:105140

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_code)

#### Source

main.ts:105129

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_name)

#### Source

main.ts:105122

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#limit)

#### Source

main.ts:105134

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_code)

#### Source

main.ts:105115

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_name)

#### Source

main.ts:105107

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#offset)

#### Source

main.ts:105172

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["sum_position,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["intersections,desc","avg_position,asc"]
default rule:
["intersections,desc"]

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#order_by)

#### Source

main.ts:105167

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#tag)

#### Source

main.ts:105178

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:105191

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:105232

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Source

main.ts:105225
