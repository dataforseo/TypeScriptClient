[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelSearchesLiveRequestInfo

# Interface: IBusinessDataGoogleHotelSearchesLiveRequestInfo

## Implemented by

- [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](../classes/BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [adults](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#adults)
- [amenities](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#amenities)
- [check\_in](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_in)
- [check\_out](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_out)
- [children](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#children)
- [currency](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#currency)
- [depth](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#depth)
- [free\_cancellation](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#free_cancellation)
- [is\_vacation\_rentals](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#is_vacation_rentals)
- [keyword](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_code)
- [language\_name](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_name)
- [location\_code](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_code)
- [location\_coordinate](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_coordinate)
- [location\_name](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_name)
- [max\_price](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#max_price)
- [min\_price](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_price)
- [min\_rating](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_rating)
- [sort\_by](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#sort_by)
- [stars](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#stars)
- [tag](IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#tag)

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

[main.ts:194504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194504)

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

[main.ts:194587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194587)

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

[main.ts:194483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194483)

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

[main.ts:194492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194492)

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

[main.ts:194514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194514)

___

### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Defined in

[main.ts:194497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194497)

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

[main.ts:194475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194475)

___

### free\_cancellation

• `Optional` **free\_cancellation**: `boolean`

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Defined in

[main.ts:194553](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194553)

___

### is\_vacation\_rentals

• `Optional` **is\_vacation\_rentals**: `boolean`

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Defined in

[main.ts:194558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194558)

___

### keyword

• `Optional` **keyword**: `string`

keyword
optional field
the keyword you specify is used to search for the list of hotels;
if you don’t use this field, we will return the list of hotels found in a specified location;
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
Note: in order to obtain accurate search results, the location name is appended to the keyword automatically

#### Defined in

[main.ts:194428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194428)

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

[main.ts:194466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194466)

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

[main.ts:194459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194459)

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

[main.ts:194443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194443)

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement
example:
53.476225,-2.243572

#### Defined in

[main.ts:194452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194452)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom
Note: in order to obtain accurate search results, the location_name you specify will be automatically appended to the keyword

#### Defined in

[main.ts:194436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194436)

___

### max\_price

• `Optional` **max\_price**: `number`

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Defined in

[main.ts:194548](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194548)

___

### min\_price

• `Optional` **min\_price**: `number`

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Defined in

[main.ts:194542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194542)

___

### min\_rating

• `Optional` **min\_rating**: `number`

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Defined in

[main.ts:194526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194526)

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

[main.ts:194536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194536)

___

### stars

• `Optional` **stars**: `string`[]

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Defined in

[main.ts:194520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194520)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:194593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194593)
