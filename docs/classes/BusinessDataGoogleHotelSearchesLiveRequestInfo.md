[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesLiveRequestInfo

# Class: BusinessDataGoogleHotelSearchesLiveRequestInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#constructor)

### Properties

- [adults](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#adults)
- [amenities](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#amenities)
- [check\_in](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_in)
- [check\_out](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_out)
- [children](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#children)
- [currency](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#currency)
- [depth](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#depth)
- [free\_cancellation](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#free_cancellation)
- [is\_vacation\_rentals](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#is_vacation_rentals)
- [keyword](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#keyword)
- [language\_code](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_code)
- [language\_name](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_name)
- [location\_code](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_code)
- [location\_coordinate](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_coordinate)
- [location\_name](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_name)
- [max\_price](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#max_price)
- [min\_price](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_price)
- [min\_rating](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_rating)
- [sort\_by](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#sort_by)
- [stars](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#stars)
- [tag](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#tag)

### Methods

- [init](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesLiveRequestInfo**(`data?`): [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesLiveRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

#### Defined in

main.ts:194438

## Properties

### adults

• `Optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[adults](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#adults)

#### Defined in

main.ts:194345

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[amenities](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#amenities)

#### Defined in

main.ts:194428

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[check_in](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_in)

#### Defined in

main.ts:194324

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[check_out](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#check_out)

#### Defined in

main.ts:194333

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[children](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#children)

#### Defined in

main.ts:194355

___

### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[currency](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#currency)

#### Defined in

main.ts:194338

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[depth](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#depth)

#### Defined in

main.ts:194316

___

### free\_cancellation

• `Optional` **free\_cancellation**: `boolean`

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[free_cancellation](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#free_cancellation)

#### Defined in

main.ts:194394

___

### is\_vacation\_rentals

• `Optional` **is\_vacation\_rentals**: `boolean`

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[is_vacation_rentals](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#is_vacation_rentals)

#### Defined in

main.ts:194399

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[keyword](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#keyword)

#### Defined in

main.ts:194269

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_code)

#### Defined in

main.ts:194307

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[language_name](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#language_name)

#### Defined in

main.ts:194300

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_code)

#### Defined in

main.ts:194284

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:194293

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[location_name](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#location_name)

#### Defined in

main.ts:194277

___

### max\_price

• `Optional` **max\_price**: `number`

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[max_price](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#max_price)

#### Defined in

main.ts:194389

___

### min\_price

• `Optional` **min\_price**: `number`

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[min_price](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_price)

#### Defined in

main.ts:194383

___

### min\_rating

• `Optional` **min\_rating**: `number`

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[min_rating](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#min_rating)

#### Defined in

main.ts:194367

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[sort_by](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#sort_by)

#### Defined in

main.ts:194377

___

### stars

• `Optional` **stars**: `string`[]

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[stars](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#stars)

#### Defined in

main.ts:194361

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md).[tag](../interfaces/IBusinessDataGoogleHotelSearchesLiveRequestInfo.md#tag)

#### Defined in

main.ts:194434

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:194447

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:194496

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)

#### Defined in

main.ts:194489
