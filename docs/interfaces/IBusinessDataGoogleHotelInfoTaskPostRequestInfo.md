[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoTaskPostRequestInfo

# Interface: IBusinessDataGoogleHotelInfoTaskPostRequestInfo

## Hierarchy

- [`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md)

  ↳ **`IBusinessDataGoogleHotelInfoTaskPostRequestInfo`**

## Implemented by

- [`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](../classes/BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [adults](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#adults)
- [check\_in](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#check_in)
- [check\_out](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#check_out)
- [children](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#children)
- [currency](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#currency)
- [hotel\_identifier](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#hotel_identifier)
- [keyword](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#language_code)
- [language\_name](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#language_name)
- [location\_code](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#location_name)
- [pingback\_url](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#postback_url)
- [priority](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#priority)
- [tag](IBusinessDataGoogleHotelInfoTaskPostRequestInfo.md#tag)

## Properties

### adults

• `Optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Defined in

main.ts:200421

___

### check\_in

• `Optional` **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:200401

___

### check\_out

• `Optional` **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:200410

___

### children

• `Optional` **children**: `string`[]

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8]

#### Defined in

main.ts:200429

___

### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Defined in

main.ts:200415

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels_pack element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

#### Defined in

main.ts:200393

___

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[keyword](IBusinessDataTaskRequestInfo.md#keyword)

#### Defined in

main.ts:188709

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[language_code](IBusinessDataTaskRequestInfo.md#language_code)

#### Defined in

main.ts:188754

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[language_name](IBusinessDataTaskRequestInfo.md#language_name)

#### Defined in

main.ts:188747

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[location_code](IBusinessDataTaskRequestInfo.md#location_code)

#### Defined in

main.ts:188731

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[location_coordinate](IBusinessDataTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:188740

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[location_name](IBusinessDataTaskRequestInfo.md#location_name)

#### Defined in

main.ts:188724

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[pingback_url](IBusinessDataTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:188780

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Defined in

main.ts:200435

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[postback_url](IBusinessDataTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:188770

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[priority](IBusinessDataTaskRequestInfo.md#priority)

#### Defined in

main.ts:188717

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[tag](IBusinessDataTaskRequestInfo.md#tag)

#### Defined in

main.ts:188760
