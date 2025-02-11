[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoTaskPostRequestInfo

# Interface: IBusinessDataGoogleHotelInfoTaskPostRequestInfo

Defined in: main.ts:219057

## Indexable

\[`key`: `string`\]: `any`

## Properties

### adults?

> `optional` **adults**: `number`

Defined in: main.ts:219146

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

***

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:219126

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:219135

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### children?

> `optional` **children**: `string`[]

Defined in: main.ts:219154

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8]

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:219140

currency
optional field
example:
"USD"

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:219065

unique hotel identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels_pack element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:219073

keyword
required field if you don’t specify hotel_identifier
if you use this field, you don’t need to specify hotel_identifier
the keyword you specify should indicate the name of the hotel entity
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:219118

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:219111

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:219095

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:219104

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:219088

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:219189

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified;
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable;
we will set the necessary values before sending the request;
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:219177

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:219171

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified;
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request;
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:219081

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:219160

user-defined task identifier
optional field
the character limit is 255;
you can use this parameter to identify the task and match it with the result;
you will find the specified tag value in the data object of the response
