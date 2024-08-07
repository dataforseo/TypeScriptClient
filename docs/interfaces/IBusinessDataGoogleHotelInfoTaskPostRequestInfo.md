**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoTaskPostRequestInfo

# Interface: IBusinessDataGoogleHotelInfoTaskPostRequestInfo

## Extends

- [`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### adults?

> **`optional`** **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Source

main.ts:208029

***

### check\_in?

> **`optional`** **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:208009

***

### check\_out?

> **`optional`** **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Source

main.ts:208018

***

### children?

> **`optional`** **children**: `string`[]

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8]

#### Source

main.ts:208037

***

### currency?

> **`optional`** **currency**: `string`

currency
optional field
example:
"USD"

#### Source

main.ts:208023

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique hotel identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels_pack element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

#### Source

main.ts:208001

***

### keyword?

> **`optional`** **keyword**: `string`

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

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`keyword`](IBusinessDataTaskRequestInfo.md#keyword)

#### Source

main.ts:195708

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`language_code`](IBusinessDataTaskRequestInfo.md#language_code)

#### Source

main.ts:195754

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`language_name`](IBusinessDataTaskRequestInfo.md#language_name)

#### Source

main.ts:195747

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`location_code`](IBusinessDataTaskRequestInfo.md#location_code)

#### Source

main.ts:195730

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`location_coordinate`](IBusinessDataTaskRequestInfo.md#location_coordinate)

#### Source

main.ts:195740

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`location_name`](IBusinessDataTaskRequestInfo.md#location_name)

#### Source

main.ts:195723

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

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

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`pingback_url`](IBusinessDataTaskRequestInfo.md#pingback_url)

#### Source

main.ts:195780

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Source

main.ts:208043

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

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

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`postback_url`](IBusinessDataTaskRequestInfo.md#postback_url)

#### Source

main.ts:195770

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`priority`](IBusinessDataTaskRequestInfo.md#priority)

#### Source

main.ts:195716

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Inherited from

[`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md).[`tag`](IBusinessDataTaskRequestInfo.md#tag)

#### Source

main.ts:195760
