[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskPostRequestInfo

# Class: SerpGoogleLocalFinderTaskPostRequestInfo

## Implements

- [`ISerpGoogleLocalFinderTaskPostRequestInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskPostRequestInfo.md#constructor)

### Properties

- [depth](SerpGoogleLocalFinderTaskPostRequestInfo.md#depth)
- [device](SerpGoogleLocalFinderTaskPostRequestInfo.md#device)
- [keyword](SerpGoogleLocalFinderTaskPostRequestInfo.md#keyword)
- [language\_code](SerpGoogleLocalFinderTaskPostRequestInfo.md#language_code)
- [language\_name](SerpGoogleLocalFinderTaskPostRequestInfo.md#language_name)
- [location\_code](SerpGoogleLocalFinderTaskPostRequestInfo.md#location_code)
- [location\_coordinate](SerpGoogleLocalFinderTaskPostRequestInfo.md#location_coordinate)
- [location\_name](SerpGoogleLocalFinderTaskPostRequestInfo.md#location_name)
- [min\_rating](SerpGoogleLocalFinderTaskPostRequestInfo.md#min_rating)
- [os](SerpGoogleLocalFinderTaskPostRequestInfo.md#os)
- [pingback\_url](SerpGoogleLocalFinderTaskPostRequestInfo.md#pingback_url)
- [postback\_data](SerpGoogleLocalFinderTaskPostRequestInfo.md#postback_data)
- [postback\_url](SerpGoogleLocalFinderTaskPostRequestInfo.md#postback_url)
- [priority](SerpGoogleLocalFinderTaskPostRequestInfo.md#priority)
- [tag](SerpGoogleLocalFinderTaskPostRequestInfo.md#tag)
- [time\_filter](SerpGoogleLocalFinderTaskPostRequestInfo.md#time_filter)

### Methods

- [init](SerpGoogleLocalFinderTaskPostRequestInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskPostRequestInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskPostRequestInfo**(`data?`): [`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskPostRequestInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)

#### Defined in

[main.ts:39759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39759)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value for desktop: 20
max value for desktop: 500default value for mobile: 10
max value for mobile: 350
Note: your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;
thus, setting a depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[depth](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:39709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39709)

___


### device

• `Optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[device](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#device)

#### Defined in

[main.ts:39692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39692)

___


### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[keyword](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#keyword)

#### Defined in

[main.ts:39641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39641)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:en

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[language_code](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:39687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39687)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[language_name](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:39681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39681)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[location_code](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:39663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39663)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,zoom” format
if “zoom” is not specified, 17z will be applied as a default value
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “zoom”: 4z
the maximum value for “zoom”: 18z
example:
52.6178549,-155.352142,20z

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[location_coordinate](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:39674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39674)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[location_name](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:39656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39656)

___


### min\_rating

• `Optional` **min\_rating**: `number`

filter results by minimum rating
optional field
possible values for desktop: 3.5, 4, 4.5;
possible values for mobile: 2, 2.5, 3, 3.5, 4, 4.5

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[min_rating](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#min_rating)

#### Defined in

[main.ts:39714](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39714)

___


### os

• `Optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[os](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#os)

#### Defined in

[main.ts:39699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39699)

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

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[pingback_url](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:39755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39755)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced, html

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[postback_data](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:39745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39745)

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

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[postback_url](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:39739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39739)

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

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[priority](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:39649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39649)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[tag](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:39729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39729)

___


### time\_filter

• `Optional` **time\_filter**: `string`

filter results by open hours
optional field
using this field, you can filter places in the results by the time a place is open for visitors
note that Google may also provide results that do not match this filter
possible values: "open_now", "24_hours", "$day_value", "$day_value;$time_value";
instead of $day_value use one of these values: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday";
instead of $time_value use one of these values: "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
example: "tuesday;18"

#### Implementation of

[ISerpGoogleLocalFinderTaskPostRequestInfo](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md).[time_filter](../interfaces/ISerpGoogleLocalFinderTaskPostRequestInfo.md#time_filter)

#### Defined in

[main.ts:39723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39723)

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

[main.ts:39768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39768)

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

[main.ts:39800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39800)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)

#### Defined in

[main.ts:39793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39793)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")