[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesLiveRequestInfo

# Class: BusinessDataGoogleHotelSearchesLiveRequestInfo

Defined in: main.ts:218166

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesLiveRequestInfo()

> **new BusinessDataGoogleHotelSearchesLiveRequestInfo**(`data`?): [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

Defined in: main.ts:218345

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

## Properties

### adults?

> `optional` **adults**: `number`

Defined in: main.ts:218252

number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`adults`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#adults)

***

### amenities?

> `optional` **amenities**: `string`[]

Defined in: main.ts:218335

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

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`amenities`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#amenities)

***

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:218231

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot precede the today’s date

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`check_in`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_in)

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:218240

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`check_out`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_out)

***

### children?

> `optional` **children**: `string`[]

Defined in: main.ts:218262

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

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`children`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#children)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:218245

currency
optional field
example:
"USD"

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`currency`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#currency)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:218223

parsing depth
optional field
number of results in Google Hotels
default value: 20 organic results
max value: 140
Note: your account will be billed per each 20 organic results regardless of paid listings in the response;
thus, setting a depth above 20 may result in additional charges if Google Hotels return more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`depth`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#depth)

***

### free\_cancellation?

> `optional` **free\_cancellation**: `boolean`

Defined in: main.ts:218301

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`free_cancellation`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#free_cancellation)

***

### is\_vacation\_rentals?

> `optional` **is\_vacation\_rentals**: `boolean`

Defined in: main.ts:218306

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`is_vacation_rentals`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#is_vacation_rentals)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:218176

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

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:218214

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:218207

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:218191

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:218200

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement
example:
53.476225,-2.243572

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:218184

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom
Note: in order to obtain accurate search results, the location_name you specify will be automatically appended to the keyword

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_name)

***

### max\_price?

> `optional` **max\_price**: `number`

Defined in: main.ts:218296

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`max_price`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#max_price)

***

### min\_price?

> `optional` **min\_price**: `number`

Defined in: main.ts:218290

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`min_price`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_price)

***

### min\_rating?

> `optional` **min\_rating**: `number`

Defined in: main.ts:218274

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`min_rating`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_rating)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:218284

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

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#sort_by)

***

### stars?

> `optional` **stars**: `string`[]

Defined in: main.ts:218268

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#stars)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:218341

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:218354

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:218403

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

Defined in: main.ts:218396

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)
