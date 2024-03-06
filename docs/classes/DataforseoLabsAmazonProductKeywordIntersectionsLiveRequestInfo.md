[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#constructor)

### Properties

- [asins](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#asins)
- [filters](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#filters)
- [intersection\_mode](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#intersection_mode)
- [language\_code](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo**(`data?`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Defined in

[main.ts:101614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101614)

## Properties

### asins

• `Optional` **asins**: `Object`

asins of target products
required field
product IDs of the products for which you need to find keyword intersections;
specify the ASINs as in the following example:
"asins": {
"1": "019005476X",
"2": "0190074442"
}
the maximum number of ASINs you can specify in this object is 20;
learn more about the parameter on this help center page

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[asins](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#asins)

#### Defined in

[main.ts:101531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101531)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["avg_position","<", 10]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#filters)

#### Defined in

[main.ts:101583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101583)

___


### intersection\_mode

• `Optional` **intersection\_mode**: `string`

mode for finding asin intersections
optional field
possible values: union, intersect;
default value: intersect;
learn more about the parameter in this help center guide

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[intersection_mode](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#intersection_mode)

#### Defined in

[main.ts:101572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101572)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:101561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101561)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:101554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101554)

___


### limit

• `Optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#limit)

#### Defined in

[main.ts:101566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101566)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:101547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101547)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United Kingdom

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:101539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101539)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#offset)

#### Defined in

[main.ts:101604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101604)

___


### order\_by

• `Optional` **order\_by**: `string`[]

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:101599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101599)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:101610](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101610)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:101623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101623)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:101664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101664)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

#### Defined in

[main.ts:101657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101657)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")