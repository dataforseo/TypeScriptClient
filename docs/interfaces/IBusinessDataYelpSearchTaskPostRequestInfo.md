[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataYelpSearchTaskPostRequestInfo

# Interface: IBusinessDataYelpSearchTaskPostRequestInfo

## Implemented by

- [`BusinessDataYelpSearchTaskPostRequestInfo`](../classes/BusinessDataYelpSearchTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IBusinessDataYelpSearchTaskPostRequestInfo.md#depth)
- [keyword](IBusinessDataYelpSearchTaskPostRequestInfo.md#keyword)
- [language\_code](IBusinessDataYelpSearchTaskPostRequestInfo.md#language_code)
- [language\_name](IBusinessDataYelpSearchTaskPostRequestInfo.md#language_name)
- [location\_code](IBusinessDataYelpSearchTaskPostRequestInfo.md#location_code)
- [location\_name](IBusinessDataYelpSearchTaskPostRequestInfo.md#location_name)
- [pingback\_url](IBusinessDataYelpSearchTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IBusinessDataYelpSearchTaskPostRequestInfo.md#postback_url)
- [priority](IBusinessDataYelpSearchTaskPostRequestInfo.md#priority)
- [sort\_by](IBusinessDataYelpSearchTaskPostRequestInfo.md#sort_by)
- [tag](IBusinessDataYelpSearchTaskPostRequestInfo.md#tag)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10
maximal value: 70

#### Defined in

[main.ts:203530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203530)

___

### keyword

• `Optional` **keyword**: `string`

search query
optional field
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”
Note: if the keyword is not specified, the results will be returned based on the location alone

#### Defined in

[main.ts:203487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203487)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
en

#### Defined in

[main.ts:203523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203523)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
English

#### Defined in

[main.ts:203516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203516)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
9061121

#### Defined in

[main.ts:203509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203509)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
West Los Angeles,California,United States

#### Defined in

[main.ts:203502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203502)

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

#### Defined in

[main.ts:203565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203565)

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

#### Defined in

[main.ts:203555](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203555)

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

#### Defined in

[main.ts:203495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203495)

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

#### Defined in

[main.ts:203539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203539)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:203545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203545)
