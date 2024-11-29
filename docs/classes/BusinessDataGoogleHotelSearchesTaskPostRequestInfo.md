[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTaskPostRequestInfo

# Class: BusinessDataGoogleHotelSearchesTaskPostRequestInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTaskPostRequestInfo()

> **new BusinessDataGoogleHotelSearchesTaskPostRequestInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Defined in

main.ts:216229

## Properties

### adults?

> `optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`adults`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#adults)

#### Defined in

main.ts:216114

***

### amenities?

> `optional` **amenities**: `string`[]

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

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`amenities`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#amenities)

#### Defined in

main.ts:216197

***

### check\_in?

> `optional` **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot precede the today’s date

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`check_in`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_in)

#### Defined in

main.ts:216093

***

### check\_out?

> `optional` **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`check_out`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_out)

#### Defined in

main.ts:216102

***

### children?

> `optional` **children**: `string`[]

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
age of child can be from 0 to 17;
note that you can specify up to 6 persons including both adults and children
set the following value if you want to include one 14-year-old child:
[14]
set the following value if you want to include one 13-year-old child and one 8-year-old child:
[13,8]

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`children`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#children)

#### Defined in

main.ts:216124

***

### currency?

> `optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`currency`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#currency)

#### Defined in

main.ts:216107

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in Google Hotels
default value: 20 organic results
max value: 140
Note: your account will be billed per each 20 organic results regardless of paid listings in the response;
thus, setting a depth above 20 may result in additional charges if Google Hotels return more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:216085

***

### free\_cancellation?

> `optional` **free\_cancellation**: `boolean`

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`free_cancellation`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#free_cancellation)

#### Defined in

main.ts:216163

***

### is\_vacation\_rentals?

> `optional` **is\_vacation\_rentals**: `boolean`

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`is_vacation_rentals`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#is_vacation_rentals)

#### Defined in

main.ts:216168

***

### keyword?

> `optional` **keyword**: `string`

keyword
optional field
the keyword you specify is used to search for the list of hotels;
if you don’t use this field, we will return the list of hotels found in a specified location;
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
Note: in order to obtain accurate search results, the location name is appended to the keyword automatically
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:216030

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:216076

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:216069

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:216053

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:216062

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom
Note: in order to obtain accurate search results, the location_name you specify will be automatically appended to the keyword

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:216046

***

### max\_price?

> `optional` **max\_price**: `number`

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`max_price`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#max_price)

#### Defined in

main.ts:216158

***

### min\_price?

> `optional` **min\_price**: `number`

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`min_price`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_price)

#### Defined in

main.ts:216152

***

### min\_rating?

> `optional` **min\_rating**: `number`

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`min_rating`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_rating)

#### Defined in

main.ts:216136

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:216225

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:216214

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:216038

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
relevance – sort by most relevant
lowest_price – sort by the lowest price
highest_rating – sort by highest rating
most_reviewed – sort by most reviewed
default value: relevance

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:216146

***

### stars?

> `optional` **stars**: `string`[]

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#stars)

#### Defined in

main.ts:216130

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:216203

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:216238

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:216290

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Defined in

main.ts:216283
