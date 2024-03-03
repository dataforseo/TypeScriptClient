[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTripadvisorSearchTaskPostRequestInfo

# Interface: IBusinessDataTripadvisorSearchTaskPostRequestInfo

## Implemented by

- [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](../classes/BusinessDataTripadvisorSearchTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#depth)
- [keyword](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#keyword)
- [location\_code](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#location_code)
- [location\_name](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#location_name)
- [pingback\_url](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#postback_url)
- [priority](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#priority)
- [tag](IBusinessDataTripadvisorSearchTaskPostRequestInfo.md#tag)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of search results to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of thirty because our systems processes thirty search results in a row;
default value: 30;
maximum value: 210

#### Defined in

main.ts:201163

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
the keyword you specify should indicate a business category, company name, or a prominent place;
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Defined in

main.ts:201136

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

#### Defined in

main.ts:201148

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:201142

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

main.ts:201189

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

main.ts:201179

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

main.ts:201156

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:201169
