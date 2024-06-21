**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTaskPostRequestInfo

# Class: BusinessDataGoogleHotelSearchesTaskPostRequestInfo

## Extends

- [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTaskPostRequestInfo(data)

> **new BusinessDataGoogleHotelSearchesTaskPostRequestInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`constructor`](BusinessDataTaskRequestInfo.md#constructors)

#### Source

main.ts:202478

## Properties

### adults?

> **`optional`** **adults**: `number`

number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`adults`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#adults)

#### Source

main.ts:202391

***

### amenities?

> **`optional`** **amenities**: `string`[]

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

#### Source

main.ts:202474

***

### check\_in?

> **`optional`** **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot precede the today’s date

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`check_in`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_in)

#### Source

main.ts:202370

***

### check\_out?

> **`optional`** **check\_out**: `string`

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

#### Source

main.ts:202379

***

### children?

> **`optional`** **children**: `string`[]

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

#### Source

main.ts:202401

***

### currency?

> **`optional`** **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`currency`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#currency)

#### Source

main.ts:202384

***

### depth?

> **`optional`** **depth**: `number`

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

#### Source

main.ts:202362

***

### free\_cancellation?

> **`optional`** **free\_cancellation**: `boolean`

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`free_cancellation`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#free_cancellation)

#### Source

main.ts:202440

***

### is\_vacation\_rentals?

> **`optional`** **is\_vacation\_rentals**: `boolean`

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`is_vacation_rentals`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#is_vacation_rentals)

#### Source

main.ts:202445

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

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#keyword)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`keyword`](BusinessDataTaskRequestInfo.md#keyword)

#### Source

main.ts:192438

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_code)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`language_code`](BusinessDataTaskRequestInfo.md#language_code)

#### Source

main.ts:192484

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_name)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`language_name`](BusinessDataTaskRequestInfo.md#language_name)

#### Source

main.ts:192477

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_code)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_code`](BusinessDataTaskRequestInfo.md#location_code)

#### Source

main.ts:192460

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

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_coordinate`](BusinessDataTaskRequestInfo.md#location_coordinate)

#### Source

main.ts:192470

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_name)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`location_name`](BusinessDataTaskRequestInfo.md#location_name)

#### Source

main.ts:192453

***

### max\_price?

> **`optional`** **max\_price**: `number`

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`max_price`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#max_price)

#### Source

main.ts:202435

***

### min\_price?

> **`optional`** **min\_price**: `number`

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`min_price`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_price)

#### Source

main.ts:202429

***

### min\_rating?

> **`optional`** **min\_rating**: `number`

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`min_rating`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_rating)

#### Source

main.ts:202413

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

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`pingback_url`](BusinessDataTaskRequestInfo.md#pingback_url)

#### Source

main.ts:192510

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

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#postback_url)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`postback_url`](BusinessDataTaskRequestInfo.md#postback_url)

#### Source

main.ts:192500

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

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#priority)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`priority`](BusinessDataTaskRequestInfo.md#priority)

#### Source

main.ts:192446

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

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

#### Source

main.ts:202423

***

### stars?

> **`optional`** **stars**: `string`[]

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#stars)

#### Source

main.ts:202407

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#tag)

#### Inherited from

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`tag`](BusinessDataTaskRequestInfo.md#tag)

#### Source

main.ts:192490

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`init`](BusinessDataTaskRequestInfo.md#init)

#### Source

main.ts:202482

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`toJSON`](BusinessDataTaskRequestInfo.md#tojson)

#### Source

main.ts:202525

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Overrides

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md).[`fromJS`](BusinessDataTaskRequestInfo.md#fromjs)

#### Source

main.ts:202518
