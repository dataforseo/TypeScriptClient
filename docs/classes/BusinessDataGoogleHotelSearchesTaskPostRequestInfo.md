[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTaskPostRequestInfo

# Class: BusinessDataGoogleHotelSearchesTaskPostRequestInfo

## Hierarchy

- [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)
  
  ↳ **`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#constructor)

### Properties

- [adults](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#adults)
- [amenities](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#amenities)
- [check\_in](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_in)
- [check\_out](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_out)
- [children](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#children)
- [currency](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#currency)
- [depth](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#depth)
- [free\_cancellation](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#free_cancellation)
- [is\_vacation\_rentals](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#is_vacation_rentals)
- [keyword](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#keyword)
- [language\_code](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_code)
- [language\_name](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_name)
- [location\_code](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_code)
- [location\_coordinate](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_coordinate)
- [location\_name](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_name)
- [max\_price](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#max_price)
- [min\_price](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_price)
- [min\_rating](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_rating)
- [pingback\_url](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#pingback_url)
- [postback\_url](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#postback_url)
- [priority](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#priority)
- [sort\_by](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#sort_by)
- [stars](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#stars)
- [tag](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#tag)

### Methods

- [init](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTaskPostRequestInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTaskPostRequestInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[constructor](BusinessDataTaskRequestInfo.md#constructor)

#### Defined in

[main.ts:192886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192886)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[adults](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#adults)

#### Defined in

[main.ts:192799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192799)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[amenities](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#amenities)

#### Defined in

[main.ts:192882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192882)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[check_in](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_in)

#### Defined in

[main.ts:192778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192778)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[check_out](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#check_out)

#### Defined in

[main.ts:192787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192787)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[children](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#children)

#### Defined in

[main.ts:192809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192809)

___


### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[currency](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#currency)

#### Defined in

[main.ts:192792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192792)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[depth](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:192770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192770)

___


### free\_cancellation

• `Optional` **free\_cancellation**: `boolean`

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[free_cancellation](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#free_cancellation)

#### Defined in

[main.ts:192848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192848)

___


### is\_vacation\_rentals

• `Optional` **is\_vacation\_rentals**: `boolean`

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[is_vacation_rentals](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#is_vacation_rentals)

#### Defined in

[main.ts:192853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192853)

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[keyword](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#keyword)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[keyword](BusinessDataTaskRequestInfo.md#keyword)

#### Defined in

[main.ts:183110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183110)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_code)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[language_code](BusinessDataTaskRequestInfo.md#language_code)

#### Defined in

[main.ts:183155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183155)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[language_name](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#language_name)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[language_name](BusinessDataTaskRequestInfo.md#language_name)

#### Defined in

[main.ts:183148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183148)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_code)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[location_code](BusinessDataTaskRequestInfo.md#location_code)

#### Defined in

[main.ts:183132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183132)

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[location_coordinate](BusinessDataTaskRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:183141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183141)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[location_name](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#location_name)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[location_name](BusinessDataTaskRequestInfo.md#location_name)

#### Defined in

[main.ts:183125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183125)

___


### max\_price

• `Optional` **max\_price**: `number`

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[max_price](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#max_price)

#### Defined in

[main.ts:192843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192843)

___


### min\_price

• `Optional` **min\_price**: `number`

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[min_price](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_price)

#### Defined in

[main.ts:192837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192837)

___


### min\_rating

• `Optional` **min\_rating**: `number`

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[min_rating](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#min_rating)

#### Defined in

[main.ts:192821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192821)

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[pingback_url](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[pingback_url](BusinessDataTaskRequestInfo.md#pingback_url)

#### Defined in

[main.ts:183181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183181)

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[postback_url](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#postback_url)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[postback_url](BusinessDataTaskRequestInfo.md#postback_url)

#### Defined in

[main.ts:183171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183171)

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

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[priority](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#priority)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[priority](BusinessDataTaskRequestInfo.md#priority)

#### Defined in

[main.ts:183118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183118)

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

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[sort_by](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:192831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192831)

___


### stars

• `Optional` **stars**: `string`[]

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[stars](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#stars)

#### Defined in

[main.ts:192815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192815)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostRequestInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md).[tag](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostRequestInfo.md#tag)

#### Inherited from

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[tag](BusinessDataTaskRequestInfo.md#tag)

#### Defined in

[main.ts:183161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183161)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[init](BusinessDataTaskRequestInfo.md#init)

#### Defined in

[main.ts:192890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192890)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[toJSON](BusinessDataTaskRequestInfo.md#tojson)

#### Defined in

[main.ts:192933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192933)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)

#### Overrides

[BusinessDataTaskRequestInfo](BusinessDataTaskRequestInfo.md).[fromJS](BusinessDataTaskRequestInfo.md#fromjs)

#### Defined in

[main.ts:192926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192926)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")