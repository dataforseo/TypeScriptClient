[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelSearchesTaskPostRequestInfo

# Interface: IBusinessDataGoogleHotelSearchesTaskPostRequestInfo

## Hierarchy

- [`IBusinessDataTaskRequestInfo`](IBusinessDataTaskRequestInfo.md)

  ↳ **`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`**

## Implemented by

- [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../classes/BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [adults](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#adults)
- [amenities](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#amenities)
- [check\_in](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_in)
- [check\_out](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_out)
- [children](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#children)
- [currency](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#currency)
- [depth](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#depth)
- [free\_cancellation](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#free_cancellation)
- [is\_vacation\_rentals](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#is_vacation_rentals)
- [keyword](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_code)
- [language\_name](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_name)
- [location\_code](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_name)
- [max\_price](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#max_price)
- [min\_price](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_price)
- [min\_rating](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_rating)
- [pingback\_url](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#postback_url)
- [priority](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#priority)
- [sort\_by](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#sort_by)
- [stars](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#stars)
- [tag](IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#tag)

## Properties

### adults

• `Optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1

#### Defined in

[main.ts:193008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193008)

___

### amenities

• `Optional` **amenities**: `string`[]

hotel amenities
optional field
you can use this field to specify different hotel amenities
example:
  [
            "free_parking",
            "pets_allowed"
        ]

possible values:
"air_conditioning",
"all_inclusive_available",
"bar",
"free_breakfast",
"fitness_center",
"kid_friendly",
"free_parking",
"pets_allowed",
"pool",
"restaurant",
"room_service",
"spa",
"free_wifi",
"parking",
"indoor_pool",
"outdoor_pool",
"wheelchair_accessible",
"beach_access"

#### Defined in

[main.ts:193091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193091)

___

### check\_in

• `Optional` **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot precede the today’s date

#### Defined in

[main.ts:192987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192987)

___

### check\_out

• `Optional` **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days

#### Defined in

[main.ts:192996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192996)

___

### children

• `Optional` **children**: `string`[]

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
age of child can be from 0 to 17;
note that you can specify up to 6 persons including both adults and children
set the following value if you want to include one 14-year-old child:
[14]
set the following value if you want to include one 13-year-old child and one 8-year-old child:
[13,8]

#### Defined in

[main.ts:193018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193018)

___

### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Defined in

[main.ts:193001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193001)

___

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in Google Hotels
default value: 20 organic results
max value: 140
Note: your account will be billed per each 20 organic results regardless of paid listings in the response;
thus, setting a depth above 20 may result in additional charges if Google Hotels return more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

[main.ts:192979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192979)

___

### free\_cancellation

• `Optional` **free\_cancellation**: `boolean`

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Defined in

[main.ts:193057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193057)

___

### is\_vacation\_rentals

• `Optional` **is\_vacation\_rentals**: `boolean`

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Defined in

[main.ts:193062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193062)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[language_code](IBusinessDataTaskRequestInfo.md#language_code)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[language_name](IBusinessDataTaskRequestInfo.md#language_name)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[location_code](IBusinessDataTaskRequestInfo.md#location_code)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[location_coordinate](IBusinessDataTaskRequestInfo.md#location_coordinate)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[location_name](IBusinessDataTaskRequestInfo.md#location_name)

#### Defined in

[main.ts:183271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183271)

___

### max\_price

• `Optional` **max\_price**: `number`

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Defined in

[main.ts:193052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193052)

___

### min\_price

• `Optional` **min\_price**: `number`

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Defined in

[main.ts:193046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193046)

___

### min\_rating

• `Optional` **min\_rating**: `number`

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Defined in

[main.ts:193030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193030)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[postback_url](IBusinessDataTaskRequestInfo.md#postback_url)

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

#### Inherited from

[IBusinessDataTaskRequestInfo](IBusinessDataTaskRequestInfo.md).[priority](IBusinessDataTaskRequestInfo.md#priority)

#### Defined in

[main.ts:183264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183264)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
relevance – sort by most relevant
lowest_price – sort by the lowest price
highest_rating – sort by highest rating
most_reviewed – sort by most reviewed
default value: relevance

#### Defined in

[main.ts:193040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193040)

___

### stars

• `Optional` **stars**: `string`[]

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Defined in

[main.ts:193024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193024)

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

[main.ts:183307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183307)
