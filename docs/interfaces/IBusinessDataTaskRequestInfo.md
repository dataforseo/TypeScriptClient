[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataTaskRequestInfo

# Interface: IBusinessDataTaskRequestInfo

## Hierarchy

- **`IBusinessDataTaskRequestInfo`**
  
  ↳ [`IBusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](IBusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)
  
  ↳ [`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)
  
  ↳ [`IBusinessDataGoogleHotelInfoTaskPostRequestInfo`](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md)
  
  ↳ [`IBusinessDataGoogleReviewsTaskPostRequestInfo`](IBusinessDataGoogleReviewsTaskPostRequestInfo.md)

## Implemented by

- [`BusinessDataTaskRequestInfo`](../classes/BusinessDataTaskRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keyword](IBusinessDataTaskRequestInfo.md#keyword)
- [language\_code](IBusinessDataTaskRequestInfo.md#language_code)
- [language\_name](IBusinessDataTaskRequestInfo.md#language_name)
- [location\_code](IBusinessDataTaskRequestInfo.md#location_code)
- [location\_coordinate](IBusinessDataTaskRequestInfo.md#location_coordinate)
- [location\_name](IBusinessDataTaskRequestInfo.md#location_name)
- [pingback\_url](IBusinessDataTaskRequestInfo.md#pingback_url)
- [postback\_url](IBusinessDataTaskRequestInfo.md#postback_url)
- [priority](IBusinessDataTaskRequestInfo.md#priority)
- [tag](IBusinessDataTaskRequestInfo.md#tag)

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword
required field
the keyword you specify should indicate the name of the local establishment
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
this field can also be used to pass the following parameters:
cid – a unique, google-defined id of the business entity;
place_id – an identifier of the business entity in Google Maps;
spp – a unique identifier of local services featured in the local_pack element of Google SERP
example:
cid:194604053573767737
place_id:GhIJQWDl0CIeQUARxks3icF8U8A
spp:CgsvZy8xdGN4cWRraBoUChIJPZDrEzLsZIgRoNrpodC5P30
learn more about the cid and place_id identifiers in this help center article

#### Defined in

[main.ts:183256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183256)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Defined in

[main.ts:183301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183301)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Defined in

[main.ts:183294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183294)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Defined in

[main.ts:183278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183278)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Defined in

[main.ts:183287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183287)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Defined in

[main.ts:183271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183271)

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

[main.ts:183327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183327)

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

[main.ts:183317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183317)

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

[main.ts:183264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183264)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:183307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183307)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")