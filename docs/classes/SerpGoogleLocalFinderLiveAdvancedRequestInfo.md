**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveAdvancedRequestInfo

# Class: SerpGoogleLocalFinderLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderLiveAdvancedRequestInfo(data)

> **new SerpGoogleLocalFinderLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)

#### Source

main.ts:43735

## Properties

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value for desktop: 20
max value for desktop: 100
default value for mobile: 10
max value for mobile: 100
Note: your account will be billed per each SERP containing up to 20 results for desktop or up to 10 results for a mobile device;
thus, setting a depth above 20 for desktop or above 10 for mobile may result in additional charges if the search engine returns more than 20 or 10 results respectively;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#depth)

#### Source

main.ts:43711

***

### device?

> **`optional`** **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:43693

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#keyword)

#### Source

main.ts:43642

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:en

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:43688

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:43682

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:43664

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,zoom” format
if “zoom” is not specified, 9z will be applied as a default value
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “zoom”: 4z
the maximum value for “zoom”: 18z
example:
52.6178549,-155.352142,20z

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#location_coordinate)

#### Source

main.ts:43675

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:43657

***

### min\_rating?

> **`optional`** **min\_rating**: `number`

filter results by minimum rating
optional field
possible values for desktop: 3.5, 4, 4.5;
possible values for mobile: 2, 2.5, 3, 3.5, 4, 4.5

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`min_rating`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#min_rating)

#### Source

main.ts:43716

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:43700

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

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`priority`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#priority)

#### Source

main.ts:43650

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:43731

***

### time\_filter?

> **`optional`** **time\_filter**: `string`

filter results by open hours
optional field
using this field, you can filter places in the results by the time a place is open for visitors
note that Google may also provide results that do not match this filter
possible values: "open_now", "24_hours", "$day_value", "$day_value;$time_value";
instead of $day_value use one of these values: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday";
instead of $time_value use one of these values: "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
example: "tuesday;18"

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md).[`time_filter`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedRequestInfo.md#time_filter)

#### Source

main.ts:43725

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:43744

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:43773

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)

#### Source

main.ts:43766
