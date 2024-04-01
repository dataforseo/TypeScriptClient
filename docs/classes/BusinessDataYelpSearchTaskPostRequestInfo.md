[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTaskPostRequestInfo

# Class: BusinessDataYelpSearchTaskPostRequestInfo

## Implements

- [`IBusinessDataYelpSearchTaskPostRequestInfo`](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTaskPostRequestInfo.md#constructor)

### Properties

- [depth](BusinessDataYelpSearchTaskPostRequestInfo.md#depth)
- [keyword](BusinessDataYelpSearchTaskPostRequestInfo.md#keyword)
- [language\_code](BusinessDataYelpSearchTaskPostRequestInfo.md#language_code)
- [language\_name](BusinessDataYelpSearchTaskPostRequestInfo.md#language_name)
- [location\_code](BusinessDataYelpSearchTaskPostRequestInfo.md#location_code)
- [location\_name](BusinessDataYelpSearchTaskPostRequestInfo.md#location_name)
- [pingback\_url](BusinessDataYelpSearchTaskPostRequestInfo.md#pingback_url)
- [postback\_url](BusinessDataYelpSearchTaskPostRequestInfo.md#postback_url)
- [priority](BusinessDataYelpSearchTaskPostRequestInfo.md#priority)
- [sort\_by](BusinessDataYelpSearchTaskPostRequestInfo.md#sort_by)
- [tag](BusinessDataYelpSearchTaskPostRequestInfo.md#tag)

### Methods

- [init](BusinessDataYelpSearchTaskPostRequestInfo.md#init)
- [toJSON](BusinessDataYelpSearchTaskPostRequestInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTaskPostRequestInfo**(`data?`): [`BusinessDataYelpSearchTaskPostRequestInfo`](BusinessDataYelpSearchTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTaskPostRequestInfo`](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md) |

#### Returns

[`BusinessDataYelpSearchTaskPostRequestInfo`](BusinessDataYelpSearchTaskPostRequestInfo.md)

#### Defined in

main.ts:208884

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10
maximal value: 70

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[depth](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:208845

___

### keyword

• `Optional` **keyword**: `string`

search query
optional field
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”
Note: if the keyword is not specified, the results will be returned based on the location alone

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[keyword](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:208802

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
en

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[language_code](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:208838

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
English

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[language_name](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:208831

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
9061121

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[location_code](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:208824

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
West Los Angeles,California,United States

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[location_name](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:208817

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[pingback_url](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:208880

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[postback_url](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:208870

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[priority](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:208810

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
recommended – sort by Yelp recommendation
rating – sort by highest rating
reviews_count – sort by the highest count of reviews
default value: recommended

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[sort_by](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:208854

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataYelpSearchTaskPostRequestInfo](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md).[tag](../interfaces/IBusinessDataYelpSearchTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:208860

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

main.ts:208893

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

main.ts:208920

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTaskPostRequestInfo`](BusinessDataYelpSearchTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTaskPostRequestInfo`](BusinessDataYelpSearchTaskPostRequestInfo.md)

#### Defined in

main.ts:208913
